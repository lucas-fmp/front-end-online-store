import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/product/:id" component={ ProductPage } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

// initial commit

export default App;
