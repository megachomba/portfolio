import styles from './portfolio.module.css'
import globalStyles from '../../../globalStyles.module.css'

import * as React from 'react'
import Header from '../../../components/header'
import Plx from 'react-plx'
import Footer from '../../../components/footerComponent';

import Parallax from '../../../components/parallaxComponent'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { CardMedia, Tooltip } from '@material-ui/core';

import MyImage from '../../../../media/pubg.png'
import MyImage2 from '../../../../media/portfolio.png'
import MyImage3 from '../../../../media/ikkai.png'




interface Props{

}
interface State{

}
type align = 'center' | 'left'
const root = {
  fontSize: '15px',
  paddingTop: '10px',
  textAlign: 'center' as align
}

const skills = {
  textAlign: 'center' as align
}

const StyledToolTip= withStyles({
  tooltip: {
    fontSize: '23px'
  }
})(Tooltip);
export default class Portfolio extends React.Component<Props, State> {

  render() {
    return(
      <div>
        <Header></Header>
        <Parallax>
        <div className={styles.looking} id={styles.inlooking}>
          <Typography variant='h1' color="textPrimary" > Portfolio</Typography>
        </div>
        </Parallax>
        <div className={globalStyles.card}>
          <div className={styles.thirdBlock}>
              <div className={styles.lateral}>
              
              <Typography variant='h6' color="textSecondary" > URL</Typography>
              </div>
              <div className={styles.presentation}>
              
              <Typography variant='h6' color="textSecondary" > PRESENTATION</Typography>
              </div>

          </div>
          
        </div>
        <Footer/>
      </div>
    )
    }
}
