import View from "./view"
import Cell from "./cell"


class Grid {
    partition: number
    view: View
    cells: { 
        [key: string]: Cell
    }

    constructor(view: View) { 
        this.view = view
        this.partition = 10
        this.cells = {}
        this.defineCells()
    }

    defineCells() {
        let cellHeight = this.view.canvas.height / this.partition
        let cellWidth = this.view.canvas.width / this.partition
        let cellId = 1

        for (let rowLen = 0; rowLen < this.view.canvas.width; rowLen += cellWidth) {
            for (let colHeight = 0; colHeight < this.view.canvas.height; colHeight += cellHeight) {
                this.cells[`${rowLen},${colHeight}`] = new Cell(cellId, rowLen, colHeight, this.view)
                cellId += 1
            } 
        }

    }
}

export default Grid