'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import AppointmentDetails from './AppointmentDetails'; // Import the new component
import { AppointmentCardProps } from '@/types/AppointmentCardProps';

const AppointmentCard = ({ image, name, date, raison }: AppointmentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='border border-gray flex gap-2 flex-col rounded-xl p-6 relative'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <div className='flex items-center gap-4'>
          <Image src={`/images/${image}.png`} alt={name} width={50} height={50} />
          <div className='flex flex-col'>
            <span className='font-bold'>{name}</span>
            <span className='font-light'>{date}</span>
          </div>
        </div>
        <button
          className='rounded-2xl py-1 px-2 bg-gray font-semibold text-sm'
          onClick={toggleDetails}
        >
          View details
        </button>
      </div>

      <div className='lg:pr-6 pr-3 text-justify'>
        <span className='font-semibold'>Raison: </span>
        <span>{raison}</span>
      </div>

      <div className='flex items-center justify-between gap-2'>
        <button className='border lg:p-2 p-1 rounded-md'>
          Decline appointment
        </button>
        <button className='lg:p-2 p-1 text-white bg-gradient-to-r from-blue to-darkBlue rounded-md'>
          Accept appointment
        </button>
      </div>

      {/* Display AppointmentDetails component */}
      {showDetails && (
        <AppointmentDetails
          image='user'
          name={name}
          adress='Preston Inglewood, Maine 98380'
          date='Monday Jun 14, 2024 on 08 AM - 10 AM'
          interest='Diabetes Control Appointment'
          problem='Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.'
          onClose={toggleDetails} // Pass the close function as a prop
        />
      )}
    </div>
  );
};

export default AppointmentCard;
