import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeMain.css";

import background from "../../../assets/img/beats.jpg";
import tv from "../../../assets/img/tv.jpg";
import Button from "../../../components/Buttons/Button";
import Product from "../../../components/Product/Product";
import { ProductConsumer } from "../../../context";

class HomeMain extends Component {
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
        <section className={classes.Layout}>
          <div
            className={classes.Home}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" +
                background +
                ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className={classes.HomeText}>
              <div>NEW ARRIVALS</div>
              <div>BEATS STUDIO</div>
              <p>
                Cum nos notissimus sane accitus consociatos quae foveis cum
                turmis nos agitabantur cerneret cogebatur has semper exhalaret
                foveis turmis occultis certamina bellicosus cum occultis
                emergentes sui subsidia sed nos abnuens.
              </p>
              <Button buttonValue="Discover" path="/store/headphones" />
            </div>
          </div>
          <div className={classes.Latest}>
            <div className={classes.LatestTitle}>Latest products</div>
            <section className={classes.LatestList}>
              <ProductConsumer>
                {val => {
                  const { products } = val;
                  let tempProducts = [];

                  products.forEach(item => {
                    if (item.type === "smartphones") {
                      const singleItem = { ...item };
                      tempProducts = [...tempProducts, singleItem];
                    }
                  });

                  let prod = tempProducts.slice(0, this.state.sliceCount);

                  return prod.map(item => {
                    return <Product key={item.id} product={item} />;
                  });
                }}
              </ProductConsumer>
            </section>

            <Link to="/store/smartphones" className={classes.LatestLink}>
              VIEW MORE
            </Link>
          </div>



          <div
            className={classes.HomeTV}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" +
                tv +
                ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className={classes.HomeTextTV}>
              <div>NEW ARRIVALS</div>
              <div>SHARP AQUOS 3D</div>
              <p>
                Cum nos notissimus sane accitus consociatos quae foveis cum
                turmis nos agitabantur cerneret cogebatur has semper exhalaret
                foveis turmis occultis certamina bellicosus cum occultis
                emergentes sui subsidia sed nos abnuens.
              </p>
              <Button buttonValue="Discover" path="/store/tv" />
            </div>
          </div>


          <div className={classes.LatestPC}>
            <div className={classes.LatestTitlePC}>Latest products</div>
            <section className={classes.LatestListPC}>
              <ProductConsumer>
                {val => {
                  const { products } = val;
                  let tempProducts = [];

                  products.forEach(item => {
                    if (item.type === "computers") {
                      const singleItem = { ...item };
                      tempProducts = [...tempProducts, singleItem];
                    }
                  });

                  let prod = tempProducts.slice(0, this.state.sliceCount);

                  return prod.map(item => {
                    return <Product key={item.id} product={item} />;
                  });
                }}
              </ProductConsumer>
            </section>

            <Link to="/store/computers" className={classes.LatestLinkPC}>
              VIEW MORE
            </Link>
          </div>



        </section>
      </React.Fragment>
    );
  }
}

export default HomeMain;
