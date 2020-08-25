import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: {imgageUrl, price, name, quantity} }) =>(
  <div className='cart-item'>
  <img src={imgageUrl} alt='item' />
  <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>
      {quantity} x ${price}
    </span>
  </div>
</div>

);

export default CartItem;
