import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  {
    title: 'HOME',
    link: '/',
    color: 'text-green-800 hover:text-yellow-600'
  },
  {
    title: 'Activity',
    link: '/activity',
    color: 'text-green-800 hover:text-yellow-600'
  },
  {
    title: 'ABOUT US',
    link: '/about',
    color: 'text-green-800 hover:text-yellow-600',
    // dropdownItems: [
    //   { title: 'Trust Management', link: '/' },
    //   { title: "President's Message", link: '/' },
    //   { title: "Secretary's Message", link: '#' },
    //   { title: "Principal's Message", link: '#' }
    // ]
  },
  {
    title: 'INFRASTRUCTURE',
    link: '#',
    dropdownItems: [
      { title: 'Buildings', link: '#' },
      { title: 'Labs', link: '#' },
      { title: 'Library', link: '#' }
    ]
  },
  { title: 'ACADEMIC', link: '#activity' ,

    dropdownItems: [
      { title: 'Assessments', link: 'academic1' },
      { title: "Formative Assmt.", link: 'academic2' },
      { title: "Summative Assmt.", link: 'academic3' },
      { title: "Question Paper Patern", link: 'academic4' }
    ]
  },

  { title: 'ADMISSION', link: '#',
    dropdownItems: [
      { title: 'Trust Management', link: '#' },
      { title: "President's Message", link: '#' },
      { title: "Secretary's Message", link: '#' },
      { title: "Principal's Message", link: '#' }
    ]
   },
  { title: 'DEPARTMENTS', link: '#',
    dropdownItems: [
      { title: 'English', link: '#' },
      { title: "Marathi", link: '#' },
      { title: "Physics", link: '#' },
      { title: "chemistry", link: '#' }
    ]
   },
  // { title: 'COMPREHENSIVE INFORMATION', link: '#',
  //   dropdownItems: [
  //     { title: 'Trust Management', link: '#' },
  //     { title: "President's Message", link: '#' },
  //     { title: "Secretary's Message", link: '#' },
  //     { title: "Principal's Message", link: '#' }
  //   ]
  //  },
   {
    title: 'GALLERY',
    link: '/gallery',
    color: 'text-green-800 hover:text-yellow-600'
  },
  { title: 'ONLINE FEES PAYMENT', link: '#',
    dropdownItems: [
      { title: 'Online', link: '#' },
      { title: "Offline", link: '#' },
      
    ]
   },
  { title: 'CONTACT US', link: '/contact' },

];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between py-4 px-4 border-b">
        <a href="#" className="text-green-800 font-bold text-xl">
          Logo
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-800 hover:text-green-900 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} shadow-lg`}>
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdownItems ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    className="w-full text-left px-4 py-3 text-green-800 hover:bg-green-50  flex items-center justify-between transition-colors"
                  >
                    {/* <span>{item.title}</span>
                    {activeDropdown === index ? (
                      <X size={16} className="transition-transform duration-200" />
                    ) : (
                      <span className="transform transition-transform duration-200">▼</span>
                    )} */}
                  </button>
                  <div
                    className={`transition-all duration-200 ease-in-out   ${
                      activeDropdown === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <ul className="bg-gray-50 py-2">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <li key={dropIndex}>
                          <a
                            href={dropItem.link}
                            className="block px-10 py-2 bg-green-800 text-white  transition-colors border-yellow-500 border-b-2  text-normal"
                          >
                            {dropItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a
                  href={item.link}
                  className={`block px-4 py-3 ${item.color || 'text-green-800'} hover:bg-green-50 font-medium transition-colors`}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DesktopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleDropdownClick = (index) => {
    setIsClicked(true);
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownHover = (index) => {
    if (!isClicked) {
      setActiveDropdown(index);
    }
  };

  const handleDropdownLeave = () => {
    if (!isClicked) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setIsClicked(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="hidden md:block">
      <div className="container mx-auto px-6">
        <ul className="flex flex-wrap items-center justify-start space-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative nav-dropdown">
              {item.dropdownItems ? (
                <>
                  <button
                    onClick={() => handleDropdownClick(index)}
                    onMouseEnter={() => handleDropdownHover(index)}
                    onMouseLeave={handleDropdownLeave}
                    className="flex items-center space-x-1 py-8 text-green-800 hover:text-green-900 font-medium cursor-pointer transition-colors hover:text-yellow-600"
                  >
                    <span>{item.title}</span>
                    {/* {activeDropdown === index ? (
                      <X size={16} className="transition-transform duration-200" />
                    ) : (
                      <span className="transform transition-transform duration-200">▼</span>
                    )} */}
                  </button>
                  <div
                    className={`absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-b-lg transition-all duration-700 ${
                      activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                    onMouseEnter={() => handleDropdownHover(index)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <ul className="">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <li key={dropIndex}>
                          <a
                            href={dropItem.link}
                           // Example: Only left and right inner borders
                            className="block px-4 py-2 bg-green-900 text-white transition-colors border-opacity-60 border-y border-yellow-500 text-normal hover:text-yellow-600"                          >
                            {dropItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a
                  href={item.link}
                  className={`block py-4 ${item.color || 'text-green-800 hover:text-green-900'} font-medium whitespace-nowrap transition-colors hover:text-yellow-600 `}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navigation = () => {
  const isMobile = useIsMobile();
  

  return (
    <nav className="bg-white shadow-sm relative z-30 border border-zinc-100">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </nav>
  );
};

export default Navigation;