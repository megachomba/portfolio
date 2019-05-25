/* Custom import */
import TechStore from '../stores/techstore/techstore'

export default class RootStore {
  constructor() {
    this.techStore = new TechStore()
  }

  techStore: TechStore
}
