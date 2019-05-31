import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navigation/Navigation';
import Sidedrawer from './components/Navigation/SideDrawer/SideDrawer';
import Footer from './components/Footer/Footer';


import Products from './pages/Products/Products';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';



import AppLayout from './components/AppLayout/AppLayout';


class App extends Component {
  render() {
    return (

      <AppLayout>
          <Navbar />
          <Sidedrawer />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/store" component={Products}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>             
            </Switch>
          <Footer />
      </AppLayout>
    );
  }
}

export default App;

/*
<Route component={Default}></Route> */