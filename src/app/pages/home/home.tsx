import styles from './home.module.css'

import * as React from 'react'
import Header from '../../components/header'
import Plx from 'react-plx'
import Footer from '../../components/footerComponent';

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
      <div>
        <Header />

        <Plx
          className={ styles.divBG }
          parallaxData={ parallaxData }
        >
        <div className={styles.looking}>
          <h1 >A la recherche d'un developpeur web?</h1>
          <h4>Salut, c'est Guillaume GUARD.je crée des aplications web de A a Z!</h4>
        </div>
         </Plx>

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


