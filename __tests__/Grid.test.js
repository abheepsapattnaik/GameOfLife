import Grid from "../src/Grid";

describe('Grid', () => {
    it('should be true for valid ', () => {
        const grid = new Grid([[0,1],[1,0],[2,1],[0,2],[1,2]]);
        console.log(grid.nextGeneration());
        expect(grid.nextGeneration()).toBeFalsy();
    });
});