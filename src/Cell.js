export {LIVE,DEAD} from './State';
export default class {
  constructor(x,y,state){
    this.x = x;
    this.y = y;
    this.state = state;
  }

  isValid(){
    return (this.x>0 && this.y >0);
  }
}