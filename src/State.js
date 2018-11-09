export default class State {
  constructor(_stateOfCell) {
    this._stateOfCell = _stateOfCell;
  }

  isLive() {
    return this._stateOfCell === LIVE;
  }

  isDead() {
    return this._stateOfCell === DEAD;
  }

  updateStateForLive( aliveNeighborCount) {
    if (aliveNeighborCount < 2 || aliveNeighborCount > 3) {
      return this._stateOfCell = DEAD;
    }
    if (aliveNeighborCount === 2 || aliveNeighborCount === 3) {
      return this._stateOfCell = LIVE;
    }
  }

  updateStateForDead( aliveNeighborCount) {
    if (aliveNeighborCount === 3) {
      return this._stateOfCell = LIVE;
    }
  }
}
export const LIVE = new State('LIVE');
export const DEAD = new State('DEAD');
