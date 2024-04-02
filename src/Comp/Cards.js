import React from "react";
import '../Styles/cards.css';

const Cards =({item, handleClick}) => {
   const {title, author, price, img} = item;

   return(
    <div className="cards">
      <div className="image_box">
          <img src={img} alt=" "/>
      </div>

      <div className="details">
        <p className="a">{title}</p>
        <p className="a">{author}</p>
        <p className="a">Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>

      </div>
    </div>
   )
}
export default Cards