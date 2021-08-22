import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className="cards__item">
      <Link className="cards__item_link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Travel " className="cards__item__img" />
          <div className="cards__item__info">
            <h5 className="cards__item__text">
              {props.text}
            </h5>
          </div>
        </figure>
      </Link>
    </li>
      
    </>
  )
}

export default CardItem;
