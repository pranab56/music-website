import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/image1.png';

const Heder = () => {
    return (
        <header className='flex w-full md:py-2 md:px-6'>
            <NavLink to={'/'}>
            <img src={logo} alt="logo" className='w-32' />
            </NavLink>
            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5 text-lg'><NavLink to={'/home'}>Home</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/musics'}>Musics</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/primium'}>Primium</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/contact'}>Contect</NavLink></li>
            </ul>
        </header>
    );
};

export default Heder;