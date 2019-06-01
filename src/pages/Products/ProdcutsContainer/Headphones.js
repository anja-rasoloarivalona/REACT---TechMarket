import React from 'react';
import Title from '../../../components/Title/Title';
import ProductsList from '../ProductsList/ProductsList';


const headphones = () => {
  return (
    <React.Fragment>
        <Title title="headphones" />
        <ProductsList type="wireless headphones"/>
    </React.Fragment>
  )
}


export default headphones;