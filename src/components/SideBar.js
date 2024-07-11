import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className=" text-white  pt-4">
      <ul className="space-y-2">
        <Link to="/">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <HomeIcon/>
          Home
        </li>
        </Link>
        <Link to="/notifications">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <NotificationsIcon/>
          Notifications
        </li>
        </Link>
        <Link to="/chat">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <ChatIcon/>
          Chats
        </li>
        </Link>
        <Link to="/profile">
        <li className='hover:bg-septenaryHover2 rounded-md p-2 flex flex-row gap-2 items-center'>
        <AccountCircleIcon/>
         Profile
        </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
