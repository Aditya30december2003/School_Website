import React , {useState} from 'react'
import Logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { IoMdSchool } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav , setNav] = useState(false);
  const NavBar = () =>{
    setNav(!nav);
  }
  return (
    <>
    <div className='flex items-center text-black justify-between p-2 border-b-2 border-b-white'>
      {/* logo */}
      <div>
        <img className='w-[7rem]' src={Logo} alt="" />
      </div>

      {/* navbar */}
      <div className='lg:flex items-center justify-between gap-10 hidden'>
        <ul className='flex items-center gap-6 font-bold text-[0.85rem]'>
            <NavLink to='/' className='cursor-pointer hover:text-blue-900 duration-300'>HOME</NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-red-600 duration-300'>ABOUT</NavLink>
            <NavLink to='/academics' className='cursor-pointer flex items-center gap-1 hover:text-blue-900 duration-300'>
               <p>ACADEMICS</p> 
            </NavLink>
            <NavLink to='/faculty' className='cursor-pointer hover:text-blue-900 duration-300'>FACULTY</NavLink>
            <NavLink to='/students' className='cursor-pointer hover:text-blue-900 duration-300'>STUDENTS</NavLink>
            <NavLink to='/gallery' className='cursor-pointer hover:text-blue-900 duration-300'>GALLERY</NavLink>
            <NavLink to='/contact' className='cursor-pointer hover:text-blue-900 duration-300'>CONTACT US</NavLink>
        </ul>
      

    <NavLink to='/admission' className='mr-[1rem] w-[15rem] h-[3rem] relative font-bold text-black bg-blue-900 border-2 group-hover:translate-x-full transform ease p-2 rounded-[2rem] cursor-pointer group  inline-flex  items-center justify-center overflow-hidden  hover:border-2 hover:bg-transparent  transition duration-300 ease-out'>
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-blue-900 duration-300 group-hover:translate-x-0">
      <IoMdSchool size={30} />            
      </span>
       <span className='text-white font-bold ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full'>Admissions</span> 
    </NavLink>
    </div>

    <div onClick={NavBar} className='lg:hidden ml-[3rem] cursor-pointer'>
      <CiMenuBurger size={35} className='duration-300'/>
    </div>
    </div>

    {/* mobile-navbar */}
    <div className={!nav?'top-0 left-0 bg-blue-900 w-full text-white lg:hidden h-screen mt-[-250%] duration-1000 fixed z-10':'top-0 left-0 z-10 fixed w-full duration-1000 bg-blue-900 overflow-hidden text-white lg:hidden h-screen mt-[0%]'}>
     <div className='items-center justify-between gap-10 flex flex-col'>
     <div onClick={()=>{setNav(!nav)}} className='ml-[85%] mt-5 bg-gray-500 p-2 rounded-[100%]'><RxCross1 size={35} className='z-20 duration-300 cursor-pointer' /></div>
        <ul className='flex flex-col mt-[-2rem] text-[1rem] text-white items-center gap-6 font-bold'>
            <NavLink to='/' className='cursor-pointer hover:text-blue-900 duration-300 mt-10'>HOME</NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-blue-900 duration-300'>ABOUT</NavLink>
            <NavLink to='/academics' className='cursor-pointer flex items-center gap-1 hover:text-blue-900 duration-300'>
               <p>ACADEMICS</p> 
            </NavLink>
            <NavLink to='/faculty' className='cursor-pointer hover:text-blue-900 duration-300'>FACULTY</NavLink>
            <NavLink to='/students' className='cursor-pointer hover:text-blue-900 duration-300'>STUDENTS</NavLink>
            <NavLink to='/gallery' className='cursor-pointer hover:text-blue-900 duration-300'>GALLERY</NavLink>
            <NavLink to='/contact' className='cursor-pointer hover:text-blue-900 duration-300'>CONTACT US</NavLink>
        </ul>
      

     <NavLink to='/admission' className='mr-[1rem] w-[15rem] h-[3rem] relative font-bold text-black bg-blue-900 border-2 group-hover:translate-x-full transform ease p-2 rounded-[2rem] cursor-pointer group  inline-flex  items-center justify-center overflow-hidden  hover:border-2 hover:bg-transparent  transition duration-300 ease-out'>
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-blue-900 duration-300 group-hover:translate-x-0">
      <IoMdSchool size={30} />            
      </span>
       <span className='text-white font-bold ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full'>Admissions</span> 
    </NavLink>
    </div>

     </div>


    </>
  )
}

export default Navbar
