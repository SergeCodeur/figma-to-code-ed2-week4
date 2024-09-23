import React from 'react'
import Image from 'next/image'
const Brands = () => {
  return (
    <div className='container my-10 grid md:grid-cols-4 grid-cols-2 gap-8 items-center'>
       <Image
            src={"/images/brand_1.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_2.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_3.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_4.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_5.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_6.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          /> 
            <Image
            src={"/images/brand_7.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
            <Image
            src={"/images/brand_8.png"}
            alt="About Us"
            height={100}
            width={300}
            className=""
          />
    </div>
  )
}

export default Brands
