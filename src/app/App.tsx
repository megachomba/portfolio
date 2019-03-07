import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { MuiThemeProvider} from '@material-ui/core/styles'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './pages/home'
import theme from '../theme'
import Project from './pages/projects';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <ParallaxProvider>
          <Provider >
            <Switch>
              <Route exact path='/home' component={ Home }></Route>
              <Route  path='/project' component={ Project }></Route>
            </Switch>
          </Provider>
        </ParallaxProvider>
      </MuiThemeProvider>
    )
  }
}

