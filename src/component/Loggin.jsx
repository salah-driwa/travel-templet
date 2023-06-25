
import Button from "./Button";
import AnimationSection from "./Animation-section";

const Login = () => {
    return ( 
        <section className=" flex sm:flex-row flex-col sm:justify-center sm:gap-32 gap-10 px-5 my-6 h-[600px] w-full">
<div>   <AnimationSection x={0}>
    <img
        
         src="https://images.unsplash.com/photo-1687161877224-9b1b0448cc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="ss" className="w-[650px]" />
      </AnimationSection>
</div>
<div>
    <AnimationSection x={30}>
<h1 className=" sm:text-5xl text-2xl text-white font-bold   sm:w-96">Your Journey Start Here</h1>
</AnimationSection>

<AnimationSection x={30} delay={0.2}>
<p className=" sm:text-xl  px-3 py-5 text-white font-bold sm:py-10 opacity-70  sm:w-96">Get up to and enjoy  your trip now ,enjoy your journey </p>
</AnimationSection>
<AnimationSection x={30} delay={0.4}>
<input type="text" className="  bg-gray-800 bg-opacity-70 h-12 sm:my-5 my-4  w-72 sm:w-full  rounded-sm text-left px-6 sm:px-4 text-white" placeholder=" Enter Your Email"></input>
 <div className=""><Button>Subscribe To Our Newsletter</Button></div>
</AnimationSection>
</div>
      </section>
     );
}
 
export default Login;