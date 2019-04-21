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
                <div className={classes.Price}>${price}</div>
              <img src={img} alt="Product img" className={classes.Img}/>
          </div>
          <div className={classes.Details}>
               <h4 className={classes.Brand}>{brand}</h4>
               <h5 className={classes.Subtitle}>{subtitle} - {color}</h5> 
           
               
               

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
