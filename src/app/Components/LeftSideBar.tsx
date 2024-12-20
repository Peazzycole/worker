"use client"

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AgentModal from "./AgentModal";

const LeftSideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="bg-gray-100 pb-6 w-full shadow-lg h-[calc(100vh-40px)] border-r-2 border-r-gray-200 overflow-scroll">
            <div className="px-4 py-3  mb-1">
                <div onClick={() => setIsOpen(prev => !prev)}>
                    <MenuIcon className="cursor-pointer" />
                </div>
            </div>
            {/* Menu Items */}
            <nav className={`${isOpen ? "" : "hidden"}`}>
                <ul className="space-y-2  overflow-hidden">
                    {/* Home */}
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <HomeOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Home</span>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <div className="flex">
                            <AccessTimeOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                            <span className="text-sm">Recent</span>
                        </div>
                        <KeyboardArrowDownIcon sx={{ color: "gray" }} />
                    </li>
                    <li className="flex items-center  justify-between px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <div className="flex">
                            <PushPinOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                            <span className="text-sm">Pinned</span>
                        </div>
                        <KeyboardArrowDownIcon sx={{ color: "gray" }} />
                    </li>
                    <li
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <SupportAgentIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Agent Skill</span>
                    </li>

                    {/* My Work */}
                    <li className="px-4 py-2 font-semibold text-sm text-gray-500">My Work</li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <RocketLaunchOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Sales accelerator</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <DashboardOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Dashboards</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <EventNoteOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Activities</span>
                    </li>

                    {/* Customers */}
                    <li className="px-4 py-2 font-semibold text-sm text-gray-500">Customers</li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <AccountBoxOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Accounts</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <ContactsOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Contacts</span>
                    </li>

                    {/* Sales */}
                    <li className="px-4 py-2 font-semibold text-sm text-gray-500">Sales</li>
                    <li className="flex items-center px-2 py-2 text-gray-700 bg-white cursor-pointer">
                        <div className="w-1 bg-blue-600 h-4 mr-1"></div>
                        <PhoneInTalkIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Leads</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <WorkOutlineOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Opportunities</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <AccountBoxOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Competitors</span>
                    </li>

                    {/* Collateral */}
                    <li className="px-4 py-2 font-semibold text-sm text-gray-500">Collateral</li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <AttachMoneyOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Quotes</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <DescriptionOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Orders</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <Inventory2OutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Invoices</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <ListAltOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Products</span>
                    </li>

                    {/* Marketing */}
                    <li className="px-4 py-2 font-semibold text-sm text-gray-500">Marketing</li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <CampaignOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Marketing lists</span>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                        <CampaignOutlinedIcon className="mr-3" sx={{ width: 20, height: 20 }} />
                        <span className="text-sm">Quick campaigns</span>
                    </li>

                    {/* Performance */}
                    <div>
                        <li className="px-4 py-2 font-semibold text-sm text-gray-500">Performance</li>
                        <div className="border-t border-t-gray-200 flex justify-between items-center">
                            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-white cursor-pointer">
                                <div className="bg-purple-700 size-6 flex items-center justify-center text-sm font-bold text-white rounded-sm">S</div>
                                <span className="text-sm font-medium ml-2">Sales</span>
                            </li>
                            <div className="flex flex-col pr-2">
                                <KeyboardArrowUpIcon sx={{ width: 16, height: 16 }} />
                                <KeyboardArrowDownIcon sx={{ width: 16, height: 16 }} />
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>

            <AgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default LeftSideBar;
