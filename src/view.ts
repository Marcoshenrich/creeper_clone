


class View {
    height: number
    width: number
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    x: number

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.x = 0
        this.animate();
    }

    animate() {
        // // Clear the entire canvas
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // // Draw a rectangle
        // this.ctx.fillStyle = 'red';
        // this.ctx.fillRect(this.x, 10, 100, 100);

        // // Update the x position
        // this.x += 1;

        // // If the rectangle is off the right edge of the canvas, reset x
        // if (this.x > this.canvas.width) {
        //     this.x = -100;
        // }

        requestAnimationFrame(this.animate.bind(this));
    }
}


export default View