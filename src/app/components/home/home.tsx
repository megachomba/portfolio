import * as React from 'react'

import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button, Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './home.module.css'
import { withStyles } from '@material-ui/core/styles';





interface Props{

}
interface State{

}

const style2= {
    //marginLeft: '100px'
  };
const headerStyle={

    backgroundColor: 'transparent',
    boxShadow: 'none',


}

const cardStyle={

  backgroundColor: 'red',
  width: '80%',
  
  /*boxShadow: 'none',*/


}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
  }

  render(){
    return(
      <div>
       
          <AppBar position='fixed' color='primary' style={headerStyle}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={styles.root}>Menu</Typography>
              <div className={ styles.menu }>
                <Button color='inherit' style={style2} >Home</Button>
                <Button color='inherit' style={style2}>CV/Resume</Button>
                <Button color='inherit' style={style2}>Projets</Button>
                <Button color='inherit' style={style2}>Projets</Button>
                <Button color='inherit' style={style2}>Projets</Button>
                <Button color='inherit' style={style2}>Projets</Button>
                <Button color='inherit' style={style2}>Projets</Button>
              </div>
            </Toolbar>
          </AppBar>
        

        <div className={ styles.divBG }>
          BLEP
          <p>BLEP BLEPÉ </p>
          <p>BLEP BLEPÉ </p>
          <p>BLEP BLEPÉ </p>
          <p>BLEP BLEPÉ </p>
          <p>BLEP BLEPÉ </p>
          <p>BLEP BLEPÉ </p>
          
        </div>
        <Card style={cardStyle} >
            <CardContent>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
              <p>FOO </p>
            </CardContent>
          </Card>
     
      </div>

    )
  }
}
