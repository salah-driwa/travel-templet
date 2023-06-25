
import Pdestinations from '../asets/popular/Popular-data';
import AnimationSection from './Animation-section';
import DestinationLocation from './DestinationLocation';
const Section3 = () => {
    return (
      <section className="sm:pt-52 sm:items-center sm:justify-between py-16 bg-cover bg-center min-h-screen bg-black " id='popular' >
          <div className="flex  items-center justify-center">
  <div className=" w-full">
    <div className="">
       <AnimationSection x={0} y={20}> <h1 className="text-6xl text-center text-white font-bold mb-20">Enjoy The Beauty </h1></AnimationSection>
        </div>
     <div className='flex  sm:flex-row  flex-row  sm:justify-center mt-16  mx-2 py-2  h-full    overflow-x-auto snap-mandatory snap-x scrollbar-hide sm:scrollbar-visible'>
      {Pdestinations.map((Pdestinations, index) => ( <div className=' snap-center'>
     <AnimationSection x={0} y={20} delay={0.3*index}>   <DestinationLocation  destination={Pdestinations}/>
           </AnimationSection></div>
          ))}
    </div>

  </div>
</div>

  
       
      </section>
    );
  };
  
  export default Section3;
  
  