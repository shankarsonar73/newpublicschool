import React, { useState } from "react";
import Footer from "../../components/Footer";
import logo from "../../assets/ASCA.png";
import ExploreFuture from "../../components/ExploreFuture";
import NavBar1 from "../../components/navbar/NavBar1";
import NavBar2 from "../../components/navbar/NavBar2";
import Navigation from "../../components/navbar/Navigation";
import { X, Filter } from "lucide-react";
import * as images from "../../assets/images";


const eventData = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "March 15-16, 2024",
      location: "San Francisco, CA",
      category: "Technology",
      description: "Annual gathering of tech innovators and industry leaders discussing emerging technologies and future trends.",
      image: images.img1,
    },
    {
      id: 2,
      title: "Global Climate Conference",
      date: "April 22-23, 2024",
      location: "Copenhagen, Denmark",
      category: "Environment",
      description: "International conference addressing climate change strategies and sustainable development goals.",
      image: images.img2,
    },
    {
      id: 3,
      title: "AI Ethics Symposium",
      date: "May 10, 2024",
      location: "Boston, MA",
      category: "Technology",
      description: "Exploring ethical considerations and responsible development of artificial intelligence.",
      image: images.img3,
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "June 15, 2024",
      location: "New York, NY",
      category: "Entrepreneurship",
      description: "Top startups compete for funding and recognition in this high-stakes pitch event.",
      image: images.img4,
    },
    {
      id: 5,
      title: "Global Health Summit",
      date: "July 20-22, 2024",
      location: "Geneva, Switzerland",
      category: "Healthcare",
      description: "International conference addressing global health challenges and innovative medical solutions.",
      image: images.img5,
    },
    {
      id: 6,
      title: "Renewable Energy Expo",
      date: "August 5-7, 2024",
      location: "Berlin, Germany",
      category: "Environment",
      description: "Showcasing latest innovations in solar, wind, and sustainable energy technologies.",
      image: images.img6,
    },
    {
      id: 7,
      title: "Women in Leadership Forum",
      date: "September 12, 2024",
      location: "London, UK",
      category: "Professional Development",
      description: "Empowering women leaders through networking, mentorship, and inspirational talks.",
      image: images.img7,
    },
    {
      id: 8,
      title: "Cybersecurity Conference",
      date: "October 8-10, 2024",
      location: "Singapore",
      category: "Technology",
      description: "Comprehensive exploration of emerging cybersecurity threats and defense strategies.",
      image: images.img8,
    },
    {
      id: 9,
      title: "Global Education Summit",
      date: "November 15-17, 2024",
      location: "Dubai, UAE",
      category: "Education",
      description: "Discussing innovative approaches to global education and learning technologies.",
      image: images.img9,
    },
    {
      id: 10,
      title: "Space Exploration Symposium",
      date: "December 5-6, 2024",
      location: "Houston, TX",
      category: "Science",
      description: "Cutting-edge discussions on space exploration, Mars missions, and future cosmic endeavors.",
      image: images.img10,
    },
    {
      id: 11,
      title: "Digital Marketing Summit",
      date: "January 20, 2025",
      location: "Los Angeles, CA",
      category: "Marketing",
      description: "Exploring latest digital marketing trends, AI-driven strategies, and content innovation.",
      image: images.img11,
    },
    {
      id: 12,
      title: "Robotics and AI Conference",
      date: "February 14-16, 2025",
      location: "Tokyo, Japan",
      category: "Technology",
      description: "Showcasing breakthrough robotics technologies and artificial intelligence applications.",
      image: images.img12,
    },
    {
      id: 13,
      title: "Blockchain Innovation Forum",
      date: "March 10-11, 2025",
      location: "Zurich, Switzerland",
      category: "Technology",
      description: "Exploring blockchain technologies, cryptocurrency trends, and decentralized finance.",
      image: images.aboutUs1,
    },
    {
      id: 14,
      title: "Future of Work Conference",
      date: "April 18-19, 2025",
      location: "Amsterdam, Netherlands",
      category: "Professional Development",
      description: "Discussing remote work, AI integration, and evolving workplace technologies.",
      image: images.achievements1,
    },
    {
      id: 15,
      title: "Global Food Innovation Summit",
      date: "May 22-24, 2025",
      location: "Melbourne, Australia",
      category: "Food Technology",
      description: "Sustainable food production, alternative proteins, and agricultural technology.",
      image: images.achievements2,
    },
    {
      id: 16,
      title: "Mental Health Awareness Conference",
      date: "June 30, 2025",
      location: "Toronto, Canada",
      category: "Healthcare",
      description: "Comprehensive discussions on mental health strategies, research, and support systems.",
      image: images.achievements3,
    },
    {
      id: 17,
      title: "E-Commerce Technology Summit",
      date: "July 15-16, 2025",
      location: "Mumbai, India",
      category: "Technology",
      description: "Latest trends in e-commerce, digital payments, and online retail technologies.",
      image: images.achievements4,
    },
    {
      id: 18,
      title: "Urban Planning Symposium",
      date: "August 25-27, 2025",
      location: "Barcelona, Spain",
      category: "Urban Development",
      description: "Smart city design, sustainable urban infrastructure, and future metropolitan strategies.",
      image: images.achievements5,
    },
    {
      id: 19,
      title: "Quantum Computing Conference",
      date: "September 10-12, 2025",
      location: "Cambridge, UK",
      category: "Technology",
      description: "Breakthroughs in quantum computing research and potential technological applications.",
      image: images.achievements6,
    },
    {
      id: 20,
      title: "Global Water Crisis Summit",
      date: "October 5-7, 2025",
      location: "Cape Town, South Africa",
      category: "Environment",
      description: "Addressing water scarcity, sustainable water management, and innovative solutions.",
      image: images.achievements7,
    },
    {
      id: 21,
      title: "Arts and Technology Fusion",
      date: "November 20-22, 2025",
      location: "Seoul, South Korea",
      category: "Creative Technology",
      description: "Exploring intersections between art, design, and emerging digital technologies.",
      image: images.adaniVisit1,
    },
    {
      id: 22,
      title: "Global Logistics Innovation Forum",
      date: "December 8-10, 2025",
      location: "Singapore",
      category: "Business",
      description: "Future of supply chain, autonomous logistics, and global transportation technologies.",
      image: images.adaniVisit2,
    },
    {
      id: 23,
      title: "Sustainable Fashion Summit",
      date: "January 15, 2026",
      location: "Milan, Italy",
      category: "Fashion",
      description: "Eco-friendly fashion, circular economy, and sustainable textile innovations.",
      image: images.adaniVisit3,
    },
    {
      id: 24,
      title: "Global Humanitarian Tech Conference",
      date: "February 20-22, 2026",
      location: "Geneva, Switzerland",
      category: "Social Impact",
      description: "Technology solutions for humanitarian challenges, disaster response, and global aid.",
      image: images.curricular2,
    },
  ];
  


