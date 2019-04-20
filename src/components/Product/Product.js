import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import classes from './Product.css';

 class Product extends Component {
  render() {

    const {id, title, img, price, inCart, brand} = this.props.product;

    return (

    <ProductConsumer>
    {value => (
      <div className={classes.Product}>
          <div className={classes.ImgContainer}>
              <img src={img} alt="Product img" className={classes.Img}/>
          </div>
          <div className={classes.Details}>
               <h3 className={classes.Title}>{title}</h3>
               <div className={classes.Brand}>By {brand}</div> 
               <div className={classes.Price}>${price}</div>
          </div>
      </div>
      )}
      </ProductConsumer>
    )
  }
}

export default Product;
