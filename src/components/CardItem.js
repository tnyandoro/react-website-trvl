import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
    <li className="cards_items">
      <Link className="cards_items_link">
        <figure className="cards_item_pic-wrapper">
          <img src="" alt="" className="cards_item_img" />
        </figure>
      </Link>
    </li>
      
    </>
  )
}

export default CardItem;
