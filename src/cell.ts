import View from "./view"
import Grid from "./grid"
import Creeper from "./creeper"

class Cell {
    id: number
    length: number
    coords: number[]
    pos: number[]
    view: View
    grid: Grid

    debugFillValue: number = Math.floor(Math.random() * 255)
    maxfill: number = 255
    fill: number = 0

    

    constructor(id: number, length: number, pos: number[], coords: number[], view: View, grid: Grid) {
        this.id = id
        this.view = view
        this.grid = grid
        this.length = length
        this.pos = pos
        this.coords = coords
    }

    drawCreeper() {
        this.view.ctx.fillStyle = `rgba(0,0,255,${this.fill/this.maxfill})`;
        this.view.ctx.fillRect(this.coords[0], this.coords[1], this.length, this.length)
    }


    receiveCreeper(amount: number) {
        this.fill += amount
        this.propogateCreeper()
    }

    propogateCreeper() {
        if (this.fill < this.maxfill / 10 ) return
        if (this.fill <= 0) return

        const deltas = [[0,1],[1,0],[0,-1],[-1,0]]

        for (let delta of deltas) {
            let newCellCoords = `${this.pos[0] + delta[0]},${this.pos[1] + delta[1]}`
            if (!this.grid.cells[newCellCoords]) continue
            if (this.grid.cells[newCellCoords].fill >= this.fill) continue

            let propogationRate = Math.floor(this.fill / 10)
            this.fill = (this.fill - propogationRate < 0) ? 0 : this.fill - propogationRate
            this.grid.cells[newCellCoords].receiveCreeper(propogationRate)
        }
    }


    fillCellRandomly() {
        this.view.ctx.fillStyle = `rgba(${this.debugFillValue},${this.debugFillValue},${this.debugFillValue},1`;
        this.view.ctx.fillRect(this.coords[0], this.coords[1], this.length, this.length)
    }

    drawIds() {
        this.view.ctx.fillStyle = `rgba(75,0,0,1`;
        this.view.ctx.font = '20px Arial';
        let measure = this.view.ctx.measureText(String(this.id))
        let textHeight = measure.fontBoundingBoxAscent
        let textWidth = measure.width
        this.view.ctx.fillText(String(this.fill), this.coords[0] + (this.length / 2) - (textWidth / 2), this.coords[1] + (this.length / 2) + textHeight - (textHeight / 2))

    }
}

export default Cell