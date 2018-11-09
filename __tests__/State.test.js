import State, {LIVE,DEAD} from "../src/State";

describe('State of Cell', () => {
  it('is live', () => {
    const state = new State(LIVE);
    expect(state.isLive()).toBeTruthy();
  });
  it('is dead', () => {
    const state = new State(DEAD);
    expect(state.isDead()).toBeTruthy();
  });
  it('should change to live for a dead cell with 3 live neighbors', () => {
    const state = new State(DEAD);
    const updateState= state.updateStateForDead(3);
    expect(updateState).toBe(LIVE);
  });
  it('should change to live for a live cell with 2 live neighbors', () => {
    const state = new State(LIVE);
    const updateState= state.updateStateForLive(2);
    expect(updateState).toBe(LIVE);
  });
  it('should change to dead for a dead cell with 4 live neighbors', () => {
    const state = new State(LIVE);
    const updateState= state.updateStateForLive(4);
    expect(updateState).toBe(DEAD);
  });
});