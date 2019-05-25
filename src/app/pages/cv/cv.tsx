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


import MessageIcon from '@material-ui/icons/Message'
import GroupIcon from '@material-ui/icons/Group'
import QuerryBuilderIcon from '@material-ui/icons/QueryBuilder'
import BookIcon from '@material-ui/icons/Book'
import BuildIcon from '@material-ui/icons/Build'
import AssignmentIcon from '@material-ui/icons/Assignment'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CardMedia, Popover, Tooltip } from '@material-ui/core'


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
        <div className={`${globalStyles.card} ${globalStyles.cropped}` }>
          <div className={styles.thirdBlock}>
            <div className={`${styles.skills} ${styles.skillsProject}`}>
                <Typography variant='h3' color="textSecondary" >Recent</Typography>
                <Typography variant="body1" color="textSecondary" >Click any to for more information</Typography>

              </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}