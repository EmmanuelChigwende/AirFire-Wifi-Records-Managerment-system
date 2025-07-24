import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react' 
import { useRef } from 'react'

const LoadingAnimation = () => {
    const loading = useRef(null)
    useGSAP(()=>{
        gsap.fromTo(loading.current,{
            x:100,
        },{
            x:0,
            duration:2,
            repeat:-1,
            yoyo:true,
            ease:"bounce"
        })
    },{scope:loading})

  return (
    <div>
        <div ref={loading} className='w-[100px] h-[100px] border-[5px] border-blue-500 rounded-full'>
        </div>
        <div className='w-[200px] border-blue-500 border-[3px]'>

        </div>
    </div>
  )
}

export default LoadingAnimation
