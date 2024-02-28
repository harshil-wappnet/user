import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-start m-5 bg-slate-600 text-white h-10 rounded items-center'>
            <div>
                <Link to="/" className='font-bold font-weight hover:cursor-pointer'>YOUR LOGO</Link>
            </div>
            <div className='mx-[300px]'>
                <ul className='flex'>
                    <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/">Users</Link>
                    </li>
                    <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/photos">Photo</Link>
                    </li>
                    <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/maps">Maps</Link>
                    </li>
                    {/* <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/info">Info</Link>
                    </li> */}
                    <li className='mx-5 hover:cursor-pointer'>
                        <Link to="/form">Form</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
