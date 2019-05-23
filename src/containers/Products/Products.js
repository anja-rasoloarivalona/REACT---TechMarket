import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import classes from './Products.css';


import Home from './Home/Home';
import Headphones from './Headphones/Headphones';
import Computers from './Computers/Computers';
import TV from './TV/TV';
import Smartphones from './Smartphones/Smartphones';


 class Products extends Component {
  render() {

    return (
      <section className={classes.Layout}>
              <div className={classes.Products}>                      
                        <Route exact path="/store" component={Home}></Route>
                        <Route path="/store/headphones" component={Headphones}></Route>
                        <Route path="/store/computers" component={Computers}></Route>
                        <Route path="/store/tv" component={TV}></Route>
                        <Route path="/store/smartphones" component={Smartphones}></Route>                                
            </div>
      </section>
    )
  }
}


export default Products;







