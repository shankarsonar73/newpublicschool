import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import NavBar1 from '../components/navbar/NavBar1';
import NavBar2 from '../components/navbar/NavBar2';
import Navigation from '../components/navbar/Navigation';
import Footer from './Footer';

function ContactUs() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    {
      name: "Main Campus",
      address: "Sect. No.28, Near Ganga Nagar Bus Stop, Nigdi - Pradhikaran - Dist. Pune - 411 044",
      phone: "+91 85509 78999",
      email: "newpunepublicschool@yahoo.in"
    },
    {
      name: "Administrative Office",
      address: "School Complex, Nigdi, Pune",
      phone: "+91 89564 31990",
      email: "nppsadmin@gmail.com"
    }
  ];

  return (
    <div className="overflow-hidden w-full">
      <NavBar1 />
      <NavBar2 />
      <Navigation />

      <div 
        className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px]"
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')" }}
      >
        <h1 className="pb-3 text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
        <div className="flex items-center">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">Contact</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Locations</h2>
            
            {locations.map((location, index) => (
              <div 
                key={index}
                className="mb-6 p-4 border rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative"
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <h3 className="font-semibold text-xl mb-2">{location.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin className="mr-2 text-green-600" size={20} />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="mr-2 text-green-600" size={20} />
                  <p>{location.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-green-600" size={20} />
                  <p>{location.email}</p>
                </div>

                {hoveredLocation === index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-green-500 bg-opacity-90 text-white p-4 rounded-lg flex flex-col justify-center items-center">
                    <Clock size={40} />
                    <p className="mt-2 text-center">Office Hours: 9 AM to 4 PM</p>
                    <p className="text-sm mt-1">Monday to Saturday</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Location Map</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5253.6133205122!2d79.93526684733627!3d21.395195820966745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b053da84f47ed%3A0x468769079bfd4ed8!2sAsim%20Saraf%20Central%20Academy!5e0!3m2!1sen!2sin!4v1737391908733!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;