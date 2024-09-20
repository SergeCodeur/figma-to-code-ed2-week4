'use client'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'

const Header = ({ toggleSidebar }:{ toggleSidebar : () => void }) => {
  return (
    <div className='md:ml-44 ml-0 flex items-center justify-between px-4 py-2 border-b border-gray'>
      <button className='h-10 w-12 items-center justify-center rounded-xl border border-gray lg:hidden flex' onClick={toggleSidebar}>
      <Image src='/icons/cancel.svg' alt='icon logo' className='cursor-pointer' width={20} height={20} />
      </button>
      <h1 className=''>Welcome <span className='font-bold'>John Doe</span></h1>
      <div className='flex items-center gap-2'>
        <Image src='/icons/notification.svg' alt='icon logo' width={20} height={20} />
        <Image src='/images/user.png' alt='user icon' width={40} height={40} />
      </div>
    </div>
  )
}

export default Header;
