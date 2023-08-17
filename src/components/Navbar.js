import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

function Navbar() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);

 //take current user from context
 const currentUser = {
  name: 'dummyUser',
  username: 'username',
  profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
}

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
  };

  return (
    <div className="bg-septenaryHover2 text-white relative">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-xl font-semibold">Socitask</div>
        <div className="flex space-x-4">
          <div className="relative">
            <button onClick={toggleNotificationsDropdown} className="hover:text-quinaryAccent">
              <NotificationsIcon className="cursor-pointer" sx={{ fontSize: 40 }} />
            </button>
            {isNotificationsDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-primaryBackground border border-quaternaryTextLightest shadow-md rounded-md p-2">
                {/* Notifications list */}
                <div>Notification1</div>
                <div>Notification2</div>
                <div>Notification3</div>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleAccountDropdown} className="hover:text-quinaryAccent">
              <Avatar className="cursor-pointer" src={currentUser.profilePic} />
            </button>
            {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-primaryBackground border border-quaternaryTextLightest shadow-md rounded-md flex flex-col">
                    {/* Account dropdown */}
                    <a href="/profile" className="hover:bg-septenaryHover2 w-full rounded-md p-2 text-white text-sm">
                        Profile
                    </a>
                    <a href="/login" className="hover:bg-septenaryHover2 w-full rounded-md p-2 text-white text-sm">
                        Login
                    </a>
                </div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
