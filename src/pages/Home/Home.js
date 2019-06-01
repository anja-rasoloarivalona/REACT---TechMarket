import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { searchProductsHandler } from "../../shared/searchProductsHandler/searchProductsHandler";
import HomeMain from "./HomeMain/HomeMain";

export default class Home extends Component {
  state = {
    sliceCount: 3
  };

  updateCount() {
    if (window.innerWidth < 1150) {
      this.setState({ sliceCount: 4 });
    } else {
      this.setState({ sliceCount: 3 });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updateCount();
    window.addEventListener("resize", this.updateCount.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCount.bind(this));
  }

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
