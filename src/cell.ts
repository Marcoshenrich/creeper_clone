import View from "./view"

class Cell {
    id: number
    pos: number[]
    view: View

    constructor(id: number, rowPos: number, colPos: number, view: View) {
        this.id = id
        this.view = view
        this.pos = [rowPos, colPos]
    }

    draw() {
        this.view.ctx.fillStyle = `rgba(75,0,0,1`;
        this.view.ctx.font = '20px Arial';
        this.view.ctx.fillText(String(this.id), this.pos[0], this.pos[1] + 20)
    }
}

export default Cell