import React from 'react'
import Navbar from "../components/Navbar";
import FeedList from '../components/FeedList';
import Feedbar from '../components/Feedbar';
import SideBar from "../components/SideBar";
import UsersChat from "../components/UsersChat";

function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-grow overflow-hidden'>
        <div className='sidebar w-1/6 bg-primaryBackground hidden md:block'>
          <SideBar />
        </div>
        <div className="post-section flex-grow flex flex-col">
          <Feedbar />
          <div className="flex-grow overflow-y-scroll">
            <FeedList />
          </div>
        </div>
        <div className='users-window w-1/3 bg-primaryBackground hidden md:block overflow-y-scroll'>
          <UsersChat />
        </div>
      </div>
    </div>
  )
}

export default Home
