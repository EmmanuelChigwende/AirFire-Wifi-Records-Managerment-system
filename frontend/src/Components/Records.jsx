import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Records = () => {
  const [record,setRecord] = useState()
  const [fetching,setFetching] = useState(true)

  useEffect(()=>{
    axios.get("http://localhost:5002").then(
     response =>{
      setRecord(response.data)
      setFetching(false)
     } 
    ).catch(error =>{
      console.log(error)
    })
  },[])

  return (
    <div className='p-5 w-full h-full font-mono text-[1.5rem] grid grid-cols-2 gap-3 bg-[#F5F6FA]'>
        {
          fetching ? ("fetching records....."): record ? (record?.map(({_id:id, ["purchased by"]:Owner,["router number"]:Router,["pppoe account name"]:PPoe,["subscription start"]:SubStart,["subscription end"]:SubEnd}) =>(
            <div key={id} className='border-[2px] max-h-[350px] max-w-[500px] p-10 rounded-[20px] font-sans space-y-2 text-[1.6rem] bg-white' >
              <p className='text-[2rem] mb-[20px]'>
                Account Holder: <span className='text-blue-500'>{Owner}</span>
              </p>
              <p>
                Router number: {Router}
              </p>
              <p>
                PPoe Account: {PPoe}
              </p>
              <p>
                Subscription start: {SubStart}
              </p>
              <p>
                Subscription end: {SubEnd}
              </p>
            </div>
          ))):("failed to fectch records")
        }
    </div>
  )
}

export default Records
