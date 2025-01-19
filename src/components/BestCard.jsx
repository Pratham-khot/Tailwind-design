import React from 'react'

const BestCard = ({imageUrl,title,desc}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center gap-3 font-semibold'>
        <img src={imageUrl} alt="" className='w-11'/>
        <p>{title}</p>
        </div>
        <p className='pl-14 text-[#8EA9C1]'>{desc}</p>
    </div>
  )
}

export default BestCard