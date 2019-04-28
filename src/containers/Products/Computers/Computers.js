import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';
import classes from './Computers.css';
import Title from '../UI/Title/Title';


const computers = () => {
  return (

    <React.Fragment>
    <Title title="computers" />
    <section className={classes.List}>
    <ProductConsumer>
        { val => {

            const {products} = val;
            let tempProducts = [];

            products.forEach(item => {
                if(item.type === "computers") {
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


export default computers;
