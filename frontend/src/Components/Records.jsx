import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import LoadingAnimation from './LoadingAnimation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Records = () => {
  const [record, setRecord] = useState()
  const [fetching, setFetching] = useState(true)
  const contentRef = useRef(null)

  useEffect(() => {
    axios.get("http://localhost:5002/")
      .then(response => {
        setRecord(response.data)
        setFetching(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // Fade-in animation when data finishes loading
  useGSAP(() => {
    if (!fetching && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
    }
  }, [fetching])

  return (
    <div className='p-5 w-full h-full bg-[#F5F6FA]'>
      {fetching ? (
        <div className='w-[65vw] flex flex-col justify-center items-center'>
          <LoadingAnimation />
        </div>
      ) : record ? (
        <div
          ref={contentRef}
          className='grid grid-cols-2 gap-3 font-mono text-[1.5rem]'
        >
          {record.map(({ _id: id, ["purchased by"]: Owner, ["router number"]: Router, ["pppoe account name"]: PPoe, ["subscription start"]: SubStart, ["subscription end"]: SubEnd }) => (
            <div
              key={id}
              className='border-[2px] max-h-[350px] max-w-[500px] p-10 rounded-[20px] font-sans space-y-2 text-[1.6rem] bg-white'
            >
              <p className='text-[2rem] mb-[20px]'>
                Account Holder: <span className='text-blue-500'>{Owner}</span>
              </p>
              <p>Router number: {Router}</p>
              <p>PPoe Account: {PPoe}</p>
              <p>Subscription start: {SubStart}</p>
              <p>Subscription end: {SubEnd}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-[1.6rem] text-center">Failed to fetch records</p>
      )}
    </div>
  )
}

export default Records