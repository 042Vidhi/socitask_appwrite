import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { dummyChatUsers } from '../utils/dummyUsers'; 

function UsersChat() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = dummyChatUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users with Name..."
          className="w-full p-2 bg-primaryBackground text-secondaryText border border-quaternaryTextLightest rounded-md focus:ring focus:ring-quaternaryTextLightest focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <a
            href={`/chat/${user.userId}`}
            key={user.userId}
            className="flex items-center gap-2 p-2 border border-quaternaryTextLightest rounded-md hover:bg-septenaryHover2 transition duration-300"
          >
            <Avatar src={user.profilePic}/>
            <div>
              <p className="font-medium text-secondaryText">{user.name}</p>
              <p className="text-tertiaryTextLight text-sm">@{user.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default UsersChat;
