import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/images/logo.svg";
const Header = () => {
  return (
    <header className='flex justify-between px-20 pt-2'>
        <div className='flex'>
            <Link to='/'>
            <img src={logo} alt="" />
            </Link>
        </div>
        <div className='flex'>
        <ul className='flex gap-10 pt-5 text-[#000000BF]'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>Services</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/'>Project</Link>
            </li>
            <li>
                <Link to='/'>Help</Link>
            </li>
        </ul>
        </div>
        <div className='flex gap-10 text-[#0075FF]'>
            <button>Sign In</button>
            <button className='bg-[#DAEBFF] hover:bg-[#98c8ff] px-12 py-4 rounded-bl-[120px] rounded-r-[80px]'>Sign up</button>
        </div>
    </header>
  )
}

export default Header