function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [filter, setFilter] = useState("All");
    const [showFilterMenu, setShowFilterMenu] = useState(false);
  
    const categories = [
      "All", 
      ...new Set(eventData.map(event => event.category))
    ];
  
    const filteredEvents = filter === "All" 
      ? eventData 
      : eventData.filter(event => event.category === filter);
  
    const handleEventClick = (event) => {
      setSelectedEvent(event);
    };
  
    const closeModal = () => {
      setSelectedEvent(null);
    };
  
    return (
      <div className='overflow-hidden'>
        <NavBar1/>
        <NavBar2/>
        <Navigation/>
        
        <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[200px] px-4 md:px-16 py-[50px] md:py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
          <p className="pb-3 text-2xl md:text-4xl font-bold text-white">Event Gallery</p>
          <div className="flex">
            <p className="font-semibold text-white">Home</p>
            <p className="px-3 font-semibold text-white">/</p>
            <p className="font-semibold text-yellow-400">Event Gallery</p>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-end mb-4">
            <button 
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className="bg-green-500 text-white p-2 rounded-lg flex items-center"
            >
              <Filter className="mr-2" /> Filters
            </button>
          </div>
  
          {/* Mobile Filter Menu */}
          {showFilterMenu && (
            <div className="md:hidden absolute left-0 right-0 z-50 bg-white shadow-lg">
              <div className="flex flex-col">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setFilter(category);
                      setShowFilterMenu(false);
                    }}
                    className={`px-4 py-3 border-b ${
                      filter === category 
                        ? "bg-green-500 text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
  
          {/* Desktop Filters */}
         
         
  
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => handleEventClick(event)}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 truncate">{event.title}</h2>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                    {event.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
  
          {/* Modal (Responsive) */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="relative bg-white rounded-lg w-full max-w-md md:max-w-2xl">
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 z-10 text-gray-700 hover:text-black"
                >
                  <X size={24} />
                </button>
  
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-48 md:h-96 object-cover rounded-t-lg"
                />
  
                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <p className="text-gray-600 text-sm md:text-base">{selectedEvent.date}</p>
                    <p className="text-gray-600 text-sm md:text-base">{selectedEvent.location}</p>
                  </div>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-4">
                    {selectedEvent.category}
                  </span>
                  <p className="text-gray-800 mt-2 text-sm md:text-base">{selectedEvent.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
  
        <ExploreFuture/>
        <Footer />
      </div>
    );
  }
  
  export default Gallery;