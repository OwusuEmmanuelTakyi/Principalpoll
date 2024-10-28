import React, { useState } from 'react';
import logo from '../assets/prinvote[1].png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { DashboardPages } from './SideBar';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className='w-full h-16 flex items-center p-5 z-80 sticky top-0 bg-white shadow-md'>
                <div className="w-full flex justify-between items-center">
                    <div className='md:hidden flex ml-2 hover:cursor-pointer' onClick={handleOpen}>
                        <MenuIcon sx={{ fontSize: 24, color: grey[800] }} />
                    </div>
                    <img src={logo} alt="/" style={{ maxWidth: '150px' }} />
                    <div className='flex gap-5'>
                        <div className='hidden md:flex p-3 bg-black text-white hover:cursor-pointer rounded-2xl px-5'>
                            <p>Dashboard</p>
                            <NavigateNextIcon />
                        </div>
                        <div className='hover:cursor-pointer'>
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className={`w-[70%] h-[100vh] z-20 p-4 flex bg-slate-300 fixed top-0 left-0 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                        <div className='flex flex-col gap-5 p-4 w-full relative'>
                            <img src={logo} alt='/' style={{ width: '80%' }} />
                            <div className='absolute top-2 right-3 hover:cursor-pointer' onClick={handleClose}>
                                <CloseIcon sx={{ fontSize: 28 }} />
                            </div>
                            {
                                DashboardPages.map((data, index) => (
                                    <div key={index}>
                                        <Link to={data.link}>
                                        <ul className='flex flex-col gap-3 p-3 hover:bg-slate-400 ease-in-out duration-400 cursor-pointer rounded-md'>
                                            <li className='flex gap-3'>
                                                <div>
                                                    {data.icon}
                                                </div>
                                                <div className='font-bold'>
                                                    {data.title}
                                                </div>
                                            </li>
                                        </ul>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default NavBar;
