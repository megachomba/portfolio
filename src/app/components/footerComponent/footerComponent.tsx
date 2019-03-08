import * as React from 'react'
import styles from './footerComponent.module.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import  {Link } from 'react-router-dom'

import { Toolbar, Button, Divider, Paper } from '@material-ui/core'
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
            <div className={styles.name}><h1>Guillaume GUARD </h1></div>
            <div className={styles.photo}><h1>ma tete</h1></div>
            
          </div>
          <div className={styles.secondBlock}>
            <div className={styles.menu}>
              <h1>Menu </h1>
              <List>
                <ListItem button key='Home'>
                  <Link to="/Home" className={ styles.hamburgerButton }>
                    Home
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='CV'>
                  <Link to="/CV" className={ styles.hamburgerButton }>
                    CV
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='Projets'>
                  <Link to="/project" className={ styles.hamburgerButton }>
                    projets
                  </Link>
                  </ListItem>
                  </List>
            </div>
            <div className={styles.menu}>
              <h1>Social </h1>
              <List>
                <ListItem button key='github'>
                  <Link to="/github" className={ styles.hamburgerButton }>
                    github
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button key='Linkedin'>
                  <Link to="Linkeidn" className={ styles.hamburgerButton }>
                    Linkkedin
                  </Link>
                </ListItem>
                  </List>
            </div>
            <div className={styles.work}>
              <h1>Let's work together!

                I'm an experienced Full Stack Engineer that can speak English & Japanese and I can help you build and grow your next product!</h1>
            </div>
          </div>
          </div>
      </div>
    )

    }
}
