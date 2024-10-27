import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from "@/components/FeaturedWebinars"
import HeroSection from '@/components/HeroSection'


import Navbar from '@/components/Navbar'
import TestiMonialCard from "@/components/TestMonialCard"
import WhyChooseUs from "@/components/whyChooseUs"

import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WhyChooseUs/>
      <FeaturedCourses/>
       <TestiMonialCard/>
       <FeaturedWebinars/>
     
    </div>
  )
}

export default page