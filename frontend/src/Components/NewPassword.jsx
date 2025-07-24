import axios from 'axios'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'

  const NewPassword = () => {
    const [password,setPassword] = useState({
      Name:"",
      password:"",
      Description:"" 
    })

    const passwordData = {
      Name: password.Name,
      Password: password.password,
      Description: password.Description  
    }
  const parseData = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    })
  }
  const Clear = (e) => {
    e.preventDefault()
    setPassword({
      Name: "",
      password: "",
      Description: ""
    })
  }

  const HandleSubmit = (e)=>{
    e.preventDefault()
    axios.post("http://127.0.0.1:5002/password/new",passwordData)
    .then((res) =>{
      toast.success("saved password successfully")
    })
    .catch(error =>{
      console.log(error)
      toast.error("failed to save password")
    })
  }

  return (
    <div className='w-full h-full p-10 flex justify-center items-center'>
      <form action="" className='w-[80%] min-h-[80%] p-10 bg-white rounded-[30px] text-[1.6rem] '>
        <p className='grid grid-rows-2 gap-3'>
          <label htmlFor="" className='text-[2rem]'>Name</label>
          <input type="text" className='mb-[10px] border-[2px] border-blue-500' name='Name' value={password.Name} onChange={parseData}/>
        </p>
        <p className='grid grid-rows-2 gap-3'>
          <label htmlFor="" className='text-[2rem]'>Password</label>
          <input type="text"  className='mb-[10px] border-[2px] border-blue-500' name='password' value={password.password} onChange={parseData}/>
        </p>
        <p className='grid grid-rows-2 '>
          <label htmlFor="" className='text-[2rem]'>Description</label>
          <textarea  id=""  className='mb-[10px] border-[2px] border-blue-500 ' name='Description' value={password.Description} onChange={parseData} ></textarea>
        </p>
        <p className='w-full inline-flex justify-evenly mt-[20px]'>
          <button onClick={HandleSubmit} className='hover:bg-white hover:text-blue-500 hover:border-blue-500 bg-blue-500  text-white text-[2rem] border-[2px] p-2 w-[200px] rounded-[20px]'>Save</button>
          <button onClick={Clear} className='hover:bg-white hover:text-red-500 hover:border-red-500 bg-red-500 text-white text-[2rem] border-[2px] p-2 w-[200px] rounded-[20px]'>Clear</button>
        </p>
      </form>
    </div>
  )
}

export default NewPassword
