import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

 
const Header = () => {
    const navigate = useNavigate();

    let Links = [
        {name: 'HOME', to:'/'},
        {name: 'Completed Task', to:'/complete'},
        {name: 'TO-DO', to:'/todo'},
        {name: 'Calender', to:'/calender'},
    ];

    let [open, setOpen] = useState(false);
    return (
        <nav className='shadow-md w-full fixed top-0 left-0 text-left z-[99]'>
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div onClick={() => {navigate('/')}} className="font-bold text-3xl cursor-pointer flex items-center text-red-700">
                    <span className="px-2 md:px-1"><FontAwesomeIcon className='text-gray-700' icon={faPencilAlt} /></span>
                    React ToDo App
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {
                        open ?  <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {
                        Links.map(link => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'><button onClick={() => setOpen(!open)}><NavLink className={({ isActive }) => (isActive ? 'text-red-500 duration-300 border-b-2 border-cyan-500' : 'text-gray-800 duration-100')} to={link.to}>{link.name}</NavLink></button></li>
                        ))
                    }
                    
                </ul>
            </div>
        </nav>
    );
};

export default Header;
