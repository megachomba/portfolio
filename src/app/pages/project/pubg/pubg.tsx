import styles from './pubg.module.css'
import globalStyles from '../../../globalStyles.module.css'

import * as React from 'react'
import Header from '../../../components/header'
import Plx from 'react-plx'
import Footer from '../../../components/footerComponent';

import Parallax from '../../../components/parallaxComponent'

import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { CardMedia, Tooltip } from '@material-ui/core';

import MyImage from '../../../../media/pubg.png'
import MyImage2 from '../../../../media/portfolio.png'
import MyImage3 from '../../../../media/ikkai.png'
import Techselector from '../../../components/techselector';




interface Props{

}
interface State{

}
type align = 'center' | 'left'
const root = {
  fontSize: '15px',
  paddingTop: '10px',
  textAlign: 'center' as align
}

const skills = {
  textAlign: 'center' as align
}

const StyledToolTip= withStyles({
  tooltip: {
    fontSize: '23px'
  }
})(Tooltip);



export default class Pubg extends React.Component<Props, State> {

  render() {
    return(
      <div>
        <Header></Header>
        <Parallax>
        <div className={styles.looking} id={styles.inlooking}>
          <Typography variant='h1' color="textPrimary" > ikkai</Typography>
        </div>
        </Parallax>
        <div className={globalStyles.card}>
          <div className={styles.thirdBlock}>
              <div className={styles.lateral}>
              
                <Typography variant='h5' color="textSecondary" style={{fontWeight: 'bold'}} > Année</Typography>
                <Typography variant='h6' color="textSecondary" style={{paddingTop: '10x'}} > 2018</Typography>
                <Typography variant='h5' color="textSecondary" style={{fontWeight: 'bold'}} > URL</Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10px'}}> <a href="http://www.pubgscript.com"> www.pubgscript.com</a></Typography>
              </div>
              <div className={styles.presentation}>
              
                <Typography variant='h5' color="textSecondary" style={{fontWeight: 'bold'}}> PRESENTATION</Typography>
                <Techselector frontend={['react','mobx','typescript']}  devops={['ubuntu']}/>
                <img src={MyImage} className={styles.bigimage}></img>

                <Typography variant='h5' color="textSecondary" style={{paddingTop: '10x' , fontWeight: 'bold'}}>Codebase </Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10px'}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dicta distinctio praesentium, delectus nisi ratione accusantium. Incidunt culpa iusto consectetur repellendus consequuntur, aliquid vero optio vitae minima tempore adipisci in.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et? Veritatis et quae, accusantium maiores unde ducimus odio nemo, at eum minus quam aliquam quis mollitia sit quaerat, non eos.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore culpa quasi rem totam commodi odit et! Qui aperiam voluptatum modi repellendus! Ratione perferendis quibusdam debitis libero excepturi molestiae qui sed?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quod vitae? Maxime doloremque eos unde, corporis sint temporibus. Perspiciatis officia suscipit explicabo autem quas aliquam ad asperiores eligendi sunt sed!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a ea laboriosam vel molestias rerum, sequi cum possimus nisi. Atque tempora aspernatur voluptatem non rem qui voluptatum quas illum officia?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi commodi sint perspiciatis exercitationem inventore aspernatur vitae unde ex et. Voluptate est harum veritatis explicabo reiciendis! Est cumque culpa recusandae inventore?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum numquam dolores nihil voluptate reiciendis, optio, cupiditate id necessitatibus velit obcaecati est, facere quam. Aut adipisci eius nesciunt cumque dicta.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab exercitationem architecto culpa nobis, provident voluptatibus, ipsam assumenda reprehenderit eveniet consequatur quos accusantium, tempora dolorum maxime tenetur cupiditate laboriosam nesciunt. Sit?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatum tempora explicabo, dignissimos, sapiente sint facere ab fugiat consequuntur commodi non maiores asperiores incidunt dolores numquam dicta quisquam perferendis? Praesentium.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea explicabo eius asperiores labore et sed nisi quisquam. Asperiores animi omnis aspernatur voluptate sit recusandae minima excepturi impedit maxime quis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos reiciendis quidem? Quas quia ipsa dolorum dolores nobis aliquid iste eveniet, nostrum rerum numquam labore dolore ad inventore, laboriosam quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione qui natus adipisci praesentium minima reiciendis sequi odio! Similique libero mollitia accusantium autem quos laudantium quod eveniet nesciunt. Eius, nesciunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus numquam alias molestiae et deserunt ullam, a ea sed, itaque molestias esse dolores! Temporibus, ullam quod! Aperiam assumenda maiores explicabo?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, animi! Sapiente amet ad, nam omnis non corrupti voluptates minima incidunt. Ad magnam ut cum eius necessitatibus quos, id reiciendis dicta?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quasi dolores, repudiandae perspiciatis vitae debitis! Vero saepe corrupti similique aut dolore ratione aspernatur quas, incidunt, beatae explicabo eligendi debitis numquam?

                </Typography>
              </div>
                
          </div>
            <Typography variant='h5' color="textSecondary" style={{paddingTop: '10x'}}>  Source code, license and usage </Typography>
                <Typography variant='body1' color="textSecondary" style={{paddingTop: '10x', width: '100%'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dicta distinctio praesentium, delectus nisi ratione accusantium. Incidunt culpa iusto consectetur repellendus consequuntur, aliquid vero optio vitae minima tempore adipisci in.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et? Veritatis et quae, accusantium maiores unde ducimus odio nemo, at eum minus quam aliquam quis mollitia sit quaerat, non eos.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore culpa quasi rem totam commodi odit et! Qui aperiam voluptatum modi repellendus! Ratione perferendis quibusdam debitis libero excepturi molestiae qui sed?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quod vitae? Maxime doloremque eos unde, corporis sint temporibus. Perspiciatis officia suscipit explicabo autem quas aliquam ad asperiores eligendi sunt sed!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a ea laboriosam vel molestias rerum, sequi cum possimus nisi. Atque tempora aspernatur voluptatem non rem qui voluptatum quas illum officia?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi commodi sint perspiciatis exercitationem inventore aspernatur vitae unde ex et. Voluptate est harum veritatis explicabo reiciendis! Est cumque culpa recusandae inventore?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum numquam dolores nihil voluptate reiciendis, optio, cupiditate id necessitatibus velit obcaecati est, facere quam. Aut adipisci eius nesciunt cumque dicta.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab exercitationem architecto culpa nobis, provident voluptatibus, ipsam assumenda reprehenderit eveniet consequatur quos accusantium, tempora dolorum maxime tenetur cupiditate laboriosam nesciunt. Sit?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatum tempora explicabo, dignissimos, sapiente sint facere ab fugiat consequuntur commodi non maiores asperiores incidunt dolores numquam dicta quisquam perferendis? Praesentium.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea explicabo eius asperiores labore et sed nisi quisquam. Asperiores animi omnis aspernatur voluptate sit recusandae minima excepturi impedit maxime quis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos reiciendis quidem? Quas quia ipsa dolorum dolores nobis aliquid iste eveniet, nostrum rerum numquam labore dolore ad inventore, laboriosam quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione qui natus adipisci praesentium minima reiciendis sequi odio! Similique libero mollitia accusantium autem quos laudantium quod eveniet nesciunt. Eius, nesciunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus numquam alias molestiae et deserunt ullam, a ea sed, itaque molestias esse dolores! Temporibus, ullam quod! Aperiam assumenda maiores explicabo?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, animi! Sapiente amet ad, nam omnis non corrupti voluptates minima incidunt. Ad magnam ut cum eius necessitatibus quos, id reiciendis dicta?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quasi dolores, repudiandae perspiciatis vitae debitis! Vero saepe corrupti similique aut dolore ratione aspernatur quas, incidunt, beatae explicabo eligendi debitis numquam?
                  
                </Typography>
        </div>
        <Footer/>
      </div>
    )
    }
}
