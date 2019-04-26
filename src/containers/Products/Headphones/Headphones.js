import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';


const headphones = () => {
  return (

    <ProductConsumer>
        { val => {

            const {products} = val;

            return products.map(item => {
                return <Product 
                        key = {item.id}
                        product={item}/>
            })

        }}
    </ProductConsumer>
  )
}


export default headphones;