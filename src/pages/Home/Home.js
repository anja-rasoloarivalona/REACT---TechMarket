import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { searchProductsHandler } from "../../shared/searchProductsHandler/searchProductsHandler";
import HomeMain from "./HomeMain/HomeMain";

export default class Home extends Component {
  

  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {val => {
            const { searchedValue } = val;

            if (searchedValue !== "") {
              return searchProductsHandler(searchedValue);
            } else {
              return <HomeMain />;
            }
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
