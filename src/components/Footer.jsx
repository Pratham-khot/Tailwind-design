import React from 'react'
import logo from "../../public/images/logo icon.png";
import facebookImg from "../../public/images/facebook.png";
import instaImg from "../../public/images/instagram.png";
import twitterImg from "../../public/images/twitter.png";
import newImg from "../../public/images/newsletter.png"
import locationImg from "../../public/images/location.png";
import callImg from "../../public/images/call.png";
import emailImg from "../../public/images/email.png"
import dividerImg from "../../public/images/divider.png"
const Footer = () => {
  return (
    <footer className='bg-[#000321] px-36 flex justify-between pt-60 pb-28 relative' >
        <img src={newImg} alt="" className='absolute -top-32 w-[800px] left-60 h-[300px]'/>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-3'>
                <img src={logo} alt="" />
                <p className='text-[#ffffff] font-bold pt-5'>Dsign</p>
            </div>
            <div className='flex gap-2'>
                <img src={facebookImg} alt="" />
                <img src={twitterImg} alt="" />
                <img src={instaImg} alt="" />
            </div>
        </div>
        <div className='text-[#ffffff] flex flex-col gap-4'>
            <p>Home</p>
            <p>Popular</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className='text-[#ffffff] flex flex-col gap-4'>
            <p>Help</p>
            <p>Resources</p>
            <p>Application</p>
            <p>Team</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <img src={locationImg} alt="" className='w-4 h-7'/>
                <p className='text-[#FFFFFF]'>925 Filbert Street <br />Pennsylvania <br />18072</p>
            </div>
            <div className='flex gap-2'>
                <img src={callImg} alt="" className='w-4'/>
                <p className='text-[#FFFFFF]'>+45 34 11 44 11</p>
            </div>
            <div className='flex gap-2'>
                <img src={emailImg} alt="" className='w-4'/>
                <p className='text-[#FFFFFF]'>info@mail.com</p>
            </div>
        </div>
            
        
    </footer>
  )
}

export default Footer