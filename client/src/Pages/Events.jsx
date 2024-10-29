import React from 'react'
import SideBar from '../Components/SideBar'

const Events = () => {
  return (
    <div className='w-full h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar is fixed on lg screens and hidden on smaller screens */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar/>
        </div>

        <h1 className='flex-1 lg:ml-[20%] p-4'>sfdukg.yhfds</h1>
        </div>
    </div>
  )
}

export default Events