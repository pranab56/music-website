import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/image1.png';
import { isActiveStyles,notActiveStyles } from '../page/Styles';
import {FaCrown} from 'react-icons/fa'

const Heder = () => {
    return (
        <header className='flex items-center w-full md:py-2 md:px-6'>
            <NavLink to={'/'}>
            <img src={logo} alt="logo" className='w-32' />
            </NavLink>
            <ul className='flex justify-center ml-7'>
                <li className='mx-5 text-lg'><NavLink to={'/home'} className={({isActive})=>isActive?isActiveStyles:notActiveStyles}>Home</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/musics'} className={({isActive})=>isActive?isActiveStyles:notActiveStyles}>Musics</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/primium'} className={({isActive})=>isActive?isActiveStyles:notActiveStyles}>Primium</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/contact'} className={({isActive})=>isActive?isActiveStyles:notActiveStyles}>Contect</NavLink></li>
            </ul>
            <div className='flex items-center ml-auto cursor-pointer gap-2 relative'>
            <img src="" className='w-12 min-w-[44px] object-cover rounded-full shadow-lg' alt="" />
            <div className='flex flex-col'>
                <p className='text-slate-500 text-lg hover:text-slate-700 font-semibold'>UserName</p>
                <p className='flex items-center gap-2 text-xs text-gray-500 font-normal'>Premium member. <FaCrown className='text-sm -ml-1 text-yellow-500'/></p>
                
            </div>
            </div>
        </header>
    );
};

export default Heder;