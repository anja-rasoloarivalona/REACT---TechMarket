import React from 'react';
import Title from '../../../components/Title/Title';
import ProductList from '../ProductsList/ProductsList';


const computers = () => {
  return (

    <React.Fragment>
      <Title title="computers" />
      <ProductList type="computers" />
    </React.Fragment>
  )
}


export default computers;
