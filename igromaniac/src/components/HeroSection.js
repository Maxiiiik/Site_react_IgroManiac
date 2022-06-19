import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={'/videos/v4.mp4'} autoPlay loop muted />
      <h1>Game News</h1>
      <p>What do you want?</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => {
            window.open("https://www.youtube.com/c/OLDboiUA", "_blank");
          }}
        >
          Recommend YT channel <i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => {
            window.open("https://www.youtube.com/watch?v=cdEEffF7_rU&ab_channel=%D0%95%D0%BD%D0%B4%D0%B6%D1%96%D0%9A%D1%80%D0%B5%D0%B9%D0%B4%D0%B0%2FAngyKreyda", "_blank");
          }}
        >
          Recommend video <i className='far fa-play-circle' />
        </Button>
      </div>

    </div>
  );
}

export default HeroSection;
