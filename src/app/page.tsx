// import Image from "next/image";

import DashboardSummary from "./Components/DashboardSummary";
import HeaderBar from "./Components/HeaderBar";
import LeftSideBar from "./Components/LeftSideBar";
import Navbar from "./Components/Navbar";
import TableSection from "./Components/TableSection";


export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <LeftSideBar />
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
    </div>
  );
}
