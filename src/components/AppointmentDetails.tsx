'use client'
import Image from 'next/image';
import React from 'react';

const AppointmentDetails = ({ image, name, adress, interest, date, problem, onClose }: AppointmentDetailsProps) => {
  return (
    <div className='fixed top-0 bottom-0 right-0 w-full h-screen bg-black bg-opacity-15 z-10 transition-opacity duration-500 ease-in-out opacity-100'>
      <div className='bg-white absolute right-0 max-w-96 h-screen shadow-lg flex flex-col justify-between overflow-y-auto custom-scrollbar'>
        <div>
          <div className='flex items-center justify-between border-b border-gray p-4'>
            <h1 className='text-2xl font-bold'>Appointment details</h1>
            <Image src='/icons/cancel.svg' alt='icon logo' className='cursor-pointer' onClick={onClose} width={20} height={20} />
          </div>
          <div className='rounded-xl m-2 flex flex-col gap-2 border border-gray'>
            <h2 className='text-center bg-blue p-2 bg-opacity-20 rounded-tl-xl rounded-tr-xl uppercase text-darkBlue'>Patient information</h2>
            <div className='flex items-center gap-2 p-2'>
              <Image src={`/images/${image}.png`} alt={name} width={50} height={50} />
              <div className='flex flex-col'>
                <span className='font-bold'>{name}</span>
                <span className='font-light'>{adress}</span>
              </div>
            </div>
          </div>
          <div className='rounded-xl m-2 flex flex-col gap-2 border border-gray'>
            <h2 className='text-center bg-blue p-2 bg-opacity-20 rounded-tl-xl rounded-tr-xl uppercase text-darkBlue'>Appointment details</h2>
            <div className='flex flex-col gap-2 p-2'>
              <div className='flex flex-col'>
                <h3 className='text-darkGray'>Date</h3>
                <div className='text-darkBlue'>{date}</div>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-darkGray'>Area of interest</h3>
                <div className='text-darkBlue'>{interest}</div>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-darkGray'>Problem</h3>
                <div className='text-darkBlue'>{problem}</div>
              </div>
            </div>
          </div>
          <div className='rounded-xl m-2 flex flex-col gap-2 border border-gray'>
            <h2 className='text-center bg-blue p-2 bg-opacity-20 rounded-tl-xl rounded-tr-xl uppercase text-darkBlue'>Documentation</h2>
            <div className='flex items-center flex-col gap-2 p-4'>
              <button className='border p-2 border-gray flex items-center justify-between w-full rounded-xl'>
                <div className='flex items-center gap-2'>
                  <Image src='/icons/file.svg' alt='icon logo' className='cursor-pointer' width={20} height={20} />
                  <span>Medicalcheck-up.pdf</span>
                </div>
                <Image src='/icons/download-square.svg' alt='icon logo' className='cursor-pointer' width={20} height={20} />
              </button>
              <button className='border p-2 border-gray flex items-center justify-between w-full rounded-xl'>
                <div className='flex items-center gap-2'>
                  <Image src='/icons/file.svg' alt='icon logo' className='cursor-pointer' width={20} height={20} />
                  <span>Control-last-month.pdf</span>
                </div>
                <Image src='/icons/download-square.svg' alt='icon logo' className='cursor-pointer' width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between gap-2 p-4'>
        <button className='border lg:p-2 p-1 rounded-md'>
          Decline appointment
        </button>
        <button className='lg:p-2 p-1 text-white bg-gradient-to-r from-blue to-darkBlue rounded-md'>
          Accept appointment
        </button>
      </div>
      </div>
    </div >
  );
};

export default AppointmentDetails;
