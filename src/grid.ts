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
        this.partition = 100
        this.cells = {}
        this.defineCells()
    }

    defineCells() {
        let cellHeight = this.view.canvas.height / this.partition
        let cellWidth = this.view.canvas.width / this.partition
        let cellId = 1

        for (let colHeight = 0; colHeight < this.view.canvas.height; colHeight += cellHeight) {
            for (let rowLen = 0; rowLen < this.view.canvas.width; rowLen += cellWidth) {
                this.cells[`${rowLen},${colHeight}`] = new Cell(cellId, cellHeight, rowLen, colHeight, this.view, this)
                cellId += 1
            } 
        }

    }
}

export default Grid