import Cell from '../src/Cell';
import {LIVE,DEAD} from "../src/Cell";

describe('Cell', () => {
  it('should be a valid ', () => {
    const cell = new Cell(1, 2, LIVE);
    expect(cell.isValid()).toBeTruthy();
  });
  it('should be a invalid ', () => {
    const cell = new Cell(-1, 2, LIVE);
    expect(cell.isValid()).not.toBeTruthy();
  });
});