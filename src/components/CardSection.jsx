import React from 'react';

const InfoCard = ({ title, description, buttonText, bgColor, onClick }) => {
  return (
    <div
      className={`p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105`}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white text-lg mb-6">{description}</p>
      <button className="bg-yellow-500 text-green-700 hover:bg-green-900 hover:text-yellow-600 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg transition border border-yellow-700">
          {buttonText}
        </button>
    </div>
  );
};

const CardSection = () => {
  const cards = [
    {
      title: 'Apply for Admission',
      description:
        'Discover the opportunities at our school and start your educational journey with us. Apply for admission today to experience quality education in a nurturing environment.',
      buttonText: 'Apply Now',
      bgColor: '#064E3B', // Dark green
    },
    {
      title: 'Visit Our School Tour',
      description:
        'Explore our modern facilities, meet our dedicated staff, and get a firsthand look at our vibrant learning community. Schedule a school tour to see what makes our school special.',
      buttonText: 'Schedule Tour',
      bgColor: '#1E3A8A', // Dark blue
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-18 bg-gray-100 mt-10 ">
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          bgColor={card.bgColor}
          onClick={() => alert(`${card.buttonText} clicked!`)}
        />
      ))}
    </div>
  );
};

export default CardSection;
