import View from "./view"

const canvas = <HTMLCanvasElement> document.getElementById('canvas1')

const view = new View(canvas)
console.log("index3")

view.animate()