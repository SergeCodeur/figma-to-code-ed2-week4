'use client'

import { useState } from "react";
import Appointments from "@/components/Appointments";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";

const [isSidebarOpen, setIsSidebarOpen] = useState(false)
const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
}

export default function Home() {
  return (
    <div className="text-darkBlue w-full box-border">
      <div className="fixed left-0">
        <SideBar isSidebarOpen={isSidebarOpen} />
        {isSidebarOpen && <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={toggleSidebar}></div>}
      </div>
      <Header toggleSidebar={toggleSidebar} />
      <Appointments/>
    </div>
  );
}