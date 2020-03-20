var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 420,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var background;

function preload ()
{
    this.load.image('sky', 'assets/background.png');
}

function create ()
{
    background= this.add.tileSprite(0,0,game.config.width,game.config.height,'sky');
    background.setOrigin(0,0);

}

function update ()
{
    background.tilePositionX += 5;
}