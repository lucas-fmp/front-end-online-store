import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

// initial commit

export default App;
