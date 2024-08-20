

// Card.js
import React, { useState } from 'react';
import './Card.css';
import { useDispatchCart, useCart } from '../ContextReducer';

function Card(props) {
  const foodItem = props.foodItems;
  const dispatch = useDispatchCart();
  const data = useCart();
  const [qty, setQty] = useState(1);

  const handleAddtoCart = async () => {
    await dispatch({
      type: 'ADD',
      id: foodItem._id,
      name: foodItem.name,
      price: foodItem.price,
      finalPrice: foodItem.final,
      qty: qty
    });
    console.log(data);
  };

  const final = qty * foodItem.price;

  return (
    <div className="card">
      {foodItem.img && <img src={foodItem.img} alt={foodItem.name} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{foodItem.name}</h2>
        <p className="card-text">{foodItem.description}</p>
        <div className='quantity'>
          <select className='select-btn' onChange={(e) => setQty(parseInt(e.target.value))}>
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} className="select-value" value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <div className='price'>Rs.{foodItem.price}</div>
          <div className='total'>Total: Rs.{final}</div>
          <div className='add' onClick={handleAddtoCart}>Add to cart</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
