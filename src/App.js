import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navigation/Navigation';
import Products from './containers/Products/Products';
import Details from './containers/Details/Details';
import Cart from './containers/Cart/Cart';


import Default from './components/Default';

import Layout from './components/Layout/Layout';


class App extends Component {
  render() {
    return (

      <Layout>
          <Navbar />
            <Switch>
                <Route exact path="/" component={Products}/>
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route Component={Default}/>
            </Switch>
      </Layout>
    );
  }
}

export default App;
