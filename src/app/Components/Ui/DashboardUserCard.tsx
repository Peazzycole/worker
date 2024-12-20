import Image from 'next/image'
import React from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export default function DashboardUserCard() {
    return (
        <div>
            <div className='flex border border-gray-200 p-4 rounded-2xl shadow flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <div className="size-8 rounded-full relative">
                        <Image src="/img1.png" alt="user image" width={32} height={32} className="rounded-full h-full w-full" />
                        <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <span className='text-xs font-bold'>Jane Reyes</span>
                        <div className='flex items-center gap-1 text-xs'>
                            <span>COO</span>
                            <div className='size-1 bg-black rounded-full'></div>
                            <span>Northwind Traders</span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f5f7ff] p-3 rounded-lg'>
                    <div className='flex items-center gap-1'>
                        <MarkEmailUnreadIcon sx={{ width: 20, height: 20 }} />
                        <h5 className='font-bold text-sm leading-6'>Engage with Jane Reyes</h5>
                    </div>
                    <p className='text-sm'>Jane may be interested in upgrading espresso machines for her in-store coffee shops</p>

                </div>
                <div className='flex items-center gap-1 text-xs'>
                    <span className=''>Expand business</span>
                    <div className='size-1 bg-black rounded-full'></div>
                    <span>High buying intent</span>
                </div>
            </div>

        </div>
    )
}
