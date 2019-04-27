import React from 'react';
import {ProductConsumer} from '../../../context';
import Product from '../../../components/Product/Product';



const headphones = () => {
  return (

    <ProductConsumer>
        { val => {

            const {products} = val;
            let tempProducts = [];

            products.forEach(item => {
                if(item.type === "wireless headphones") {
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
  )
}


export default headphones;