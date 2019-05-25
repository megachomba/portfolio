
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
import RootStore from '../../stores/rootstore';
import { inject, observer } from 'mobx-react';
interface Props{
  rootStore?: RootStore,
  frontend?: string[],
  backend?: string[],
  devops?: string[],
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

const box = {
  backgroundColor: 'red',
  color: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(255, 152, 0, 0.4) 0px 7px 10px -5px'
}

@inject('rootStore')
@observer
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
        <div className={styles.buttons}>
          { this.props.frontend ? <StyledButton 
            variant="contained" 
            color="secondary" 
            style={(this.state.current==='frontend')? box : { backgroundColor: 'transparent'}} 
            onClick={(e:any)=>this.handleclick('frontend',0)}>
            Frontend
          <StyledPaint />
          </StyledButton> : <div />}

          { this.props.backend ? <StyledButton 
            variant="contained" 
            color="primary" 
            style={(this.state.current==='backend')? box : { backgroundColor: 'transparent'}} 
            onClick={(e:any)=>this.handleclick('backend',1)}>
            Backend
            <StyledDonut />
            </StyledButton> : <div />}

            { this.props.devops ? <StyledButton 
            variant="contained" 
            color="primary" 
            style={(this.state.current==='devops')? box : { backgroundColor: 'transparent'}} 
            onClick={(e:any)=>this.handleclick('devops',2)}>
            DevOps
          <StyledCloud />
          </StyledButton> : <div />}
          </div>
          <SwipeableViews index={this.state.index}>
        <div >

          {
            this.props.frontend ? this.props.frontend.map((item, key)=>{
             return (<StyledToolTip title={this.props.rootStore!.techStore.technos.get(item)!.title}>
                <img className={styles.images} src={this.props.rootStore!.techStore.technos.get(item)!.src}></img>
             </StyledToolTip>)
            }) : <div />
             
          }
          
        </div>
        <div>
        {
            this.props.backend ? this.props.backend.map((item, key)=>{
              return (<StyledToolTip title={this.props.rootStore!.techStore.technos.get(item)!.title}>
                 <img className={styles.images} src={this.props.rootStore!.techStore.technos.get(item)!.src}></img>
              </StyledToolTip>)
             }) : <div />
             
          }
        </div>
        <div>
        {
           this.props.devops ? this.props.devops.map((item, key)=>{
            return (<StyledToolTip title={this.props.rootStore!.techStore.technos.get(item)!.title}>
               <img className={styles.images} src={this.props.rootStore!.techStore.technos.get(item)!.src}></img>
            </StyledToolTip>)
           }) : <div />
             
          }
        </div>
        </SwipeableViews>
      </div>
        )
  }
}