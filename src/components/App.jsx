import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as ROUTES from '../constants/routes';

import Main from './Main';
import Error404 from './Error404';

import './../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.MAIN} component={Main} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
