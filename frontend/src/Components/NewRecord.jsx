import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const NewRecord = () => {
    const [value,setValue] = useState({
                purchased: ``,
                router:``,
                pppoe:``,
                subscription:``,
                subscriptionEnd:``           
    })

    const Information = {
      "purchased by": value.purchased,
      "router number":value.router,
      "pppoe account name":value.pppoe,
      "subscription start":value.subscription,
      "subscription end":value.subscriptionEnd   
    }

    const HandleSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:5002/new",Information)
        .then(
            (res) =>{
                toast.success("Ndw record added succssefully")
            }
        ).catch(error =>{
            console.log(error)
            toast.error("failed to save record")
        })
    }

    const HandleData = (e)=>{
      setValue({
        ...value,
        [e.target.name]:e.target.value
      })
    }

    useEffect(()=>{
        
    },[])
  return (
    <div className='w-full h-full flex flex-cols justify-center items-center p-10 mt-[10px] mb-[10px]'>
      <form className='bg-white rounded-[20px] w-[80%] min-h-[80%] flex flex-col justify-center items-left  p-10 text-[1.5rem]' onSubmit={HandleSubmit}>
        <h1 className='text-[2.5rem] text-blue-500 mb-[10px]'>
          Make a new Record
        </h1>
        <p className=' mb-[10px] grid grid-rows-2 gap-4 w-80%'>
            <label htmlFor="">purchased by</label>
            <input onChange={HandleData} className=' border-[2px] focus:rounded-[10px] border-blue-500 self-end' type="text" value={value.purchased}  name="purchased" />
        </p>
        <p className='mb-[10px] grid grid-rows-2  gap-4 w-80%'>
            <label htmlFor="">router number</label>
            <input onChange={HandleData} className='border-[2px] focus:rounded-[10px] border-blue-500' type="text" value={value.router}  name="router"/>
        </p>
        <p className='mb-[10px] grid grid-rows-2  gap-4 w-80%'>
            <label htmlFor="">pppoe account name</label>
            <input onChange={HandleData} className='border-[2px] focus:rounded-[10px] border-blue-500' type="text" value={value.pppoe}  name="pppoe"/>
        </p>
        <p className='mb-[10px] grid grid-rows-2  gap-4 w-80%'>
            <label htmlFor="">subscription start</label>
            <input onChange={HandleData} className='border-[2px] focus:rounded-[10px] border-blue-500' type="text" value={value.subscription}  name="subscription"/>
        </p>
        <p className='mb-[10px] grid grid-rows-2  gap-4 w-80%'>
            <label htmlFor="">subscription end</label>
            <input onChange={HandleData} className='border-[2px] focus:rounded-[10px]   border-blue-500' type="text" value={value.subscriptionEnd}  name="subscriptionEnd"/>
        </p>
        <p className='w-full inline-flex justify-evenly mt-[20px]'>
          <button className='w-[200px] text-[2.5rem] rounded-[10px] text-white bg-blue-500 border-[2px] pr-[10px] pl-[10px]' type='submit'>
            Save
          </button>
          <button className='w-[200px] text-[2.5rem] rounded-[10px] text-white bg-red-500 border-[2px] pr-[10px] pl-[10px]'  onClick={() => setValue({
              purchased: '',
              router: '',
              pppoe: '',
              subscription: '',
              subscriptionEnd: ''
            })}
          >
            Clear
          </button>
        </p>
      </form>
    </div>
  )
}

export default NewRecord
