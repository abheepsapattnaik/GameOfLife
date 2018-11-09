import Cell,{LIVE,DEAD} from "../src/Cell";
import Position from "../src/Position";

describe('Cell', () => {
  it('should be a valid ', () => {
    const position = new Position(1,2);
    const cell = new Cell(position, LIVE);
    expect(cell.isValid()).toBeTruthy();
  });
  it('should be a invalid ', () => {
    const cell = new Cell(-1, 2, LIVE);
    expect(cell.isValid()).not.toBeTruthy();
  });
});