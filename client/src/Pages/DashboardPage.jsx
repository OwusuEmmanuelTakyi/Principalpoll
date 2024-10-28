import React from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import DashboardContent from '../Components/DashboardContent';



const DashboardPage = () => {
  return (
    <div className='w-full h-screen bg-slate-50 flex flex-col'>
     
      
      <div className='flex flex-1'>
        {/* Sidebar is fixed on lg screens and hidden on smaller screens */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar/>
        </div>

        
      
        
        {/* Main content area */}
        <main className='flex-1 lg:ml-[20%] p-4'>
          <DashboardContent />
        </main>
      </div>
      
      <footer className='bg-gray-200 text-center p-4'>
        Footer
      </footer>
    </div>
  );
}

export default DashboardPage;
