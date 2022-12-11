import React from 'react';
import { FaHome, FaRegFilePdf, FaRegListAlt, FaUserCog } from 'react-icons/fa';
import { GiProgression} from 'react-icons/gi';
import {BsTelephoneForward} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import resume from '../../resume/Omar Faruk.Resume new.pdf'
import '../Home/Home.css'
const Header = () => {

    const headItems = <>
        <li className='font-bold'><Link to='/home'><FaHome></FaHome> Home</Link></li>
        <li className='font-bold '><Link to='/myProjects'><FaRegListAlt></FaRegListAlt> My Projects</Link></li>
        <li className='font-bold ' ><a href="#skills"><GiProgression></GiProgression>My Skills</a> </li>
        <li className='font-bold '><a href='#aboutMe'><FaUserCog></FaUserCog> About Me </a> </li>
        <li className='font-bold '><a href='#contact'><BsTelephoneForward></BsTelephoneForward> Contact me</a> </li>
    

    </>
    return (

        <div className="navbar bg-transparent ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headItems}
                    </ul>
                </div>
                <Link to='/home'><a  className="btn btn-ghost normal-case text-xl font-bold hover:bg-green-200 hover:text-black tacks">OFP Tacks</a></Link>   
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headItems}
                </ul>
            </div>
            <div className="navbar-end" title='Download resume'>
            <a href={resume}
                    download="Omar Faruk.Resume.pdf"
                    className="hover:bg-green-200 p-3 rounded-2xl font-bold hover:text-black">
                 <span className='flex items-center'><FaRegFilePdf></FaRegFilePdf> Resume</span>  
                </a>
            </div>
        </div>
    );
};

export default Header;