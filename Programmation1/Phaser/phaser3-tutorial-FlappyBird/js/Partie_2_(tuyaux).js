var config = {
    type: Phaser.AUTO,
    width: 414,
    height: 600,
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
var pipe1, pipe2, pipe3, pipe4;
var player;
var sizeY;

function preload ()
{
    this.load.image('sky', 'assets/background.jpg');
    this.load.image('pipe', 'assets/pipe.png');

}

function create ()
{

    background= this.add.tileSprite(0,0,game.config.width,game.config.height,'sky');
    background.setOrigin(0,0);

    pipe1= this.add.tileSprite(600,425,275,620,'pipe');
    pipe1.setOrigin(0,0);
    pipe1.allowGravity = false;
    pipe1.scale = .2;

    pipe2= this.add.tileSprite(600,0,275,620,'pipe');
    pipe2.flipY = true;
    pipe2.setOrigin(0,0);
    pipe2.allowGravity = false;
    pipe2.scale = .2;

    pipe3= this.add.tileSprite(900,425,275,620,'pipe');
    pipe3.setOrigin(0,0);
    pipe3.allowGravity = false;
    pipe3.scale = .2;

    pipe4= this.add.tileSprite(900,0,275,620,'pipe');
    pipe4.flipY = true;
    pipe4.setOrigin(0,0);
    pipe4.allowGravity = false;
    pipe4.scale = .2;
    //  The platforms group contains the ground and the 2 ledges we can jump on
    //pipe = this.physics.add.staticGroup();
    //ipe.setOrigin(0,0);

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //pipe.create(400, 568, 'pipe').setScale(.2).refreshBody();

}

function update ()
{
    background.tilePositionX += 5;

    UpdatePipe();

}

function UpdatePipe(){
    pipe1.x -=5;
    pipe2.x -=5;
    pipe3.x -=5;
    pipe4.x -=5;

    if(pipe1.x < (0 - pipe1.width)){
        pipe1.x = game.config.width;
        pipe2.x = game.config.width;

        sizeY = Math.round(Math.random() * 1000) + 300;
        pipe1.setSize(275,sizeY);
        pipe1.y = Math.round(549- (sizeY / 5));

        sizeY = Math.round(Math.random() * 1000) + 300;
        pipe2.setSize(275,sizeY);
    }
    if(pipe3.x < (0 - pipe3.width)){
        pipe3.x = game.config.width;
        pipe4.x = game.config.width;

        sizeY = Math.round(Math.random() * 1000) + 300;
        pipe3.setSize(275,sizeY);
        pipe3.y = Math.round(549- (sizeY / 5));

        sizeY = Math.round(Math.random() * 1000) + 300;
        pipe4.setSize(275,sizeY);
    }
}