import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { MuiThemeProvider} from '@material-ui/core/styles'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './pages/home'
import theme from '../theme'
import Project from './pages/project'
import Portfolio from './pages/project/portfolio'
import Ikkai from './pages/project/ikkai'
import pubg from './pages/project/pubg'
import RootStore from './stores/rootstore'
import Cv from './pages/cv'
import './utils/i18n'
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <ParallaxProvider>
          <Provider rootStore={ new RootStore()} >
            <Switch>
              <Route exact path='/home' component={ Home } onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route  exact path='/project' component={ Project } onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route  path='/project/portfolio' component={ Portfolio } onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route  path='/project/ikkai' component={ Ikkai } onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route  path='/project/pubg' component={ pubg } onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route  path='/cv' component={ Cv } onUpdate={ () => window.scrollTo(0, 0)}></Route>
            </Switch>
          </Provider>
        </ParallaxProvider>
      </MuiThemeProvider>
    )
  }
}

