import React from 'react'
import mapImg from "../../public/images/map.png";
import bangImg from "../../public/images/bangladesh.png";
import usaImg from "../../public/images/usa.png";
import australiaImg from "../../public/images/australia.png";
import chinaImg from "../../public/images/china.png"
import WorldCard from './WorldCard';
const country=[
    {
        imageUrl:bangImg,
        title:"Bangladesh",
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
        imageUrl:usaImg,
        title:"United States",
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
        imageUrl:australiaImg,
        title:"Australia",
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced.",
    },{
        imageUrl:chinaImg,
        title:"China",
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced.",
    }
]
const World = () => {
  return (
    <div className='bg-[#E2F3F9]  justify-center mt-20 px-28'>
        <p className='font-bold text-center mb-20 pt-16 text-5xl'>Our network & world <br />work details.</p>
        <img src={mapImg} alt="" />
        <div className='flex gap-10 '>
            {
                country.map((item)=>{
                    return(
                        <WorldCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        desc={item.desc}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default World