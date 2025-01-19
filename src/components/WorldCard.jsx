import React from 'react'

const WorldCard = ({imageUrl,title,desc}) => {
  return (
    <div className='bg-[#FFFFFF]  rounded-2xl mb-10'>
        <div className='flex '>
        <img src={imageUrl} alt="" />
        <p className='pt-5 font-semibold'>{title}</p>
        </div>
        <p className='text-[#7C8F9E]  '>{desc}</p>
    </div>
  )
}

export default WorldCard