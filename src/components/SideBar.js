import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

function SideBar() {
  return (
    <div className=" text-white  pt-4">
      <ul className="space-y-2">
        <a href="/">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <HomeIcon/>
          Home
        </li>
        </a>
        <a href="/notifications">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <NotificationsIcon/>
          Notifications
        </li>
        </a>
        <a href="/chat">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <ChatIcon/>
          Chats
        </li>
        </a>
        <a href="/profile">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <AccountCircleIcon/>
         Profile
        </li>
        </a>
      </ul>
    </div>
  );
}

export default SideBar;
