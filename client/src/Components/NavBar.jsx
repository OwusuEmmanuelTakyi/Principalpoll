import React from 'react'
import logo from '../assets/prinvote[1].png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar } from '@mui/material';

function NavBar() {
  return (
    <div className='w-full h-30 flex items-center p-5 z-10'>
        <div className="w-full h-20 flex justify-between items-center">
            <img src={logo} alt="/" style={{maxWidth:'150px'}}/>
            <div className='flex gap-5'>

                <div className='hidden md:flex p-3 bg-black text-white hover:cursor-pointer  rounded-2xl px-5'>
                    <p>Dashboard</p>
                    <NavigateNextIcon/>
                    </div>
                <div className='hover:cursor-pointer'>
                    <Avatar/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar