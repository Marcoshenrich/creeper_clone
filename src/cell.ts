import View from "./view"
import Grid from "./grid"

class Cell {
    id: number
    length: number
    pos: number[]
    view: View
    debugFillValue:number
    grid: Grid
    fill: number
    

    constructor(id: number, length: number, rowPos: number, colPos: number, view: View, grid: Grid) {
        this.id = id
        this.view = view
        this.grid = grid
        this.length = length
        this.pos = [rowPos, colPos]
        this.debugFillValue = Math.floor(Math.random() * 255)
        this.fill = 0
    }

    // draw() {
    //     this.view.ctx.fillStyle = `rgba(75,0,0,1`;
    //     this.view.ctx.font = '20px Arial';
    //     this.view.ctx.fillText(String(this.id), this.pos[0], this.pos[1] + this.view.ctx.measureText(String(this.id)).fontBoundingBoxAscent)
    // }



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