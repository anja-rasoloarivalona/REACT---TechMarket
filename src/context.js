import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();


 class ProductProvider extends Component {

    state= {
         products: [],
         productsDetail: detailProduct,
         cart: []
    };

    componentDidMount() {
        this.productsListHandler();
    }

    productsListHandler = () => {
        let productsList = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            productsList = [...productsList, singleItem]
        });
        this.setState(() => {
            return {products: productsList}
        });
    };



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state
      }}>

      {this.props.children}

      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;



export {ProductProvider, ProductConsumer};
