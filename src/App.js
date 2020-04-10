import React from 'react';
import './App.css';

import HomePage from './pages/home/Home.page';
import ShopPage from './pages/shop/Shop.page';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-sign-up.page';

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ ShopPage } />
        <Route path="/sign-in" component={ SignInAndSignUp } />
      </Switch>
    </div>
  );
};

export default App;
