import React from 'react'
import picture from  '../Assets/AirfibreWhite.png'
import background from '../Assets/back2.jpg'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ({setLogged}) => {
  
 const navigate = useNavigate()
  const [value,setValue] = useState({
    Username:"",
    Password:""
  })

  const Data = {
    "Username": value.Username,
    "Password":value.Password
  }

  const ApplyData = (e) =>{
    setValue({
      ...value, [e.target.name]:e.target.value
    })
  }

  const HandleLogin = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:5002/login",Data)
    .then(
      (res) =>{
        toast.success("Successfully Logged in...")
        setLogged(true)
        navigate('/')
      }
    ).catch(error =>{
      console.log(error)
      toast.error("Failed to login try Again....")
    })
  }


  return (
    <div className=' max-w-[100vw] max-h-[100vh] grid grid-cols-2'>
      <div className='bg-[#1F75FE] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center rounded-tr-[30px] rounded-br-[30px] h-[100vh] backdrop-blur-md' style={{ backgroundImage: `url(${background})` }}>
        <p>
            <img src={picture} height={300} width={300} alt="" />
        </p>
        <h1 className='text-[2.5rem] font-mono text-white'>
            AirFibre Wifi Management System
        </h1>
        <h2 className='text-[1.5rem] text-white'>
          Keeping people connected....
        </h2>
      </div>
      <div className='bg-white p-10 font-mono h-[100vh] flex flex-col justify-center items-center'>        
        <form action="" className=' w-[500px] h-[60vh] flex flex-col justify-center items-center text-[2rem] border-[2px] rounded-[15px]'>
          <p className='grid grid-rows-2 gap-6 mt-[10px]'>
            <label htmlFor="" className='text-[2.5rem]' >Username</label>
            <input className='rounded-[15px] focus:outline-[#1F75FE] border-[2px] border-[#1F75FE]'  type="text" name='Username' value={value.Username} onChange={ApplyData}/>
          </p>
          <p className='grid grid-rows-2 gap-6'>
            <label htmlFor="" className='text-[2.5rem]'>Password</label>
            <input className='rounded-[15px]  focus:outline-[#1F75FE] border-[2px] border-[#1F75FE]' type="text" name='Password' value={value.Password} onChange={ApplyData} />
          </p>
          <p className='mt-[20px] mb-[20px] border-[2px] bg-[#1F75FE] text-white rounded-[10px]  hover:bg-white hover:text-[#1F75FE] hover:border-[#1F75FE] w-[200px] flex items-center justify-center'>
            <button type='submit' className='p-[10px] rounded-[10px]'  onClick={HandleLogin} >Login</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
