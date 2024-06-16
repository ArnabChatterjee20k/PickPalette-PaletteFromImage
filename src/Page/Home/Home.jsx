import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features';
import ImageSection from './components/ImageSection';
import Testimonial from './components/Testimonial';
import SubscriptionBanner from './components/SubscriptionBanner';
import Bars from './components/Bars';
import './Home.css';

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <ImageSection/>
      <Testimonial/>
      <SubscriptionBanner/>
      <Bars className={"rotate-180 pt-6"}/>
    </>
  )
}
