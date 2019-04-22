import React from 'react';
import classes from './CartItems.css';

import CartItem from '../CartItem/CartItem';

const cartItems = ({value}) => {

    const {cart} = value;

  return (
    <div className={classes.Items}>
    {
        cart.map(item => {
            return <CartItem key={item.id} item={item} value={value}/>
        })
    }
      
    </div>
  )
}

export default cartItems;
