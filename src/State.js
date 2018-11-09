export default class State {
  constructor(_stateOfCell) {
    this._stateOfCell = _stateOfCell;
  }
  isLive(){
    return this._stateOfCell === LIVE;
  }
  isDead(){
    return this._stateOfCell === DEAD;
  }
}
export const LIVE = new State('LIVE');
export const DEAD = new State('DEAD');