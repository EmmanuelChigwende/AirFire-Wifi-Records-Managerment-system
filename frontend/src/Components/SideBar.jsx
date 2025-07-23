import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-full h-[100vh]  bg-[#1F305E]  font-mono'>
      <h1 className='text-white text-[2rem] p-10'>
        AirFibre Wifi System
      </h1>
      <p className='p-10 text-[2rem] cursor-pointer text-white'>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? 'bg-[#1F75FE] px-4 py-2 rounded-md text-white font-semibold shadow-md'
            : 'px-4 py-2 hover:bg-blue-600 rounded-md transition duration-150'
        }
        >
           Records
        </NavLink>
      </p>
      <p className='pl-10 pr-10 pb-10 text-[2rem] cursor-pointer text-white'>
        <NavLink  to='/new' className={({ isActive }) =>
          isActive
            ? 'bg-[#1F75FE] px-4 py-2 rounded-md text-white font-semibold shadow-md'
            : 'px-4 py-2 hover:bg-blue-600 rounded-md transition duration-150'
        }
>
            New Record
        </NavLink>
      </p>
      <p className='pl-10 pr-10 text-[2rem] cursor-pointer text-white'>
        <NavLink to='/password' className={({ isActive }) =>
          isActive
            ? 'bg-[#1F75FE] px-4 py-2 rounded-md text-white font-semibold shadow-md'
            : 'px-4 py-2 hover:bg-blue-600 rounded-md transition duration-150'
        }>
          Passwords
        </NavLink>
      </p>
      <p className='pl-10 pr-10 pt-10 text-[2rem] cursor-pointer text-white'>
        <NavLink to='/Newpassword' className={({ isActive }) =>
          isActive
            ? 'bg-[#1F75FE] px-4 py-2 rounded-md text-white font-semibold shadow-md'
            : 'px-4 py-2 hover:bg-blue-600 rounded-md transition duration-150'
        }>
          New Password
        </NavLink>
      </p>
    </div>
  )
}

export default SideBar
