import { AlignVerticalDistributeCenter, Bookmark } from 'lucide-react'
import React from 'react'

const MAPFILE = [1, 2, 3, 4, 5, 6]

const Jobs = () => {
    return (
        <section className='flex flex-col w-full px-4 gap-7'>
            <div className='flex w-full justify-between'>
                <div className='flex items-center gap-4'>
                    <h2 className='font-bold text-2xl'>Recommended Jobs</h2>
                    <div className='py-2 px-4 border rounded-full'>
                        <span className='text-sm'>386</span>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='text-muted-foreground text-xs'>Sort by:</span>
                    <span className='text-black text-xs'>Last updated</span>
                    <AlignVerticalDistributeCenter className='h-3 w-5' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-x-[15rem] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-7'>
                {
                    MAPFILE.map((item) => (
                        <aside className='border border-slate-400 rounded-lg bg-white flex flex-col gap-4 w-[16rem] p-2'>
                            <div className='rounded-lg flex flex-col bg-orange-200 p-2'>
                                <div className='flex justify-between'>
                                    <div className='bg-white rounded-full px-3 py-1 flex items-center'>
                                        <span className='text-black text-[10px] leading-tight'>20 May, 2023</span>
                                    </div>
                                    <div className='rounded-full p-2 bg-white'>
                                        <Bookmark className='h-5 w-5' />
                                    </div>
                                </div>
                                <div className='w-full text-xs mt-2'>
                                    <span>Amazon</span>
                                </div>
                                <div className='w-full flex gap-2 jusitfy-between'>
                                    <div className='w-full text-xl'>
                                        Senior Graphic Designer
                                    </div>
                                    <div className='rounded-full !h-8 !w-8 p-2 bg-pink-500'>
                                        <Bookmark className='h-5 w-5 text-transparent' />
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-3 mt-4'>
                                    <div className='border border-black rounded-full px-3 py-1 flex items-center'>
                                        <span className='text-black text-[10px]'>Part time</span>
                                    </div>
                                    <div className='border border-black rounded-full px-3 py-1 flex items-center'>
                                        <span className='text-black text-[10px]'>Distant</span>
                                    </div>
                                    <div className='border border-black rounded-full px-3 py-1 flex items-center'>
                                        <span className='text-black text-[10px]'>Part time</span>
                                    </div>
                                    <div className='border border-black rounded-full px-3 py-1 flex items-center'>
                                        <span className='text-black text-[10px]'>Senior lever</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-between'>
                                <div className='text-xs flex flex-col'>
                                    <h3 className='font-bold'>$250/hr</h3>
                                    <span className='text-muted-foreground'>San fransico, CA</span>
                                </div>

                                <div className='border border-black rounded-full px-3 py-2 flex items-center'>
                                    <span className='text-black text-[10px]'>Senior lever</span>
                                </div>
                            </div>
                        </aside>
                    ))
                }
            </div>
        </section>
    )
}

export default Jobs