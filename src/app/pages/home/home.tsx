import styles from './home.module.css'
import globalStyles from '../../globalStyles.module.css'

import * as React from 'react'
import Header from '../../components/header'
import Plx from 'react-plx'
import Footer from '../../components/footerComponent';

import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import QuerryBuilderIcon from '@material-ui/icons/QueryBuilder';
import BookIcon from '@material-ui/icons/Book';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

interface Props {}
interface State {}

 const parallaxData = [
    {
      start: 0,
      end: 1000,properties: [

        {
          startValue: 0,
          endValue: 200,
          property: "translateY"
        },
      ]
    }
]
const inconsize = {
  root:{
    fontSize: '100px'
  }
}



const StyledMessage = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(MessageIcon);

const StyledGroup = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(GroupIcon);

const StyledQuerry = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(QuerryBuilderIcon);

const StyledBook = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(BookIcon);

const StyledBuild = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(BuildIcon);

const StyledAssignment = withStyles({
  root: {
    fontSize: '100px',
    textAlign: 'center'
  }
})(AssignmentIcon);

type align = 'center' | 'left'

const root = {
  fontSize: '15px',
  paddingTop: '10px',
  textAlign: 'center' as align
}

const skills = {
  textAlign: 'center' as align
}
const looking ={

}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {}
  }
  /*<div className={ styles.parallax }>
          <Parallax offsetYMin= {-20} offsetYMax={ +20 } slowerScrollRate= {true}>
            <div className={ styles.divBG }></div>
          </Parallax>
        </div>*/
  /*<Parallax bgImage={require('../../../media/header-bg.jpg')} strength={-300} className={ styles.divBG} >
         
            <div >HTML inside the parallax</div>

         
          <h1>| | |</h1>
          </Parallax>*/
  render() {
    return (
      <div id={styles.big} >
        <Header />

        <Plx
          className={ styles.divBG }
          parallaxData={ parallaxData }
        >
        <div className={styles.looking} id={styles.inlooking}>
          <Typography variant='h1' color="textPrimary" > A la recherche d'un developpeur web?</Typography>
          <Typography variant='body1' color="textPrimary"> Salut, c'est Guillaume GUARD.je crée des aplications web de A a Z!</Typography>
        </div>
         </Plx>

        <div className={ globalStyles.card }>

          <div className={styles.skills}>
            <Typography variant='h3' color="textSecondary" style={ skills }>skills</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>have always been drawn towards web development since the age of 14. Besides my technical skills, here's a list of other things I'm also good at</Typography>

          </div>
          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledMessage fontSize='large' color='secondary'/>
            </div>
            <Typography variant='h5' color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>
          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledGroup fontSize='large' color='secondary'/>
            </div>
            <Typography variant="h5" color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>
          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledQuerry fontSize='large' color='secondary'/>
            </div>
            <Typography variant="h5" color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>

          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledBook fontSize='large' color='secondary'/>
            </div>
            <Typography variant="h5" color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>

          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledBuild fontSize='large' color='secondary'/>
            </div>
            <Typography variant="h5" color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>

          <div className={styles.comunication}>
            <div className={styles.icons}>
              <StyledAssignment fontSize='large' color='secondary'/>
            </div>
            <Typography variant="h5" color="textSecondary" style={ root }>communication</Typography>
            <Typography variant="body1" color="textSecondary" style={ root }>I ask a lot of questions to gain a better understanding of the task at hand. I use tools like Slack to make sure we’re always on the same page.
            </Typography>

          </div>
          
        </div>

        <Footer />
      </div>
    )
  }
}


/*

 <div className={ styles.card }>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia dolores eum vero veritatis tempore, ullam, deleniti accusantium corporis animi delectus harum dolorem dolore architecto est minima iste assumenda sed.</p>
        </div>

*/


