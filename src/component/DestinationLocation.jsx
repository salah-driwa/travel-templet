import { useState } from 'react';
import { motion } from 'framer-motion';
import {HiLocationMarker} from 'react-icons/hi'
const DestinationLocation = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="  rounded shadow-lg m-4 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" sm:w-96 w-72 h-52 sm:h-60 overflow-hidden rounded-md shadow-white">
        <motion.img
          whileHover={{ scale: 1.2 }}
       
          src={destination.image}
          alt={destination.text}
          className={`w-full h-full object-cover rounded-t `}
          style={{ transformOrigin: 'center' }}
        />
      </div>
     <h2 className='text-white text-2xl font-bold  pt-5 pl-2 mb-4'>{destination.location}</h2>
     <span className="flex items-center  ">
 <motion.span 
 animate={{scale:isHovered ?[1,1.2,1]:1 , y: isHovered ? -10:0}}
 className='pl-2'
 > <HiLocationMarker size={20} color='white' /></motion.span>
  <span className="text-md pt-3 font-semibold text-white text-left pl-3 opacity-60 pb-2">{destination.country}</span>
</span>
 
     
    </motion.div>
  );
};

export default DestinationLocation ;
