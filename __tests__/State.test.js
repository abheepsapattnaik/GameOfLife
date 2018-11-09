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
});