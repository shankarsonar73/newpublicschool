/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from './Footer';
import logo from '../assets/ASCA.png';
import ExploreFuture from './ExploreFuture';
import NavBar1 from '../components/navbar/NavBar1'
import NavBar2 from '../components/navbar/NavBar2'
import Navigation from '../components/navbar/Navigation'

function About() {
  return (
    <div className='overflow-hidden'>
    <NavBar1/>
    <NavBar2/>
    <Navigation/>
      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
        <p className="pb-3 text-3xl md:text-4xl font-bold text-white">About Us</p>
        <div className="flex">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">About Us</p>
        </div>
      </div>

      <div className='min-h-fit w-full px-4 md:px-14 py-[80px]'>
        <div>
          <div className="flex items-center justify-center">
            <img
              alt="college logo"
              src={logo}
              className="w-[70px] h-[70px] object-contain rounded-lg"
            />
          </div>
          <div className='font-bold text-2xl md:text-3xl pt-5 text-center'>
            Welcome to New Pune Public School
          </div>
          <div className="flex flex-col items-center justify-center pt-8 px-4 md:px-0">
            <p className="text-center text-zinc-700 font-medium">
              New Pune Public School is undoubtedly an exemplary institution dedicated to providing high-quality education and fostering holistic development in its students. Its 
              commitment to creating an environment that is conducive to learning is evident through
              various aspects that define the school's ethos.
            </p>
            <p className="text-center text-zinc-700 font-medium mt-4">
              New Pune Public School also ensures that its students are aware of national and global issues. In an increasingly interconnected world, it is crucial for young minds to have a
              global perspective. By keeping students informed about both local and international affairs, the school equips them to become informed, responsible citizens who can
              contribute positively to society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-10">
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl text-gray-300 font-bold">01</h1>
            <h2 className="text-xl font-bold text-black mt-2">Why Choose us</h2>
            <p className="text-gray-600 mt-4">
              At New Pune Public School, we believe that the foundation of a child's
              future begins with the right choice of education.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl text-gray-300 font-bold">02</h1>
            <h2 className="text-xl font-bold text-black mt-2">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              Our mission is to provide a well-rounded education that prepares students
              for success.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl text-gray-300 font-bold">03</h1>
            <h2 className="text-xl font-bold text-black mt-2">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              Our vision at New Pune Public School is to become a beacon of excellence
              in education.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full py-[120px] px-4 md:px-16 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-r5-HQYQrEReG1jO9WudGSBtrkAopVn3og&s')]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="pb-3 text-4xl text-yellow-400 font-bold">20,000+</p>
            <p className="font-semibold text-white">Students enrolled</p>
          </div>
          <div>
            <p className="pb-3 text-4xl text-yellow-400 font-bold">15:1</p>
            <p className="font-semibold text-white">Student/Teacher Ratio</p>
          </div>
          <div>
            <p className="pb-3 text-4xl text-yellow-400 font-bold">100+</p>
            <p className="font-semibold text-white">Total Faculties</p>
          </div>
          <div>
            <p className="pb-3 text-4xl text-yellow-400 font-bold">2000</p>
            <p className="font-semibold text-white">Year of Establishment</p>
          </div>
        </div>
      </div>

      <div className="min-h-fit w-full p-4 md:p-14">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2 text-zinc-700">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Empowering Tomorrow's Leaders</h1>
              <p className="leading-relaxed mb-4 font-medium">
                At New Pune Public School, our vision is to be more than just an
                educational institution; we aim to be a beacon of excellence that shapes
                the leaders of tomorrow. Our dedicated team of educators and staff work
                tirelessly to create an environment that fosters lifelong learning,
                innovation, and social responsibility.
              </p>
              <p className="leading-relaxed font-medium">
                We firmly believe that a school should be more than just a place to
                acquire knowledge; it should be a space for personal and collective
                growth. Our emphasis on critical thinking equips students with the
                skills to tackle complex challenges with creativity and confidence.
                Furthermore, our commitment to global awareness ensures that our
                students are not just academically prepared but also socially conscious
                and well-rounded individuals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://www.asimacademy.com/gallery/2020/adani-power-plant-visit-03-s.jpg"
                alt="Empowering Leaders"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="w-full md:w-1/2 text-zinc-700">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Empowering Tomorrow's Leaders</h1>
              <p className="leading-relaxed mb-4 font-medium">
                At New Pune Public School, our vision is to be more than just an
                educational institution; we aim to be a beacon of excellence that shapes
                the leaders of tomorrow. Our dedicated team of educators and staff work
                tirelessly to create an environment that fosters lifelong learning,
                innovation, and social responsibility.
              </p>
              <p className="leading-relaxed font-medium">
                We firmly believe that a school should be more than just a place to
                acquire knowledge; it should be a space for personal and collective
                growth. Our emphasis on critical thinking equips students with the
                skills to tackle complex challenges with creativity and confidence.
                Furthermore, our commitment to global awareness ensures that our
                students are not just academically prepared but also socially conscious
                and well-rounded individuals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://www.asimacademy.com/gallery/06.jpg"
                alt="Empowering Leaders"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2 text-zinc-700">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Empowering Tomorrow's Leaders</h1>
              <p className="leading-relaxed mb-4 font-medium">
                At New Pune Public School, our vision is to be more than just an
                educational institution; we aim to be a beacon of excellence that shapes
                the leaders of tomorrow. Our dedicated team of educators and staff work
                tirelessly to create an environment that fosters lifelong learning,
                innovation, and social responsibility.
              </p>
              <p className="leading-relaxed font-medium">
                We firmly believe that a school should be more than just a place to
                acquire knowledge; it should be a space for personal and collective
                growth. Our emphasis on critical thinking equips students with the
                skills to tackle complex challenges with creativity and confidence.
                Furthermore, our commitment to global awareness ensures that our
                students are not just academically prepared but also socially conscious
                and well-rounded individuals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZZsLMtwN19wS2INP5qaGeP4HfSgbmIEeuw&s"
                alt="Empowering Leaders"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <ExploreFuture/>

      <Footer />
    </div>
  )
}

export default About