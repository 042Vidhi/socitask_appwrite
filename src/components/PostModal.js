import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { database, DATABASE_ID, COLLECTION_ID_POSTS } from '../appwriteConfig';
import {ID} from 'appwrite'

export default function PostModal({ onClose }) {
    //take current user data from context
    const user = {
      name: 'dummyUser',
      username: 'username',
      profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
    };
  
  const [postcontent, setpostcontent] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    //post only if there is content
    if(postcontent === '') return;
    
    var date = new Date(Date.now());
    
    
    let payload = {
      text: postcontent,
      userId: user.userId,
      time: date.toISOString(),
    };

    let response = await database.createDocument(DATABASE_ID, COLLECTION_ID_POSTS,ID.unique(),payload
      );

    console.log(response);
    setpostcontent('');
    onClose();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-70 z-50">
      <div className="bg-primaryBackground p-6 rounded-lg shadow-md w-[400px]">
        <div className="flex items-center mb-4">
          <Avatar className="mr-2" src={user.profilePic} />
          <div>
            <p className="text-secondaryText font-medium">{user.name}</p>
            <p className="text-tertiaryTextLight text-sm">@{user.username}</p>
          </div>
        </div>
        <textarea
          className="w-full h-56 p-2 rounded-md resize-none "
          placeholder="Write your post here..."
          value={postcontent}
          onChange={(e) => setpostcontent(e.target.value)}

        />
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
            onClick={handleSubmit}
          >
            Post
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
