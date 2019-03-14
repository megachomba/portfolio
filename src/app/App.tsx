import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { MuiThemeProvider} from '@material-ui/core/styles'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './pages/home'
import theme from '../theme'
import Project from './pages/project'
import Portfolio from './pages/project/portfolio'
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <ParallaxProvider>
          <Provider >
            <Switch>
              <Route exact path='/home' component={ Home }></Route>
              <Route  exact path='/project' component={ Project }></Route>
              <Route  path='/project/portfolio' component={ Portfolio }></Route>
            </Switch>
          </Provider>
        </ParallaxProvider>
      </MuiThemeProvider>
    )
  }
}

