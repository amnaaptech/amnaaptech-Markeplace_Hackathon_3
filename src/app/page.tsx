"use client"
import React from 'react'
import Hero from './Hero/Hero';
import Brand from './Hero/Features';
import Ceramics from './Hero/Ceramics';
import Ourproduct from './Hero/Our_product';
import News from './Hero/Newlatter';
import Get from './Hero/Getintouch';

const page = () => {
  return (
    <>
   
    <div className="container mx-auto">
      <Hero/>
      <Brand></Brand>
   <Ceramics></Ceramics>
   <Ourproduct></Ourproduct>
   <News></News>
   <Get></Get>

    </div>
  </>
  )
}

export default page;


