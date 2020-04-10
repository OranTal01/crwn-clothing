import React from 'react';
import './App.css';

import HomePage from './pages/home/Home.page';
import ShopPage from './pages/shop/Shop.page';

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />
    </Switch>
  );
};

export default App;
