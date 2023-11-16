import React, { useState, useEffect }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useInView } from 'react-intersection-observer';

function App() {
  const [activeElement, setActiveElement] = useState('')

  const [isToggled, setIsToggled] = useState(false)


  const {ref:ref, inView:inView} = useInView({
     threshold:.5
  });

  const {ref:ref1, inView:inView1} = useInView({
    threshold:.5,

  });

  const {ref:ref2, inView:inView2} = useInView({
    threshold:.5
  });

  const {ref:ref3, inView:inView3} = useInView({
    threshold:.5
  });

  const {ref:ref4, inView:inView4} = useInView({
    threshold:.5
  });


  useEffect(() => {
    if (inView) {
      setActiveElement('hero')
    };
    if (inView1) {
      setActiveElement('about')
    };
    if (inView2) {
      setActiveElement('experience')
    };
    if (inView3) {
      setActiveElement('projects')
    };
    if (inView4) {
      setActiveElement('contact')
    };
  }, [inView, inView1, inView2, inView3, inView4])
  



  return (
    <div className="App">
      <Navbar activeElement={activeElement}/>
      <Hero innerRef={ref} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      <About innerRef={ref1} activeElement={activeElement}/>
      <Experience innerRef={ref2} activeElement={activeElement}/>
      <Projects innerRef={ref3} activeElement={activeElement}/>
      <Contact innerRef={ref4}/>
    </div>
  );
}

export default App;
