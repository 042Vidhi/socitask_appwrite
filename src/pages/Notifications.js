import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

function Notifications() {
  return (
    <div className="">
        <Navbar />
      <div className="grid md:grid-cols-6 grid-cols-5">
        <div className='bg-primaryBackground h-screen hidden md:block'>
        <SideBar />
        </div>
        <div className="col-span-5 bg-primaryBackground ">
          <div className="border-l border-quaternaryTextLightest h-screen   p-4">
            <h1 className="text-white text-2xl font-bold">Notifications Under Construction!!😪</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications