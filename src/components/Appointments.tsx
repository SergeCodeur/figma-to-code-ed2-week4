'use client'

import React, {useState} from 'react'
import CustomButton from './CustomButton'
import AppointmentCard from './AppointmentCard'
const Appointments = () => {
 
  return (
    <div className='md:ml-52 ml-5 md:m-10 m-5'>
      <div className='flex items-center justify-between'>
        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold'>Appointment</h1>
        <CustomButton
          title='Jun 16 - Jun 12'
          icon='calendar'
          containerStyles='flex items-center gap-1 rounded-xl bg-blue p-2 bg-opacity-20'
        />
      </div>
      <div>
        <h2 className='text-center my-2'>Jun 16, 2024</h2>
        <div className='grid md:grid-cols-2 lg:gap-8 gap-4 grid-cols-1'>
          <AppointmentCard
            image='user'
            name='John Wilson'
            date='08 AM - 10 AM'
            raison='Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues.'
          />
          <AppointmentCard
            image='user'
            name='John Wilson'
            date='08 AM - 10 AM'
            raison='Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues.'
          />
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-center my-2'>Jun 12, 2024</h2>
        <div className='grid  md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4'>
          <AppointmentCard
            image='user'
            name='John Wilson'
            date='08 AM - 10 AM'
            raison='Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues.'
          />
          <AppointmentCard
            image='user'
            name='John Wilson'
            date='08 AM - 10 AM'
            raison='Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues.'
          />
        </div>
      </div>
    </div>
  )
}

export default Appointments
