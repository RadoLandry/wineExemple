
'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';

export default function Home() {
  // Initialise AOS (Animate On Scroll) lors du montage du composant
  useEffect(() => {
    // Remplacez cette valeur par la durée souhaitée
    AOS.init({
      duration: 1000,
      once:false, 
      // Ajoutez d'autres options AOS ici si nécessaire
    });
  }, []);

  return (
    <div>
      <Hero/>
    </div>
  );
}