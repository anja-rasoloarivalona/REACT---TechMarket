import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import classes from './Details.css';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>{
          const { brand, img, info, price, subtitle, inCart} = value.productsDetail;

          return (
            <div className={classes.Details}>
                <div className={classes.ImgContainer}>
                  <img className={classes.Img} src={img}/>
                </div>
         
                <div className={classes.Info}>
                    <h1>Model: {subtitle}</h1>
                    <h4>Brand: {brand}</h4>
                    <h4>
                      price: ${price}
                    </h4>
                    <p className={classes.InfoContainer}> 
                      Some info about the product
                    </p>
                    <p>
                      {info}
                    </p>
                </div>
            </div>
          )

        }}
        
      </ProductConsumer>
    )
  }
}

export default Details