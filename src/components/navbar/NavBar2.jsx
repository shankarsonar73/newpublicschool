import React,{useState,useEffect} from "react";

const Navbar2 = () => {
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
      
      const interval = setInterval(() => {
        setIsVisible((prev) => !prev);
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className=" flex items-center space-x-4 w-full lg:w-auto">
          <img
            src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?semt=ais_incoming"
            alt="School Logo"
            className="h-16 w-16"
          />
          <div>
            <h1 className="text-xs text-gray-600">Degaon post-linga Washim </h1>
            <h1 className="text-green-800 font-bold leading-tight text-2xl">
              NEW PUNE PUBLIC SCHOOL
            </h1>
            <p className="text-xs text-gray-600">
              C.B.S.E. Affiliation No.: 1130352 | UDISE No.: 27252002415
            </p>
          </div>
        </div>
        <div className="hidden md:flex w-full lg:w-auto mt-4 lg:mt-0 flex-col lg:flex-row lg:items-center lg:space-x-6">
          
          <div className="text-center lg:text-left ">
          <img
                src="https://newpunepublicschool.com/images/all-icon/support.png"
                alt="image"
                className="h-10 w-10"
              />
          </div>
          <div className="text-center lg:text-left mr-4">
            <p className="flex items-center justify-center lg:justify-start">
              
              <span className="font-medium text-sm text-gray-600">
                Get in Touch with us:
              </span>
            </p>
            <p className="text-green-800 font-bold  hidden md:block">
              +91 85509 78999 / +91 89564 31990 / +91 99606 81999
            </p>
          </div>

          
          <div className=" flex justify-center space-x-4 mt-4 lg:mt-0 px-6">
            <button className={`bg-yellow-400 text-white px-6   py-3 rounded shadow hover:bg-green-800  hover:text-yellow-600 transition-opacity duration-400 ${
          isVisible ? "opacity-100" : "opacity-10 pointer-events-none"
        }`}>
              Join Us
            </button>
            <button className={`bg-yellow-400 text-white px-6 py-3 rounded shadow hover:bg-green-800   hover:text-yellow-600 transition-opacity duration-400 ${
          isVisible ? "opacity-100" : "opacity-10 pointer-events-none"
        }`}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
