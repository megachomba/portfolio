import styles from './project.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import Header from '../../components/header'
import Plx from 'react-plx'
import Footer from '../../components/footerComponent';

import Parallax from '../../components/parallaxComponent'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

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
export default class Project extends React.Component<Props, State> {

  render() {
    return(
      <div>
        <Header></Header>
        <Parallax>
        <div className={styles.looking} id={styles.inlooking}>
          <Typography variant='h1' color="textPrimary" > Recent projects</Typography>
          <Typography variant='body1' color="textPrimary"> A collection of projects I've been doing for a while now
            Have an idea for a project & interested in collaborating?</Typography>
        </div>
        </Parallax>
        <div className={globalStyles.card}>
          <div className={styles.skills}>
            <Typography variant='h3' color="textSecondary" style={ skills }>skills</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>have always been drawn towards web development since the age of 14. Besides my technical skills, here's a list of other things I'm also good at</Typography>

          </div>
        </div>
        <Footer/>
      </div>
    )
    }
}
