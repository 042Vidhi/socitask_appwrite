
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

function UserProfile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //take the current user data from the database and set it to the dummy user
  const [dummyUser, setDummyUser] = useState({
    name: 'User Name',
    username: 'username',
    bio: 'This is my bio.',
    avatar: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
  });

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = () => {
    // Change the user data in the database
    closeEditModal();
  };

  return (
    <div className="bg-primaryBackground border-l border-quaternaryTextLightest h-screen p-6">
      <div className="flex items-center space-x-4">
        <Avatar src={dummyUser.avatar}/>
        <div>
          <h2 className="text-xl text-secondaryText font-semibold">{dummyUser.name}</h2>
          <p className="text-tertiaryTextLight">@{dummyUser.username}</p>
        </div>
      </div>
      <p className="mt-4 text-secondaryText">{dummyUser.bio}</p>
      <button
        className="mt-4 px-4 py-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
        onClick={openEditModal}
      >
        Edit Profile
      </button>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-primaryBackground p-6 rounded-lg shadow-md">
            <h3 className="text-lg text-secondaryText font-semibold mb-4">Edit Profile</h3>
            <input
              className="w-full p-2 border text-secondaryText border-quaternaryTextLightest bg-septenaryHover2 rounded-md mb-2"
              type="text"
              placeholder="Name"
              value={dummyUser.name}
              onChange={(e) => setDummyUser({...dummyUser,name:e.target.value})}
            />
            <input
              className="w-full p-2 text-secondaryText border  border-quaternaryTextLightest bg-septenaryHover2 rounded-md mb-2"
              type="text"
              placeholder="Username"
              value={dummyUser.username}
              onChange={(e) => setDummyUser({...dummyUser,username:e.target.value})}
            />
            <input
              className="w-full p-2 text-secondaryText border border-quaternaryTextLightest bg-septenaryHover2 rounded-md mb-2"
              type="text"
              placeholder="Avatar URL"
              value={dummyUser.avatar}
              onChange={(e) => setDummyUser({...dummyUser,avatar:e.target.value})}
            />
            <textarea
              className="w-full p-2 text-secondaryText border border-quaternaryTextLightest bg-septenaryHover2 rounded-md mb-4"
              placeholder="Bio"
              value={dummyUser.bio}
              onChange={(e) => setDummyUser({...dummyUser,bio:e.target.value})}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
                onClick={handleSaveChanges}
              >
                Save
              </button>
              <button
                className="px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                onClick={closeEditModal}
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

export default UserProfile;
