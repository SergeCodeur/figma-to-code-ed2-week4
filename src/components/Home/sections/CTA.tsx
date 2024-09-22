 
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ChevronRight } from '@/assets/icons'
const CTA = () => {
  return (
    <div className='flex items-center justify-between container my-10'>
      <div className='bg-cta-bg h-96 container relative'>
        <div className='max-w-lg mt-14 flex flex-col gap-4'>
          <h2 className='text-white font-bold text-5xl'>Don’t Let Your Health Take a Backseat!</h2>
          <p>Schedule an appointment of of our experienced medical profesioonal today</p>
          <Link
					href="/sign-up"
					className="bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3 max-w-44 flex justify-center items-center gap-2.5"
				>
					Book now <ChevronRight />
				</Link>
        </div>
          <Image
            src={"/images/about-us-bottom.webp"}
            alt="About Us"
            height={350}
            width={400}
            className="absolute -top-20 right-10"
          />
      </div>

    </div>
  )
}

export default CTA
