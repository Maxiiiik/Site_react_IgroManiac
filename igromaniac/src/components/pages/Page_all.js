import React from 'react';
import '../../App.css';
import Cards from '../Cards2';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
/*export default function Page_all() {
  return <h1 className='Page_all'>Home3</h1>;
}*/
/*
function Page_all() {
  return (
    <div className='hero-container'>
      <video src={'/videos/v3.mp4'} autoPlay loop muted />
      <h1>Home2</h1>

    </div>
  );
}

export default Page_all;*/

function Page_all() {
  return (
    <>
      <div className='hero-container'>
       <video src={'/videos/v0.mp4'} autoPlay loop muted />
       <h1>Page all</h1>

      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Page_all;
