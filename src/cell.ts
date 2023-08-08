import View from "./view"
import Grid from "./grid"
import Creeper from "./creeper"

class Cell {
    id: number
    length: number
    pos: number[]
    view: View
    grid: Grid

    debugFillValue: number = Math.floor(Math.random() * 255)
    maxfill: number = 255
    fill: number = 0

    

    constructor(id: number, length: number, rowPos: number, colPos: number, view: View, grid: Grid) {
        this.id = id
        this.view = view
        this.grid = grid
        this.length = length
        this.pos = [rowPos, colPos]
    }

    drawCreeper() {
        this.view.ctx.fillStyle = `rgba(0,0,255,${this.fill/this.maxfill})`;
        this.view.ctx.fillRect(this.pos[0], this.pos[1], this.length, this.length)
    }





    fillCellRandomly() {
        this.view.ctx.fillStyle = `rgba(${this.debugFillValue},${this.debugFillValue},${this.debugFillValue},1`;
        this.view.ctx.fillRect(this.pos[0], this.pos[1], this.length, this.length)
    }

    drawIds() {
        this.view.ctx.fillStyle = `rgba(75,0,0,1`;
        this.view.ctx.font = '20px Arial';
        let measure = this.view.ctx.measureText(String(this.id))
        let textHeight = measure.fontBoundingBoxAscent
        let textWidth = measure.width
        this.view.ctx.fillText(String(this.id), this.pos[0] + (this.length / 2) - (textWidth / 2), this.pos[1] + (this.length / 2) + textHeight - (textHeight / 2))

    }
}

export default Cell