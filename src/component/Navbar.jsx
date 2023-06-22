import { FaHome, FaInfoCircle, FaStar, FaCompass } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState ,useEffect } from 'react';
import AnimationSection from './Animation-section';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState({
    home: false,
    about: false,
    popular: false,
    explore: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

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
      className="flex items-center justify-between py-4 px-20   text-secondary-button h-20 w-full fixed z-50"
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
        className="flex items-center"
        onClick={() => setIsHovered({ home: false, about: false, popular: false, explore: false })}
      >
       
        <h1 className="text-xl font-semibold">Website Name</h1>
      </Link>
      </AnimationSection>

      <div className="flex items-center space-x-20">
      <AnimationSection x={0} y={-40}>
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className={`flex items-center space-x-2 cursor-pointer hover:font-semibold ${isHovered.home ? 'text-primary' : ''}`}
          onMouseEnter={() => handleHover('home')}
          onMouseLeave={() => handleHover('home')}
        >
          <motion.div animate={{ y: isHovered.home ? -5 : 0 }}>
            <FaHome className="text-xl" />
          </motion.div>
          <span>Home</span>
        </Link>
        </AnimationSection>

        <AnimationSection x={0} y={-40} delay={0.1}>
        <Link  activeClass="active"
        to="about"
        smooth={true}
        duration={1000}
        className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${isHovered.about ? 'text-primary' : ''}`}
        onMouseEnter={() => handleHover('about')}
        onMouseLeave={() => handleHover('about')}
      >
        <motion.div animate={{ rotate: isHovered.about ? 360 : 0 }}>
          <FaInfoCircle className="text-xl" />
        </motion.div>
        <span>About</span>
      </Link>
      </AnimationSection>

      <AnimationSection x={0} y={-40} delay={0.2}>
        <Link 
          to="popular"
          smooth={true}
          duration={1000}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${isHovered.popular ? 'text-primary' : ''}`}
          onMouseEnter={() => handleHover('popular')}
          onMouseLeave={() => handleHover('popular')}
        >
          <motion.div
            animate={{ scale: isHovered.popular ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaStar className="text-xl" />
          </motion.div>
          <span>Popular</span>
        </Link>
        </AnimationSection>

        <AnimationSection x={0} y={-40} delay={0.3}>
        <Link
          to="explore"
          smooth={true}
          duration={1000}
          className={`flex cursor-pointer items-center space-x-2 hover:font-semibold ${isHovered.explore ? 'text-primary' : ''}`}
          onMouseEnter={() => handleHover('explore')}
          onMouseLeave={() => handleHover('explore')}
        >
          <motion.div animate={{ rotate: isHovered.explore ? 360 : 0 }} transition={{ duration: 0.5 }}>
            <FaCompass className="text-xl" />
          </motion.div>
          <span>Explore</span>
        </Link>
        </AnimationSection> 
      </div>
    </motion.nav>
 
  );
};

export default Navbar;
