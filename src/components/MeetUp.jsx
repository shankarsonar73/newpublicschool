import React from 'react';

const MeetUp = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Meet Our Top Achievers
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        At New Pune Public School, we take pride in celebrating the remarkable achievements of our students. Our top achievers have consistently excelled in academics, sports, and extracurricular activities, setting high standards for excellence.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        These exceptional individuals have not only demonstrated outstanding academic 
        prowess but have also displayed exceptional leadership, creativity, and 
        dedication to their pursuits.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
        As we applaud the remarkable feats of our top achievers, we also extend our gratitude to our dedicated faculty and the supportive school community that has helped these students reach such remarkable heights. 
        Together, we continue to inspire and shape the future leaders of tomorrow.
        </p>
        <button className="bg-yellow-500 text-green-900 hover:bg-green-900 hover:text-yellow-600 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg transition">
        View Achievements
        </button>
      </div>
    </section>
  );
};

export default MeetUp;
