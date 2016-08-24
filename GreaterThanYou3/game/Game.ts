GreaterThan.Game = function (game) {
};

GreaterThan.Game.prototype = {
    config: {

        //Size of the world - used for UI elements
        //These have to be the same as the canvas size
        viewSizeX: 1200,
        viewSizeY: 800,


        //Where to place the Question answered text
        textPlace: 86,

        //How many points you start with
        startPoints: '0',

        //Medal you won in the last round  - this changes
        medal: 'none',

        //Players Information
        //startValue: 0,
        startSpeed: 400,
        endValue: 10,

        //State of the Player
        alive: true,
        lives: 3,
        answerStart: 0,
        startSpeed: 400,

        currentLevel: 0,
        finalLevel: 9,
        clamStart: false,


    },

    gameState: {},

    //Phaser functions

    preload: function () {
        game.load.image('splash', 'assets/startScreen.png');

        game.load.spritesheet('you', 'assets2/body6.png', 75, 75, 4);
        game.load.spritesheet('lives', 'assets/LivesGreaterThan.png', 150, 30, 5);
        game.load.spritesheet('tailSwish', 'assets2/tail.png', 150, 150, 16);
        game.load.spritesheet('headFace', 'assets2/headFace.png', 150, 150, 2);

        //game.load.spritesheet('medals', 'assets3/medals.png', 300, 260, 3);
        game.load.image('bronze', 'assets3/bronze.png');
        game.load.image('silver', 'assets3/silver.png');
        game.load.image('gold', 'assets3/gold.png');
        game.load.image('complete', 'assets3/depthCompleted.png');
        game.load.image('play', 'assets3/playButton.png');
        //game.load.spritesheet('enemy', 'assets3/SharkSpriteSheet.png', 50, 50, 15);

        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('eatsUI', 'assets3/uiBar.png');
        game.load.image('blob', 'assets/bgDust.png');
        game.load.image('block', 'assets/collectable.png');
        game.load.image('enemy', 'assets2/shark.png');
        game.load.image('jelly', 'assets2/jelly.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('loose', 'assets/loose.png');
        game.load.image('title', 'assets/TitleBar.png');

        game.load.image('clam', 'assets/clam.png');
        game.load.image('waves', 'assets/waves.png');
        game.load.image('head', 'assets/head.png');


    },


    create: function () {

        var levelId = this.config.currentLevel;


        this.gameState = {
            currentLevel: levelId,
            levelName: levels[levelId].levelName,
            currentValue: levels[levelId].startValue,
            endValue: levels[levelId].endValue,
            playerMaxValue: levels[levelId].playerMaxValue,
            playerMinValue: levels[levelId].playerMinValue,
            worldSizeX: levels[levelId].worldSizeX,
            worldSizeY: levels[levelId].worldSizeY,
            //the number of background animations is 10% of the world size
            dustNumber: levels[levelId].worldSizeX/10,
            toBig: false,
            toSmall: false,
            alive: this.config.alive,
            lives: this.config.lives,
            currentSpeed: this.config.startSpeed,
            answered: this.config.answerStart,
            clams: 0,
            textPlace: this.config.textPlace,
            startPoints: this.config.startPoints,
            combo: 0,
            points: 0,
            fullUp: false,
            physicsGroup: this.add.group(),
            sharkGroups: [],
            jellyGroups: [],
            eatGroups: [],
        };

        this.addWorld();

        this._createEntities();

        //has to be added last otherwise things swim over it
        this.addUI();
    },


    update: function () {
        //Player movement with mouse
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, this.gameState.currentSpeed);

            //  if it's overlapping the mouse, don't move any more
            //this only works for top left corner where this is true - because the game world is bigger than the screen
            //this dose not work !!! need to find a different way to calculate the position of the mouse is over the player.
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }

        //player animation
        // this.tail.x = this.player.x
        // this.tail.y = this.player.y
        //
        // this.head.x = this.player.x
        // this.head.y = this.player.y
        //
        // this.tail.rotation = game.physics.arcade.angleToPointer(this.tail);
        // this.head.rotation = game.physics.arcade.angleToPointer(this.head);

        //arrow key movement
        if (this.game.cursors.left.isDown) {
            this.player.x -= this.gameState.currentSpeed/80;
        }
        else if (this.game.cursors.right.isDown)
        {
            this.player.x += this.gameState.currentSpeed/80;
        }

        if (this.game.cursors.up.isDown) {
            this.player.y -= this.gameState.currentSpeed/80;
        }
        else if (this.game.cursors.down.isDown)
        {
            this.player.y += this.gameState.currentSpeed/80;
        }

        //setting up collisions
        if (this.gameState.alive == false) {

        } else {

            for (var i = 0; i < this.gameState.eatGroups.length; ++i) {
                var currentEatGroup = this.gameState.eatGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentEatGroup,
                    function (player, eats) {
                        this.checkeatsValueCollected(
                            eats,
                            currentEatGroup,
                            currentEatGroup.value,
                            currentEatGroup.text,
                            'block'
                        );
                    },
                    null,
                    this
                );
            }


            for (var i = 0; i < this.gameState.sharkGroups.length; ++i) {
                var currentSharkGroup = this.gameState.sharkGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentSharkGroup,
                    function (player, shark) {
                        this.sharkAttack(
                            player,
                            shark,
                            currentSharkGroup,
                            currentSharkGroup.value,
                            'enemy'
                        );
                    },
                    null,
                    this
                );
            }

            for (var i = 0; i < this.gameState.jellyGroups.length; ++i) {
                var currentJellyGroup = this.gameState.jellyGroups[i];

                this.game.physics.arcade.overlap(
                    this.player,
                    currentJellyGroup,
                    function (player, jelly) {
                        this.jellyAttack(
                            player,
                            jelly,
                            currentJellyGroup,
                            currentJellyGroup.value,
                            'jelly'
                        );
                    },
                    null,
                    this
                );
            }


            //A colision with a clam
            if (this.gameState.clamExist = false){
            } else {
                this.game.physics.arcade.overlap(this.player, this.clamSprite, this.nextLevel, null, this);
            }

        }

    },


    //Functions for Building the Environment

    addWorld: function () {

        //create world bounds, background image and lock to camera
        this.game.world.setBounds(0, 0, this.gameState.worldSizeX, this.gameState.worldSizeY);
        this.bounds = new Phaser.Rectangle(0, 0, this.gameState.worldSizeX/1.2, this.gameState.worldSizeY/1.2);
        this.background = game.add.tileSprite(0, 0, 1600, 900, 'bg');
        this.background.fixedToCamera = true;

        //this.waves = game.add.tileSprite(0, 0, 2500 , 2500, 'waves');

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();



        //The Background aninimated dust particles
        this.dusts = this.add.group();
        this.dustPhysicsGroup = this.game.make.group();

        for (var i = 0; i < this.gameState.dustNumber; i++) {
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'blob');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);
        }

        this._createGroupPhyscis(this.dusts, this.dustPhysicsGroup);


    },

    addUI: function () {
        //Lives in top left corner of the Camera
        this.livesSprite = this.add.sprite(10, 10, 'lives');
        this.livesSprite.fixedToCamera = true;

        this.livesSprite.frame = 2;

        //Score Board - Top Eats
        this.topEatsUI = this.add.image(500, 500, 'eatsUI');
        this.topEatsUI.fixedToCamera = true;
        this.topEatsUI.cameraOffset.setTo(this.config.viewSizeX - 200, 50);

        //title Bar - name of level
        this.titleUI = this.add.image(500, 500, 'title');
        this.titleUI.fixedToCamera = true;
        this.titleUI.cameraOffset.setTo(this.config.viewSizeX - 200, 10);

        this.titleText = this.make.text(5, 5, this.gameState.levelName, {fill: '#24475b'});
        this.titleUI.addChild(this.titleText);

        this.titleText = this.make.text(5, 5, this.gameState.levelName, {fill: '#24475b'});
        this.titleUI.addChild(this.titleText);

        //points UI
        this.pointsText = game.add.text(600, 500, this.gameState.startPoints, {
            fill: "#24475b",
            align: "center"
        });
        this.pointsText.fixedToCamera = true;
        this.pointsText.cameraOffset.setTo(this.config.viewSizeX - 130, 370);

        //combo UI
        this.comboText = game.add.text(600, 500, this.gameState.combo, {
            fill: "#24475b",
            align: "center"
        });
        this.comboText.fixedToCamera = true;
        this.comboText.cameraOffset.setTo(this.config.viewSizeX - 100, 475);


        this.config.scoreValue += 25;

    },

    _createEntities: function () {


        if (levels[this.gameState.currentLevel].eats){
            var eats = levels[this.gameState.currentLevel].eats;
            for (var i=0; i < eats.length; ++i){
                var eatsConfig = eats[i];
                this._addAllStaticObjects(eatsConfig.initialCount, this.gameState.eatGroups, eatsConfig.value, eatsConfig.text, 'block')
            }
        }

        if (levels[this.gameState.currentLevel].sharks){
            var sharks = levels[this.gameState.currentLevel].sharks;
            for (var i = 0; i < sharks.length; ++i) {
                var sharkConfig = sharks[i];
                this._addAllMovingObjects(sharkConfig.initialCount, this.gameState.sharkGroups, sharkConfig.value, 'enemy');
            }
        }

        if (levels[this.gameState.currentLevel].jellys) {

            var jellys = levels[this.gameState.currentLevel].jellys;
            for (var i = 0; i < jellys.length; ++i) {
                var jellyConfig = jellys[i];
                this._addAllMovingObjects(jellyConfig.initialCount, this.gameState.jellyGroups, jellyConfig.value, 'jelly');
            }
        }

        this.addPlayer();
    },

    addPlayer: function () {

        this.player = this.add.sprite(1000, 1000, 'you');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(75, 75, 0, 0);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.x = 1;
        this.player.body.bounce.y = 1;
        this.player.body.minBounceVelocity = 0;

        this.game.camera.follow(this.player);

        //Text on Player - Showing the players value
        this.Number = this.make.text(-10, -15, levels[this.gameState.currentLevel].startValue, {fill: '#000000'});
        this.player.addChild(this.Number);

        // //create a tail
        //
        // this.tail = this.add.sprite(1000, 1000, 'tailSwish');
        // this.tail.anchor.setTo(1, 0.55);
        // this.tail.animations.add('tailSwish', [0, 1, 2, 3, 4,5,6,7], 10, true).play();
        //
        // //this.tail.animations.add('tailSwish', [0, 1, 2, 3, 4,5,6,7], 30, true).play();
        //
        // //create a head
        // this.head = this.add.sprite(1000, 1000, 'headFace');
        // this.head.anchor.setTo(-0.1, 0.5);
        // this.head.frame = 1;

    },


    //Functions for changing between levels

    addLevelUpScreen: function (){

        this.config.currentLevel ++;

        game.stage.backgroundColor = "#6f9695";
        this.levelUp = game.add.sprite(220, 170, 'complete');
        this.levelUp.fixedToCamera = true;

        this.medal = game.add.sprite(260, 290, this.config.medal);
        this.medal.fixedToCamera = true;

        this.playButton = game.add.button(630, 280, 'play', this._endLevel, this);

        this.playButton.fixedToCamera = true;

        console.log(this.config.medal);


        //
        // game.add.tween(this.levelUp).to( { alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);
        //
        // game.time.events.add(Phaser.Timer.SECOND * 4, this._endLevel, this)


    },

    _endLevel: function(){
        this.game.world.removeAll();
        this.create();

    },

    addLevelDownScreen: function (){


        game.stage.backgroundColor = "#6f9695";

        this.levelDown = game.add.image(0, 0, 'loose');
        this.levelDown.fixedToCamera = true;

        game.add.tween(this.levelDown).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);

        this.config.currentLevel --;;

        game.time.events.add(Phaser.Timer.SECOND * 3, this._endLevel, this)



    },

    addEndScreen: function(){
        game.stage.backgroundColor = "#6f9695";

        this.levelEnd = game.add.sprite(0, 0, 'splash');
        this.levelEnd.fixedToCamera = true;
        this.levelEnd.inputEnabled = true;

        this.levelEnd.events.onInputDown.add(this.startGame, this);

    },

    startGame: function(){
        this.config.currentLevel = 1;
        this.game.world.removeAll();

        this.create();
    },



    //Game Play Functions

    moreLives: function () {
        if (this.gameState.lives < 5) {
            this.gameState.lives += 1;
            this.livesSprite.frame -= 1;

            //if you have more lives you go slower
            //this.gameState.currentSpeed -= 80;

            console.log('my speed= ' + this.gameState.currentSpeed);

        } else {
            this.gameState.lives = 5;
        }

        this.tenToWin();

    },

    died: function () {

        console.log('my speed= ' + this.gameState.currentSpeed);

        if(this.gameState.fullUp == false){
            this.player.frame = 1;
        }else if(this.gameState.fullUp == true){
            this.player.frame = 3;
        }

        this.gameState.combo = 0;
        this.checkCombo();

        console.log(this.gameState.fullUp);

        // //change animations
        // this.head.frame = 2;
        // this.tail.animations.add('tailSwish', [8, 9, 10, 11, 12, 13, 14 ,15], 10, true).play();

        //change states
        this.gameState.alive = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.reBorn, this);

        this.gameState.lives -= 1;

        if (this.gameState.lives <= 0) {

            //go down to easier dificulty
            if(this.config.currentLevel > 0){
                this.config.currentLevel = this.gameState.currentLevel;

                this.game.world.removeAll();
                this.addLevelDownScreen();
            }else{
                // //you now have full lives and you speed is reset to fastest
                //this.gameState.currentSpeed = 0;
                //this.gameState.currentSpeed += this.config.startSpeed;
                this.gameState.lives = 5;
            }

        } else {
            //you have less lives so you go faster
            //this.gameState.currentSpeed += 80;
            this.livesSprite.frame += 1;
        }


    },

    reBorn: function () {

        if(this.gameState.fullUp == false){
            this.player.frame = 0;
        }else if(this.gameState.fullUp == true){
            this.player.frame = 2;
        }

        // this.head.frame = 1;
        // this.tail.animations.add('tailSwish', [0, 1, 2, 3, 4,5,6,7], 10, true).play();
        this.gameState.alive = true;
    },

    tenToWin: function () {
        if (this.gameState.answered <= 9) {
            this.gameState.answered += 1;
        }
        else if( this.gameState.answered == 10 && this.gameState.clams < 1){
            this.gameState.clams = 1;
            this.addClam();

        }
    },

    addClam: function () {

        this.clamSprite = this.add.sprite(this.gameState.worldSizeX/2, this.gameState.worldSizeY/2, 'clam');
        this.physics.enable(this.clamSprite, Phaser.Physics.ARCADE);
        this.clamSprite.enableBody = true;

        this.clamText = this.make.text(65, 50, this.gameState.endValue, {fill: '#FFFFFF'});
        this.clamSprite.addChild(this.clamText);

        this.endingText = this.add.text(400, 600, 'Become ' + this.gameState.endValue + ' and Get to the Clam!', {fill: '#000000'});
        this.endingText.fixedToCamera = true;

        console.log('there is a clam')
        console.log(this.clamSprite.body);
        console.log(this.gameState.clamExist);

        console.log(this.gameState.currentValue + ' is my current value')
        console.log(this.gameState.endValue + ' is my end value')


    },

    nextLevel: function () {

        //Calculate medal won
        this.config.medal = 'none';
        console.log(this.config.medal);

        if(this.gameState.points <=1000){
            this.config.medal = 'bronze';
        }else if (this.gameState.points >=1000 && this.gameState.points <= 2000){
            this.config.medal = 'silver';
        }else{
            this.config.medal = 'gold';
        }
        console.log(this.config.medal);

        if (this.gameState.currentValue == this.gameState.endValue){

            this.config.currentLevel = this.gameState.currentLevel;
            this.clamSprite.destroy();

            this.game.world.removeAll();

            this.addLevelUpScreen();

        }
    },



    //Creating Moving Objects - Such as sharks or jelly fish or dust
    _addAllMovingObjects: function (amount, listOfGroups, value, image) {
        var objectGroup = this.add.group();

        objectGroup.value = value;

        listOfGroups.push(objectGroup);

        this._createMovingObject(amount, objectGroup, value, image);
    },

    _createMovingObject: function (amount, objectGroup, value, image) {
        for (var i = 0; i < amount; i++) {
            this._createMovingObjectAndAddToGroup(objectGroup, value, image);
        }
    },

    _createMovingObjectAndAddToGroup: function(objectGroup, value, image){
        var object = objectGroup.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        //give the object a random speed
        object.body.velocity.x = game.rnd.integerInRange(-200, 200);
        object.body.velocity.y = game.rnd.integerInRange(-220, 200);

        var text = this.make.text(42, 22, value, {fill: '#f4f0ce'});
        object.addChild(text);

        //object.animations.add(object + 'aniamtion', [0, 1, 2, 3, 4,5,6,7, 8, 9, 10, 11, 12 ,13, 14, 15], 15, true).play();

        this._createGroupPhyscis(objectGroup, this.gameState.physicsGroup);

    },



    //Creating Static Objects - Such as collectables 'eats'
    _createStaticObject: function (amount, objectGroup, value, textValue, image) {
        for (var i = 0; i < amount; i++) {
            this._createStaticObjectAndAddToGroup(objectGroup, textValue, image);
        }
    },

    _createStaticObjectAndAddToGroup: function(objectGroup, textValue, image){
        var object = objectGroup.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        var textShown = this.make.text(5, 5, textValue, {fill: '#000000'});
        object.addChild(textShown);

        console.log(textValue)

        this._createGroupPhyscis(objectGroup, this.gameState.physicsGroup);


    },

    _addAllStaticObjects: function (amount, listOfGroups, value, textValue, image) {
        var staticObjectGroup = this.add.group();

        staticObjectGroup.value = value;
        staticObjectGroup.text = textValue;

        listOfGroups.push(staticObjectGroup);

        this._createStaticObject(amount, staticObjectGroup, value, textValue, image);
    },


    //This physics is used for both static and moving objects
    _createGroupPhyscis: function (objectGroup, physicsGroup) {
        //Some more physics information for the Shark
        physicsGroup = this.game.make.group();
        physicsGroup.create(-50, -50, 'block');
        objectGroup.add(physicsGroup);

        objectGroup.setAll('body.collideWorldBounds', true);
        objectGroup.setAll('body.bounce.x', 1);
        objectGroup.setAll('body.bounce.y', 1);
        objectGroup.setAll('body.minBounceVelocity', 0);
    },


    //Sub-Functions that happen when a group of object e.g. sharks, jellys, eats have been colldied with

    _addSharkSolvedMath: function (currentValue, sharkValue, viewSizeX, textPlace) {

        if (this.gameState.answered <= 9) {

            this.scoreUI = game.add.text(600, 500, currentValue + ' > ' + sharkValue, {
                fill: "#24475b",
                align: "center",
                fontSize: 15
            });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(viewSizeX - 160, 10 + textPlace);

            console.log('game state answered = ' + this.gameState.answered);

            this._addPoints();
        }
    },

    _aniamtionSharkSolvedMath: function(currentValue, sharkValue, player){
        this.solvedEquation = game.add.text(player.x, player.y,  currentValue + ' > ' + sharkValue, {fill: "#24475b"});

    },

    _animationSharkError: function(currentValue, sharkValue, player){
        this.wrongEquation = game.add.text(player.x, player.y,  currentValue + ' < ' + sharkValue, {fill: "#5b2447"});

    },

    _aniamtionJellySolvedMath: function(currentValue, jellyValue, player){
        this.solvedEquation = game.add.text(player.x, player.y,  currentValue + ' < ' + jellyValue, {fill: "#5b2447"});

    },

    _animationJellyError: function(currentValue, jellyValue, player){
        this.wrongEquation = game.add.text(player.x, player.y,  currentValue + ' > ' + jellyValue, {fill: "#24475b"});

    },

    _addJellySolvedMath: function (currentValue, jellyValue, viewSizeX, textPlace) {
        this.scoreUI = game.add.text(600, 500, currentValue + ' < ' + jellyValue, {
            fill: "#5b2447",
            align: "center"
        });
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(viewSizeX - 160, 10 + textPlace);

        this._addPoints();

    },

    //add score 100 for each eat (capped at 10 eats)
    //need to animate the enemies to fade them out when they reach 10 eats - to show you cannot interact

    _addPoints: function(){


        this.comboCount = 100 + (this.gameState.combo * 50);


        this.gameState.points += this.comboCount;

        this.pointsText.setText(this.gameState.points);

        this.checkCombo();

        this.gameState.combo +=1;

        // console.log('how big is my combo count? ' + this.comboCount );
        // console.log('how big is my combo count? ' + this.gameState.combo );
        // console.log('what is my score? ' + this.gameState.points );

    },

    checkCombo: function(){

        this.comboText.setText(this.gameState.combo);

    },


    //what happens when you collid with something

    sharkAttack: function (player, shark, sharkGroup, sharkValue, image) {

        if (this.gameState.currentValue <= sharkValue) {
            //this._animationSharkError(this.gameState.currentValue, sharkValue, player);
            this.died();
        }
        else {
            shark.kill();
            this._addSharkSolvedMath(this.gameState.currentValue, sharkValue, this.config.viewSizeX, this.gameState.textPlace);
            this._aniamtionSharkSolvedMath(this.gameState.currentValue, sharkValue, player);

            this.gameState.textPlace += 21;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(sharkGroup, sharkValue, image);
        }
    },

    jellyAttack: function (player, jelly, jellyGroup, jellyValue, image) {

        if (this.gameState.currentValue >= jellyValue) {
            //this._animationJellyError(this.gameState.currentValue, jellyValue, player);
            this.died();
        }
        else {
            jelly.kill();
            this._addJellySolvedMath(this.gameState.currentValue, jellyValue, this.config.viewSizeX, this.gameState.textPlace);
            this._aniamtionJellySolvedMath(this.gameState.currentValue, jellyValue, player);

            this.gameState.textPlace += 21;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(jellyGroup, jellyValue, image);
        }
    },

    checkeatsValueCollected: function(eats, eatsObjectGroup, value, textValue, image){

        var eatsValue = value;

        if(eatsValue == 'Double'){
            var possibleValue = this.gameState.currentValue *2;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }

        else if(eatsValue == 'Half'){
            var possibleValue = this.gameState.currentValue *0.5;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }

        else if(eatsValue == 'Square'){
            var possibleValue = this.gameState.currentValue * this.gameState.currentValue;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }

        else if(eatsValue == 'Times10'){
            var possibleValue = this.gameState.currentValue * 10;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }

        else if(eatsValue == 'Divide10'){
            var possibleValue = this.gameState.currentValue /10;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }

        else if(eatsValue == 'Power10'){
            var possibleValue = this.gameState.currentValue * 10;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }
        else if(eatsValue == 'Power-10'){
            var possibleValue = this.gameState.currentValue /10;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }



        //HOW ON EARTH DO YOU WORK OUT ROOTS????? IN A NICE CLEAN FUNCTION D: D: D:
        else if(eatsValue == 'Root'){

            if(this.gameState.currentValue == 4){
                var possibleValue = 2
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 9){
                var possibleValue = 3
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 16){
                var possibleValue = 4
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 25){
                var possibleValue = 5
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 36){
                var possibleValue = 6
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 49){
                var possibleValue = 7
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }
            else if(this.gameState.currentValue == 64){
                var possibleValue = 8
                this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
            }


            else
            {
                console.log('You cannot pick up anymore')
            }
        }
        //else deals with the 'normal' case where eatsValue is an integer and not a string
        else{
            var possibleValue = value + this.gameState.currentValue;
            this._eatsCollected(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image);
        }
    },

    _eatsCollected: function(eatsValue, possibleValue, eats, eatsObjectGroup, value, textValue, image){
        if( possibleValue >= this.gameState.playerMinValue &&  possibleValue <= this.gameState.playerMaxValue ){
            eats.kill();
            this.gameState.currentValue = possibleValue;
            this._createStaticObjectAndAddToGroup(eatsObjectGroup, textValue, image);

            this.gameState.fullUp = false;
            this.player.frame = 0;

        }else{
            this.gameState.fullUp = true;
            this.player.frame = 2;
            console.log('You cannot pick up anymore')
        }

        this.Number.setText(this.gameState.currentValue);

    },

};

console.log('Game State');