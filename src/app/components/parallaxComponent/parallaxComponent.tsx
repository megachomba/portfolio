
import styles from './parallaxComponent.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import Header from '../header'
import Plx from 'react-plx'
import Footer from '../footerComponent';



import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

interface Props{

}
interface State{

}

const parallaxData = [
  {
    start: 0,
    end: 1000,properties: [

      {
        startValue: 0,
        endValue: 200,
        property: "translateY"
      },
    ]
  }
]
export default class Project extends React.Component<Props, State> {
  render(){
    return(
        <Plx
          className={ styles.divBG }
          parallaxData={ parallaxData }
        >
        {this.props.children}
        
        </Plx>
        )
  }
}