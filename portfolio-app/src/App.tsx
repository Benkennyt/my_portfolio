import React, { useState, useEffect }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useInView } from 'react-intersection-observer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [activeElement, setActiveElement] = useState('hero');

  const [isToggled, setIsToggled] = useState(false);

  const [projectId, setProjectId] = useState <string>('');

  const [modalOpen, setModalOpen] = useState(false)

  const handleModalClose = () => {
    setModalOpen(false)
    document.body.classList.remove('modalIsOpen')
  }

  const {ref:ref, inView:inView} = useInView({
     threshold:.5,
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
      {modalOpen && <ProjectDetails projectId={projectId} closeModal={handleModalClose} isToggled={isToggled}/>}
      <Navbar activeElement={activeElement} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      <Hero innerRef={ref} isToggled={isToggled}/>
      <About innerRef={ref1} activeElement={activeElement} isToggled={isToggled}/>
      <Experience innerRef={ref2} activeElement={activeElement} isToggled={isToggled}/>
      <Projects innerRef={ref3} activeElement={activeElement} setProjectId={setProjectId} setModalOpen={setModalOpen} isToggled={isToggled}/>
      <Contact innerRef={ref4} isToggled={isToggled}/>
    </div>
  );
}

export default App;
