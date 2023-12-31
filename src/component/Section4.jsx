import bg from '../asets/bg/bg2.png'
import AnimationSection from './Animation-section';
const Section4 = () => {
    return (
        <section className="py-16 bg-cover bg-center  bg-black min-h-[500px]   " style={{ backgroundImage: `url(${bg})` }} id="explore">
          <div className=' backdrop-blur-2xl  -mt-32  h-44' ></div>
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 justify-around sm:pt-32">
          <div className="">
            <AnimationSection  x={10}>
            <h1 className="sm:text-6xl text-left text-white font-bold sm:mb-10 mb-4 pt-6 px-6">Explore the Best Paradises</h1></AnimationSection>
            <AnimationSection  x={10} delay={0.3}>   <p className="text-md text-center text-white font-bold opacity-70 px-6">
              Exploring the world is an exhilarating journey of discovery, where every step unveils new wonders and experiences.
              It's a chance to immerse yourself in diverse
            </p></AnimationSection>
          </div>
      
          <div>
            <div className="">
              <AnimationSection x={-20}>
              <span className="flex items-center gap-6 justify-center">
                <img
                  src="https://images.unsplash.com/photo-1497184091687-09d30ae055e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <span className="text-xl text-white">Paul Jeams</span>
              </span>
              </AnimationSection>
            </div>
          </div>
        </div>



        
      </section>
      
    );
  };
  
  export default Section4;
  
  