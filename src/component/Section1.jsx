import bg from '../asets/bg/background.png'
import destinations from '../asets/destinations/Destination-data';
import AnimationSection from './Animation-section';
import Button from './Button';
import DestinationCard from './DestinationCard';
const Section1 = () => {
  return (
    <AnimationSection x={0} duration={0.3}>
      <section
        className="pt-52 items-center justify-between py-16 bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(${bg})` }}
        id="home"
      >
        <div className="max-w-lg sm:px-8 sm:ml-36 z-20 relative">
          <AnimationSection>
            <h3 className="sm:text-2xl text-white font-semibold mb-4 ml-5 text-xl">
              Welcome to Travel
            </h3>
          </AnimationSection>

          <AnimationSection delay={0.1}>
            <h1 className="sm:text-8xl text-4xl text-white font-bold mb-6 ml-5">
              Explore <div className="sm:text-6xl ml-3 my-6">the World</div>
            </h1>
          </AnimationSection>

          <AnimationSection delay={0.15}>
            <p className="text-white text-lg sm:px-0 mb-6 px-10">
              Discover breathtaking islands, historic landmarks, and vibrant cultures. Get ready for your next adventure!
            </p>
          </AnimationSection>

          <AnimationSection delay={0.2}>
            <div className="mx-10">
              <Button>Start Your Journey</Button>
            </div>
          </AnimationSection>
        </div>


        <div className="flex sm:flex-row flex-row sm:justify-center sm:flex-wrap mt-16 z-20 overflow-x-auto snap-mandatory snap-x scrollbar-hide sm:scrollbar-visible">
          {destinations.map((destination, index) => (
            <div className="snap-center z-20" key={index}>
              <AnimationSection delay={index * 0.4} x={30}>
                <DestinationCard destination={destination}></DestinationCard>
              </AnimationSection>
            </div>
          ))}
        </div>
        
        <div className="absolute w-full top-0 h-full z-10">
          <div className="h-full bg-gradient-to-r from-black  bg-clip-border opacity-80 sm:opacity-25"></div>
        </div>
      </section>
    </AnimationSection>
  );
};

  export default Section1;
  
  