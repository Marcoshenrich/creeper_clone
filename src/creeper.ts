import Grid from "./grid";
import View from "./view";
import Cell from "./cell";



class Creeper {
    view: View
    grid: Grid
    startingCell: Cell

    constructor(view: View, grid: Grid) {
        this.view = view
        this.grid = grid
        this.startingCell = this.findStartCell()
    }

    findStartCell(): Cell {
        Object.values(this.grid.cells).length
        let coord = Math.floor(Object.values(this.grid.cells).length / 2)
        return this.grid.cells[`${coord},${coord}`]
    }

    flood() {
        this.startingCell.flood()
    }

}