import React from "react";
import { Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PieChartIcon from '@mui/icons-material/PieChart';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BookIcon from '@mui/icons-material/Book';


const HeaderBar = () => {
    return (
        <div className="flex items-center rounded-md md:justify-between bg-white shadow-md px-4 py-2 overflow-auto">
            {/* Left Dropdown */}
            <div className="flex items-center space-x-2 mr-4 md:mr-0">
                <select className="bg-transparent cursor-pointer rounded px-3 py-1 font-bold text-sm text-gray-700 focus:outline-none focus:none">
                    <option value="myOpenLeads">My open leads</option>
                    {/* Add more options if needed */}
                </select>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-3">
                <div className="flex items-center space-x-4">
                    <Tooltip title="Show chart">
                        <div className="flex gap-1 cursor-pointer items-center ">
                            <ShowChartIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Show chart</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="Focused view">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <ViewListIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Focused view</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="New">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <AddIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">New</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="Refresh">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <RefreshIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Refresh</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="Collaborate">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <GroupIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Collaborate</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <DeleteIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Delete</span>
                        </div>
                    </Tooltip>

                    <Tooltip title="Smart data">
                        <div className="flex gap-1 cursor-pointer items-center">
                            <SettingsIcon sx={{ width: 20, height: 20 }} />
                            <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Show chart</span>
                        </div>
                    </Tooltip>


                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <span className="text-gray-200">|</span>
                        <KeyboardArrowDownIcon sx={{ width: 20, height: 20 }} />
                    </div>
                    <div>
                        <MoreVertIcon sx={{ width: 20, height: 20 }} />
                    </div>
                    <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
                        <PieChartIcon sx={{ width: 20, height: 20 }} />
                        <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Smart data</span>
                    </div>
                    <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
                        <FilterListIcon sx={{ width: 20, height: 20 }} />
                        <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Edit filters</span>
                    </div>
                    <div className="flex items-center border border-gray-200 py-1 px-2 rounded">
                        <EditNoteIcon sx={{ width: 20, height: 20 }} />
                        <span className="text-xs text-[#797979] font-bold whitespace-nowrap">Edit columns</span>
                    </div>
                    <div className="bg-[#315bc8] flex items-center gap-1 py-1 px-2 rounded">
                        <BookIcon sx={{ width: 20, height: 20, color: "white" }} />
                        <div className="border-l border-l-white cursor-pointer">
                            <KeyboardArrowDownIcon sx={{ width: 20, height: 20, color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;