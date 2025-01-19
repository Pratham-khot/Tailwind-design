import React from 'react'
import comp from "../../public/images/clay-mockup 1.png";
import check from "../../public/images/checkmark.png";
import BestCard from './BestCard';

const bestArray=[
    {
        imageUrl:check,
        title:"Quality",
        desc:<p>"Follow a hashtag growth total posts, videos and <br />images.more revitions"</p>
    },
    {
        imageUrl:check,
        title:"Communication",
        desc:<p>"Follow a hashtag growth total posts, videos and <br />images.more revitions"</p>

    },
    {
        imageUrl:check,
        title:"Reliability",
        desc:<p>"Follow a hashtag growth total posts, videos and <br />images.more revitions"</p>

    }
]
const Best = () => {
  return (
    <div className='flex justify-between px-36'>
        <div className='w-96 mt-32'>
            <img src={comp} alt="" />
        </div>
        <div>
            <p className='text-[#000000] font-bold  mt-20 mb-5 text-3xl'>Why we best?</p>
            <p className='text-[#7D82A1] mb-10'>Don’t waste time on search manual tasks. Let Automation do it for you. <br />Simplify workflows, reduce errors, and save time.</p>
            <div className='flex flex-col gap-2'>
                {
                    bestArray.map((item)=>{
                        return(
                        <BestCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        desc={item.desc}
                        />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Best