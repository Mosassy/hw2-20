import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/vlog";
import Counter from "./pages/counter";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Best Darn Website in the West</h1>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/vlog" component={Blog} />
              <Route path="/counter" component={Counter} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
