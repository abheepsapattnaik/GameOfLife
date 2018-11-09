export {LIVE, DEAD} from './State';

export default class Cell {
  constructor(position, state) {
    this.position = position;
    this.state = state;
  }

  isValid() {
    return this.position.isValid();
  }

  nextGeneration(grid){
      let neighbours = this.position.neighbors();
      let lives = 0;
      for(let neighbour of neighbours){
          if(grid.cellAtPos(neighbour).state.isLive()){
              lives++;
          }
      }
      if(this.state.isLive()){
          this.state.updateStateForLive(lives);
          return this;
      }
      this.state.updateStateForDead(lives);
      return this;
  }
}