import bg from '../asets/bg/background.png'
import destinations from '../asets/destinations/Destination-data';
import AnimationSection from './Animation-section';
import Button from './Button';
import DestinationCard from './DestinationCard';
const Section1 = () => {
    return ( <AnimationSection x={0} duration={0.3}>
      <section className="   pt-52 items-center justify-between py-16 bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bg})` }} id='home'>
       
        <div className="max-w-lg px-8 ml-36">
        <AnimationSection>
          <h3 className="text-2xl text-white font-semibold mb-4  ">Welcome to Travel</h3>
          </AnimationSection>

          <AnimationSection delay={0.1}> <h1 className="text-8xl text-white font-bold mb-6">Explore <div className="text-6xl my-6">the World</div></h1>
          </AnimationSection>

         <AnimationSection delay={0.15}>   <p className="text-white text-lg mb-6">Discover breathtaking islands, historic landmarks, and vibrant cultures. Get ready for your next adventure!</p>
         </AnimationSection>  
         <AnimationSection delay={0.2}>  <Button>Start Your Journey</Button>
         </AnimationSection>
        </div>
       
  
          <div className="flex flex-row justify-center flex-wrap mt-16">
          {destinations.map((destination, index) => (<AnimationSection delay={0.5+ index*0.4} x={30}>
           <DestinationCard destination={destination}></DestinationCard>
           </AnimationSection>
          ))}
        </div>
      </section>
      </AnimationSection>
    );
  };
  
  export default Section1;
  
  