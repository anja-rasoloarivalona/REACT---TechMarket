import React from 'react'
import { Link } from "react-router-dom";
import classes from "./HomeMain.css";

import background from "../../../assets/img/beats.jpg";
import Button from "../../../components/Buttons/Button";
import Product from "../../../components/Product/Product";

const homeMain = () => {
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
                          Cum nos notissimus sane accitus consociatos quae
                          foveis cum turmis nos agitabantur cerneret cogebatur
                          has semper exhalaret foveis turmis occultis certamina
                          bellicosus cum occultis emergentes sui subsidia sed
                          nos abnuens.
                        </p>
                        <Button
                          buttonValue="Discover"
                          path="/store/headphones"
                        />
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

                            let prod = tempProducts.slice(
                              0,
                              this.state.sliceCount
                            );

                            return prod.map(item => {
                              return <Product key={item.id} product={item} />;
                            });
                          }}
                        </ProductConsumer>
                      </section>

                      <Link
                        to="/store/smartphones"
                        className={classes.LatestLink}
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </section>
                </React.Fragment>
    )
}

export default homeMain;
