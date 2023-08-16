import React from 'react'
import Navbar from "../components/Navbar";
import FeedList from '../components/FeedList';
import Feedbar from '../components/Feedbar';
import SideBar from "../components/SideBar";
import UsersChat from "../components/UsersChat";

function Home() {
  return (
    <div>
    <div>
          <Navbar/>
        </div>
        <div className='h-screen  grid grid-cols-3 md:grid-cols-6'>
          <div className='sidebar col-span-1 bg-primaryBackground hidden md:block'>
            <SideBar/>
          </div>
          <div className="post-section col-span-3 ">
            <Feedbar />
            <FeedList/>
          </div>
          <div className='users-window col-span-2 bg-primaryBackground hidden md:block overflow-y-scroll'>
            <UsersChat/>
          </div>

        </div>
    </div>
  )
}

export default Home