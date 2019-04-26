import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import Product from '../../components/Product/Product';
import classes from './Products.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Route, Switch} from 'react-router-dom';
import Headphones from './Headphones/Headphones';


 class Products extends Component {
  render() {

    return (
      <section className={classes.Layout}>

            <Sidebar />

              <div className={classes.Products}>
                  <h1 className={classes.Title}>Our Headphones</h1>
                  <section className={classes.List}>
                  <ProductConsumer>
                        {val => {

                        const {searchedValue, products} = val;

                        if (searchedValue !== "") { 

                        let searchedProducts = products;
                        searchedProducts = searchedProducts .filter(item => {
                        return item.brand.toLowerCase().search(
                          searchedValue.toLowerCase()) !== -1;
                        });
                        return searchedProducts.map(item => {
                                  return <Product 
                                      key={item.id}
                                      product={item}/>
                            })} 
                          
                          else {

                        return (
                        <Switch>
                          <Route  path="/" component={Headphones} />
                          <Route  path="/headphones" component={Headphones} />
                          <Route  path="/tv" component={Headphones} />
                          <Route  path="/computers" component={Headphones} />
                          <Route  path="/smartphones" component={Headphones} />
                        </Switch>
                      
                          )}
                      }}
                  </ProductConsumer>
                </section>  
                
            </div>
      </section>
    )
  }
}


export default Products;







