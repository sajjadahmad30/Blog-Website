import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Image from '../assets/Logo.png'

const Header = () => {
  return (
    <>
   <nav id='home' className='sticky top-0 bg-green-50  opacity-1'>
    <ul className='flex justify-center  text-blue-950 py-4 border-b-2 '>
       <a href="#" className=''> <img src={Image} alt="logo"  className=' h-12 rounded-[50%] float-start relative right-16 bottom-1 ' /></a>
        <li className='mx-7 font-bold hover:underline text-green-600 underline hover:text-green-600 text-[1.3rem]'>
            <Link to="/">
            All
            </Link>
        </li>
        <li className='mx-7 font-bold hover:underline  hover:text-green-600 text-[1.3rem]'>
            <Link to="/FullStack"> 
            Full Stack Development
            </Link>
        </li>
        <li className='mx-7 font-bold hover:underline  hover:text-green-600 text-[1.3rem]'>
            <Link to="/DataScience">
            Data Science
            </Link>
        </li>
        <li className='mx-7 font-bold hover:underline  hover:text-green-600 text-[1.3rem]'>
            <Link to="/SyberScurity">
            Syber Scurity
            </Link>
        </li>
        <li className='mx-7 font-bold hover:underline  hover:text-green-600 text-[1.3rem]'>
            <Link to="/Career">
           Career
            </Link>
        </li>
    </ul>
   </nav>
    <Outlet/>
    </>
  )
}

export default Header
