"use client";

import React, { useState } from "react";
import { SearchInput } from "./Ui/SearchInput";
import { users } from "../data";
import Checkbox from "@mui/material/Checkbox";
import UserModal from "./UserModal";

export default function TableSection() {
    const [value, setValue] = useState("");
    const [checkedUsers, setCheckedUsers] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false)

    // Handle checkbox toggle
    const handleCheck = (userName: string) => {
        setCheckedUsers((prev) =>
            prev.includes(userName)
                ? prev.filter((name) => name !== userName)
                : [...prev, userName]
        );
    };

    return (
        <div className="bg-white rounded-sm py-4 md:shadow-2xl">
            <div className="w-full md:w-fit px-6 pb-4">
                <SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>
                <div className={`overflow-x-auto ${users.length > 0 && "tableScroll"}`}>
                    <table className="min-w-full border-collapse md:px-6">
                        <thead className="border-b border-b-eveGrey-200">
                            <tr>
                                <th className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400">
                                    Name
                                </th>
                                <th className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap">
                                    Topic
                                </th>
                                <th className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap">
                                    Status reason
                                </th>
                                <th className="py-3 pr-6 px-6 text-left text-xs font-bold text-eveGrey-400 whitespace-nowrap">
                                    Create on
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr
                                    className={`${i !== users.length && "border-b border-b-eveGrey-200"
                                        }`}
                                    key={i}
                                >
                                    <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-medium text-blue-600">
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                checked={checkedUsers.includes(user.name)}
                                                onChange={() => handleCheck(user.name)}
                                            />
                                            <p onClick={() => setIsOpen(true)} className="cursor-pointer">{user.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-normal text-eveGrey-500">
                                        {user.topic}
                                    </td>
                                    <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-medium text-eveGrey-500">
                                        {user.statusReason}
                                    </td>
                                    <td className="py-1 pr-6 px-6 whitespace-nowrap text-xs font-normal text-eveGrey-500">
                                        {user.createdOn}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            <UserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}
