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
var pipe1;
var player;

function preload ()
{
    this.load.image('sky', 'assets/background.png');
    this.load.image('pipe', 'assets/pipe.png');

}

function create ()
{

    // If this is not a desktop (so it's a mobile device)
    if (game.device.desktop == false) {
        // Set the scaling mode to SHOW_ALL to show all the game
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Set a minimum and maximum size for the game
        // Here the minimum is half the game size
        // And the maximum is the original game size
        game.scale.setMinMax(game.width/2, game.height/2,
            game.width, game.height);

        // Center the game horizontally and vertically
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    }

    background= this.add.tileSprite(0,0,game.config.width,game.config.height,'sky');
    background.setOrigin(0,0);

    pipe1 = this.physics.add.group();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    pipe1.create(100, 100, 'pipe').setScale(.2).refreshBody();

    pipe1.body.allowGravity = false;

    //this.physics.add.collider(player, bombs, hitBomb, null, this);


}

function update ()
{
    background.tilePositionX += 5;
    pipe1.tilePositionX +=5;
}