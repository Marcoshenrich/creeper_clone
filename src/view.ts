import Grid from "./grid"


class View {
    height: number
    width: number
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    grid: Grid

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.canvas.width = 800
        this.canvas.height = 800
        this.grid = new Grid(this)
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let cell in this.grid.cells) {
            this.grid.cells[cell].draw()
        }

        this.ctx.fillText("hello", 0, 0)


        requestAnimationFrame(this.animate.bind(this));
    }
}


export default View