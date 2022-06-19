import React from 'react';
import './Cards2.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Огляд всіх статтей</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

                        <CardItem
              src='/images/i6.jpg'
              text='STALKER 2 без російщини??'
              label='База'
              path='/Page_5'
            />

                        <CardItem
              src='images/i7.jpg'
              text='Чому варто купляти ігри офіційно!'
              label='Піратство'
              path='/Page_3'
            />
                      <CardItem
              src='images/img-10.png'
              text='Огляд South Park: The Fractured but Whole.'
              label='Огляд'
              path='/Page_6'
            />
                        <CardItem
              src='images/i11.jpg'
              text='Пікантне продовження'
              label='Геймдев'
              path='/Page_8'
              
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/i8.jpg'
              text='Повне занурення в ігровий процес'
              label='Розумне'
              path='/Page_2'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Нова FIFA 23'
              label='Спорт'
              path='/Page_4'
            />
            <CardItem
              src='images/page_1/i9.jpg'
              text='Роль лінійки ігор Sim`s та вплив на ігрову культуру'
              label='Історія'
              path='/Page_1'
              
            />
                        <CardItem
              src='images/i22.jpg'
              text='Старі ЧЕРЕПАШКИ'
              label='Новинка'
              path='/Page_7'
              
            />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Cards;
