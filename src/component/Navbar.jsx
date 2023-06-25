import { FaHome, FaInfoCircle, FaStar, FaCompass } from 'react-icons/fa';
import { Link   } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react';
import AnimationSection from './Animation-section';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState({
    home: false,
    about: false,
    popular: false,
    explore: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHover = (menuItem) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [menuItem]: !prevState[menuItem],
    }));
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = scrollTop > 50; // Change the value to adjust when the scroll is considered "a bit"
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<motion.nav
    className={`flex sm:items-center justify-between sm:py-4 sm:px-20 align-top
     ${isMobileMenuOpen ? ' h-52' : 'h-12'} py-4 px-6 text-secondary-button sm:h-20 w-full fixed z-50`}
    
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none'
      }}
      
      transition={{ duration: 0.3 }}
    >
          <AnimationSection x={0} y={-40}>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center align-top"
        onClick={() => setIsHovered({ home: false, about: false, popular: false, explore: false })}
      >
       
        <h1 className="sm:text-xl font-semibold   ">Website Name</h1>
      </Link>
      </AnimationSection>

      <div className="sm:flex items-center sm:space-x-20 hidden">
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className={`flex items-center space-x-2 cursor-pointer hover:font-semibold ${
            isHovered.home ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('home')}
          onMouseLeave={() => handleHover('home')}
        >
          <motion.div animate={{ y: isHovered.home ? -5 : 0 }}>
            <FaHome className="sm:text-xl" />
          </motion.div>
          <span>Home</span>
        </Link>

        {/* About */}
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.about ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('about')}
          onMouseLeave={() => handleHover('about')}
        >
          <motion.div animate={{ rotate: isHovered.about ? 360 : 0 }}>
            <FaInfoCircle className="sm:text-xl" />
          </motion.div>
          <span>About</span>
        </Link>

        {/* Popular */}
        <Link
          to="popular"
          smooth={true}
          duration={1000}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.popular ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('popular')}
          onMouseLeave={() => handleHover('popular')}
        >
          <motion.div
            animate={{ scale: isHovered.popular ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaStar className="sm:text-xl" />
          </motion.div>
          <span>Popular</span>
        </Link>

        {/* Explore */}
        <Link
          to="explore"
          smooth={true}
          duration={1000}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${
            isHovered.explore ? 'text-primary' : ''
          }`}
          onMouseEnter={() => handleHover('explore')}
          onMouseLeave={() => handleHover('explore')}
        >
          <motion.div animate={{ rotate: isHovered.explore ? 360 : 0 }} transition={{ duration: 0.5 }}>
            <FaCompass className="sm:text-xl" />
          </motion.div>
          <span>Explore</span>
        </Link>
      </div>

      

      {/* Mobile Menu ***************************************************************************/}
      <div className="sm:hidden block w-32  h-32   ">
        <button
          className="flex flex-col align-top    ml-auto space-x-2 cursor-pointer hover:font-semibold"
          onClick={handleMobileMenuToggle}
        >
          <span>Menu</span>
        </button>
        {isMobileMenuOpen && (
          <div className="flex flex-col  ml-4 mt-2 ">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-1"
              onClick={handleMobileMenuToggle}
            >
              <FaHome className="sm:text-xl  " />
              <span>Home</span>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-1"
              onClick={handleMobileMenuToggle}
            >
              <FaInfoCircle className="sm:text-xl" />
              <span>About</span>
            </Link>
            <Link
              to="popular"
              smooth={true}
              duration={1000}
              className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-1"
              onClick={handleMobileMenuToggle}
            >
              <FaStar className="sm:text-xl" />
              <span>Popular</span>
            </Link>
            <Link
              to="explore"
              smooth={true}
              duration={1000}
              className="flex items-center space-x-2 cursor-pointer hover:font-semibold py-1"
              onClick={handleMobileMenuToggle}
            >
              <FaCompass className="sm:text-xl" />
              <span>Explore</span>
            </Link>
          </div>
        )}
      </div>
      
    </motion.nav>
 
  );
};

export default Navbar;
