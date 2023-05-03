class Example extends Phaser.Scene {
    constructor() {
        super("hello-world");
    }

    preload() {
        // load the PNG file
        // this.load.image('DarkGrass', 'assets/DarkGrass.png');
        this.load.image('grass', 'assets/grass.png');
        this.load.image('dirt', 'assets/dirt.png');


        // load the JSON file
        // this.load.tilemapTiledJSON('tilemap', 'assets/DarkGrass.json');
        // this.load.spritesheet('', 'assets/DarkGrass.png', {frameWidth: 5, frameHeight: 6});

        // this.load.setBaseURL('https://labs.phaser.io');

        // this.load.image('sky', 'assets/skies/space3.png');
        // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        // this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        for (let y = 0; y < 50; y++) {
            for (let x = 0; x < 50; x++) {
                let val = x % 2 == y % 2 ? 'grass' : 'dirt';
                let pos = [x * 16 + 8, y * 16 + 8];
                this.add.image(pos[0], pos[1], val)
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    // width: 800,
    // height: 600,
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);