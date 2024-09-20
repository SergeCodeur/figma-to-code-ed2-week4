'use client'

import { useState } from "react";
import Appointments from "@/components/Appointments";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
 
export default function Home() {
  return (
    <div className="text-darkBlue w-full box-border">
      <div className="fixed left-0">
        <SideBar />
       
      </div>
      <Header/>
      <Appointments/>
    </div>
  );
}