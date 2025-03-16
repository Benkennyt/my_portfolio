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
  const [projectId, setProjectId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
    document.body.classList.remove('modalIsOpen');
  };

  const sections = [
    { ref: useInView({ threshold: 0.5 }), name: 'hero' },
    { ref: useInView({ threshold: 0.5 }), name: 'about' },
    { ref: useInView({ threshold: 0.5 }), name: 'experience' },
    { ref: useInView({ threshold: 0.5 }), name: 'projects' },
    { ref: useInView({ threshold: 0.5 }), name: 'contact' }
  ];

  useEffect(() => {
    sections.forEach(({ ref, name }) => {
      if (ref.inView) setActiveElement(name);
    });
  }, [sections]);

  return (
    <div className="App">
      <div className='container'>
        {modalOpen && (
          <ProjectDetails
            projectId={projectId}
            closeModal={handleModalClose}
            isToggled={isToggled}
          />
        )}
        <Navbar
          activeElement={activeElement}
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
        />
        <Hero innerRef={sections[0].ref.ref} isToggled={isToggled} />
        <About innerRef={sections[1].ref.ref} activeElement={activeElement} isToggled={isToggled} />
        <Experience innerRef={sections[2].ref.ref} activeElement={activeElement} isToggled={isToggled} />
        <Projects
          innerRef={sections[3].ref.ref}
          activeElement={activeElement}
          setProjectId={setProjectId}
          setModalOpen={setModalOpen}
          isToggled={isToggled}
        />
        <Contact innerRef={sections[4].ref.ref} isToggled={isToggled} />
      </div>
    </div>
  );
}

export default App;
