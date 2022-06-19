import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Page_5() {
  return (
    <>
                      <div className='hero-container'>
      <video src={'/videos/v10.mp4'} autoPlay loop muted />

      <h1>STALKER 2 без російщини!</h1>
 
      </div>
      <div className='cards'>
       <h1>рашиське ком’юніті пішло за своїм кораблем</h1>
       <br></br>
       <img src='images/page_5/i1.jpg'  />
       <h3>15.06.2022.</h3>
      <p  className='footer-subscription-heading' >
      S.T.A.L.K.E.R. 2: Heart of Chornobyl вийде без російського озвучення. Повна локалізація гри буде тільки українською та англійською мовами. Таке рішення GSC Game World прийняла у зв'язку з агресією РФ проти України.
<br></br>
Спочатку користувачі помітили, що згадка російського озвучення зникла з офіційного сайту S.T.A.L.K.E.R. 2. При цьому субтитри залишилися, тобто текст буде переведений.      </p>
<img src='images/page_5/i2.jpg'  />
    <p className='footer-subscription-text'>
    Портал GameDev DOU запросив у GSC Game World коментар щодо локалізації. Розробники відповіли журналістам: "Так, це правда. Вже прибрали з сайту озвучення російською. Субтитри залишаються".
<br></br>
Чому розробники вирішили не прибирати переклад тексту, невідомо. Можливо, він вже як мінімум частково готовий. А ще автори могли залишити субтитри для людей, які розмовляють російською за межами РФ і захочуть пограти в S.T.A.L.K.E.R. 2.
<br></br>
Нагадаємо, GSC Game World відразу після повномасштабного вторгнення Росії в Україну засудила дії агресора. Потім студія зняла з продажу в РФ всі свої проекти, включаючи S.T.A.L.K.E.R. 2. Команда також зібрала понад $800 тисяч і відправила кошти на потреби ЗСУ.
    </p>
    <img src='images/page_5/i3.jpg'  />
    <p className='footer-subscription-text'>
    S.T.A.L.K.E.R. 2: Heart of Chernobyl — основні подробиці: <br></br>
    <br></br>-Дії сиквела розгорнуться в зоні відчуження Чорнобильської АЕС. Гра буде поєднувати елементи шутера від першої особи, хорора і імерсивного симулятора.
    <br></br>-Історія буде варіативною і відзначиться декількома кінцівками. У процесі проходження користувачам належить приймати рішення, які спричинять за собою наслідки.
    <br></br>-S.T.A.L.K.E.R. 2 обзаведеться просунутим штучним інтелектом і вдосконаленою системою симуляції життя A-Life 2.0. Завдяки їй персонажі, мутанти і тварини будуть взаємодіяти один з одним і з оточенням без участі гравця.
    <br></br>-Ще планується реалізувати 30 видів зброї, динамічну зміну погодних умов, механіки виживання і багато іншого.
    <br></br>-Гру нещодавно перенесли на 2023 рік у зв'язку з припиненням розробки після повномасштабного вторгнення Росії.
    </p>
      
      </div>
      <Footer />
    </>
  );
}
{
    /*
    <img src={'/img'} autoPlay loop muted /> 
    */
}
export default Page_5;
