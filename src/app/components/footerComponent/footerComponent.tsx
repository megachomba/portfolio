import * as React from 'react'
import styles from './footerComponent.module.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import  {Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import { Toolbar, Button, Divider, Paper } from '@material-ui/core'


type align = 'center' | 'left'
const root = {
  fontSize: '15px',
  paddingTop: '10px',
  textAlign: 'center' as align
}
const rootBis = {
  /*fontSize: '15px',*/
  paddingTop: '10px',
  textAlign: 'left' as align
}
interface Props{

}
interface State{

}
export default class FooterComponent extends React.Component<Props, State> {

  render() {
    return(
      <div className={styles.footer}>
        <div className={styles.bigBlock}>
          <div className={styles.firstBlock}>
            <div className={styles.name}>
            <Typography variant="h5" color="textPrimary" style={rootBis} >Guillaume GUARD</Typography></div>
            <div className={styles.photo}>
              <img src='../../media/pinguin.png' />
            </div>
            
          </div>
          <div className={styles.secondBlock}>
            <div className={styles.menu}>
            <Typography variant="h5" color="textPrimary" style={rootBis }>Menu</Typography>
              <List>
                <ListItem button key='Home'>
                  <Link to="/Home" className={ styles.hamburgerButton }>
                  <Typography variant="h6" color="textPrimary" style={root} >HOME</Typography>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='CV'>
                  <Link to="/CV" className={ styles.hamburgerButton }>
                  <Typography variant="h6" color="textPrimary" style={root} >CV</Typography>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='Projets'>
                  <Link to="/project" className={ styles.hamburgerButton }>
                  <Typography variant="h6" color="textPrimary" style={root} >Projects</Typography>
                  </Link>
                  </ListItem>
                  </List>
            </div>
            <div className={styles.menu}>
              <h1><Typography variant="h5" color="textPrimary" style={rootBis} >Social</Typography> </h1>
              <List>
                <ListItem button key='github'>
                  <Link to="/github" className={ styles.hamburgerButton }>
                  <Typography variant="h6" color="textPrimary" style={root} >Github</Typography>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='Linkedin'>
                  <Link to="Linkeidn" className={ styles.hamburgerButton }>
                  <Typography variant="h6" color="textPrimary" style={root} >Linkedin</Typography>
                  </Link>
                </ListItem>
                  </List>
            </div>
            <div className={styles.work}>
              <Typography variant="h5" color="textPrimary" style={rootBis} >Let's work together!</Typography>
              <Typography variant="body1" color="textPrimary" style={root}>I'm an experienced Full Stack Engineer that can speak English & Japanese and I can help you build and grow your next product!</Typography>
              
            </div>
          </div>
          </div>
      </div>
    )

    }
}
