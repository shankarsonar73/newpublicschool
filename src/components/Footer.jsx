/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
      <div className='w-full h-auto md:h-80 p-4 md:p-12'>
        <div className='h-full flex flex-col md:flex-row gap-6 md:gap-0'>
            <div className='w-full md:w-4/12 pl-3 pr-3'>
                <div className="h-24 md:h-2/6 flex items-center">
                    <img 
                        alt="School Logo" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoVA7OT_nEi9-0yAm3feZb3tadtSMJ7cGug&s" 
                        className="h-full object-contain rounded-md"
                    />
                </div>

                <div className='h-auto md:h-3/6 text-base tracking-wide font-medium mt-4 md:mt-0'>
                    <p>New Pune Public School is the perfect</p> 
                    <p>location to deliver quality education. The</p> 
                    <p>school provides a clean and conducive</p> 
                    <p>atmosphere for the children to learn.</p> 
                </div>
                <div className='flex h-auto md:h-1/6 gap-4 mt-4 md:mt-0'>
                    <FontAwesomeIcon className='cursor-pointer' icon={faFacebook} size="xl" style={{ color: "#1877F2" }} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faInstagram} size="xl" style={{ color: "#E4405F" }} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faLinkedin} size="xl" style={{ color: "#0077B5" }} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faYoutube} size="xl" style={{ color: "#FF0000" }} />
                </div>
            </div>
        
            <div className='w-full md:w-3/12 pl-3 pr-3 py-1'>
                <div className='flex text-lg font-semibold'>Sitemap</div>
                <div className='flex'>
                    <div className="pt-3 w-1/2">
                    <div className="pt-2 flex items-center gap-2 font-medium text-sm md:text-base transition-all duration-1000">
                        <span>›</span>
                        <span className="hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer">About</span>
                    </div>

                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Circular</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Activities</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Achievements</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Competitions</span>
                        </div>
                    </div>
                    <div className="pt-3 w-1/2">
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Infrastructure</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >CBSE Curriculum</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Teaching Staff</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Events</span>
                        </div>
                        <div className="pt-2 flex items-center gap-2 font-medium text-base">
                            <span>›</span>
                            <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >PYA</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-full md:w-2/12 pl-3 pr-3 py-1'>
              <div className='flex text-lg font-semibold'>Support</div>
                <div className='pt-2'>
                    <div className="pt-2 flex items-center gap-2 font-medium text-base">
                        <span>›</span>
                        <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Admission</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2 font-medium text-base">
                        <span>›</span>
                        <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Support</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2 font-medium text-base">
                        <span>›</span>
                        <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Transfer Certificate</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2 font-medium text-base">
                        <span>›</span>
                        <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >Download ERP App</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2 font-medium text-base">
                        <span>›</span>
                        <span className='hover:text-yellow-500 hover:translate-x-1 transition-all duration-1000 cursor-pointer' >ERP User Manual</span>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-3/12 pl-3 pr-3 py-1'>
               <div className='text-lg font-semibold'>Contact Us</div>
               <div className='mt-3 flex items-center gap-4'>
                   <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
                   <h1 className="text-normal font-base">
                        Sect. No.28, Near Ganga Nagar Bus Stop, Nigdi - Pradhikaran. Pune, 411 044.
                   </h1>
               </div>
               <div className='mt-3 flex items-center gap-4'>
                   <FontAwesomeIcon icon={faPhone} />
                   <h1 className="text-normal font-base">
                   (020) 2765 9945
                   </h1>
               </div>
               <div className='mt-3 flex items-center gap-4'>
                   <FontAwesomeIcon icon={faEnvelope} />
                   <h1 className="text-normal font-base">
                   xyz@gmail.com
                   </h1>
               </div>
            </div>
        </div>
      </div>
      <div className='bg-zinc-800 flex flex-col md:flex-row md:space-x-[500px] h-auto md:h-16 w-full p-5'>
        <div className='text-center md:text-left md:ml-24 text-white font-semibold mb-2 md:mb-0'>
           Designed by KAT Software Labs
        </div>
        <div className='text-center md:text-left text-zinc-500'>
            Copyright © 2025 New Pune Public School. All Rights Reserve
        </div>
      </div>
    </div>
  )
}

export default Footer