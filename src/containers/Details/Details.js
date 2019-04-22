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
          const { type, model, brand, img, info, price, inCart} = value.productsDetail;

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
                        <Link to='/' className={classes.Link}>
                            <ButtonContainer className={classes.Button}>
                              Back
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer className={classes.Button}>
                            Add to cart
                        </ButtonContainer>
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