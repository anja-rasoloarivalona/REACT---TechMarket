import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import classes from './Cart.css';
import CartItems from '../Cart/CartItems/CartItems';
import CartTotals from './CartTotal/CartTotal';

import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';
import { Link } from 'react-router-dom';




 class Cart extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
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
                    <CartTotals value={value} history={this.props.history} />
                  </React.Fragment>
                );

              } else {
                return (

                  <div className={classes.EmptyCart}>
                      <ReactSVG src={cartIcon} alt="Icon" className={classes.Icon}/>
                      <div className={classes.Title}>Your cart is currently empty</div>
                      <div className={classes.Text}>
                        <div>Before proceed to checkout you must add some products to your shopping cart</div>
                        <div>You will find a lot of interesting prodcuts on our "Store" page.</div>
                      </div>
                      
                      
                      <Link to="/store" className={classes.Link}>
                          Return to store
                      </Link>
                  </div>
                )
                  
              }


            }}
        </ProductConsumer>
      </section>  
      
      )
  }
}

export default Cart;

