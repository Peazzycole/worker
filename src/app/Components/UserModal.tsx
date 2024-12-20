"use client"

import { Backdrop, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import CustomAccordion from "./Ui/CustomAccordion";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function UserModal({ isOpen, onClose }: Props) {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("Research");
    const [hoveredMenuItem, setHoveredMenuItem] = useState<string>("");

    const menu = ["Engage", "Research"]
    return (
        <Modal hideBackdrop={true} open={isOpen} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
            <div className="fixed inset-0 flex items-center justify-center">
                <Backdrop className="z-10 relative" open={isOpen} onClick={onClose} />
                <div className="lg:w-[900px] relative z-50 px-6 py-6 lg:px-0 lg:py-0">

                    <div className="absolute hidden -right-6 z-50 transform -translate-y-1/2 top-1/2 bg-white size-14 shadow-2xl md:flex items-center justify-center rounded-full border-2 border-gray-200 cursor-pointer">
                        <ArrowForwardIosIcon sx={{ color: "blue" }} />
                    </div>

                    <div className="bg-[#f4f6f8] relative lg:w-[900px] max-h-[900px] modal-container overflow-auto rounded-2xl py-6 z-40">

                        <div className="flex flex-col gap-4 px-3 md:px-8">
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <MarkEmailReadIcon />
                                    <h1>Engage with Jane Reyes</h1>
                                </div>
                                <div onClick={onClose}>
                                    <CloseIcon className="cursor-pointer" />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow'>
                                <div className="size-10 rounded-full relative">
                                    <Image src="/img1.png" alt="user image" width={40} height={40} className="rounded-full h-full w-full" />
                                    <div className="size-3 bg-green-700 rounded-full absolute -right-1 top-4 border-2 border-white"></div>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <span className='text-xs font-bold'>Jane Reyes</span>
                                    <div className='flex items-center gap-1 text-xs'>
                                        <Image src="/linkedin.svg" alt="linkedin icon" width={16} height={16} />
                                        <span>COO Northwind Traders</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  px-4 py-4 rounded-xl shadow  bg-gradient-to-br from-white via-white to-[#d4dbe4]">
                                <div className="flex justify-between md:items-center w-full gap-3 bg-gradient-to-tr from-[#ebf3ff] to-[#ececfe] px-4 py-2 rounded-xl flex-col md:flex-row">
                                    <p className="text-xs font-bold bg-gradient-to-r from-[#5373d4] to-[#7e47ec] bg-clip-text text-transparent">
                                        Jane may be interested in upgrading espresso machines for her in-store coffee shops
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="flex items-center gap-1 bg-white px-2 py-1">
                                            <EditIcon sx={{ width: 16, height: 16 }} className="cursor-pointer" />
                                            <span className="text-xs">Edit</span>
                                        </div>
                                        <div className="bg-gradient-to-tr from-[#365bb8] to-[#8032e4] px-2 py-1 rounded flex items-center gap-1 cursor-pointer">
                                            <SendIcon sx={{ width: 16, height: 16, color: "white" }} />
                                            <span className="text-white text-xs">Approve and send</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-x-hidden mt-2 rounded-bl-lg">
                                    <div className="flex bg-white overflow-x-auto whitespace-nowrap border-b-2 border-l-2 border-b-eveGrey-200 border-l-eveGrey-200 shadow-lg rounded-bl-lg">
                                        {menu.map((item, i) => (
                                            <span
                                                key={i}
                                                className={`p-3 py-3.5 font-bold text-sm mr-2 cursor-pointer relative ${activeMenuItem === item
                                                    ? "text-primary-500"
                                                    : "text-[#8B8B8A]"
                                                    }`}
                                                onClick={() => setActiveMenuItem(item)}
                                                onMouseEnter={() => setHoveredMenuItem(item)}
                                                onMouseLeave={() => setHoveredMenuItem("")}
                                            >
                                                {item}
                                                <span
                                                    className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#4572b9] transition-transform duration-300 ease-in-out ${activeMenuItem === item || hoveredMenuItem === item
                                                        ? "transform scale-x-100"
                                                        : "transform scale-x-0"
                                                        }`}
                                                ></span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white px-4 py-4 rounded-xl shadow mt-2">
                                    <div className="bg-gradient-to-tr from-[#ebf3ff] to-[#ececfe] px-4 py-4 rounded-xl">
                                        <h5 className="text-sm font-bold bg-gradient-to-r from-[#5373d4] to-[#7e47ec] bg-clip-text text-transparent mb-2">Why I picked this lead</h5>
                                        <div className="flex flex-col gap-2 md:gap-0">
                                            <div className="flex items-center gap-1 ml-4">
                                                <div className="size-1 bg-black rounded-full hidden md:block"></div>
                                                <p className="text-sm">Jane us a <span className="font-bold">Key decision maker </span> and was browsing <span className="font-bold">`espresso machines`</span> on First Coffees website.</p>
                                                <div className="bg-white size-2 flex items-center justify-center text-xs text-black">1</div>
                                            </div>
                                            <div className="flex items-center gap-1 ml-4">
                                                <div className="size-1 bg-black rounded-full hidden md:block"></div>
                                                <p className="text-sm">Multiple people at her company have reported `slowness` during <span className="font-bold">service requests</span></p>
                                                <div className="bg-white size-2 flex items-center justify-center text-xs text-black">2</div>
                                            </div>
                                            <div className="flex items-center gap-1 ml-4">
                                                <div className="size-1 bg-black rounded-full hidden md:block"></div>
                                                <p className="text-sm">Northwind Traders currently <span className="font-bold">$200M in revenue</span> from their in-store coffee shops</p>
                                                <div className="bg-white size-2 flex items-center justify-center text-xs text-black">3</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 pl-4 pr-4 md:pr-0 flex flex-col gap-2 w-full">
                                            <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow md:w-fit w-full">
                                                <Image src="/cele1.svg" alt="" width={40} height={40} />
                                                <div className="flex flex-col justify-between">
                                                    <span className="text-xs">Decision maker</span>
                                                    <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">Yes</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow md:w-fit w-full">
                                                <Image src="/cele2.svg" alt="" width={40} height={40} />
                                                <div className="flex flex-col justify-between">
                                                    <span className="text-xs">Potential deal value</span>
                                                    <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">$1M</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center bg-white px-4 py-4 rounded-xl shadow md:w-fit w-full">
                                                <Image src="/engagement.svg" alt="" width={40} height={40} />
                                                <div className="flex flex-col justify-between">
                                                    <span className="text-xs">Intent</span>
                                                    <span className="text-sm font-bold bg-gradient-to-r from-[#7e47ec] to-[#5373d4] bg-clip-text text-transparent">High</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center mt-2">
                                        <div className="flex items-center gap-1">
                                            <div className="size-5 bg-gray-200 flex items-center justify-center rounded">
                                                <SecurityIcon sx={{ width: 16, height: 16, color: "yellow" }} />
                                            </div>
                                            <div className="flex h-5 items-center gap-2 bg-gray-200 rounded text-[#515152]">
                                                <div className="px-2 border-r border-r-gray-400 text-xs">1</div>
                                                <div className="flex items-center gap-1">
                                                    <CrisisAlertIcon sx={{ width: 16, height: 16, color: "#5373d4" }} />
                                                    <span className="text-xs">D365 Sales</span>
                                                </div>
                                                <div className="text-xs">+2</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-xs bg-gray-200 px-2 rounded">AI-generated content may be incorrect</div>
                                            <ThumbUpOffAltIcon sx={{ width: 16, height: 16, color: "gray" }} />
                                            <ThumbDownOffAltIcon sx={{ width: 16, height: 16, color: "gray" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 py-1 rounded-xl shadow mt-4">
                                    <CustomAccordion title="About Jane">
                                        <p className="text-sm leading-6">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni, non tempora ab ut pariatur cum nemo dolorum officiis suscipit, doloremque animi incidunt eaque ducimus impedit natus deleniti ratione blanditiis.
                                            Odit magni, non tempora ab ut pariatur cum nemo dolorum officiis suscipit, doloremque animi incidunt eaque ducimus impedit natus deleniti ratione blanditiis
                                        </p>
                                    </CustomAccordion>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-6 mt-4">
                            <div className="flex items-center gap-3">
                                <span className="text-sm whitespace-nowrap font-bold text-gray-500">Showing 1 of 9</span>
                                <span>|</span>
                                <span className="text-sm whitespace-nowrap font-bold text-[#5c48cc]">Show all</span>
                            </div>
                            <div className='w-full hidden md:flex items-center justify-center mt-2 gap-1'>
                                <div className='bg-[#5c48cc] rounded w-10  h-[4px]'></div>
                                <div className='bg-gray-300 rounded w-1  h-[4px]'></div>
                                <div className='bg-gray-300 rounded w-1  h-[4px]'></div>
                                <div className='bg-gray-300 rounded w-1  h-[4px]'></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <ThumbUpOffAltIcon sx={{ width: 16, height: 16, color: "gray" }} />
                                <ThumbDownOffAltIcon sx={{ width: 16, height: 16, color: "gray" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}