import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Page_4() {
  return (
    <>
                  <div className='hero-container'>
      <video src={'/videos/v9.mp4'} autoPlay loop muted />

      <h1>Нова FIFA 23!</h1>
 
      </div>
      <div className='cards'>
       <h1>FIFA 23 стане останньою в серії. Electronic Arts і ФІФА припиняють співпрацю</h1>
       <br></br>
       <img src='images/page_4/i1.jpg'  />
       <h3>14.06.2022.</h3>
      <p  className='footer-subscription-heading' >
      Компанія Electronic Arts повідомила про припинення співпраці з ФІФА. Цьогорічний футбольний симулятор FIFA 23 стане останньою грою в серії. Про це повідомляється на офіційному сайті EA.       </p>
       <p className='footer-subscription-text'>
       <h2>Розробник продовжить випускати гру під новою назвою EA Sports FC.</h2>
<br></br>
Більшість відомих світових клубів та зірок, як і раніше, будуть доступні для гри завдяки окремим ліцензійним угодам з командами та лігами.
<br></br>
За інформацією New York Times, ФІФА щороку отримувала від Electronic Arts $150 млн, але хотіла вдвічі більше. Після чергового раунду невдалих переговорів сторони домовились про припинення співпраці.
<br></br>
Electronic Arts випускала комп'ютерні ігри під брендом FIFA з 1993 року. За останні 20 років гра принесла розробникам понад $20 млрд.
<br></br>
ФІФА планує знайти іншого розробника для футбольного симулятора під своїм брендом. </p>
<img src='images/page_4/gif.jpg'  />
      
      </div>
      <Footer />
    </>
  );
}

export default Page_4;