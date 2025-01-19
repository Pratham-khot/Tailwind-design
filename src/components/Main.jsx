import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className='flex flex-col justify-center px-20 items-center mt-[25vh]'>
        <p className='text-[#002834] text-6xl font-bold flex text-center'>Solve problem with an <br />integrated agency.</p>
        <p className='text-center mt-6 text-[#7D82A1]'>Ehya is the Instagram analytics platform teams use to stay focused on the goals, track <br /> 
engagement for report your business .</p>
        <div className='flex rounded-[120px] gap-10 mt-10'>
            <Link to='/' className='bg-[#0075FF] rounded-bl-[120px] rounded-r-[80px] px-12 py-4 text-[#FFFFFF]'>See our portfolio</Link>
            <Link to='/' className='border-[1px] rounded-bl-[120px] rounded-r-[80px] px-12 py-4 text-[#0075FF]'>More info</Link>
        </div>
        
        
    </main>
  )
}

export default Main