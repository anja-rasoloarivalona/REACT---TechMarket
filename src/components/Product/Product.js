import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import classes from './Product.css';
import {Link} from 'react-router-dom';

import ReactSVG from 'react-svg';
import cartIcon from '../../assets/icon/SVG/cart.svg';


 class Product extends Component {
  render() {

    const {id, model,brand, color, img, price, inCart, type} = this.props.product;

    return (

    <ProductConsumer>
    {value => (
      <div className={classes.Product}
            onClick={() => 
            value.handleDetail(id)}>

          <Link to="/details" className={classes.ImgContainer}>    
              <img src={img} alt="Product img" className={classes.Img}/>
          </Link>
         
          
          <div className={classes.Details}>
                <div className={classes.Title}>{brand} {model}</div>
                <div className={classes.Subtitle}>{type} - {color}</div>
                <div className={classes.Price}>${price}</div>
          
         
           
                <button className={classes.Button}
                       disabled={inCart ? true : false}
                        onClick={() => {
                            value.addToCart(id);                       
                        }}>
                  <ReactSVG src={cartIcon} className={classes.Icon}/>
                   <span className={classes.ButtonText} disabled>
                      {inCart ? 'In Cart' : 'Add to cart' }
                    </span> 
               </button>

          </div>
      </div>
      )}
      </ProductConsumer>
    )
  }
}

export default Product;
