var Game = function () {};

Game.prototype = {

    config: {
        stageName: "Adding to 10",

        //Background Animation
        dustNumber: 200,

        //Size of the world - used for UI elements
        //These have to be the same as the canvas size
        worldSizeX: 1200,
        worldSizeY: 800,
        //Where to place the Question answered text
        textPlace: 30,

        //Players Information
        startValue: 0,
        currentValue: 0,
        startSpeed: 400,
        endValue: 10,

        //State of the Player
        alive: true,
        lives: 3,
        answered: 0,
        currentSpeed: 400,


        //Piece of things that affect you
        collectValue1: 1,
        collectText1: '+1',
        collectAmount1: 20,

        collectValue2: -1,
        collectText2: '-1',
        collectAmount2: 10,

        //Greater Than you AI
        sharkStart1: 5,
        sharkValue1: 1,
        sharkRemain1: 5,

        sharkStart2: 10,
        sharkValue2: 3,
        sharkRemain2: 10,

        sharkStart3: 5,
        sharkValue3: 5,
        sharkRemain3: 5,

        sharkStart4: 5,
        sharkValue4: 7,
        sharkRemain4: 5,

        sharkStart5: 5,
        sharkValue5: 10,
        sharkRemain5: 5,
        
        //Less Than you AI
        jellyStart1: 5,
        jellyValue1: 1,
        jellyRemain: 5,

    },


    create: function () {

        this.addWorld();
        this.addPlayer();

        this.addCollectables1();
        //this.addCollectables2();

        this.addShark1();
        this.addShark2();
        this.addShark3();
        this.addShark4();
        this.addShark5();

        //has to be added last
        //otherwise things swim over it
        this.addUI();

    },

    update: function () {

        //Player movement
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, this.config.currentSpeed);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }


        if (this.config.alive == false) {

        } else {
            //removing Collectables on collision with them
            this.game.physics.arcade.overlap(this.player, this.colls1, this.removeCol1, null, this);
            this.game.physics.arcade.overlap(this.player, this.colls2, this.removeCol2, null, this);

            //if you collide with Shark's
            this.game.physics.arcade.overlap(this.player, this.sharks1, this.sharkAttack1, null, this);
            this.game.physics.arcade.overlap(this.player, this.sharks2, this.sharkAttack2, null, this);
            this.game.physics.arcade.overlap(this.player, this.sharks3, this.sharkAttack3, null, this);
            this.game.physics.arcade.overlap(this.player, this.sharks4, this.sharkAttack4, null, this);
            this.game.physics.arcade.overlap(this.player, this.sharks5, this.sharkAttack5, null, this);

            //A colision with a clam
            this.game.physics.arcade.overlap(this.player, this.clamSprite, this.nextLevel, null, this);

        }

    },


    //Game Play Functions

    moreLives: function () {
        if (this.config.lives < 5) {
            this.config.lives += 1;
            this.livesSprite.frame -= 1;

            //if you have more lives you go slower
            this.config.currentSpeed -= 80;

        } else {
            this.config.lives = 5;
        }

        this.tenToWin();
        console.log(this.config.currentSpeed);

    },

    died: function () {
        this.player.frame = 1;
        this.config.alive = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.reBorn, this);

        this.config.lives -= 1;

        if (this.config.lives <= 0) {
            //you now have full lives and you speed is reset to fastest

            this.config.currentSpeed = 0;
            this.config.currentSpeed += this.config.startSpeed;
            this.config.lives = 5;
        } else {
            //you have less lives so you go faster
            this.config.currentSpeed += 80;
            this.livesSprite.frame += 1;
        }
        console.log(this.config.currentSpeed);

    },

    reBorn: function () {
        this.player.frame = 0;
        this.config.alive = true;
    },

    tenToWin: function () {
        if (this.config.answered < 10) {
            this.config.answered += 1;
        } else {

            this.addClam();
        }

    },

    addClam: function(){

        this.clamSprite = this.add.sprite(250, 250, 'clam');
        this.physics.enable(this.clamSprite, Phaser.Physics.ARCADE);
        this.clamSprite.enableBody = true;

        this.clamText = this.make.text(65, 50, this.config.endValue, {fill: '#FFFFFF' });
        this.clamSprite.addChild(this.clamText);

        this.endingText = this.add.text(400, 600, 'Become 10 or (Greater) and Get to the Clam!', {fill: '#000000' });
        this.endingText.fixedToCamera = true;

        console.log('there is a clam')
        console.log(this.clamSprite.body);


    },

    nextLevel: function(){
        if(this.config.endValue = this.config.currentValue) {
            game.state.start('Win');
        }
    },


    //Functions for Building the Environment

    addWorld: function () {

        //create world bounds, background image and lock to camera
        this.game.world.setBounds(0, 0, 2500, 2500);
        this.bounds = new Phaser.Rectangle(100, 100, 2500, 2500);
        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();


        //The Background aninimated dust particles
        this.dusts = this.add.group();

        for (var i = 0; i < this.config.dustNumber; i++) {
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'blob');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);
        }

        //Group information for Dust Partciles
        this.dustGroupB = this.game.make.group();
        this.dustGroupB.create(-50, -50, 'blob');
        this.dusts.add(this.dustGroupB);

        this.dusts.setAll('body.collideWorldBounds', true);
        this.dusts.setAll('body.bounce.x', 1);
        this.dusts.setAll('body.bounce.y', 1);
        this.dusts.setAll('body.minBounceVelocity', 0);


    },

    addUI: function () {
        //Lives in top left corner of the Camera
        this.livesSprite = this.add.sprite(10, 10, 'lives');
        this.livesSprite.fixedToCamera = true;

        this.livesSprite.frame = 2;

        //Score Board - Top Eats
        this.topEatsUI = this.add.image(500, 500, 'eatsUI')
        this.topEatsUI.fixedToCamera = true;
        this.topEatsUI.cameraOffset.setTo(this.config.worldSizeX - 200, 10);

        this.config.scoreValue += 25;


    },

    addPlayer: function () {

        this.player = this.add.sprite(1000, 1000, 'you');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(75, 75, 0, 0);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.x = 1;
        this.player.body.bounce.y = 1;
        this.player.body.minBounceVelocity = 0;

        this.game.camera.follow(this.player);

        //Text on Player - Showing the players value
        this.Number = this.make.text(25, 20, this.config.startValue, {fill: '#000000'});
        this.player.addChild(this.Number);

    },

    //Adding Collectables to the Game

    addCollectables1: function () {

        //create things for the player to collect
        this.colls1 = this.add.group();
        this.colls1.enableBody = true;
        this.colls1.physicsBodyType = Phaser.Physics.ARCADE;

        for (var colect1Index = 0; colect1Index < this.config.collectAmount1; colect1Index++) {
            this.col1 = this.colls1.create(this.bounds.randomX, this.bounds.randomY, 'block');

            //Text on the collectable blocks
            this.shownColls1Value = this.make.text(7, 8, this.config.collectText1, {fill: '#000000'});
            this.col1.addChild(this.shownColls1Value);
        }

        //Physics Properties for the collectables
        this.col1Group = this.game.make.group();
        this.col1Group.create(-50, -50, 'block');
        this.colls1.add(this.col1Group);

        this.colls1.setAll('body.collideWorldBounds', true);
        this.colls1.setAll('body.bounce.x', 1);
        this.colls1.setAll('body.bounce.y', 1);
        this.colls1.setAll('body.minBounceVelocity', 0);


    },

    addCollectables2: function () {

        //create things for the player to collect
        this.colls2 = this.add.group();
        this.colls2.enableBody = true;
        this.colls2.physicsBodyType = Phaser.Physics.ARCADE;

        for (var colect2Index = 0; colect2Index < this.config.collectAmount2; colect2Index++) {
            this.col2 = this.colls2.create(this.bounds.randomX, this.bounds.randomY, 'block');

            //Text on the collectable blocks
            this.shownColls2Value = this.make.text(7, 8, this.config.collectText2, {fill: '#000000'});
            this.col2.addChild(this.shownColls2Value);
        }
        //Physics Properties for the collectables
        this.col2Group = this.game.make.group();
        this.col2Group.create(-50, -50, 'block');
        this.colls2.add(this.col2Group);

        this.colls2.setAll('body.collideWorldBounds', true);
        this.colls2.setAll('body.bounce.x', 1);
        this.colls2.setAll('body.bounce.y', 1);
        this.colls2.setAll('body.minBounceVelocity', 0);


    },

    //Functions for what happens when you collide with Collectables

    removeCol1: function (_player, _col1) {
        _col1.kill();
        this.config.currentValue += (this.config.collectValue1);
        this.Number.setText(this.config.currentValue);
    },

    removeCol2: function (_player, _col2) {
        _col2.kill();
        this.config.currentValue += (this.config.collectValue2);
        this.Number.setText(this.config.currentValue);
    },


    //Adding Sharks to the game
    addShark1: function () {
        //The Greater Than You Enemys
        this.sharks1 = this.add.group();

        for (var i = 0; i < this.config.sharkStart1; i++) {

            this.shark1 = this.sharks1.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            //Physics Information about the Shark
            this.physics.enable(this.shark1, Phaser.Physics.ARCADE);
            this.shark1.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark1.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Shark
            this.sharkValue1 = this.make.text(25, 25, this.config.sharkValue1, {fill: '#FFFFFF'});
            this.shark1.addChild(this.sharkValue1);
        }
        //Some more physics information for the Shark
        this.sharkGroup1 = this.game.make.group();
        this.sharkGroup1.create(-50, -50, 'block');
        this.sharks1.add(this.sharkGroup1);

        this.sharks1.setAll('body.collideWorldBounds', true);
        this.sharks1.setAll('body.bounce.x', 1);
        this.sharks1.setAll('body.bounce.y', 1);
        this.sharks1.setAll('body.minBounceVelocity', 0);

    },

    addShark2: function () {
        //The Greater Than You Enemys
        this.sharks2 = this.add.group();

        for (var i = 0; i < this.config.sharkStart2; i++) {

            this.shark2 = this.sharks2.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            //Physics Information about the Shark
            this.physics.enable(this.shark2, Phaser.Physics.ARCADE);
            this.shark2.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark2.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Shark
            this.sharkValue2 = this.make.text(25, 25, this.config.sharkValue2, {fill: '#FFFFFF'});
            this.shark2.addChild(this.sharkValue2);
        }
        //Some more physics information for the Shark
        this.sharkGroup2 = this.game.make.group();
        this.sharkGroup2.create(-50, -50, 'block');
        this.sharks2.add(this.sharkGroup2);

        this.sharks2.setAll('body.collideWorldBounds', true);
        this.sharks2.setAll('body.bounce.x', 1);
        this.sharks2.setAll('body.bounce.y', 1);
        this.sharks2.setAll('body.minBounceVelocity', 0);

    },

    addShark3: function () {
        //The Greater Than You Enemys
        this.sharks3 = this.add.group();

        for (var i = 0; i < this.config.sharkStart3; i++) {

            this.shark3 = this.sharks3.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            //Physics Information about the Shark
            this.physics.enable(this.shark3, Phaser.Physics.ARCADE);
            this.shark3.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark3.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Shark
            this.sharkText3 = this.make.text(25, 25, this.config.sharkValue3, {fill: '#FFFFFF'});
            this.shark3.addChild(this.sharkText3);
        }
        //Some more physics information for the Shark
        this.sharkGroup3 = this.game.make.group();
        this.sharkGroup3.create(-50, -50, 'block');
        this.sharks3.add(this.sharkGroup3);

        this.sharks3.setAll('body.collideWorldBounds', true);
        this.sharks3.setAll('body.bounce.x', 1);
        this.sharks3.setAll('body.bounce.y', 1);
        this.sharks3.setAll('body.minBounceVelocity', 0);

    },

    addShark4: function () {
        //The Greater Than You Enemys
        this.sharks4 = this.add.group();

        for (var i = 0; i < this.config.sharkStart4; i++) {

            this.shark4 = this.sharks4.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            //Physics Information about the Shark
            this.physics.enable(this.shark4, Phaser.Physics.ARCADE);
            this.shark4.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark4.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Shark
            this.sharkText4 = this.make.text(25, 25, this.config.sharkValue4, {fill: '#FFFFFF'});
            this.shark4.addChild(this.sharkText4);
        }
        //Some more physics information for the Shark
        this.sharkGroup4 = this.game.make.group();
        this.sharkGroup4.create(-50, -50, 'block');
        this.sharks4.add(this.sharkGroup4);

        this.sharks4.setAll('body.collideWorldBounds', true);
        this.sharks4.setAll('body.bounce.x', 1);
        this.sharks4.setAll('body.bounce.y', 1);
        this.sharks4.setAll('body.minBounceVelocity', 0);

    },

    addShark5: function () {
        //The Greater Than You Enemys
        this.sharks5 = this.add.group();

        for (var i = 0; i < this.config.sharkStart5; i++) {

            this.shark5 = this.sharks5.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            //Physics Information about the Shark
            this.physics.enable(this.shark5, Phaser.Physics.ARCADE);
            this.shark5.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark5.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Shark
            this.sharkText5 = this.make.text(25, 25, this.config.sharkValue5, {fill: '#FFFFFF'});
            this.shark5.addChild(this.sharkText5);
        }
        //Some more physics information for the Shark
        this.sharkGroup5 = this.game.make.group();
        this.sharkGroup5.create(-50, -50, 'block');
        this.sharks5.add(this.sharkGroup5);

        this.sharks5.setAll('body.collideWorldBounds', true);
        this.sharks5.setAll('body.bounce.x', 1);
        this.sharks5.setAll('body.bounce.y', 1);
        this.sharks5.setAll('body.minBounceVelocity', 0);

    },

    //Functions on what happens when Sharks Eat You

    sharkAttack1: function (_player, _shark1) {

        if (this.config.currentValue <= this.config.sharkValue1) {
            this.died();
        }
        else {
            _shark1.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' > ' + this.config.sharkValue1, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.sharkRemain1 -= 1;

            //gain a life for killing a 
            this.moreLives();

            if (this.config.sharkRemain1 <= 0) {
                this.addShark1();

                this.config.sharkRemain1 += this.config.sharkStart1;
            }
        }

    },

    sharkAttack2: function (_player, _shark2) {

        if (this.config.currentValue <= this.config.sharkValue2) {
            this.died();
        }
        else {
            _shark2.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' > ' + this.config.sharkValue2, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.sharkRemain2 -= 1;

            //gain a life for killing a 
            this.moreLives();

            if (this.config.sharkRemain2 <= 0) {
                this.addShark2();

                this.config.sharkRemain2 += this.config.sharkStart2;
            }
        }

    },

    sharkAttack3: function (_player, _shark3) {

        if (this.config.currentValue <= this.config.sharkValue3) {
            this.died();
        }
        else {
            _shark3.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' > ' + this.config.sharkValue3, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.sharkRemain3 -= 1;

            //gain a life for killing a 
            this.moreLives();

            if (this.config.sharkRemain3 <= 0) {
                this.addShark3();

                this.config.sharkRemain3 += this.config.sharkStart3;
            }
        }

    },

    sharkAttack4: function (_player, _shark4) {

        if (this.config.currentValue <= this.config.sharkValue4) {
            this.died();
        }
        else {
            _shark4.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' > ' + this.config.sharkValue4, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.sharkRemain4 -= 1;

            //gain a life for killing a 
            this.moreLives();

            if (this.config.sharkRemain4 <= 0) {
                this.addShark4();

                this.config.sharkRemain4 += this.config.sharkStart4;
            }
        }
    },

    sharkAttack5: function (_player, _shark5) {

        if (this.config.currentValue <= this.config.sharkValue5) {
            this.died();
        }
        else {
            _shark5.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' > ' + this.config.sharkValue5, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.sharkRemain5 -= 1;

            //gain a life for killing a 
            this.moreLives();

            if (this.config.sharkRemain5 <= 0) {
                this.addShark5();

                this.config.sharkRemain5 += this.config.sharkStart5;
            }
        }
    },

}