import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import TopArrow from './Components/TopArrow/TopArrow';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let circle = document.getElementById('circle');
    document.addEventListener('mousemove', (e) => {
      circle.style.left = e.pageX - 80 + 'px';
      circle.style.top = e.pageY - 80 + 'px';
    });

    document.addEventListener('scroll', ()=>{
      if(window.scrollY>100){
        setShowArrow(true);
      }else{
        setShowArrow(false)
      }


    })


  

  }, []);

  return (
  
    <>
      <div className='circle' id='circle'></div>
      {showArrow && <TopArrow />}
      <Navbar />
      <Hero/>
      <About />
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
