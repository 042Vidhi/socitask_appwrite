import React, { useState } from 'react';
import { Avatar } from '@mui/material';

export default function PostModal({ onClose }) {
    //take current user data from context
    const user = {
      name: 'dummyUser',
      username: 'username',
      profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
    };
  
  const [postcontent, setpostcontent] = useState({
    posttext: '',
    postId: '',
    userId: user.userId,
  });


  const handleSave = () => {
    console.log(postcontent);
    onClose();
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
          value={postcontent.posttext}
          onChange={(e) => setpostcontent({ ...postcontent, posttext: e.target.value })}

        />
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
            onClick={handleSave}
          >
            Save
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
