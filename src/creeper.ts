import Grid from "./grid";
import View from "./view";
import Cell from "./cell";



class Creeper {
    view: View
    grid: Grid
    startingCell: Cell

    floodRate: number = .1

    constructor(view: View, grid: Grid) {
        this.view = view
        this.grid = grid
        this.startingCell = this.findStartCell()
        this.startingCell.fill = 50
    }

    findStartCell(): Cell {
        Object.values(this.grid.cells).length
        let centerCoord = Math.floor(Math.sqrt(Object.values(this.grid.cells).length)/2)
        return this.grid.cells[`${centerCoord},${centerCoord}`]
    }

    flood() {
        this.startingCell.receiveCreeper(this.floodRate)
    }


}

export default Creeper