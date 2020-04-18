import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { useEffect } from 'react';

import HomePage from './pages/home/Home.page';
import ShopPage from './pages/shop/Shop.page';
import CheckoutPage from './pages/checkout/Checkout.page';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-sign-up.page';

import Header from './components/header/Header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';


import './App.css';

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ ShopPage } />
        <Route exact path="/sign-in" render={ () => currentUser ?
          (<Redirect to='/' />) : (<SignInAndSignUp />) } />
        <Route exact path="/checkout" component={ CheckoutPage } />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);