var Game3 = function () {};

Game3.prototype = {

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

        //State of the Player
        alive: true,
        lives: 3,
        answered: 0,
        currentSpeed: 400,


        //Piece of things that affect you
        collectValue1: -1,
        collectText1: '-1',
        collectAmount1: 10,

        collectValue2: -1,
        collectText2: '-1',
        collectAmount2: 10,

        //Less Than you AI
        jellyStart1: 10,
        jellyValue1: -1,
        jellyRemain: 10,

        jellyStart2: 10,
        jellyValue2: -2,
        jellyRemain2: 10,

        jellyStart3: 10,
        jellyValue3: -3,
        jellyRemain3: 10,

        jellyStart4: 10,
        jellyValue4: -4,
        jellyRemain4: 10,

        jellyStart5: 10,
        jellyValue5: -5,
        jellyRemain5: 10,

    },


    create: function () {

        this.addWorld();
        this.addPlayer();

        this.addCollectables1();
        //this.addCollectables2();

        this.addJelly1();
        this.addJelly2();
        this.addJelly3();
        this.addJelly4();
        this.addJelly5();

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

            //if you collide with Jelly's
            this.game.physics.arcade.overlap(this.player, this.jellys1, this.jellyAttack1, null, this);
            this.game.physics.arcade.overlap(this.player, this.jellys2, this.jellyAttack2, null, this);
            this.game.physics.arcade.overlap(this.player, this.jellys3, this.jellyAttack3, null, this);
            this.game.physics.arcade.overlap(this.player, this.jellys4, this.jellyAttack4, null, this);
            this.game.physics.arcade.overlap(this.player, this.jellys5, this.jellyAttack5, null, this);
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
            game.state.start('Loose1');
  
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

        console.log(this.config.lives);
    },

    tenToWin: function () {
        if (this.config.answered < 10) {
            this.config.answered += 1;
        } else {
            game.state.start('Game5');
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
        this.topEatsUI = this.add.image(600, 500, 'eatsUI')
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


    //Adding Jellys into the Game
    addJelly1: function(){
        this.jellys1 = this.add.group();

        for (var i = 0; i < this.config.jellyStart1; i++) {

            this.jelly1 = this.jellys1.create(this.bounds.randomX, this.bounds.randomY, 'jelly');
            //Physics Information about the Jelly
            this.physics.enable(this.jelly1, Phaser.Physics.ARCADE);
            this.jelly1.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.jelly1.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Jelly
            this.jellyText1 = this.make.text(25, 25, this.config.jellyValue1, {fill: '#FFFFFF'});
            this.jelly1.addChild(this.jellyText1);
        }
        //Some more physics information for the Jelly
        this.jellyGroup1 = this.game.make.group();
        this.jellyGroup1.create(-50, -50, 'block');
        this.jellys1.add(this.jellyGroup1);

        this.jellys1.setAll('body.collideWorldBounds', true);
        this.jellys1.setAll('body.bounce.x', 1);
        this.jellys1.setAll('body.bounce.y', 1);
        this.jellys1.setAll('body.minBounceVelocity', 0);

        console.log('there is a jelly here...');


    },

    addJelly2: function () {
        //The Greater Than You Enemys
        this.jellys2 = this.add.group();

        for (var i = 0; i < this.config.jellyStart2; i++) {

            this.jelly2 = this.jellys2.create(this.bounds.randomX, this.bounds.randomY, 'jelly');
            //Physics Information about the Jelly
            this.physics.enable(this.jelly2, Phaser.Physics.ARCADE);
            this.jelly2.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.jelly2.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Jelly
            this.jellyText2 = this.make.text(25, 25, this.config.jellyValue2, {fill: '#FFFFFF'});
            this.jelly2.addChild(this.jellyText2);
        }
        //Some more physics information for the Jelly
        this.jellyGroup2 = this.game.make.group();
        this.jellyGroup2.create(-50, -50, 'block');
        this.jellys2.add(this.jellyGroup2);

        this.jellys2.setAll('body.collideWorldBounds', true);
        this.jellys2.setAll('body.bounce.x', 1);
        this.jellys2.setAll('body.bounce.y', 1);
        this.jellys2.setAll('body.minBounceVelocity', 0);

    },

    addJelly3: function () {
        //The Greater Than You Enemys
        this.jellys3 = this.add.group();

        for (var i = 0; i < this.config.jellyStart3; i++) {

            this.jelly3 = this.jellys3.create(this.bounds.randomX, this.bounds.randomY, 'jelly');
            //Physics Information about the Jelly
            this.physics.enable(this.jelly3, Phaser.Physics.ARCADE);
            this.jelly3.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.jelly3.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Jelly
            this.jellyText3 = this.make.text(25, 25, this.config.jellyValue3, {fill: '#FFFFFF'});
            this.jelly3.addChild(this.jellyText3);
        }
        //Some more physics information for the Jelly
        this.jellyGroup3 = this.game.make.group();
        this.jellyGroup3.create(-50, -50, 'block');
        this.jellys3.add(this.jellyGroup3);

        this.jellys3.setAll('body.collideWorldBounds', true);
        this.jellys3.setAll('body.bounce.x', 1);
        this.jellys3.setAll('body.bounce.y', 1);
        this.jellys3.setAll('body.minBounceVelocity', 0);

    },

    addJelly4: function () {
        //The Greater Than You Enemys
        this.jellys4 = this.add.group();

        for (var i = 0; i < this.config.jellyStart4; i++) {

            this.jelly4 = this.jellys4.create(this.bounds.randomX, this.bounds.randomY, 'jelly');
            //Physics Information about the Jelly
            this.physics.enable(this.jelly4, Phaser.Physics.ARCADE);
            this.jelly4.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.jelly4.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Jelly
            this.jellyText4 = this.make.text(25, 25, this.config.jellyValue4, {fill: '#FFFFFF'});
            this.jelly4.addChild(this.jellyText4);
        }
        //Some more physics information for the Jelly
        this.jellyGroup4 = this.game.make.group();
        this.jellyGroup4.create(-50, -50, 'block');
        this.jellys4.add(this.jellyGroup4);

        this.jellys4.setAll('body.collideWorldBounds', true);
        this.jellys4.setAll('body.bounce.x', 1);
        this.jellys4.setAll('body.bounce.y', 1);
        this.jellys4.setAll('body.minBounceVelocity', 0);

    },

    addJelly5: function () {
        //The Greater Than You Enemys
        this.jellys5 = this.add.group();

        for (var i = 0; i < this.config.jellyStart5; i++) {

            this.jelly5 = this.jellys5.create(this.bounds.randomX, this.bounds.randomY, 'jelly');
            //Physics Information about the Jelly
            this.physics.enable(this.jelly5, Phaser.Physics.ARCADE);
            this.jelly5.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.jelly5.body.velocity.y = game.rnd.integerInRange(-220, 200);

            //Text Value of the Jelly
            this.jellyText5 = this.make.text(25, 25, this.config.jellyValue5, {fill: '#FFFFFF'});
            this.jelly5.addChild(this.jellyText5);
        }
        //Some more physics information for the Jelly
        this.jellyGroup5 = this.game.make.group();
        this.jellyGroup5.create(-50, -50, 'block');
        this.jellys5.add(this.jellyGroup5);

        this.jellys5.setAll('body.collideWorldBounds', true);
        this.jellys5.setAll('body.bounce.x', 1);
        this.jellys5.setAll('body.bounce.y', 1);
        this.jellys5.setAll('body.minBounceVelocity', 0);

    },


    //Functions on what happens when Jellys Eat You

    jellyAttack1: function (_player, _jelly1) {

        if (this.config.currentValue >= this.config.jellyValue1) {
            this.died();
        }
        else {
            _jelly1.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' < ' + this.config.jellyValue1, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.jellyRemain1 -= 1;

            //gain a life for killing a
            this.moreLives();

            if (this.config.jellyRemain1 <= 0) {
                this.addJelly1();

                this.config.jellyRemain1 += this.config.jellyStart1;
            }
        }

    },

    jellyAttack2: function (_player, _jelly2) {

        if (this.config.currentValue >= this.config.jellyValue2) {
            this.died();
        }
        else {
            _jelly2.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' < ' + this.config.jellyValue2, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.jellyRemain2 -= 1;

            //gain a life for killing a
            this.moreLives();

            if (this.config.jellyRemain2 <= 0) {
                this.addJelly2();

                this.config.jellyRemain2 += this.config.jellyStart2;
            }
        }

    },

    jellyAttack3: function (_player, _jelly3) {

        if (this.config.currentValue >= this.config.jellyValue3) {
            this.died();
        }
        else {
            _jelly3.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' < ' + this.config.jellyValue3, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.jellyRemain3 -= 1;

            //gain a life for killing a
            this.moreLives();

            if (this.config.jellyRemain3 <= 0) {
                this.addJelly3();

                this.config.jellyRemain3 += this.config.jellyStart3;
            }
        }

    },

    jellyAttack4: function (_player, _jelly4) {

        if (this.config.currentValue >= this.config.jellyValue4) {
            this.died();
        }
        else {
            _jelly4.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' < ' + this.config.jellyValue4, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.jellyRemain4 -= 1;

            //gain a life for killing a
            this.moreLives();

            if (this.config.jellyRemain4 <= 0) {
                this.addJelly4();

                this.config.jellyRemain4 += this.config.jellyStart4;
            }
        }
    },

    jellyAttack5: function (_player, _jelly5) {

        if (this.config.currentValue >= this.config.jellyValue5) {
            this.died();
        }
        else {
            _jelly5.kill();
            this.scoreUI = game.add.text(600, 500, this.config.currentValue + ' < ' + this.config.jellyValue5, {
                fill: "#000000",
                align: "center"
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX - 150, 10 + this.config.textPlace);

            this.config.textPlace += 25;
            this.config.jellyRemain5 -= 1;

            //gain a life for killing a
            this.moreLives();

            if (this.config.jellyRemain5 <= 0) {
                this.addJelly5();

                this.config.jellyRemain5 += this.config.jellyStart5;
            }
        }
    },
    
}