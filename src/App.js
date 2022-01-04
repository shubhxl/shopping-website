import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop-page';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import SignInPage from './pages/signin/signin';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/" component={ShopPage} />
        <Route exact path="/signin/" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
