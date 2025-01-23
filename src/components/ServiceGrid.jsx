import React from 'react';

const ServiceCard = ({ title, imageUrl, glowColor }) => (
  <div
    className=" flex relative overflow-hidden rounded-lg h-48 group cursor-pointer transition-all duration-500  lg:h-32 lg:w-80 "
    style={{
      boxShadow: `0 0 20px 0 ${glowColor}20`,
    }}
  >
   
    <div className="absolute inset-0 w-full h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle at center, ${glowColor}30 0%, transparent 70%)`,
      }}
    />

    
    <div
      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
      style={{
        background: `linear-gradient(to bottom, ${glowColor}80, ${glowColor}95)`,
      }}
    />

   
    <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-white text-xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform duration-300 text-shadow-lg">
        {title}
      </h2>

      <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        Know More
      </p>

    
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(45deg, transparent 0%, ${glowColor} 45%, transparent 100%)`,
          animation: 'shine 2s infinite linear',
        }}
      />

      
      <div
        className="absolute bottom-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: glowColor,
          boxShadow: `0 0 10px 1px ${glowColor}`,
        }}
      />
    </div>
  </div>
);

const ServiceGrid = () => {
  const services = [
    {
      title: 'Admission Enquiry',
      imageUrl: 'https://newpunepublicschool.com/images/category/ctg-1.jpg', 
      glowColor: '#4f46e5', 
    },
    {
      title: 'Transport',
      imageUrl: 'https://newpunepublicschool.com/images/category/ctg-1.jpg',
      glowColor: '#059669', 
    },
    {
      title: 'School Brochure',
      imageUrl: 'https://newpunepublicschool.com/images/category/ctg-1.jpg', 
      glowColor: '#7c3aed', 
    },
    {
      title: 'Achievements',
      imageUrl: 'https://newpunepublicschool.com/images/category/ctg-1.jpg', 
      glowColor: '#db2777', 
    },
  ];

  return (
    <div className="w-full mx-auto p-6 bg-gray-200">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 select-none">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        imageUrl={service.imageUrl}
        glowColor={service.glowColor}
      />
    ))}
  </div>
</div>
  );
};

export default ServiceGrid;
