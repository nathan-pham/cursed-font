import GameScreen from "./GameScreen.js";

// prettier-ignore
// characters match up to font.png (probably)
const characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_, []()^<>!?\"';:~&©*|_\\÷+-/=1234567890";

// death in a nutshell
const fontBase64 = `data:image/png;base64,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`;

// fake jquery utils
const $ = (query) => document.querySelector(query);
const $$ = (query) => [...document.querySelectorAll(query)];

// export font class
export default class Font {
    // props
    image = new Image();

    spritesheet = {};
    characterMap = {};

    // async load image
    load() {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.onload = () => {
                this.image = image;
                resolve(this);
            };

            image.onerror = () => {
                reject(new Error("could not load font"));
            };

            image.src = fontBase64;
        });
    }

    // create a spritesheet given how many characters along each axis
    createSpritesheet(xSegments, ySegments) {
        const spritesheet = {};

        // get character size
        const tileWidth = this.image.naturalWidth / xSegments;
        const tileHeight = this.image.naturalHeight / ySegments;

        // create a new canvas
        const sprite = new GameScreen();
        sprite.onResize({ width: tileWidth, height: tileHeight });

        for (let y = 0; y < ySegments; y++) {
            for (let x = 0; x < xSegments; x++) {
                const sx = x * tileWidth;
                const sy = y * tileHeight;

                // clear canvas
                sprite.ctx.clearRect(0, 0, tileWidth, tileHeight);
                sprite.ctx.imageSmoothingEnabled = false;

                // prettier-ignore
                // draw character to canvas & store it in spritesheet
                sprite.ctx.drawImage(this.image, sx, sy, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
                spritesheet[`${x},${y}`] = sprite.toImage();
            }
        }

        this.spritesheet = spritesheet;
        return this;
    }

    // create a character map (character -> sprite key)
    createCharacterMap() {
        const sprites = Object.keys(this.spritesheet);
        const characterMap = {};

        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];
            const sprite = sprites[i];

            characterMap[character] = sprite;
        }

        this.characterMap = characterMap;
        return this;
    }

    // convert messages to sprites
    text(message) {
        return message
            .split("")
            .map((char) => this.spritesheet[this.characterMap[char] || "0,0"]);
    }

    // main method
    static async main(useClass = ".cursed-font") {
        // load font
        const font = (await new Font().load())
            .createSpritesheet(18, 5)
            .createCharacterMap();

        $$(useClass).forEach((p) => {
            // get computed style for font size
            const fontSize = parseInt(getComputedStyle(p).fontSize);

            // strip all white space
            const sprites = font.text(
                p.textContent
                    .split(" ")
                    .map((n) => n.trim())
                    .filter((n) => n.length > 0)
                    .join(" ")
            );

            p.innerHTML = "";

            // append cloned image to dom with fontSize in mind
            sprites.forEach((sprite) => {
                const image = sprite.cloneNode();
                image.width = fontSize;
                image.height = fontSize;
                p.appendChild(image);
            });
        });
    }
}
