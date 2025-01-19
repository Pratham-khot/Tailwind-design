import React from 'react'
import clientImg from "../../public/images/client.png";
const Client = () => {
  return (
    <div className='flex flex-col justify-center items-center px-36 gap-8 pb-12'>
        <p className='font-bold text-5xl pt-6'>What clients says about us.</p>
        <p className='text-[#90A3B4] text-center'>Event madness gathering innoies,& tech enthusiasts in Speced. <br />
do more informations.</p>
        <img src={clientImg} alt="" className='-mt-20'/>
    </div>
  )
}

export default Client