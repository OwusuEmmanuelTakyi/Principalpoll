import { Avatar } from '@mui/material'
import React from 'react'
import SecurityIcon from '@mui/icons-material/Security';

import Coolers from '../theme';
import LineChart from './LineChart';



const data = [
    { id: 1, name: "Alice", votes: 10 },
    { id: 2, name: "Bob", votes: 15 },
    { id: 3, name: "Charlie", votes: 5 },
    { id: 4, name: "Diana", votes: 20 },
    { id: 5, name: "Ethan", votes: 12 }
];


const DashboardContent = () => {
    const currentDate = new Date().toLocaleDateString()
  return (
    <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between  items-center mb-5'>
            <h1 className='text-3xl md:text-3xl font-bold text-[#0C7B93]'>Welcome John Doe</h1>
            <div className='flex gap-3 items-center '>
                <div className="hidden md:flex">
                    <SecurityIcon/>
                </div>
                <div className="hidden md:flex px-5 py-2 bg-[#0C7B93] text-white rounded-2xl ">
                    <p>

                    Home
                    </p>
                </div>
                <Avatar sx={{bgcolor:Coolers.normalBlue}}>JD</Avatar>
            </div>
        </div>
        {/*content*/}
        <div className='md:col-auto ml-4 grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 mt-9 gap-4'>
            <div className='flex flex-col gap-4 w-full h-[100%]'>
                <div className='hover:cursor-pointer hover:opacity-[0.9] ease-in-out duration-300 text-white font-bold text-2xl flex items-center justify-center rounded-lg'>
                    <p className='bg-[#0C7B93] px-10 rounded-lg text-center py-2'>Vote Now</p>
                </div>
                <div className='flex flex-col justify-center items-center text-black bg-blue-300 py-[14%] min-h-50'>
                    <h3 className='text-white text-2xl font-bold mb-2'>Total votes</h3>
                    <h2 className='text-3xl font-bold text-white'>233648</h2>
                </div>
            </div>

            <div className='flex flex-col gap-2 w-full h-[100%]' >
                <div className='hover:cursor-pointer hover:opacity-[0.9] ease-in-out duration-300 text-white font-bold text-2xl flex items-center justify-center rounded-lg'>
                    <p className='bg-[#0C7B93] px-10 rounded-lg text-center py-2'>Statistics</p>
                </div>
                <div className='w-full'>
                    
                    <LineChart />
                </div>
            </div>

            <div className='flex flex-col gap-4 w-full h-[100%]'>
                <div className='hover:cursor-pointer hover:opacity-[0.9] ease-in-out duration-300 text-white font-bold text-2xl flex items-center justify-center rounded-lg'>
                    <p className='bg-[#0C7B93] px-10 rounded-lg text-center py-2'>{currentDate}</p>
                </div>
                <div className='flex flex-col justify-center items-center text-black bg-blue-300 py-10 min-h-50'>
                    <h3 className='text-white text-2xl font-bold mb-2'>Total Revenue</h3>
                    <div>
                        <h4 className='text-white text-xl font-bold text-center'>GHC</h4>
                        <h2 className='text-3xl font-bold text-white'>233648</h2>
                    </div>
                </div>
            </div>
        </div>

        {/*Second content*/}

        <div className='grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-x-3 w-full px-3 min-h-[25vh] mt-5 gap-y-4'>
            <div className='gap-2 flex-col w-full border rounded-md border-gray-500 max-h-[150px] flex justify-center items-center '>
                <h4 className='text-blue-400 text-2xl font-bold '>Total Competitions</h4>
                <p className='text-3xl font-bold text-grey-600'>2000</p>
            </div>
            <div  className='gap-2 flex-col w-full border rounded-md border-gray-500 max-h-[150px] flex justify-center items-center '>
                <h4 className='text-blue-400 text-2xl font-bold '>Total Competitors</h4>
                <p className='text-3xl font-bold text-grey-600'>2000</p>

            </div>
            <div  className='gap-2 flex-col w-full border rounded-md border-gray-500 max-h-[150px] flex justify-center items-center '>
                  <h4 className='text-blue-400 text-2xl font-bold '>Total Votes </h4>
                  <p className='text-3xl font-bold tex-grey-600ck'>2000</p>  

            </div>
            <div  className='gap-2 flex-col w-full border rounded-md border-gray-500 max-h-[150px] flex justify-center items-center '>
               <h4 className='text-blue-400 text-2xl font-bold '>Total withdrawal</h4>
               <div className='flex gap-2'>

                    <p className='text-3xl font-bold text-grey-600'>GHC</p> 
                    <p className='text-3xl font-bold text-grey-600'>2000</p> 
               </div>

            </div>
        </div>

        {/*third contenet Table*/}

        <div className='bg-blue-50 flex flex-col gap-4 w-full h-auto px-2 py-2 mt-4 justify-center'>
            <h2 className='text-blue-400 text-3xl text-center font-bold'>Recent Votes</h2>
            {
    data.length > 0 && (
        <table className='w-full h-full bg-aliceblue border border-black'>
            <thead className='bg-black text-white'>
                <tr className='p-3 border border-b-gray-700 text-center font-bold'>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Votes</td>
                </tr>
            </thead>
            <tbody>
                {data.map((dat) => (
                    <tr key={dat.id} className='p-6 bg-slate-500 border border-b-gray-700 text-center'>
                        <td className='border border-r-2-black text-[#000] font-semibold'>{dat.id}</td>
                        <td className='border border-r-2-black text-[#000] font-semibold'>{dat.name}</td>
                        <td className='border border-r-2-black text-[#000] font-semibold'>{dat.votes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

        </div>

   </div> 
  )
}

export default DashboardContent