import React, { useState } from 'react';
import logo from '../../images/logo/pregnant.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (


        <nav className='shadow-md w-full fixed top-0 left-0 z-[900]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <div className='flex items-center'>
                        <img className='w-32' src={logo} alt="" />
                        <h1 className='m-0 text-3xl text-pink-500'>PREGNANCY CARE</h1>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto mt-5 lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <CustomLink className='md:ml-8 text-xl md:my-0 my-7 py-3' to='/home'>Home</CustomLink>
                    <CustomLink className='md:ml-8 text-xl md:my-0 my-7 py-3' to='/procedures'>Procedures</CustomLink>
                    <CustomLink className='md:ml-8 text-xl md:my-0 my-7 py-3' to='/appoinment'>Appoinment</CustomLink>
                    <CustomLink className='md:ml-8 text-xl md:my-0 my-7 py-3' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='md:ml-8 text-xl md:my-0 my-7 py-3' to='/signin'>SignIn</CustomLink>
                </ul>
            </div>
        </nav>


    );
};

export default Header;