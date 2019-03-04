import React, { Component } from 'react';
import './App.css';
import {Provider} from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import theme from '../theme'
import { MuiThemeProvider} from '@material-ui/core/styles'


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Provider >
        
        <Switch>
          <Route exact path='/' component={Home}></Route>

        </Switch>
      </Provider>
      </MuiThemeProvider>
    )
  }
}

