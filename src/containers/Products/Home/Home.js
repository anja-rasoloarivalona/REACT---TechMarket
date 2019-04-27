import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';

const home = () => {
  return (
    <ProductConsumer>
        { val => {
            const {searchedValue, products} = val;
            let searchedProducts = [...products];

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
                return searchedProducts.map(item => {
                    return <Product 
                                key={item.id}
                                product={item} />
                })
            }

        }}
    </ProductConsumer>
  )
}

export default home;
