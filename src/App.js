import './App.css';
import Footer from './component/Footer';
import Login from './component/Loggin';
import Navbar from  './component/Navbar';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';

function App() {
  return (
    <div className="  bg-black  overflow-hidden">
     <Navbar/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Login/>
     <Footer/>
    </div>
  );
}

export default App;
