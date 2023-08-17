import React from 'react';
import UsersChat from '../components/UsersChat';

function ChatWindow() {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="md:w-1/4 hidden md:block bg-primaryBackground overflow-y-scroll">
          <UsersChat />
        </div>

        {/* Chat Content */}
        <div className="flex-1 p-4 bg-primaryBackground relative">
          {/* Chat messages */}
            <p className='text-secondaryText text-2xl font-bold'>Click on the user to whom you want to talk</p>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
