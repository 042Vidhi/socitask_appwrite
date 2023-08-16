import React from 'react';
import UsersChat from '../components/UsersChat';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { dummyChatUsers } from '../utils/dummyUsers';

function ChatWindow() {
  const { userId } = useParams();
  const Id = parseInt(userId); // Convert the id to an integer

  const user = dummyChatUsers.find((user) => user.userId === Id);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <div className="md:w-1/4 hidden md:block bg-primaryBackground overflow-y-scroll">
          <UsersChat />
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col bg-primaryBackground ">
          {/* UserBar */}
          <div className="flex items-center p-2 bg-primaryBackground">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-4"><Avatar src={user.profilePic}/></div>
              <div>
                <h2 className="font-semibold text-secondaryText">{user?.name}</h2>
                <p className="text-xs text-tertiaryTextLight">@{user?.username}</p>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          {/* Replace this with actual chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-800">
            {/* Sample chat message */}
            <div className="mb-2">
              <p>Chat message content goes here.</p>
            </div>
            {/* More chat messages */}
          </div>

          {/* Input Bar */}
          <div className="bg-septenaryHover2 rounded-md p-4 shadow-md flex">
            <input
              className="flex-1 outline-none bg-transparent pl-4 text-secondaryText"
              type="text"
              placeholder="Type a message"
            />
            <button className="text-white">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
