'use client'
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const SideBar = ()  => {
  return (
    <div className='w-44 md:flex hidden flex-col justify-between h-screen border-r border-gray p-4'>
        <div>
          <div className='flex items-center justify-center'>
            <Image src='./icons/logo.svg' alt='icon logo' width={50} height={50} />
          </div>
          <div className='flex flex-col gap-2'>
            <CustomButton
              title='Dashboard'
              icon='analytics'
              containerStyles='flex flex-start items-center gap-2 hover:bg-darkBlue hover:bg-opacity-20 transition-all duration-100 p-1 rounded'
            />
            <CustomButton
              title='Patient List'
              icon='user-group'
              containerStyles='flex flex-start items-center gap-2 hover:bg-darkBlue hover:bg-opacity-20 transition-all duration-100 p-1 rounded-md'
            />
            <CustomButton
              title='Appointment'
              icon='calendar'
              containerStyles='flex flex-start items-center gap-2 hover:bg-darkBlue hover:bg-opacity-20 transition-all duration-100 p-1 rounded-md'
            />
          </div>
        </div>
        <div>
          <CustomButton
            title='Setting'
            icon='setting'
            containerStyles='flex flex-start items-center gap-2 border border-gray w-full rounded-md p-1'
          />
          <CustomButton
            title='Logout'
            icon='logout-square'
            containerStyles='flex flex-start items-center gap-2 border border-gray w-full rounded-md p-1 mt-2'
          />
        </div>
      </div>
  );
};

export default SideBar;
