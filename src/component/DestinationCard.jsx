import { useState } from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="max-w-sm bg-white rounded shadow-lg m-4 relative"
      whileHover={{ scale: 1.1, y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-72 h-44 overflow-hidden rounded-md">
        <motion.img
          whileHover={{ scale: 1.2 }}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          src={destination.image}
          alt={destination.text}
          className={`w-full h-full object-cover rounded-t ${isHovered?  'brightness-50' : 'brightness-70'  } `}
          style={{ transformOrigin: 'center' }}
        />
      </div>
      <div className={`px-6 py-4 absolute bottom-2 text-white ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
        <p className="text-xl font-semibold mb-2">{destination.text}</p>
        <motion.p
        animate={{display:isHovered ?  "block" :"none" ,opacity:isHovered ?  100 :0  }}
        transition={{}}
         className="text-white text-base">{destination.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
