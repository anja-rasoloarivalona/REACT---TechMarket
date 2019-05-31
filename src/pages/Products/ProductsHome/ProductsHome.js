import React from "react";
import classes from "./ProductsHome.css";
import { ProductConsumer } from "../../../context";
import Product from "../../../components/Product/Product";
import Title from "../UI/Title/Title";
import ProductNotFound from "../ProductNotFound/ProductNotFound";

const home = () => {
  return (
    <React.Fragment>
      <Title title="Our products" />
      <section className={classes.List}>

        
        <ProductConsumer>
          {val => {
            const { searchedValue, products } = val;
            let searchedProducts = [...products];

            if (searchedValue !== "") {
              searchedProducts = searchedProducts.filter(item => {
                if (
                  item.brand
                    .toLowerCase()
                    .search(searchedValue.toLowerCase()) !== -1
                ) {
                  return item;
                } else {
                }
                if (
                  item.type
                    .toLowerCase()
                    .search(searchedValue.toLowerCase()) !== -1
                ) {
                  return item;
                } else {
                  if (
                    item.model
                      .toLowerCase()
                      .search(searchedValue.toLowerCase()) !== -1
                  ) {
                    return item;
                  } else {
                    if (
                      item.color
                        .toLowerCase()
                        .search(searchedValue.toLowerCase()) !== -1
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
            
            
            
            
            else {
              return searchedProducts.map(item => {
                return <Product key={item.id} product={item} />;
              });
            }
          }}
        </ProductConsumer>
      </section>
    </React.Fragment>
  );
};

export default home;
