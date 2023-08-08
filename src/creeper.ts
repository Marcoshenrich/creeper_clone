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
        this.startingCell.fill = this.startingCell.maxfill
        console.log(this.startingCell.fill)
    }

    findStartCell(): Cell {
        Object.values(this.grid.cells).length
        let coord = Math.floor(Math.sqrt(Object.values(this.grid.cells).length)/2)
        console.log(this.grid.cells)
        console.log(`${coord},${coord}`)
        return this.grid.cells[`${coord},${coord}`]
    }


}

export default Creeper