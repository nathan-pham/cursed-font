export default class GameScreen {
    constructor() {
        this.canvas = document.createElement("canvas");
        // not actually necessary because we turn off image smoothing
        this.canvas.className = "canvas-crisp";

        this.ctx = this.canvas.getContext("2d");
    }

    onResize(size) {
        this.canvas.style.width = `${size.width}px`;
        this.canvas.style.height = `${size.height}px`;

        this.canvas.width = size.width;
        this.canvas.height = size.height;
    }

    toImage() {
        const image = new Image();

        image.src = this.canvas.toDataURL("image/png");
        image.width = this.canvas.width;
        image.height = this.canvas.height;

        return image;
    }
}
