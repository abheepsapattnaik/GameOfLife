import {DEAD, LIVE} from "./State";
import Cell from './Cell';

export default class Position {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    isValid() {
        return this.row > 0 && this.column > 0;
    }

    neighbors() {
        let listNeighbor = [];
        listNeighbor.push(new Position(this.row - 1, this.column - 1));
        listNeighbor.push(new Position(this.row , this.column - 1));
        listNeighbor.push(new Position(this.row + 1, this.column - 1));
        listNeighbor.push(new Position(this.row - 1, this.column));
        listNeighbor.push(new Position(this.row + 1, this.column));
        listNeighbor.push(new Position(this.row - 1, this.column + 1));
        listNeighbor.push(new Position(this.row, this.column + 1));
        listNeighbor.push(new Position(this.row + 1, this.column + 1));
        return listNeighbor;
    }
}