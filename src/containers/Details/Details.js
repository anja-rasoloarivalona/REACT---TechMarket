import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import classes from './Details.css';
import ButtonContainer from '../../components/Buttons/Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>{
          const { id, type, model, brand, img, info, price, inCart} = value.productsDetail;

          return (
            <div className={classes.Container}>
                <div className={classes.ImgContainer}>
                  <img className={classes.Img} src={img}/>
                </div>
         
                <div className={classes.Details}>
                    <h1 className={classes.Title}> {brand}</h1>
                    <h1 className={classes.Title}> {model}</h1>
                    
                    <h4 className={classes.Price}>
                      price: ${price}
                    </h4>

                    <div className={classes.InfoContainer}> 
                      {type}
                        <p className={classes.Info}>
                          {info}
                        </p>
                    </div>
                    
                    <div className={classes.Cta}>
                        <Link to='/store' className={classes.Link}>
                            <button className={classes.Button}>
                              Back
                            </button>
                        </Link>
                        <button className={classes.Button}
                                disabled={inCart ? true : false}
                                onClick={() => {
                                  value.addToCart(id);
                                }}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
          )

        }}
        
      </ProductConsumer>
    )
  }
}

export default Details