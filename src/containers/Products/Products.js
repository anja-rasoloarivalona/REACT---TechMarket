import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import Product from '../../components/Product/Product';
import classes from './Products.css';


 class Products extends Component {
  render() {
    return (
      <div className={classes.Products}>
          <h1 className={classes.Title}>OUR PRODUCTS</h1>
          <section className={classes.List}>
          <ProductConsumer>
                {val => {
                  return val.products.map( item => {
                    return <Product 
                            key={item.id}
                            product={item}/>
                  })
                }}
             </ProductConsumer>
          </section>  
          
      </div>
    )
  }
}


export default Products;







