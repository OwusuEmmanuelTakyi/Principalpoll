import React from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import DashboardContent from '../Components/DashboardContent';

const DashboardPage = () => {
  return (
    <div className='w-[98%] h-screen bg-slate-50 flex flex-col gap-2' >
       <NavBar/>
       <div className='flex w-full'>
            <div className='hidden md:flex md:w-[20%]'>

                <SideBar/>
            </div>
            <main className='w-full md:w-[80%]'>
                <DashboardContent/>
            </main>
       </div>
       <footer>Footer</footer>
    </div>
  );
}

export default DashboardPage;
