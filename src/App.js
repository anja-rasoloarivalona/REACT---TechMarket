import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


import Products from './containers/Products/Products';
import Details from './containers/Details/Details';
import Cart from './containers/Cart/Cart';
import Home from './containers/Home/Home';


import Default from './components/Default';

import Layout from './components/Layout/Layout';


class App extends Component {
  render() {
    return (

      <Layout>
          <Navbar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/store" component={Products}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>             
            </Switch>
          <Footer />
      </Layout>
    );
  }
}

export default App;

/*
<Route component={Default}></Route> */