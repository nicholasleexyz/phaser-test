let player;
let keyForward;
let keyBack;
let keyLeft;
let keyRight;
let moveSpeed = 10;
//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
class Example extends Phaser.Scene {
    constructor() {
        super("hello-world");
    }

    preload() {
        this.load.image('grass', 'assets/grass.png');
        this.load.image('dirt', 'assets/dirt.png');
        this.load.image('water', 'assets/water.png');
        this.load.text('map', 'assets/asdf.txt');
    }

    create() {
        keyForward = this.input.keyboard.addKey('W');
        keyBack = this.input.keyboard.addKey('S');
        keyLeft = this.input.keyboard.addKey('A');
        keyRight = this.input.keyboard.addKey('D');

        let cache = this.cache.text;
        let m = cache.get('map').split('\n');

        for (let y = 0; y < m.length; y++) {
            for (let x = 0; x < m[y].length; x++) {
                // let val = m[y][x] == 1 ? 'water' : 'dirt';
                let val = m[y][x] == 1 ? 'dirt' : 'water';
                let pos = [x * 16 + 8, y * 16 + 8];
                this.add.image(pos[0], pos[1], val)
            }
        }

        player = this.add.image(128 * 8, 128 * 8, 'grass');
    }

    update() {
        movePlayer(player, moveSpeed);
    }

}

function movePlayer(p, speed) {
    if (keyForward.isDown && keyLeft.isDown || keyBack.isDown && keyLeft.isDown || keyForward.isDown && keyRight.isDown || keyBack.isDown && keyRight.isDown)
        speed *= 0.7071;

    if (keyForward.isDown)
        p.y -= speed;
    if (keyBack.isDown)
        p.y += speed;
    if (keyLeft.isDown)
        p.x -= speed;
    if (keyRight.isDown)
        p.x += speed;
}


const config = {
    type: Phaser.AUTO,
    width: 128 * 16,
    height: 128 * 16,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);