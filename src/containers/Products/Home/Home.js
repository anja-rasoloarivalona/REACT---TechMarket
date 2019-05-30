import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';
import classes from './Home.css';
import Title from '../UI/Title/Title';

const home = () => {
  return (

    <React.Fragment>
        <Title title="Our products" />
        <section className={classes.List}>
            <ProductConsumer>  
                { val => {
                    const {searchedValue, products} = val;
                    let searchedProducts = [...products];

                    if (searchedValue !== "") {         
                        searchedProducts = searchedProducts.filter(item => {

                            if( item.brand
                                .toLowerCase()
                                .search(searchedValue.toLowerCase()) !== -1) {
                            return item

                        } else {

                        }  if( item.type
                            .toLowerCase()
                            .search(searchedValue.toLowerCase()) !== -1) {
                                return item     
                            } else {
                                if( item.model
                                    .toLowerCase()
                                    .search(searchedValue.toLowerCase()) !== -1) {
                                        return item     
                                    } else {
                                        if( item.color
                                            .toLowerCase()
                                            .search(searchedValue.toLowerCase()) !== -1) {
                                                return item     
                                            }
                                    }
                            }
                    
                        })

                        return searchedProducts.map(item => {
                            return <Product 
                                        key={item.id}
                                        product={item} /> })
                        
                    
                        } else {
                        return searchedProducts.map(item => {
                            return <Product 
                                        key={item.id}
                                        product={item} />
                        })
                    }
        }}
    </ProductConsumer>
    </section>  
    </React.Fragment>
  )
}

export default home;
