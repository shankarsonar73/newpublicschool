/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer';
import logo from '../assets/ASCA.png';
import ExploreFuture from '../components/ExploreFuture';
import NavBar1 from '../components/navbar/NavBar1'
import NavBar2 from '../components/navbar/NavBar2'
import Navigation from '../components/navbar/Navigation'
import SportsGallery from '../components/SportsGallery';

function Activity() {
  return (
    <div className='overflow-hidden'>
    <NavBar1/>
    <NavBar2/>
    <Navigation/>
      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
        <p className="pb-3 text-3xl md:text-4xl font-bold text-white">Activity</p>
        <div className="flex">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">Activity</p>
        </div>
      </div>

      <SportsGallery/>
      <ExploreFuture/>

      <Footer />
    </div>
  )
}

export default Activity