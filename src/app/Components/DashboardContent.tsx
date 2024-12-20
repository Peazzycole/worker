import React from 'react'
import DashboardUserCard from './Ui/DashboardUserCard'
import Image from 'next/image'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export default function DashboardContent() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='flex-1 flex flex-col gap-4'>
                <p className='text-sm'>Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus</p>
                <div className='flex flex-col mf:flex-row gap-4'>
                    <div className='flex-1'>
                        <DashboardUserCard />
                    </div>
                    <div className='flex-1'>
                        <DashboardUserCard />
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-2 gap-1'>
                    <div className='bg-[#5c48cc] rounded w-10  h-[4px]'></div>
                    <div className='bg-gray-200 rounded w-1  h-[4px]'></div>
                    <div className='bg-gray-200 rounded w-1  h-[4px]'></div>
                    <div className='bg-gray-200 rounded w-1  h-[4px]'></div>
                </div>
            </div>
            <div className='bg-gray-200 w-[1px] mx-6'></div>
            <div className='md:w-[30%] flex flex-col gap-4'>
                <h3 className='text-sm'>Other key activities</h3>
                {/* first card */}
                <div className='flex flex-col gap-2 border border-gray-200 px-4 py-2 rounded-xl shadow'>
                    <div className='flex items-center gap-2'>
                        <div className="size-8 rounded-full relative">
                            <Image src="/img1.png" alt="user image" width={32} height={32} className="rounded-full h-full w-full" />
                            <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-xs font-bold'>Cafe A100 for Woodland Bank</span>
                            <div className='flex items-center gap-1 text-xs'>
                                <span>Woodland Bank</span>
                                <div className='size-1 bg-black rounded-full'></div>
                                <span>$280,000 </span>
                                <div className='size-1 bg-black rounded-full'></div>
                                <span>8 days to close</span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-[#f8f8fa] px-3 py-1 flex items-center gap-1 rounded'>
                            <div className='flex items-center gap-1'>
                                <MarkEmailUnreadIcon sx={{ width: 16, height: 16 }} />
                                <h5 className='font-medium text-xs leading-6'>Review draft and reply to Chris Naido</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-2 border border-gray-200 px-4 py-2 rounded-xl shadow'>
                    <div className='flex items-center gap-2'>
                        <div className="size-8 rounded-full relative">
                            <Image src="/img1.png" alt="user image" width={32} height={32} className="rounded-full h-full w-full" />
                            <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-xs font-bold'>Partnership opportunity for Fabrikam</span>
                            <div className='flex items-center gap-1 text-xs'>
                                <span>Fabrikam</span>
                                <div className='size-1 bg-black rounded-full'></div>
                                <span>$5,000,000 </span>
                                <div className='size-1 bg-black rounded-full'></div>
                                <span>12 days to close</span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-[#f8f8fa] px-3 py-1 flex items-center gap-1 rounded'>
                            <div className='flex items-center gap-1'>
                                <MarkEmailUnreadIcon sx={{ width: 16, height: 16 }} />
                                <h5 className='font-medium text-xs leading-6'>Prepare me for Fabrikams stakeholder meeting</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <span className='font-bold text-sm text-[#5c48cc]'>Show all key activities</span>
            </div>
        </div>
    )
}
