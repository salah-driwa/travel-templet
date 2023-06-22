
import Pdestinations from '../asets/popular/Popular-data';
import AnimationSection from './Animation-section';
import DestinationLocation from './DestinationLocation';
const Section3 = () => {
    return (
      <section className="pt-52 items-center justify-between py-16 bg-cover bg-center min-h-screen bg-black " id='popular' >
          <div className="flex items-center justify-center">
  <div className="">
    <div className="">
       <AnimationSection x={0} y={20}> <h1 className="text-6xl text-center text-white font-bold mb-20">Enjoy The Beauty </h1></AnimationSection>
        </div>
     <div className='flex'>
      {Pdestinations.map((Pdestinations, index) => (
     <AnimationSection x={0} y={20} delay={0.3*index}>   <DestinationLocation  destination={Pdestinations}/>
           </AnimationSection>
          ))}
    </div>

  </div>
</div>

  
       
      </section>
    );
  };
  
  export default Section3;
  
  