import { ProductConsumer } from "../../context";
import React from "react";
import classes from './searchProductsHandler.css';
import Title from '../../pages/Products/UI/Title/Title';
import ProductNotFound from '../../pages/Products/ProductNotFound/ProductNotFound';
import Product from '../../components/Product/Product';





export function searchProductsHandler (searchValue) {
  return (
    <React.Fragment>
      <Title title="Our products" />
      <section className={classes.List}>
        <ProductConsumer>
          {val => {
            const { products } = val;
            let searchedProducts = [...products];

            if (searchValue !== "") {
              searchedProducts = searchedProducts.filter(item => {
                if (
                  item.brand.toLowerCase().search(searchValue.toLowerCase()) !==
                  -1
                ) {
                  return item;
                } else {
                }
                if (
                  item.type.toLowerCase().search(searchValue.toLowerCase()) !==
                  -1
                ) {
                  return item;
                } else {
                  if (
                    item.model
                      .toLowerCase()
                      .search(searchValue.toLowerCase()) !== -1
                  ) {
                    return item;
                  } else {
                    if (
                      item.color
                        .toLowerCase()
                        .search(searchValue.toLowerCase()) !== -1
                    ) {
                      return item;
                    }
                  }
                }
              });

              if (searchedProducts.length > 0) {
                return searchedProducts.map(item => {
                  return <Product key={item.id} product={item} />;
                });
              } else {
                return <ProductNotFound />;
              }
            }
          }}
        </ProductConsumer>
      </section>
    </React.Fragment>
  );
};


