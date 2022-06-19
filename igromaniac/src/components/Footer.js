import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          E-mail: shuprudkomax@gmail.com
        </p>
        <p className='footer-subscription-text'>
          Phone number: 38(012)345 567 89
        </p>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Sponsorships</h2>
            <Link to= '/' >Donate us </Link>
        </div> 
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.youtube.com/channel/UCfmcFGIfND-LHlFSiCd-uCQ'>Youtube</Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            IgroManiac
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Copyright © 2022 All rights reserved IgroManiac</small>
          <div class='social-icons'>

            <Link
              class='social-icon-link youtube'
              to = "https://www.youtube.com/channel/UCfmcFGIfND-LHlFSiCd-uCQ"
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            <Link
              class='social-icon-link twitch'
              to = 'https://www.twitch.tv/taitake'
              target='_blank'
              aria-label='Twitch'
              
            >
              <i class='fab fa-twitch' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;