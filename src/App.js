import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './pages/home/Home.page';
import ShopPage from './pages/shop/Shop.page';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-sign-up.page';
import { auth } from './firebase/firebase.utils';
import { useEffect } from 'react';

let unsubscribeFromAuth = null;

const App = () => {

  const [user, setUser] = useState('');

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      setUser(userAuth);
    });
  }, []);

  return (
    <div>
      <Header user={ user } />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ ShopPage } />
        <Route path="/sign-in" component={ SignInAndSignUp } />
      </Switch>
    </div>
  );
};

export default App;
