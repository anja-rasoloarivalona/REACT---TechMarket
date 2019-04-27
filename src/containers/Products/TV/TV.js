import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';
import classes from './TV.css';



const tv = () => {
  return (
  <React.Fragment>
    <h1 className={classes.Title}>Our Tv</h1>
    <section className={classes.List}>
    <ProductConsumer>
        { val => {

            const {products} = val;
            let tempProducts = [];

            products.forEach(item => {
                if(item.type === "tv") {
                const singleItem = {...item};
                tempProducts = [...tempProducts, singleItem]}
           });

            return tempProducts.map(item => {
                return <Product 
                        key = {item.id}
                        product={item}/>
            })

        }}
    </ProductConsumer>
    </section>
    </React.Fragment>
  )
}


export default tv;
