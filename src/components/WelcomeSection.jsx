import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Welcome to New Pune Public School
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          New Pune Public School is dedicated to delivering quality education in a nurturing environment. 
          We believe that education is the key to unlocking a bright future, and our school provides the 
          perfect setting for this journey.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our modern and spacious facilities create an ideal atmosphere for students to learn and grow. 
          We are committed to fostering intellectual, social, emotional, and physical development in our students. 
          At New Pune Public School, we focus not only on academic excellence but also on guiding our students 
          towards critical thinking, social openness, and purposeful research.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          We encourage students to explore their talents and become aware of national and global issues, 
          preparing them to be responsible and informed citizens of the world.
        </p>
        <button className="bg-yellow-500 text-green-900 hover:bg-green-900 hover:text-yellow-600 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
