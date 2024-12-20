"use client"

import { Backdrop, Modal } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Image from "next/image";

type Props = {
    isOpen: boolean
    onClose: () => void
    user: {
        name: string
        topic: string
        statusReason: string
        createdOn: string
        image: string
        description: string
    }
}

export default function LeadModal({ isOpen, onClose, user }: Props) {
    return (
        <Modal hideBackdrop={true} open={isOpen} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
            <div className="fixed inset-0 flex items-center justify-center">
                <Backdrop className="z-10 relative" open={isOpen} onClick={onClose} />
                <div className="w-full lg:w-[900px] relative z-50 px-3 ">
                    <div className="bg-[#f4f6f8] relative lg:w-[900px] max-h-[calc(100vh-100px)] modal-container overflow-auto rounded-2xl px-10 p-6 z-40">
                        <div className='flex p-4 rounded-2xl flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className="size-8 rounded-full relative">
                                    <Image src={user.image} alt="user image" width={32} height={32} className="rounded-full h-full w-full" />
                                    <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <span className='text-xs font-bold'>{user.name}</span>
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
                                    <h5 className='font-bold text-sm leading-6'>Engage with {user.name}</h5>
                                </div>
                                <p className='text-sm'>{user.description}</p>
                            </div>
                            <div className='flex items-center gap-1 text-xs'>
                                <span className=''>Expand business</span>
                                <div className='size-1 bg-black rounded-full'></div>
                                <span>{user.topic}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    )
}