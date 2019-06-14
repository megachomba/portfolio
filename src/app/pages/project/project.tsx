import styles from './project.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import Header from '../../components/header'
import Plx from 'react-plx'
import Footer from '../../components/footerComponent';

import Parallax from '../../components/parallaxComponent'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { CardMedia, Tooltip } from '@material-ui/core';

import MyImage from '../../../media/pubg.png'
import MyImage2 from '../../../media/portfolio.png'
import MyImage3 from '../../../media/ikkai.png'
import { Link } from 'react-router-dom';




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
export default class Project extends React.Component<Props, State> {

  render() {
    return(
      <div>
        <Header></Header>
        <Parallax>
        <div className={styles.looking} id={styles.inlooking}>
          <Typography variant='h1' color="textPrimary" > Recent projectss</Typography>
          <Typography variant='body1' color="textPrimary"> A collection of projects I've been doing for a while now
            Have an idea for a project & interested in collaborating?</Typography>
        </div>
        </Parallax>
        <div className={globalStyles.card}>
          <div className={styles.thirdBlock}>
            <div className={`${styles.skills} ${styles.skillsProject}`}>
                <Typography variant='h3' color="textSecondary" style={ skills }>Recent</Typography>
                <Typography variant="body1" color="textSecondary" style={ root }>Click any to for more information</Typography>

              </div>
            
              
              
              <div className={styles.comunication}>
                <Link to='project/pubg'>
                  <StyledToolTip title='la description de pubg'>
                    <CardMedia
                      component="img"
                      image={ MyImage } />
                  </StyledToolTip>
                </Link>
              </div>
              <div className={styles.comunication}>
                <Link to='project/portfolio'>
                    <StyledToolTip title='la description de portfolio'>
                      <CardMedia
                        component="img"
                        image={ MyImage2 } />
                    </StyledToolTip>
                  </Link>
              </div>
              <div className={styles.comunication}>
                <Link to='project/ikkai'>
                  <StyledToolTip title='la description de ikkai'>
                    <CardMedia
                      component="img"
                      image={ MyImage3 } />
                  </StyledToolTip>
                </Link>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
    }
}
