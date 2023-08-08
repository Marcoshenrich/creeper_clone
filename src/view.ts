import Grid from "./grid"
import Creeper from "./creeper"

class View {
    height: number
    width: number
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    grid: Grid
    creeper: Creeper

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.canvas.width = 800
        this.canvas.height = 800
        this.grid = new Grid(this)
        this.creeper = new Creeper(this, this.grid)
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.creeper.flood()
        for (let cell in this.grid.cells) {
            // this.grid.cells[cell].fillCellRandomly()
            // this.grid.cells[cell].drawIds()
            this.grid.cells[cell].drawCreeper()

        }

        requestAnimationFrame(this.animate.bind(this));
    }
}


export default View