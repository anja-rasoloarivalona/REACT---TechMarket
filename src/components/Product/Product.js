import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import classes from './Product.css';

 class Product extends Component {
  render() {

    const {id, title, subtitle, color, img, price, brand, inCart} = this.props.product;

    return (

    <ProductConsumer>
    {value => (
      <div className={classes.Product}>
          <div className={classes.ImgContainer}>
              <img src={img} alt="Product img" className={classes.Img}/>
          </div>
          <div className={classes.Details}>
               <h3 className={classes.Brand}>{brand}</h3>
               <div className={classes.Title}>{title}</div> 
               <div className={classes.Subtitle}>{subtitle} - {color}</div> 
               <div className={classes.Price}>${price}</div>

               <button className={classes.Button}>
                   <span className={classes.ButtonText}>Buy</span>
               </button>
          </div>
      </div>
      )}
      </ProductConsumer>
    )
  }
}

export default Product;
