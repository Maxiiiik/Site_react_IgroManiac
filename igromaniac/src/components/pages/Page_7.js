import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Page_7() {
  return (
    <>
      <div className='hero-container'>
      <video src={'/videos/v13.mp4'} autoPlay loop muted />
      <h1>TMNT: Shredder's Revenge вийшла і виявилася гарною грою </h1>
      </div>
      <div className='cards'>
       
       <img src='images/page_7/i1.jpg'  />
       <h3>17.06.2022.</h3>
      <p  className='footer-subscription-heading' >
      Відбувся реліз ретроекшену TMNT: Shredder's Revenge . Все за класикою: є і трейлер на честь виходу, перші відгуки. Вони всі як один стверджують, що повернення піксельних черепашок-ніндзя вдалося на славу.
       </p>
       <img src='images/page_7/i2.jpg'  />
       <h2>Оцінки у  Shredder's Revenge такі:</h2><br></br>
       <h3>Metacritic (ПК-версія, 28 оглядів) - 85 зі 100.<br></br>
           OpenCritic (65 оглядів) - 87 зі 100, 97% критиків рекомендують.<br></br>
           Steam (1 480 відгуків) - 92 % позитивних оцінок.</h3><br></br>
       <p className='footer-subscription-text'>
       Критики хвалять гру за простий, але веселий геймплей у дусі старих Черепашок, а також виділяють гарний піксель-арт. Щоправда, дехто вважає, що грі не вистачило свіжих ідей, щоб стати по-справжньому великою. Гравці на повну силу віддаються солодкій ностальгії, хоча частина з них відзначають технічні неполадки в мережевому кооперативі.       </p>
       <p className='footer-subscription-text'>
       На проходження йде близько двох-трьох годин, але, схоже, це мало кого бентежить: для таких біт-ем-апів коротка сюжетка - це нормально, а розтягнути задоволення від  Shredder's Revenge допоможуть випробування і аркадний режим.       </p>
       <img src='images/page_7/i3.jpg'  />
        <p className='footer-subscription-text '>
        Нагадаємо, Shredder's Revenge базується на мультсеріалі кінця 1980-х (навіть заставку під ту саму музику зробили!) і пропонує лупити негідників як у старі добрі. Є комбо, суперудари та трішки прокачування, а також сім грабельних персонажів. Кооператив вміщує до шести осіб одночасно.
<br></br> <img src='images/page_7/i4.jpg'  />
TMNT: Shredder's Revenge доступна на ПК ( Steam ), PlayStation, Switch та Xbox. Гра також є у Game Pass. Підтримується крос-плей, але в обговореннях люди скаржаться , що він працює якось вибірково. Російська мова очікується трохи пізніше .       </p>

      </div>
      <Footer />
    </>
  );
}

export default Page_7;
