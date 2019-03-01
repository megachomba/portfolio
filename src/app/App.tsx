import React, { Component } from 'react';
import './App.css';
import {Provider} from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'

export default class App extends Component {
  render() {
    return (
      
      // provider permet de trransmettre mon store mobx au composans enfants
      <Provider >
        {}
        <Switch>
          <Route exact path='/' component={Home}></Route>

        </Switch>
      </Provider>
    )
  }
}

