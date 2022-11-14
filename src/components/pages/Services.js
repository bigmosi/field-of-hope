import React from 'react';
import Footer from '../Footer';
import '../../App.css';

export default function Services() {
  return (
    <div className='mainContainer'>
      <div className='image-cover'></div>
      <h1>The Need</h1>
      <div className='container'>
        <div className='description'>
          <div className='subContainer'>
            <h2>Uganda</h2>
            <p>
              Civil unrest removed many peasant farmers from their homes across Northern Uganda in the 90’s <br /> and early 2000s, and the effects are still being felt.<br /> While the cities are beginning to gain traction, <br />those smallholder farmers in rural northern Uganda are still living in severe poverty.
            </p>
          </div>
        </div>
        <div>
          <img className='farmer' alt='Travel Image' src="./images/group.jpg" />
        </div>
      </div>
      <div className='container-2'>
        <div className='container-3'>
          <div className='container-4'>
            <h2>83%</h2>
            <p>83% of Uganda’s population live in rural areas, mostly in the Northern and Eastern regions</p>
          </div>
          <div className='container-4'>
            <h2>84%</h2>
            <p>84% of those in these regions live in poverty
              (FAO, 2017; The World Bank, 2016)</p>
          </div>
          <div className='container-4'>
            <h2>65.6%</h2>
            <p>Farming is a way of life for 65.6% of the country</p>
          </div>
          <div className='container-4'>
            <h2>25%</h2>
            <p>Population remains undernourished as of 2017</p>
          </div>
        </div>
        <div className='section'>
          <p>With more agricultural knowledge
and more financial stability,
these households can begin to get back on their feet.</p>
           <p className='paragraph'>Field of Hope is dedicated to helping that happen.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
