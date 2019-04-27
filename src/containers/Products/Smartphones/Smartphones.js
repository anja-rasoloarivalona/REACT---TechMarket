import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';

const smartphones = () => {
  return (
    <ProductConsumer>
        { val => {

            const {products} = val;

            let searchedCategory = [...products];

            return searchedCategory.map(item => {
                return <Product 
                        key = {item.id}
                        product={item}/>
            })

        }}
    </ProductConsumer>
  )
}

export default smartphones;