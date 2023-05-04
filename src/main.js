class Example extends Phaser.Scene {
    constructor() {
        super("hello-world");
    }

    preload() {
        this.load.image('grass', 'assets/grass.png');
        this.load.image('dirt', 'assets/dirt.png');
        this.load.text('map', 'assets/asdf.txt');
    }

    create() {
        let cache = this.cache.text;
        let m = cache.get('map').split('\n');


        for (let y = 0; y < m.length; y++) {
            for (let x = 0; x < m[y].length; x++) {
                let val = m[y][x] == 1 ? 'grass' : 'dirt';
                let pos = [x * 16 + 8, y * 16 + 8];
                this.add.image(pos[0], pos[1], val)
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 128*16,
    height: 128*16,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);