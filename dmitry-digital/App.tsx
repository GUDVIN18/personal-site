import React, { useState } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <Background />
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Services onOpenModal={openModal} />
      <Projects />
      <TechStack />
      <Contact onOpenModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default App;