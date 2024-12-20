"use client"

import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardContent from "./DashboardContent";

const DashboardSummary = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dashboard-container rounded-lg p-6 shadow-xl">
            <div>
                {/* Header Section */}
                <div className="mb-6 flex flex-col xl:flex-row xl:items-center gap-2">
                    <Image src="/copilot.svg" alt="copilot image" width={24} height={24} />
                    <h2 className="text-lg font-semibold text-gray-800">
                        Hi Mona, <span className="text-blue-600 font-bold">68%</span> of goal
                        achieved and rest can be achieved by focusing on 20 top leads.
                    </h2>
                    <div className="flex-1 xl:ml-4 flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-xs">1 month until Q4</span>
                            <span className="text-xs">68% of target achieved</span>
                        </div>
                        <div className="bg-[#f3f2f7] h-2 w-full rounded flex relative">
                            <div className="bg-[#a6caa5] w-[10%] rounded-l"></div>
                            <div className="bg-[#85b4f3] w-[5%]"></div>
                            <div className="bg-[#e2abff] w-[6%]"></div>
                            <div className="bg-[#fdca89] w-[2%]"></div>
                            <div className="absolute bottom-0 items-start right-1/3 gap-1 hidden 2xl:flex">
                                <div className="h-6 w-[1px] bg-black"></div>
                                <p className="text-xs">Target <span className="font-bold">$45 million</span></p>
                            </div>
                        </div>
                        <div className="flex gap-3 md:gap-4 flex-wrap mt-1 ">
                            <div className="flex items-center gap-1">
                                <div className="size-2 bg-[#a6caa5] rounded-full"></div>
                                <span className="text-xs">Won $18m</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="size-2 bg-[#85b4f3] rounded-full"></div>
                                <span className="text-xs">committed $8m</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="size-2 bg-[#e2abff] rounded-full"></div>
                                <span className="text-xs">Best case $7m</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="size-2 bg-[#fdca89] rounded-full"></div>
                                <span className="text-xs">Qualified $3m</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="size-2 bg-[#f3f2f7] rounded-full"></div>
                                <span className="text-xs">Leads $75m</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {isOpen ?
                            <div onClick={() => setIsOpen(false)}>
                                <KeyboardArrowDownIcon className="cursor-pointer" sx={{ width: 40, height: 40 }} />
                            </div>
                            :
                            <div onClick={() => setIsOpen(true)}>
                                <KeyboardArrowUpIcon className="cursor-pointer" sx={{ width: 40, height: 40 }} />
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[900px]" : "max-h-0"}`}
            >
                <DashboardContent />
            </div>

        </div>
    );
};

export default DashboardSummary;
