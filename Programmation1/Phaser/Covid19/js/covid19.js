var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var humains;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('humain', 'assets/humain.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('zombie', 'assets/zombies.jpg', { frameWidth: 32, frameHeight: 32 });

}

function create ()
{
    humains = this.physics.add.group({
        key: 'humain',
        quantity: 50,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 0,
        velocityY: 0
    });

    for (var i =0;i< humains.getChildren().length;i++){
        var isolement = Math.random() * 10;

        if(isolement >= 0){
            humains.getChildren()[i].setVelocityX(Math.floor(Math.random() * 360)-180);
            humains.getChildren()[i].setVelocityY(Math.floor(Math.random() * 360)-180);
        }

    }

    humains.getChildren()[0].setTexture('zombie');
    humains.getChildren()[0].setScale(1.4);

    this.anims.create({
        key: 'standH',
        frames: this.anims.generateFrameNumbers('humain', { start: 0, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'standZ',
        frames: this.anims.generateFrameNumbers('zombie', { start: 0, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'leftH',
        frames: this.anims.generateFrameNumbers('humain', { start: 12, end: 23 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'rightH',
        frames: this.anims.generateFrameNumbers('humain', { start: 24, end: 31 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'leftZ',
        frames: this.anims.generateFrameNumbers('zombie', { start: 12, end: 23 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'rightZ',
        frames: this.anims.generateFrameNumbers('zombie', { start: 24, end: 31 }),
        frameRate: 10,
        repeat: -1
    });

    Phaser.Actions.RandomRectangle(humains.getChildren(), this.physics.world.bounds);

    this.physics.add.collider(
        humains,
        humains,
        function (humain, humain2)
        {
            if(humain.texture.key === 'zombie' && humain2.texture.key === 'humain'){
                humain2.setTexture('zombie');
                humain2.setScale(1.4);
            }
        });

    console.log(humains.getChildren()[1].texture.key);
}

function update ()
{

    for (var i =0;i< humains.getChildren().length;i++){
        if(humains.getChildren()[i].texture.key === 'humain'){
            if(humains.getChildren()[i].body.velocity.x > 0)
                humains.getChildren()[i].anims.play('rightH', true);
            else if(humains.getChildren()[i].body.velocity.x < 0)
                humains.getChildren()[i].anims.play('leftH', true);
            else
                humains.getChildren()[i].anims.play('standH', true);
        }
        else{
            if(humains.getChildren()[i].body.velocity.x > 0)
                humains.getChildren()[i].anims.play('rightZ', true);
            else if(humains.getChildren()[i].body.velocity.x < 0)
                humains.getChildren()[i].anims.play('leftZ', true);
            else
                humains.getChildren()[i].anims.play('standZ', true);
        }

    }
}