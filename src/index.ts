import View from "./view"

const canvas = <HTMLCanvasElement> document.getElementById('canvas1')

const view = new View(canvas)

view.animate()