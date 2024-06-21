import { Checkbox } from '@/components/ui/checkbox'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const AsideBar = () => {
    return (
        <aside className='h-screen flex flex-col w-[12rem] gap-7'>
            <div className='w-full flex justify-end'>
                <div className='text-white text-lg p-4 font-bold h-[14rem] w-[12rem] bg-black rounded-xl flex flex-col justify-end gap-7'>
                    <div className='flex flex-col'>
                        <h2>Get your best</h2>
                        <h2>profession</h2>
                        <h2>with Lucky job</h2>
                    </div>
                    <button className='w-full py-1 rounded-full bg-blue-300'>
                        <span className='font-bold text-black text-sm'>Learn More</span>
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full border-r border-slate-300 '>
                <div className='w-full flex justify-between'>
                    <h2>Filters</h2>
                    <ChevronLeft className='h-4 w-4 text-black'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-muted-foreground text-xs'>Working schedule</h2>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Full time</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Part time</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox />
                            <span className='font-semibold text-xs'>Internship</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Project work</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox />
                            <span className='font-semibold text-xs'>Volunteering</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-muted-foreground text-xs'>Employement Type</h2>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Full day</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Flexible Schedule</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox />
                            <span className='font-semibold text-xs'>Shift work</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox checked/>
                            <span className='font-semibold text-xs'>Distant work</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox />
                            <span className='font-semibold text-xs'>Shift method</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AsideBar