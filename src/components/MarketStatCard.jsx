import React from 'react'

const MarketStatCard = ({imageUrl,title,desc}) => {
  return (
    <div className='grid grid-cols-1 bg-[#FFFFFF] border-[1px] w-48 m-4 p-4 grid-rows-2 justify-start items-start  rounded-3xl  '>
        <img src={imageUrl} alt="" className='border-slate-200  rounded mb-1'/>
        <p className='font-bold text-1xl '>{title}</p>
        <p className=' text-[#7D82A1] '>{desc}</p>
    </div>
  )
}

export default MarketStatCard