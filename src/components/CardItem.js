import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
    <li className="cards_items">
      <Link className="cards_items_link">
        <figure className="cards_item_pic-wrapper">
          <img src="" alt="Travel " className="cards_item_img" />
          <div className="cards_item_info">
            <h5 className="cards_item_text">

            </h5>
          </div>
        </figure>
      </Link>
    </li>
      
    </>
  )
}

export default CardItem;
