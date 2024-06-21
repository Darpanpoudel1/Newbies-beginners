import { Slider } from '@/components/ui/slider'
import { ArrowDown, ChevronDown, MapPin, Search } from 'lucide-react'
import React from 'react'

const HeaderBar = () => {
    return (
        <header className='py-5 px-2 w-[47rem] bg-black lg:py-10 lg:px-4 '>
            <div className='gap-8 flex justify-center lg:gap-20'>
                <div className='px-2 gap-2 flex items-center border-r border-white lg:px-4 lg:gap-4'>
                    <div className='gap-1 flex items-center lg:gap-2'>
                        <div className='h-3 w-3 lg:h-7 lg:w-7 rounded-full border border-slate-50 flex items-center justify-center'>
                            <Search className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                        </div>
                        <h2 className='text-md font-light text-white'>Designer</h2>
                    </div>
                    <div className='h-full flex items-center'>
                        <ChevronDown className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                    </div>
                </div>
                <div className='flex items-center border-r border-white px-2 gap-2 lg:px-4 lg:gap-4'>
                    <div className='flex items-center gap-1 lg:gap-2'>
                        <div className='h-3 w-3 lg:h-7 lg:w-7 rounded-full border border-slate-50 flex items-center justify-center'>
                            <MapPin className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                        </div>
                        <h2 className='text-sm lg:text-md font-light text-white'>Work location</h2>
                    </div>
                    <div className='h-full flex items-center'>
                        <ChevronDown className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                    </div>
                </div>
                <div className='flex items-center border-r border-white px-2 gap-2 lg:px-4 lg:gap-4'>
                    <div className='flex items-center gap-1 lg:gap-2'>
                        <div className='h-3.5 w-3.5 lg:h-7 lg:w-7 rounded-full border border-slate-50 flex items-center justify-center'>
                            <Search className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                        </div>
                        <h2 className='text-md font-light text-white'>Experience</h2>
                    </div>
                    <div className='h-full flex items-center'>
                        <ChevronDown className='h-2 w-2 lg:h-4 lg:w-4 text-white' />
                    </div>
                </div>
                <div className='flex items-center border-r border-white px-4 gap-4'>
                    <div className='flex items-center gap-2'>
                        <div className='h-7 w-7 rounded-full border border-slate-50 flex items-center justify-center'>
                            <Search className='h-4 w-4 text-white' />
                        </div>
                        <h2 className='text-md font-light text-white'>Per month</h2>
                    </div>
                    <div className='h-full flex items-center'>
                        <ChevronDown className='h-4 w-4 text-white' />
                    </div>
                </div>
                <div className='flex items-center  px-4 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <span className='text-sm text-white text-light'>Salary Range</span>
                            <span className='text-sm text-white text-light'>$1,200 - $20,000</span>
                        </div>
                        <div>
                            <Slider defaultValue={[30]} max={100} step={1} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderBar