import styles from './cv.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import Parallax from '../../components/parallaxComponent'
import Footer from '../../components/footerComponent'
import MyImage from '../../../media/pubg.png'
import MyImage2 from '../../../media/portfolio.png'
import MyImage3 from '../../../media/ikkai.png'
import MyImage4 from '../../../media/altran.jpeg'
import MyImage5 from '../../../media/ikkaiLogo.png'

import MessageIcon from '@material-ui/icons/Message'
import GroupIcon from '@material-ui/icons/Group'
import QuerryBuilderIcon from '@material-ui/icons/QueryBuilder'
import BookIcon from '@material-ui/icons/Book'
import BuildIcon from '@material-ui/icons/Build'
import AssignmentIcon from '@material-ui/icons/Assignment'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CardMedia, Popover, Tooltip, Button } from '@material-ui/core'
import i18n from 'i18next'


interface Props {}
interface State {}

export default class Cv extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
    
    }
  }

  
  render() {
    return (
      <div>
        <Header></Header>
        <Parallax>
         </Parallax>
        <div className={ `${ globalStyles.card } ${ globalStyles.cropped }` }>
        <div className= { styles.dog }>
         <img className= { styles.dogImage } src={ MyImage4 } />
        </div>
          <div className={ styles.thirdBlock }>
            <Button
              variant="contained"
              color="primary" 
              onClick= {() => {} } >
              contact me 
            </Button>
            
            <Typography className= { styles.workHistory } variant='h4' color="textSecondary" >work history</Typography>
            <Typography variant="body1" color="textSecondary" >Click any to for more information</Typography>
            <div className= { styles.cvBlock }>
              <div className= { styles.cvBlockColumn }>
                <img className= { styles.dogImage } src={ MyImage4 } />
              </div>
              <div className= { styles.cvBlockText }>
                <Typography variant="h6" color="textSecondary" >04/2019 - today</Typography>
                <Typography variant="subtitle2" color="textSecondary" >Altran Technologies</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line1') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line2') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line3') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line4') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line5') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line6') }</Typography>
              </div>            
            </div>

            <div className= { styles.cvBlock }>
              <div className= { styles.cvBlockColumn }>
                <img className= { styles.dogImage } src={ MyImage5 } />
              </div>
              <div className= { styles.cvBlockText }>
                <Typography variant="h6" color="textSecondary" >06/2018 - 09/2018</Typography>
                <Typography variant="subtitle2" color="textSecondary" >Ikkai inc</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line1') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line2') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line3') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line4') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line5') }</Typography>
                <Typography variant="body1" color="textSecondary" >{ i18n.t('cv.altran.line6') }</Typography>
              </div>            
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
