/* Custom import */
import { observable, action, computed } from 'mobx'
import ReactI from '../../../media/react.png'
import MobxI from '../../../media/mobx.png'
import ubuntuI from '../../../media/ubuntu.png'
import TypeScriptI from '../../../media/typescript.png'
const react: Technologie ={
  name: 'react',
  title:'react',
  src: ReactI
}
const mobx: Technologie ={
  name: 'mobx',
  title:'mobx',
  src: MobxI
}
const typescript: Technologie ={
  name: 'typscript',
  title:'typescript',
  src: TypeScriptI
}
const ubuntu: Technologie ={
  name: 'ubuntu',
  title:'ubuntu',
  src: ubuntuI
}
export default class TechStore {
  
  @observable technos: Map<string,Technologie> = new Map([
    ['react',react],
    ['mobx',mobx],
    ['typescript',typescript],
    ['ubuntu',ubuntu]

  ]

  )
}
