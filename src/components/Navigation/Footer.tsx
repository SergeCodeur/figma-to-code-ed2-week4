import { footerLinks } from '@/constants/FooterLinks'
import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='container grid grid-col-4'>
            {footerLinks.map((val, i) => (
                <div className='flex flex-col gap-3' >
                    <h3>{val.title}</h3>
                    <div className='flex flex-col gap-1'>
                        <Link href={'#'}>
                            <p>{val.links[i].name}</p>
                        </Link>
                        <Link href={'#'}>  
                            <p>{val.links[i].link}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Footer
