
import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import UserProfile from '../components/UserProfile';

function Profile() {
  return (
    <div className="">
        <Navbar />
      <div className="grid md:grid-cols-6 grid-cols-5">
        <div className='bg-primaryBackground h-screen hidden md:block'>
        <SideBar />
        </div>
        <div className="col-span-5">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Profile;
