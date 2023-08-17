import React from 'react';
import { useState } from 'react';
import { database, DATABASE_ID, COLLECTION_ID_POSTS } from '../appwriteConfig';


function CommentModal({
  showCommentModal,
  closeCommentModal,
  parentPostId
}) {

    const [commentText, setCommentText] = useState('');
    //take current user from context but for now use a dummy user
    const user = {
        name: 'dummyUser',
        username: 'username',
        profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
    }
    const handleCommentSubmit = async () => {
        try{
          let response = await database.getDocument(DATABASE_ID, COLLECTION_ID_POSTS, parentPostId);
 

           // Add the new comment to the comments array
          response.comments.push(
             commentText
          );

          // Update the post with the new comments array
           await database.updateDocument(DATABASE_ID, COLLECTION_ID_POSTS, parentPostId);

          setCommentText('');
          closeCommentModal();
          window.location.reload();
        }
        catch(error){
            console.error('Error posting comment:', error);
        }
    }


  return (
    <div>
      {/* Comment Modal */}
      {showCommentModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-70 z-50'>
          <div className='bg-primaryBackground p-4 rounded-lg shadow-md'>
            <div className="flex items-center mb-2">
              <img
                src={user.profilePic}
                alt={`Profile of ${user.name}`}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex flex-col">
                <p className="text-secondaryText font-medium">{user.name}</p>
                <p className="text-tertiaryTextLight text-sm">@{user.username}</p>
              </div>
            </div>
            <textarea
              className='w-full h-20 p-2 border rounded-md resize-none'
              placeholder='Type your comment...'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div className='flex justify-end mt-2'>
              <button
                className='px-4 py-2 bg-quinaryAccent text-secondaryText rounded-md hover:bg-blue-600'
                onClick={handleCommentSubmit}
              >
                Submit
              </button>
              <button
                className='px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400'
                onClick={closeCommentModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentModal;
