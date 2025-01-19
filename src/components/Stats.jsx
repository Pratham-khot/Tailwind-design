import React from 'react'
import StatCard from './StatCard';
import shoppingBag from "../../public/images/shopping-bag.svg";
import settingImg from "../../public/images/settings.svg";
import cartImg from "../../public/images/shopping-cart.svg";
import userImg from "../../public/images/users.svg";

const statsArray=[
    {
        imageUrl:shoppingBag,
        num:"80K",
        title:"Our buyers",
        desc:"Follow a hashtag growth total posts, videos and images."
    },
    {
        imageUrl:settingImg,
        num:"90K",
        title:"Project completed",
        desc:"Follow a hashtag growth total posts, videos and images."
    },
    {
        imageUrl:cartImg,
        num:"80%",
        title:"Happy Buyers",
        desc:"Follow a hashtag growth total posts, videos and images."
    },
    {
        imageUrl:userImg,
        num:"50+",
        title:"Team members",
        desc:"Follow a hashtag growth total posts, videos and images."
    }
]
const Stats = () => {
  return (
    <div className='flex justify-between px-36'>
        {statsArray.map((item)=>{
            return(
                <StatCard
                imageUrl={item.imageUrl}
                num={item.num}
                title={item.title}
                desc={item.desc}
                />
            )
        })}
    </div>
  )
}

export default Stats