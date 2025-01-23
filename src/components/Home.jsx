import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const popupRef = useRef(null);

  const images = [
    "https://newpunepublicschool.com/images/admission.jpg",
    "https://img.freepik.com/premium-vector/hand-drawn-school-admission-horizontal-banner_52683-127671.jpg?semt=ais_hybrid",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6f_Em7lPWfrXBYv-cWpIYeFGUAJP19x3mQ&s",
  ];

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopupOpen]);

  return (
    <div className=" bg-gray-100">
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Popup overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
           
          <div
            ref={popupRef}
            className="relative bg-white rounded-lg w-full max-w-md lg:max-w-xl shadow-lg overflow-hidden"
          >
            {/* Close button */}
            <span
              className="absolute top-2 right-2 w-8 h-8 bg-black text-white rounded-full 
                         flex items-center justify-center cursor-pointer hover:bg-gray-800 
                         transition-colors z-10"
              onClick={handleClosePopup}
            >
              ×
            </span>

            {/* Image container */}
            <div className="overflow-hidden rounded-lg">
              <a
                href="https://npps.simplyadmission.com/candidate/Login"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Admission"
                  className="w-full h-auto object-contain cursor-pointer hover:scale-105 
                             transition-transform duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNextImage();
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      {/* <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to the Website
        </h1>
        <p className="text-gray-600 text-center">
          Explore our amazing content!
        </p>
      </div> */}
    </div>
  );
};

export default Home;
