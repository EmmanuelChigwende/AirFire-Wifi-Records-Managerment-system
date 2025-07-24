import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'

const PasswordManager = () => {
    const [passwords,setPasswords]  = useState()
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        axios.get("http://127.0.0.1:5002/password/")
        .then(response =>{
            setPasswords(response.data)
            setLoading(false)
            toast.success("Successfully fetched passwords...")
        }).catch(error =>{
            console.log(error)
            toast.error("failed to fetch passwords")
        })
    },[])

        const HandleDelete = (id) => {
         axios.delete(`http://127.0.0.1:5002/password/delete/${id}`)
        .then(() => {
        toast.success("Password deleted successfully")
        setPasswords(prev => prev.filter(item => item._id !== id)) // updates UI immediately
        })
        .catch(error => {
        console.log(error)
        toast.error("Failed to delete password")
        })
    }

  return (
    <div className='w-full h-full flex flex-col gap-[10px]'>
        {
            loading ? ("fetching passwords please wait...."): passwords ? (
                passwords.map(({_id:id,["Name"]:name,["Description"]:details,["Password"]:password})=>(
                    <div className='w-full min-h-[200px] rounded-[20px] p-10 gap-6 text-[1.5rem] bg-[#1F305E] text-white grid grid-cols-3 justify-between hover:bg-blue-500'>
                        <p className=' grid grid-rows-2 h-[100px]'>
                            Name <p>{name}</p>
                        </p>
                        <p className='grid grid-rows-2 h-[100px]'>
                            Descripion <p>{details}</p>
                        </p>
                        <p className='grid grid-rows-2 h-[100px]'>
                            Password <p>{password}</p>
                        </p>
                        <p className=' w-[100px] text-center  rounded-[10px] border-[2px] border-white hover:bg-red-500 '>
                            <button onClick={() => HandleDelete(id)}>Delete</button>
                        </p>
                    </div>
                ))
            ): ((toast.error("failed to fetch data...try again later")))
        }
    </div>
  )
}

export default PasswordManager
