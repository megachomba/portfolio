import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Button, Divider, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import styles from './header.module.css'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import  {Link } from 'react-router-dom'

interface Props {}
interface State {
  isscrolled: boolean,
  menuOpen: boolean
}

const headerStyle = {
  marginTop: '20px',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}
const stylesDrawer = {
  paper: {
    background: "grey"
  }
}



export default class Header extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)

    this.state = {
      isscrolled: false,
      menuOpen: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }
  handleResize(e: UIEvent){
    console.log('im resizing')
  }
  handleScroll = (e: UIEvent) => {
    if (window.pageYOffset >= 200 && !this.state.isscrolled) {
      this.setState({isscrolled: true})
    } else if(window.pageYOffset < 200 && this.state.isscrolled) {
      this.setState({isscrolled: false})
    }
  }

  headerTransform = () =>{
    return this.state.isscrolled ? {} : headerStyle
  }
  toggleDrawer= () =>{
    if ( this.state.menuOpen ){
      this.setState({ menuOpen: false })
      console.log('closing menu')
    }
    else {
      this.setState({ menuOpen: true })
      console.log('opening menu')
    }
  }

  render() {
    return (
      <div>
        <AppBar position='fixed' color='primary' style={ this.headerTransform() }>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={ styles.root }>Menu</Typography>
            <div className={ styles.menuButton }>
                  <IconButton className={styles.menu} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer()}>
                    <MenuIcon />
                  </IconButton>
                  </div>
              <div className={ styles.menu }>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>CV/Resume</Button>
                <Button color='inherit'>Projets</Button>
                
              </div>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right"  open={this.state.menuOpen}  onClose={() => this.toggleDrawer()}>
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
        </Drawer>
      </div>
    )
  }
}
//<Link to='' className={ styles.hamburgerButton }> Mon text</Link>