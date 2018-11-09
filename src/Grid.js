import Position from "./Position";
import Cell from "./Cell";
import State, {LIVE,DEAD} from "../src/State";

export default class Grid {

    constructor(inputCells) {
        this.maxCol = this.maxRow = 0;
        this.cells = [];
        for (let inputCell of inputCells) {
            if (inputCell[0] > this.maxRow) {
                this.maxRow = inputCell[0];
            }
            if (inputCell[1] > this.maxCol) {
                this.maxCol = inputCell[1];
            }
            this.cells.push(new Cell(new Position(inputCell[0], inputCell[1]), new State(LIVE)));
        }
        this.limit = new Position(this.maxRow + 1, this.maxCol + 1)
    }

    cellAtPos(position) {
        for (let cell of this.cells) {
            if (cell.position.row === position.row && cell.position.column === position.column) {
                return cell;
            }
        }
        return new Cell(new Position(position.row, position.column), new State(DEAD));
    }

    nextGeneration(){
        let liveCells=[];
        for(let i = 0; i <= this.limit.row; i++){
            for(let j = 0; j <= this.limit.column; j++){
                if(this.cellAtPos(new Position(i,j)).nextGeneration(this).state.isLive()){
                    liveCells.push(this.cellAtPos(new Position(i,j)).nextGeneration(this));
                }
            }
        }
        return liveCells;
    }
}