import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       <div className='field-container'>
        <div>
        <h1>FIELD <br /> OF HOPE</h1>
        <h3>BUILDING RESILIENCE</h3>
        </div>
        <button type='submit' className='button'>DONATE</button>
       </div>

     <div className='container'>
       <p>Empower a women.</p>
       <p>Equip a child.</p>
       <p>Give the gift of education <br /> and the tools for life.</p>
      <div className='button-container'>
        <button type='submit' className='button now-button'>GIVE NOW</button>
      </div>
     </div>
    </div>
  );
}

export default HeroSection;
