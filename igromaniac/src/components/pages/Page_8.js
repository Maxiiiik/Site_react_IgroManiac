import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Page_8() {
  return (
    <>
      <div className='hero-container'>
      <video src={'/videos/v12.mp4'} autoPlay loop muted />
      <h1>Lollipop Chainsaw повертається — чи з ремайстром, чи з продовженням</h1>
      </div>
      <div className='cards'>
       
       <img src='images/page_8/i1.jpg'  />
       <h3>18.06.2022.</h3>
      <p  className='footer-subscription-heading' >
      Lollipop Chainsaw — зомбі-екшен 2012 року, який перш за все запам'ятався головною героїнею — чирлідером із рожевою бензопилою в руках та з головою свого бойфренда на поясі. Якщо ви пропустили це чудо японської думки, то незабаром у вас з'явиться другий шанс.      </p>
       <img src='images/page_8/i2.jpg'  />
       <p className='footer-subscription-text'>
        Видавництва Dragami Games оголосив , що збирається повернути Lollipop Chainsaw . В якому саме вигляді, не уточнюється, але ми б зробили ставку як мінімум на ремайстер: оригінал застряг на PS3 і Xbox 360, не має версії для ПК і навіть не входить до списку офіційно підтримуваних ігор щодо зворотної сумісності на Xbox One та Xbox Series.       </p>
        <img src='images/page_8/i3.jpg'  />
       <p className='footer-subscription-text'>
       У Lollipop Chainsaw цікаво переплелися відомі індустріальні імена: керівником гри виступав Гоїті Суду ( Goichi Suda ;), одним з основних сценаристів був Джеймс Ганн (James Gunn; режисер «Вартових Галактики» ), а серед композиторів значився Акіра Ямаока (Akira Yamoka).

Втім, зірковий склад авторів не врятував від прохолодного прийому в пресі — Lollipop Chainsaw отримала оцінки в районі 69 зі 100. Критики хвалили жарти та дивакуватий антураж, проте часто лаяли нудний геймплей. Тираж гри свого часу перевалив за мільйон копій — здається, вона залишається одним із найуспішніших проектів Grasshopper Manufacture .       </p>
<img src='images/page_8/i4.jpg'  />
        <p className='footer-subscription-text '>
        Ходили чутки , що Grasshopper Manufacture також збирається повернути з небуття інший свій екшен епохи Xbox 360 - Shadows of the Damned . Але про нього видавництво "Dragami Games" нічого не говорить.        </p>
        
      </div>
      <Footer />
    </>
  );
}

export default Page_8;
