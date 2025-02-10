
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className="w-full lg:flex-row md:h-[584px] h-fit  bg-slate-200 mx-auto md:flex sm:flex-col mt-10">
      <div className='md:h-[584px] lg:w-[calc(100%-520px)] bg-[#2A254B] md:flex md:flex-col md:justify-around items-start lg:pt-10 px-5 md:p-10 xl:p-0'>

        <div className='xl:w-[513px] lg:h-[190px] md:h-fit flex flex-col md:gap-[41px] xl:ml-[60px] mb-10'>
          <p className='text-[2rem] lg:text-[2rem] font-[400] leading-[44.8px] clashDisplay text-[#FFFFFF] tracking-wider mt-10 lg:mt-0 md:text-[3rem]'>The furniture brand for the future, with timeless designs</p>
          <Link href='/'>
            <button className='hidden md:block w-[170px] h-[56px] bg-[#F9F9F926] text-[#FFFFFF] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] '>View Collection</button>
          </Link>
        </div>
        <div className='xl:w-[602px] w-full h- md:h-fit break-words xl:ml-[60px]'>
          <p className='text-[18px] lg:text-[18px] satoshi text-[#FFFFFF] font-[400] leading-[27px] break-words tracking-wider] md:text-2xl'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
          <Link href='/'>
            <button className='mt-10 mb-8 md:hidden md:w-[170px] w-full h-[56px] bg-[#F9F9F926] text-[#FFFFFF] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] md:text-[3rem] lg:text-[1rem]'>
              View Collections
            </button>
          </Link>
        </div>
      </div>

      {/* image */}
      <div className='xl:w-[520px] md:w-auto hidden xl:h-[584px] lg:block'>
        <Image src={'/images/heroright.png'} alt='rightside' width={520} height={584} />
      </div>

    </main>
  )
}

export default Hero
