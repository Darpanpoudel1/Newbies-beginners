import React from 'react'
import Link from 'next/link';
import { Bell, Map, Settings } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className=' p-1 py-2 w-[47rem]   bg-black flex items-center justify-between lg:p-4 lg:py-3 border-b border-slate-50'>
            <div className='gap-3 flex items-center lg:gap-7'>
                <div>
                <h2 className='font-bold text-white text-[1rem] lg:text-lg'>Lucky job</h2>
                </div>
                <div className='flex lg:text-xs font-medium items-center text-white lg:gap-4'>
                    <Link href={"#"}>
                        Find Job
                    </Link>
                    <Link href={"#"}>
                        Messages
                    </Link>
                    <Link href={"#"}>
                        Hiring
                    </Link>
                    <Link href={"#"}>
                        Community
                    </Link>
                    <Link href={"#"}>
                        FAQ
                    </Link>
                </div>
            </div>
            <div className='flex gap-3 items-center lg:gap-7'>
                <div className='flex gap-1 items-center lg:gap-2'>
                    <Map className='h-2 w-3 lg:h-5 lg:w-4 text-white'/>
                    <span className='font-light text-white'>New York, NY</span>
                </div>
                <div className='gap-2 flex items-center lg:gap-4'>
                    <div className='h-3 w-3 lg:h-7 lg:w-7 rounded-full border'></div>
                    <div className='h-3 w-3 rounded-full lg:h-7 lg:w-7 flex items-center justify-center'>
                        <Settings className='h-2 w-2 lg:h-5 lg:w-5 text-white'/>
                    </div>
                    <div className='rounded-full h-7 w-7 flex items-center justify-center'>
                        <Bell className='h-5 w-5 text-white'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar