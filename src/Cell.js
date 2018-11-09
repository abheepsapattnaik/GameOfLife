export {LIVE, DEAD} from './State';

export default class Cell {
  constructor(position, state) {
    this.position = position;
    this.state = state;
    this.neighbor = this.position.neighbor();
  }

  isValid() {
    return this.position.isValid();
  }

}