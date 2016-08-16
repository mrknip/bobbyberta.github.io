WebFontConfig = {
    google: {
        families: ['Schoolbell']
    }

};

var game = new Phaser.Game(1026, 768, Phaser.AUTO, 'container', {

    preload: function () {

        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


        //game.load.spritesheet('body', 'assets2/body6.png', 75, 75, 4);
        //game.load.spritesheet('jelly', 'assets3/JellySpriteSheet.png', 50, 50, 15);
        game.load.spritesheet('shark', 'assets3/SharkSpriteSheet.png', 50, 50, 15);

        game.load.image('body', 'assets3/playerStar.png');
        game.load.image('bg', 'assets3/background.png');

        game.load.image('purpleDust', 'assets3/DustPurple.png');
        game.load.image('blueDust', 'assets3/DustBlue.png');

        game.load.image('rightUI', 'assets3/uiSolve.png');
        game.load.image('leftUI', 'assets3/uiEnergySolve.png');
        game.load.image('lives', 'assets3/liveSprite.png');

        game.load.image('jelly', 'assets3/blueJelly1.png');
        //game.load.image('shark', 'assets3/pinkJelly1.png');

    },

    create: function () {

        this.addWorld();
        this.addDust();
        this.addJellys();
        this.addPlayer();
        this.addUI();

        this.createScoreText();
        this.createComboText();


    },

    update: function () {

        //Player movement with mouse
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, 400);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }
    },


    addWorld: function(){

        //create world bounds, background image and lock to camera
        this.game.world.setBounds(0, 0, 2500, 2500);
        this.bounds = new Phaser.Rectangle(0, 0, 2000, 600);
        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;

        // //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();

    },
    addDust: function() {

        //create Purple Dust
        this.dusts = this.add.group();
        this.dustPhysicsGroup = this.game.make.group();

        for (var i = 0; i < 100; i++) {
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'purpleDust');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.dust.anchor.setTo(0.5,0.5);
            this.dust.body.collideWorldBounds = true;
            this.dust.body.bounce.x = 1;
            this.dust.body.bounce.y = 1;
            this.dust.body.minBounceVelocity = 0;
        }

        //create Blue Dust
        this.dusts = this.add.group();
        this.dustPhysicsGroup = this.game.make.group();

        for (var i = 0; i < 100; i++) {
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'blueDust');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.dust.anchor.setTo(0.5,0.5);
            this.dust.body.collideWorldBounds = true;
            this.dust.body.bounce.x = 1;
            this.dust.body.bounce.y = 1;
            this.dust.body.minBounceVelocity = 0;
        }

    },
    addJellys: function(){

        //add A (just one) jelly
        this.jelly = this.add.sprite(1000, 1000, 'jelly');

        this.physics.enable(this.jelly, Phaser.Physics.ARCADE);
        //this.jelly.scale.setTo(2, 2);
        this.jelly.body.setSize(100, 100, 0, 0);
        this.jelly.anchor.setTo(0.5,0.5);
        this.jelly.body.collideWorldBounds = true;
        this.jelly.body.bounce.x = 1;
        this.jelly.body.bounce.y = 1;
        this.jelly.body.minBounceVelocity = 0;

        this.jelly.animations.add('jellyBlob', [0, 1, 2, 3, 4,5,6,7, 8, 9, 10, 11, 12 ,13, 14, 15], 15, true).play();

        this.jelly.body.velocity.x = game.rnd.integerInRange(-200, 200);
        this.jelly.body.velocity.y = game.rnd.integerInRange(-220, 200);


        //add A (just one) shark
        this.shark = this.add.sprite(1000, 1000, 'shark');

        this.physics.enable(this.shark, Phaser.Physics.ARCADE);
        this.shark.scale.setTo(2, 2);
        this.shark.body.setSize(100, 100, 0, 0);
        this.shark.anchor.setTo(0.5,0.5);
        this.shark.body.collideWorldBounds = true;
        this.shark.body.bounce.x = 1;
        this.shark.body.bounce.y = 1;
        this.shark.body.minBounceVelocity = 0;

        this.shark.animations.add('jellyBlob', [0, 1, 2, 3, 4,5,6,7, 8, 9, 10, 11, 12 ,13, 14, 15], 15, true).play();

        this.shark.body.velocity.x = game.rnd.integerInRange(-200, 200);
        this.shark.body.velocity.y = game.rnd.integerInRange(-220, 200);



    },
    addUI: function(){
        this.topEatsUI = this.add.image(500, 500, 'rightUI');
        this.topEatsUI.fixedToCamera = true;
        this.topEatsUI.cameraOffset.setTo(1026 - 200, 20);


        //left hand side UI
        this.scoreUI = this.add.image(500, 500, 'leftUI');
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(20, 20);

        //lives sprites
        //Lives in top left corner of the Camera
        this.livesSprite = this.add.sprite(25, 65, 'lives');
        this.livesSprite.fixedToCamera = true;
    },
    addPlayer: function(){

        //player
        this.player = this.add.sprite(1000, 1000, 'body');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(150, 150, 0, 0);
        this.player.anchor.setTo(0.5,0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.x = 1;
        this.player.body.bounce.y = 1;
        this.player.body.minBounceVelocity = 0;

        this.game.camera.follow(this.player);

        //Text on Player - Showing the players value
        this.Number = this.make.text(-15, -20, '5', {fill: '#040b59', style: "bold"});
        //this.Number.font = 'Schoolbell';
        this.Number.fontSize = 40;
        this.player.addChild(this.Number);

    },

    createScoreText: function() {

    this.scoreText = game.add.text(25, 100, "0", {fill: "#ffffff", align: "centre"});
        this.scoreText.fixedToCamera = true;
        this.scoreText.cameraOffset.setTo(70, 165);

        this.scoreText.font = 'Schoolbell';
        this.scoreText.fontSize = 60;
},

    createComboText: function() {

        this.scoreText = game.add.text(25, 100, "x1", {fill: "#ffffff", align: "centre"});
        this.scoreText.fixedToCamera = true;
        this.scoreText.cameraOffset.setTo(70, 310);

        this.scoreText.font = 'Schoolbell';
        this.scoreText.fontSize = 60;
    }

});