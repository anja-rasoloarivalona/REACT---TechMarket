import React from 'react';
import Title from '../UI/Title/Title';
import ProdcutsList from '../ProductsList/ProductsList';
import ProductsList from '../ProductsList/ProductsList';


const tv = () => {
  return (
    <React.Fragment>
        <Title title="tv"/>
        <ProductsList type="tv" />
    </React.Fragment>
  )
}


export default tv;
