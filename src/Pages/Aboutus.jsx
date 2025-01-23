import React from 'react'

function Aboutus() {
  return (
    <div>
      
    </div>
  )
}

export default Aboutus


import React from 'react'
import CardSection from '../components/CardSection'
import ExploreFuture from '../components/ExploreFuture'
import ImageSliderWithMarquee from '../components/ImageSliderWithMarquee'
import MeetUp from '../components/MeetUp'
import ServiceGrid from '../components/ServiceGrid'
import TestimonialSection from '../components/TestimonialSection'
import VideoFeature from '../components/VideoFeature'
import WelcomeSection from '../components/WelcomeSection'
import NavBar1 from '../components/navbar/NavBar1'
import NavBar2 from '../components/navbar/NavBar2'
import Navigation from '../components/navbar/Navigation'
import Home from '../components/Home'
import Footer from '../components/Footer'

function Landingpage() {
  return (
    <div className='w-full'>
    <Home/>
    <NavBar1/>
    <NavBar2/>
    <Navigation/>
    <ImageSliderWithMarquee/>
    <ServiceGrid />
    <WelcomeSection />
    <CardSection/>
    <VideoFeature/>
    <MeetUp />
    <ExploreFuture />
    <TestimonialSection />
    <Footer/>
    
    {/* <VideoFeature /> */}
    
  </div>
  )
}

export default Landingpage
