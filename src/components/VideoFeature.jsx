import React from "react";

const VideoFeature = () => {
  return (
    <section
      id="video-feature"
      className="bg-cover pt-16 mt-10 pb-28"
      style={{
        backgroundImage: "url('https://newpunepublicschool.com/images/category/ctg-1.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Video Section */}
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            <div className="video text-center lg:text-left pt-12">
              <a
                className="video-popup text-yellow-500 text-6xl hover:scale-110 hover:text-yellow-400 transition-all duration-300 ease-in-out"
                href="https://www.youtube.com/watch?v=f4zloUBASEg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full lg:w-5/12 lg:ml-auto order-first lg:order-last">
            <div className="feature pt-12">
              <div className="feature-title mb-8">
                <h3 className="text-3xl font-bold text-white">
                  Our Facilities
                </h3>
              </div>
              <ul className="space-y-6">
                {/* Single Feature */}
                <li>
                  <div className="singel-feature flex items-start hover:bg-white hover:shadow-lg p-4 rounded-lg transition-all duration-300 ease-in-out group">
                    <div className="icon w-16 h-16 flex-shrink-0">
                      <img
                        src="https://newpunepublicschool.com/images/all-icon/f-1.png"
                        alt="Global Certificate Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="cont ml-6">
                      <h4 className="text-xl font-semibold text-white group-hover:text-gray-800">
                        Global Certificate
                      </h4>
                      <p className="text-white group-hover:text-gray-600">
                        Our school offers globally recognized certificates,
                        providing students with a pathway to international
                        education and opportunities.
                      </p>
                    </div>
                  </div>
                </li>
                {/* Single Feature */}
                <li>
                  <div className="singel-feature flex items-start hover:bg-white hover:shadow-lg p-4 rounded-lg transition-all duration-300 ease-in-out group">
                    <div className="icon w-16 h-16 flex-shrink-0">
                      <img
                        src="https://newpunepublicschool.com/images/all-icon/f-2.png"
                        alt="Alumni Support Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="cont ml-6">
                      <h4 className="text-xl font-semibold text-white group-hover:text-gray-800">
                        Alumni Support
                      </h4>
                      <p className="text-white group-hover:text-gray-600">
                        We have a strong alumni support network that helps
                        students connect with former graduates, providing
                        guidance and mentorship for their future endeavors.
                      </p>
                    </div>
                  </div>
                </li>
                {/* Single Feature */}
                <li>
                  <div className="singel-feature flex items-start hover:bg-white hover:shadow-lg p-4 rounded-lg transition-all duration-300 ease-in-out group">
                    <div className="icon w-16 h-16 flex-shrink-0">
                      <img
                        src="https://newpunepublicschool.com/images/all-icon/f-1.png"
                        alt="Books & Library Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="cont ml-6">
                      <h4 className="text-xl font-semibold text-white group-hover:text-gray-800">
                        Books & Library
                      </h4>
                      <p className="text-white group-hover:text-gray-600">
                        Our well-stocked library is a treasure trove of
                        knowledge, offering a wide range of books and resources
                        to support students' academic and intellectual growth.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>

      {/* <div className="absolute bottom-0 w-full bg-yellow-500 text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll text-center text-lg font-semibold">
          🌟 Heartiest congratulations to all class 10 students for their
          success! 🌟
        </div>
      </div> */}
    
    </section>
  );
};

export default VideoFeature;
