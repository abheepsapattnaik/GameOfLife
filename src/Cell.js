export {LIVE,DEAD} from './State';

export default class Cell {
  constructor(position,state){
    this.position = position;
    this.state = state;
  }
  isValid(){
    return (this.position.row>0 && this.position.column >0);
  }
nextGeneration(){

}

}