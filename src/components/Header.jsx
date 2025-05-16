import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);
    
    // Listen for scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 1, name: 'ارتباط با ما', link: '#' },
    { id: 2, name: 'درباره ما', link: '#' },
    { id: 3, name: 'خدمات', link: '#' },
    { id: 4, name: 'آموزش ها', link: '#' },
    { id: 5, name: 'صفحه اصلی', link: '#' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-base-100/90 backdrop-blur-md shadow-lg' : 'py-4 bg-base-100'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-base-100 font-bold text-lg mr-2">
                ID
              </div>
              <span className="text-xl font-bold text-base-content hidden sm:block">
                IRAN Developer
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <ul className="flex space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="relative text-base-content hover:text-primary transition-colors duration-300 font-medium group mx-3 "
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 space-x-reverse">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-base-content hover:bg-base-200 transition-colors duration-300"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>

              <button className="flex items-center space-x-1 space-x-reverse bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus text-base-100 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-primary/20 mx-5 ">
                <FaUser size={14} />
                <span>ورود / ثبت نام</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 space-x-reverse">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-base-content hover:bg-base-200 transition-colors duration-300"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-base-content focus:outline-none p-2 rounded-full hover:bg-base-200 transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="bg-base-200 shadow-xl rounded-xl mt-4 py-4 px-6 animate-fadeIn">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="block text-base-content hover:text-primary transition-colors duration-300 py-2 font-medium px-3 rounded-lg hover:bg-base-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button className="w-full flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus text-base-100 px-4 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-primary/20 ">
                  <FaUser size={14} />
                  <span>ورود / ثبت نام</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;