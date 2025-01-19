import React from 'react'

const StatCard = ({imageUrl,num,title,desc}) => {
  return (
    <div className='w-48 text-center p-4 flex flex-col items-center justify-between gap-4'>
        <img className='w-8 border border-slate-200 p-2 rounded' src={imageUrl} alt="" />
        <p className='font-bold text-4xl'>{num}</p>
        <p className='font-semibold'>{title}</p>
        <p className='-mt-4 text-[#7D82A1] text-sm'>{desc}</p>
    </div>
  )
}

export default StatCard