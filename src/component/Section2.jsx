
import destinations from '../asets/destinations/Destination-data';
import { motion } from 'framer-motion';
import Button from './Button';
import AnimationSection from './Animation-section';

const About = () => {
    return (

      <section className="pt-52 items-center justify-between py-16 bg-cover bg-center min-h-screen bg-black " id='about' >
        <div className=' backdrop-blur-3xl -mt-56 h-52' ></div>
        <div className="flex items-center justify-center">
  <div className=" px-8 ml-36">
    <div className="flex items-center justify-start  gap-44">
      <div className="mr-8  w-1/2">
      <AnimationSection x={40}>
        <h1 className="text-6xl text-white font-bold mb-8 -ml-3">Learn more </h1></AnimationSection>
        <AnimationSection delay={0.1}  x={20}> <p className="text-white text-lg mb-6 w-96">Discover breathtaking islands, historic landmarks, and vibrant cultures. Get ready for your next adventure!</p>
       </AnimationSection>
       
       <AnimationSection x={20}   delay={0.2} > <div className=' ml-6'> <Button>Explore Travel</Button></div> </AnimationSection> 
      </div>
  
      <div 
        className=" xl:w-[800px] droplight   overflow-hidden rounded-md">
              <AnimationSection x={0}>
  <motion.img
  whileHover={{scale:1.2}}
  transition={{duration:0.8}}
   src="https://images.unsplash.com/photo-1687161877224-9b1b0448cc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="ss" className="w-[650px]" />
</AnimationSection>
</div>

    </div>
  </div>
</div>

  
       
      </section>
    );
  };
  
  export default About;
  
  