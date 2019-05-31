import React from 'react';
import Title from '../UI/Title/Title';
import ProductList from '../ProductsList/ProductsList';



const smartphones = () => {
  return (
    <React.Fragment>
        <Title title="smartphones" />
        <ProductList type="smartphones" />
    </React.Fragment>
  )
}


export default smartphones;