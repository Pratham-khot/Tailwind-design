import React from 'react'
import MarketStatCard from './MarketStatCard';
import marketingImg from "../../public/images/marketing.png";
import graphicImg from "../../public/images/graphic-design.svg";
import heakingImg from "../../public/images/heaking.svg";
import uiuxImg from "../../public/images/ui-ux.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const mstatArray=[
    {
        imageUrl:marketingImg,
        title:"Marketing",
        desc:"Follow a hashtag total posts, videos "
    },
    {
        imageUrl:graphicImg,
        title:"Graphic design",
        desc:"Follow a hashtag total posts, videos "
    },
    {
        imageUrl:heakingImg,
        title:"Heaking",
        desc:"Follow a hashtag total posts, videos "
    },
    {
        imageUrl:uiuxImg,
        title:"UI/UX design",
        desc:"Follow a hashtag total posts, videos "
    }
]
const MarketStat = () => {
  return (
    <div className='flex justify-between px-32 gap-5 mt-20'>
        <div className='flex flex-col gap-4 pt-16'>
            <p className='text-[#000000] font-bold text-4xl'>We provide that <br />service.</p>
            <p className='text-[#7D82A1]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />accusantium doloremque laudantium, totam rem aperiam, eaque <br />ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br />dicta sunt explicabo</p>
            <Link to='/' className='text-[#0075FF]'>Learn more<IoIosArrowRoundForward /></Link>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 justify-start items-start gap-1'>
            {mstatArray.map((item)=>{
                return(<MarketStatCard
            imageUrl={item.imageUrl}
            title={item.title}
            desc={item.desc}
            />
                )
            })}
        </div>
    </div>
    
  )
}

export default MarketStat