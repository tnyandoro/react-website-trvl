import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
    <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src='./images/img-9.jpg'
              text='Explore the most famous waterfall deep down in the Zimbabwe'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src='./images/img-2.jpg'
              text='Inyanga hs the most beautiful forestry in the Zimbabwe'
              label='Luxury'
              path='/services'
            />
          </ul>
           <ul className="cards__items">
            <CardItem 
              src='./images/img-3.jpg'
              text='Explore the most famous waterfall deep down in the Zimbabwe'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src='./images/img-4.jpg'
              text='Inyanga hs the most beautiful forestry in the Zimbabwe'
              label='Luxury'
              path='/services'
            />
            <CardItem 
              src='./images/img-8.jpg'
              text='Inyanga hs the most beautiful forestry in the Zimbabwe'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
