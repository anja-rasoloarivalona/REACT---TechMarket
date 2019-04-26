import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import Product from '../../components/Product/Product';
import classes from './Products.css';


 class Products extends Component {
  render() {
    return (
      <div className={classes.Products}>
          <h1 className={classes.Title}>Our Headphones</h1>
          <section className={classes.List}>
          <ProductConsumer>
                {val => {

                  const {searchedValue, products} = val;



                  if (searchedValue !== "") { 
                  let searchedProducts = products;

                  searchedProducts = searchedProducts .filter(item => {
                  return item.brand.toLowerCase().search(
                    searchedValue.toLowerCase()) !== -1;
                  });
                  

                   return searchedProducts.map(item => {
                            return <Product 
                                key={item.id}
                                product={item}/>
                      })

                  

                  } else {

                  return  products.map( item => {
                    return <Product 
                            key={item.id}
                            product={item}/>
                  })}
                }}
             </ProductConsumer>
          </section>  
          
      </div>
    )
  }
}


export default Products;







