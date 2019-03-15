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
import Techselector from '../../../components/techselector';




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
              
                <Typography variant='h5' color="textSecondary" > Année</Typography>
                <Typography variant='h6' color="textSecondary" style={{paddingTop: '10x'}} > 2019</Typography>
                <Typography variant='h5' color="textSecondary" > URL</Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10px'}}> www.guillaumeguard.fr</Typography>
              </div>
              <div className={styles.presentation}>
              
                <Typography variant='h5' color="textSecondary" > PRESENTATION</Typography>
                <Techselector/>
                <img src={MyImage2} className={styles.bigimage}></img>

                <Typography variant='h5' color="textSecondary" style={{paddingTop: '10x'}}>Codebase </Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10px'}}>
                  A complete revamp of the original portfolio website I had created. You can view the changes in the changelog. Here are some more details:

                      Domain provided by gandi.net

                      Development & deployment is handled entirely via Docker
                      Uses both the latest versions of ReactJS for the frontend and Django for the backend.

                </Typography>
              </div>
                
          </div>
            <Typography variant='h5' color="textSecondary" style={{paddingTop: '10x'}}>  Source code, license and usage </Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10x', width: '100%'}}>
                First and foremost, the beautiful blue mountain background used for the header of this portfolio was created by Ibin Siraj, downloaded from Pexels.

                I occasionally recieve requests for my codebase and while I am more than happy to oblige you are welcome to view my projects/other work through my Github. However please note that this website is unfortunately the only exception.

                The reason being is that I had spent a lot of time in developing & designing this website. It is my portfolio that serves as proof of what separates me from my competition and is a reflection of the quality of work my client can expect from me. For these reasons I am reluctant to share the codebase

                Off course, this being a website, you can freely look at the HTML, CSS & JS source through your browsers dev console. I'm flattered if you want to use the general design layout and/or wording into your own project as inspiration but please do not use wget to obtain my entire site.

              
                I’d be interested to hear what you think about this and I'm also open to some constructive feedback. Please get in touch with me through here to discuss. Furthermore, if there’s something on this site you like and you want help doing something similar, please let me know.
                </Typography>
        </div>
        <Footer/>
      </div>
    )
    }
}
