import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop-page';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
