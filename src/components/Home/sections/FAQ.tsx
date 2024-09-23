import React from 'react'
import { FAQvalues } from '@/constants/FAQvalues'
import FAQCard from '../cards/FAQCard'
const FAQ = () => {
    return (
        <div className='my-10'>
            <h2 className='text-center uppercase text-blue text-base'>What people</h2>
            <h2 className='text-center text-2xl font-semibold my-5'>Usually asked</h2>
           <div className='flex flex-col gap-4'>
           {FAQvalues.map((val, i) => (
                <FAQCard key={i} {...val} />
            ))}
           </div>
        </div>
    )
}

export default FAQ
