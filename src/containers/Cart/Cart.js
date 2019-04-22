import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import classes from './Cart.css';
import CartItems from '../Cart/CartItems/CartItems';



 class Cart extends Component {
  render() {
    return (
      <section className={classes.Cart}>
        <ProductConsumer>
            {value => {
              const {cart} = value;

              if(cart.length > 0) {

                return (
                  <React.Fragment>
                    <CartItems value={value}/>
                  </React.Fragment>
                );

              } else {
                return <h1>Your cart is empty</h1>
              }


            }}
        </ProductConsumer>
      </section>  
      
      )
  }
}

export default Cart;

