import React from 'react'
import Header from './containers/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductListing from "./containers/ProductListing"
import ProductDitail from "./containers/ProductDitail"


function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
        <Route path = "/" exact component={ProductListing}/>
        <Route path = "/product/:productID" exact component={ProductDitail}/>
        <Route>404 Not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
