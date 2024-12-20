"use client"

import { useState } from "react";
import DashboardSummary from "./Components/DashboardSummary";
import HeaderBar from "./Components/HeaderBar";
import LeftSideBar from "./Components/LeftSideBar";
import Navbar from "./Components/Navbar";
import TableSection from "./Components/TableSection";
import AgentModal from "./Components/AgentModal";
import MobileMenu from "./Components/MobileMenu";


export default function Home() {
  const [isAgentSkillModalOpen, setIsAgentSkillModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="h-screen">
      <Navbar openModal={() => setIsMobileMenuOpen(prev => !prev)} />
      <div className="flex">
        <div className="hidden md:block">
          <LeftSideBar openModal={() => setIsAgentSkillModalOpen(true)} />
        </div>
        <div className="flex-1 flex flex-col gap-6 py-6 md:p-6 bg-white md:bg-[#f5f5f5] h-[calc(100vh-40px)] overflow-scroll">
          <div className="px-4 md:px-0">
            <HeaderBar />
          </div>
          <div className="px-4 md:px-0">
            <DashboardSummary />
          </div>
          <TableSection />
        </div>
      </div>

      <AgentModal isOpen={isAgentSkillModalOpen} onClose={() => setIsAgentSkillModalOpen(false)} />
      <div
        className={`fixed h-screen z-50 translate-y-0 top-[40px] left-0 w-full bg-white lg:hidden md:w-[500px] transition-transform duration-500 ease-in-out text-black ${isMobileMenuOpen
          ? "transform translate-x-0"
          : "transform -translate-x-full"
          }`}>
        <MobileMenu
          openModal={() => setIsAgentSkillModalOpen(true)}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </div>
  );
}
