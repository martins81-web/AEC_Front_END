var config = {
    type: Phaser.AUTO,
    width: 414,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 900 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var background;
var pipe1, pipe2, pipe3, pipe4;
var player;
var sizeY;
var flappy;
var gameOver = false;
var cursors;
var previousCursor;
var wingSound, rickRoll;
var test;


var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('sky', 'assets/background.jpg');
    this.load.image('pipe', 'assets/pipe.png');
    this.load.image('flappy', 'assets/flappy.png');
    this.load.audio("wingSound", 'assets/sounds/sfx_wing.wav');
    this.load.audio("rickRoll", 'assets/sounds/nggyu.mp3');


}

function create ()
{

    background= this.add.tileSprite(0,0,game.config.width,game.config.height,'sky');
    background.setOrigin(0,0);

    cursors = this.input.keyboard.createCursorKeys();
    previousCursor = this.input.keyboard.createCursorKeys();

    wingSound = this.sound.add("wingSound");
    rickRoll = this.sound.add("rickRoll");
    rickRoll.play();


    // The player and its settings
    flappy = this.physics.add.sprite(140, 450, 'flappy');
    flappy.setCollideWorldBounds(true);
    flappy.scale = .1;


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

    this.physics.add.collider(flappy, pipe1, hitPipe, null, this);
    this.physics.add.collider(flappy, pipe2, hitPipe, null, this);
    this.physics.add.collider(flappy, pipe3, hitPipe, null, this);
    this.physics.add.collider(flappy, pipe3, hitPipe, null, this);

}

function update ()
{
    if (gameOver)
    {
        return;
    }
    else{
        background.tilePositionX += 5;

        UpdatePipe();

        if (cursors.left.isDown)
        {
            flappy.setVelocityY(-350);
            flappy.angle = -25;
            wingSound.play();
            //wingSound.pause();
            //wingSound.stop;
        }
        else{
            flappy.setVelocityX(0);
            if(flappy.angle < 80){
                flappy.angle +=2;
            }

        }
    }


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
        pipe1.y = Math.round(549- (sizeY / 5));
        pipe1.setSize(275,sizeY);

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

function hitPipe(){
    this.physics.pause();

    flappy.setTint(0xff0000);

    gameOver = true;
}