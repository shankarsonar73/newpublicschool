import React, { useState, useEffect } from "react";

const images = [
  "https://newpunepublicschool.com/images/slider/s-1.jpg",
  "https://newpunepublicschool.com/images/slider/s-2.jpg",
  "https://newpunepublicschool.com/images/slider/s-3.jpg",
];

const ImageSliderWithMarquee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Slider */}
      <div className="absolute w-full h-full flex transition-transform duration-2000 ease-linear">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          ></div>
        ))}
      </div>

      {/* Marquee Text */}
      <div className="absolute bottom-0 w-full bg-green-800 text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll text-center text-lg font-semibold">
          🌟 Heartiest congratulations to all class 10 students for their
          success! 🌟
        </div>
      </div>
    </div>
  );
};

export default ImageSliderWithMarquee;
