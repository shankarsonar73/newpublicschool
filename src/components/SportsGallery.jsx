import React from 'react';

// Import sports images (you'll need to replace these with actual local images)
import cricket from '../assets/sports/cricket.jpg';
import football from '../assets/sports/football.jpg';
import basketball from '../assets/sports/basketball.jpg';
import volleyball from '../assets/sports/volleyball.jpg';
import tennis from '../assets/sports/tennis.jpg';
import athletics from '../assets/sports/athletics.jpg';

const SportsGallery = () => {
  const sportsData = [
    {
      id: 1,
      image: cricket,
      title: 'Cricket',
      description: 'Developing teamwork and strategic thinking through cricket.'
    },
    {
      id: 2,
      image: football,
      title: 'Football',
      description: 'Fostering physical fitness and team spirit on the football field.'
    },
    {
      id: 3,
      image: basketball,
      title: 'Basketball',
      description: 'Enhancing coordination and athletic skills through basketball.'
    },
    {
      id: 4,
      image: volleyball,
      title: 'Volleyball',
      description: 'Building communication and collaborative skills in volleyball.'
    },
    {
      id: 5,
      image: tennis,
      title: 'Tennis',
      description: 'Promoting individual skill and mental discipline through tennis.'
    },
    {
      id: 6,
      image: athletics,
      title: 'Athletics',
      description: 'Encouraging personal growth and physical excellence.'
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">Our Sports Activities</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover the diverse range of sporting activities that help our students develop physical skills, teamwork, and personal growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sportsData.map((sport) => (
          <div 
            key={sport.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={sport.image} 
                alt={sport.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">{sport.title}</h3>
              <p className="text-gray-600">{sport.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsGallery;