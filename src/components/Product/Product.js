import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import classes from './Product.css';
import {Link} from 'react-router-dom';

 class Product extends Component {
  render() {

    const {id, title, subtitle, color, img, price, brand, inCart} = this.props.product;

    return (

    <ProductConsumer>
    {value => (
      <div className={classes.Product}
            onClick={() => 
            value.handleDetail(id)}>

          <div className={classes.ImgContainer}>
                <div className={classes.Price}>${price}</div>
            <Link to="/details">
              <img src={img} alt="Product img" className={classes.Img}/>
            </Link>
          </div>
          
          <div className={classes.Details}>
               <h4 className={classes.Brand}>{brand}</h4>
               <h5 className={classes.Subtitle}>{subtitle} - {color}</h5> 
           
               
               

               <button className={classes.Button}
                       disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id)
                          ;
                        }}>

                   <span className={classes.ButtonText} disabled>
                      {inCart ? 'In Cart' : 'Buy' }</span>
               </button>
          </div>
      </div>
      )}
      </ProductConsumer>
    )
  }
}

export default Product;
