import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import classes from './Cart.css';
import CartItems from './CartItems/CartItems';
import CartTotals from './CartTotal/CartTotal';

import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';
import { Link } from 'react-router-dom';

import ProductNotFound from '../Products/ProductNotFound/ProductNotFound';
import Product from '../../components/Product/Product';


 class Cart extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <section className={classes.Cart}>
        <ProductConsumer>
            {value => {
              const {cart, searchedValue, products} = value;
              let searchedProducts = [...products];

              if (searchedValue !== "") {         
                searchedProducts = searchedProducts.filter(item => {

                    if( item.brand
                        .toLowerCase()
                        .search(searchedValue.toLowerCase()) !== -1) {
                    return item

                } else {

                }  if( item.type
                    .toLowerCase()
                    .search(searchedValue.toLowerCase()) !== -1) {
                        return item     
                    } else {
                        if( item.model
                            .toLowerCase()
                            .search(searchedValue.toLowerCase()) !== -1) {
                                return item     
                            } else {
                                if( item.color
                                    .toLowerCase()
                                    .search(searchedValue.toLowerCase()) !== -1) {
                                        return item     
                                    }
                            }
                    }
            
                })



                if(searchedProducts.length > 0) {
                        return (<div className={classes.List}>
                              {
                                          searchedProducts.map(item => {
                                            return (
                                                <Product 
                                                        key={item.id}
                                                        product={item}/>
                                            
                                            )      
                                          })
                              }
                              </div>)
                      

                   } else {
                       return  (

                        <div className={classes.List}>
                              <ProductNotFound />
                        </div>
                       )
                        
                   }
                
            
                
                } else {

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

              }


              


            }}
        </ProductConsumer>
      </section>  
      
      )
  }
}

export default Cart;

