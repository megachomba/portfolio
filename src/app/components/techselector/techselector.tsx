
import styles from './techselector.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import Header from '../header'
import Plx from 'react-plx'
import Footer from '../footerComponent';


import ReactI from '../../../media/react.png'
import MobxI from '../../../media/mobx.png'
import TypeScriptI from '../../../media/typescript.png'


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { Button, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import paintIcon from '@material-ui/icons/FormatPaint';
import CloudIcon from '@material-ui/icons/Cloud';
import DonutIcon from '@material-ui/icons/DonutLarge';


import SwipeableViews from 'react-swipeable-views';
interface Props{

}
interface State{
  current: string,
  index:number
}


const StyledButton = withStyles({
  root: {
    margin: '10px',
    color: 'black',
    boxShadow: 'none'
  
   
  },
  label: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    padding: '8px'
    
  }
})(Button);


const StyledPaint = withStyles({
  root: {
  fontSize: '34px'
  }
})(paintIcon);

const StyledCloud = withStyles({
  root: {
  fontSize: '34px'
  }
})(CloudIcon);

const StyledDonut = withStyles({
  root: {
  fontSize: '34px'
  }
})(DonutIcon);


const StyledToolTip= withStyles({
  tooltip: {
    fontSize: '17px'
  }
})(Tooltip);



export default class Techselector extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)

    this.state = {
      current: 'frontend',
      index:0
    }
  }
  handleclick=(data: string, indexx: number)=>{
    console.log(data)
    this.setState(
      { current : data,
        index : indexx
      })
   

  }
  render(){
    return(
      <div>
        <StyledButton 
          variant="contained" 
          color="secondary" 
          style={(this.state.current==='frontend')? { backgroundColor: 'red', color: 'white'} : { backgroundColor: 'transparent'}} 
          onClick={(e:any)=>this.handleclick('frontend',0)}>
          Frontend
        <StyledPaint />
        </StyledButton>

        <StyledButton 
          variant="contained" 
          color="primary" 
          style={(this.state.current==='backend')? { backgroundColor: 'red', color: 'white'} : { backgroundColor: 'transparent'}} 
          onClick={(e:any)=>this.handleclick('backend',1)}>
          Backend
          <StyledDonut />
        </StyledButton >

        <StyledButton 
          variant="contained" 
          color="primary" 
          style={(this.state.current==='devops')? { backgroundColor: 'red', color: 'white'} : { backgroundColor: 'transparent'}} 
          onClick={(e:any)=>this.handleclick('devops',2)}>
          DevOps
        <StyledCloud />
        </StyledButton>

        <SwipeableViews index={this.state.index}>
        <div >
          <StyledToolTip title='React'>
          <img className={styles.images} src={ReactI}></img>
          </StyledToolTip>
          <StyledToolTip title='Mobx'>
          <img className={styles.images} src={MobxI}></img>
          </StyledToolTip>
          <StyledToolTip title='Typescript'>
          <img className={styles.images} src={TypeScriptI}></img>
          </StyledToolTip>
          
          
        </div>
        <div>
        
        </div>
        <div>
          slide n°3
        </div>
        </SwipeableViews>
      </div>
        )
  }
}