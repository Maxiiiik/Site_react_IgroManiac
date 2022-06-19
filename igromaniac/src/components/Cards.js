import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Останні статті!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/page_1/i9.jpg'
              text='Роль лінійки ігор Sim`s та вплив на ігрову культуру'
              label='History'
              path='/Page_1'
            />
            <CardItem
              src='images/i8.jpg'
              text='Повне занурення в ігровий процес'
              label='Smart'
              path='/Page_2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/i7.jpg'
              text='Чому варто купляти ігри офіційно!'
              label='Pirate'
              path='/Page_3'
            />

            <CardItem
              src='/images/i6.jpg'
              text='STALKER 2 без російщини??'
              label='База'
              path='/Page_5'
            />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Cards;
