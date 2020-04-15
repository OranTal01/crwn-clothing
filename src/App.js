import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import HomePage from './pages/home/Home.page';
import ShopPage from './pages/shop/Shop.page';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-sign-up.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './redux/user/user-actions';
import { connect } from 'react-redux';

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
        <Route path="/sign-in" render={ () => currentUser ?
          (<Redirect to='/' />) : (<SignInAndSignUp />) } />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
