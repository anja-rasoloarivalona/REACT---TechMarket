import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';
import classes from './Headphones.css';
import Title from '../UI/Title/Title';


const headphones = () => {
  return (
    <React.Fragment>
    <Title title="headphones" />
    <section className={classes.List}>
    <ProductConsumer>
        { val => {

            const {searchedValue, products} = val;

            let tempProducts = [];

            products.forEach(item => {
                if(item.type === "wireless headphones") {
                const singleItem = {...item};
                tempProducts = [...tempProducts, singleItem]}
           });



           let searchedProducts = [...tempProducts];

           if (searchedValue !== "") {         
            searchedProducts = searchedProducts.filter(item => {

                return item.brand
                        .toLowerCase()
                        .search(searchedValue.toLowerCase()) !== -1;
           
            })


            return searchedProducts.map(item => {
                     return <Product 
                          key={item.id}
                          product={item} /> })


          } else {

            return tempProducts.map(item => {
                return <Product 
                        key = {item.id}
                        product={item}/>
            })

          }




        }}
    </ProductConsumer>
    </section>
    </React.Fragment>
  )
}


export default headphones;