var game = new Phaser.Game(1200, 800, Phaser.AUTO, 'container', {

    config: {

        //Background Animation
        dustNumber: 200,

        //Size of the world - used for UI elements
        //These have to be the same as the canvas size
        worldSizeX: 1200,
        worldSizeY: 800,


        //Where to place the Question answered text
        textPlace: 90,

        //Players Information
        //startValue: 0,
        startSpeed: 400,
        endValue: 10,

        //State of the Player
        alive: true,
        lives: 3,
        answerStart: 0,
        startSpeed: 400,

        currentLevel: 1,
        finalLevel: 4,
        clamStart: false,


        levels: {
            1: {
                levelName: 'Level 1',
                startValue: 1,
                endValue: 10,
                playerMaxValue: 10,
                playerMinValue: 0,
                sharks: [
                    {
                        value: 1,
                        initialCount: 2,
                    },
                    {
                        value: 2,
                        initialCount: 10,
                    },
                    {
                        value: 5,
                        initialCount: 5
                    },
                    {
                        value: 7,
                        initialCount: 5
                    },
                    {
                        value: 10,
                        initialCount: 5
                    }
                ],
                eats: [
                    {
                        value: 1,
                        text: '+1',
                        initialCount: 20
                    },
                ]
            },
            2: {
                levelName: 'Level 2',
                startValue: 50,
                endValue: 10,
                playerMaxValue: 50,
                playerMinValue: 10,
                sharks: [
                    {
                        value: 0,
                        initialCount: 2,
                    },
                    {
                        value: 1,
                        initialCount: 2,
                    },
                    {
                        value: 4,
                        initialCount: 2,
                    },
                    {
                        value: 9,
                        initialCount: 2,
                    },
                    {
                        value: 10,
                        initialCount: 2,
                    },
                    {
                        value: 19,
                        initialCount: 2,
                    },
                    {
                        value: 24,
                        initialCount: 2,
                    },
                    {
                        value: 25,
                        initialCount: 2,
                    },
                    {
                        value: 33,
                        initialCount: 2,
                    },
                    {
                        value: 37,
                        initialCount: 2,
                    },
                    {
                        value: 50,
                        initialCount: 2,
                    },
                    {
                        value: 48,
                        initialCount: 2,
                    }
                ],
                eats: [
                    {
                        value: -1,
                        text: '-1',
                        initialCount: 20
                    },
                    {
                        value: -2,
                        text: '-2',
                        initialCount: 20
                    },
                    {
                        value: -5,
                        text: '-5',
                        initialCount: 20
                    },
                ],
            },
            3: {
                levelName: 'Level 3',
                startValue: 0,
                endValue: 50,
                playerMaxValue: 100,
                playerMinValue: -50,
                sharks: [
                    {
                        value: 0,
                        initialCount: 1,
                    },
                    {
                        value: 1,
                        initialCount: 1,
                    },
                    {
                        value: 4,
                        initialCount: 1,
                    },
                    {
                        value: 9,
                        initialCount: 1,
                    },
                    {
                        value: 10,
                        initialCount: 1,
                    },
                    {
                        value: 19,
                        initialCount: 1,
                    },
                    {
                        value: 24,
                        initialCount: 1,
                    },
                    {
                        value: 25,
                        initialCount: 1,
                    },
                    {
                        value: 33,
                        initialCount: 1,
                    },
                    {
                        value: 37,
                        initialCount: 1,
                    },
                    {
                        value: 50,
                        initialCount: 1,
                    },
                    {
                        value: 48,
                        initialCount: 1,
                    },

                    {
                        value: 99,
                        initialCount: 1,
                    },
                    {
                        value: 77,
                        initialCount: 1,
                    },
                    {
                        value: 91,
                        initialCount: 1,
                    },
                    {
                        value: 68,
                        initialCount: 1,
                    },
                    {
                        value: 84,
                        initialCount: 1,
                    },
                    {
                        value: -33,
                        initialCount: 1,
                    },
                    {
                        value: -49,
                        initialCount: 1,
                    },
                    {
                        value: -28,
                        initialCount: 1,
                    },
                    {
                        value: -18,
                        initialCount: 1,
                    },
                    {
                        value: -14,
                        initialCount: 1,
                    },
                    {
                        value: -6,
                        initialCount: 1,
                    },
                    {
                        value: 7,
                        initialCount: 1,
                    }
                ],
                eats: [
                    {
                        value: -1,
                        text: '-1',
                        initialCount: 5
                    },
                    {
                        value: -2,
                        text: '-2',
                        initialCount: 5
                    },
                    {
                        value: -5,
                        text: '-5',
                        initialCount: 5
                    },
                    {
                        value: -10,
                        text: '-10',
                        initialCount: 5
                    },
                    {
                        value: 1,
                        text: '+1',
                        initialCount: 5
                    },
                    {
                        value: 2,
                        text: '+2',
                        initialCount: 5
                    },
                    {
                        value: 5,
                        text: '+5',
                        initialCount: 5
                    },
                    {
                        value: 10,
                        text: '+10',
                        initialCount: 5
                    },
                ],
            },
            4: {
                levelName: 'Level 4',
                startValue: 0,
                endValue: 10,
                playerMaxValue: 10,
                playerMinValue: 0,
                sharks: [
                    {
                        value: 0,
                        initialCount: 1,
                    },
                    {
                        value: 1,
                        initialCount: 1,
                    },
                    {
                        value: 2,
                        initialCount: 1,
                    },
                    {
                        value: 3,
                        initialCount: 1,
                    },
                    {
                        value: 4,
                        initialCount: 1,
                    },
                    {
                        value: 5,
                        initialCount: 1,
                    },
                    {
                        value: 6,
                        initialCount: 1,
                    },
                    {
                        value: 7,
                        initialCount: 1,
                    },
                    {
                        value: 8,
                        initialCount: 1,
                    },
                    {
                        value: 9,
                        initialCount: 1,
                    },
                ],
                jellys: [
                    {
                        value: 1,
                        initialCount: 1,
                    },
                    {
                        value: 2,
                        initialCount: 1,
                    },

                    {
                        value: 3,
                        initialCount: 1,
                    },
                    {
                        value: 4,
                        initialCount: 1,
                    },
                    {
                        value: 5,
                        initialCount: 1,
                    },
                    {
                        value: 6,
                        initialCount: 1,
                    },
                    {
                        value: 7,
                        initialCount: 1,
                    },
                    {
                        value: 8,
                        initialCount: 1,
                    },
                    {
                        value: 9,
                        initialCount: 1,
                    },
                    {
                        value: 10,
                        initialCount: 1,
                    },
                ],
                eats: [
                    {
                        value: -1,
                        text: '-1',
                        initialCount: 25
                    },
                    {
                        value: 1,
                        text: '+1',
                        initialCount: 25
                    },
                ],
            },

        },
    },

    gameState: {},

    preload: function () {
        game.load.image('splash', 'assets/startScreen.png');

        game.load.spritesheet('you', 'assets/IconYouSprite.png', 75, 75, 2);
        game.load.spritesheet('lives', 'assets/LivesGreaterThan.png', 150, 30, 5);

        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('eatsUI', 'assets/eatsUI.png');
        game.load.image('blob', 'assets/bgDust.png');
        game.load.image('block', 'assets/collectable.png');
        game.load.image('enemy', 'assets/shark1.png');
        game.load.image('jelly', 'assets/jelly1.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('loose', 'assets/loose.png');
        game.load.image('title', 'assets/TitleBar.png');

        game.load.image('clam', 'assets/clam.png');
    },


    create: function () {

        var levelId = this.config.currentLevel;

        this.addWorld();

        this.gameState = {
            currentLevel: levelId,
            levelName: this.config.levels[levelId].levelName,
            currentValue: this.config.levels[levelId].startValue,
            endValue: this.config.levels[levelId].endValue,
            playerMaxValue: this.config.levels[levelId].playerMaxValue,
            playerMinValue: this.config.levels[levelId].playerMinValue,
            toBig: false,
            toSmall: false,
            alive: this.config.alive,
            lives: this.config.lives,
            currentSpeed: this.config.startSpeed,
            answered: this.config.answerStart,
            clamExist: this.config.clamStart,
            textPlace: this.config.textPlace,
            physicsGroup: this.add.group(),
            sharkGroups: [],
            jellyGroups: [],
            eatGroups: [],
        };

        this._createEntities();

        //has to be added last otherwise things swim over it
        this.addUI();

        console.log(this.config.currentLevel);
    },
    

    update: function () {
        //Player movement
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, this.gameState.currentSpeed);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }



        if (this.gameState.alive == false) {

        } else {

                for (var i = 0; i < this.gameState.eatGroups.length; ++i) {
                    var currentEatGroup = this.gameState.eatGroups[i];

                    this.game.physics.arcade.overlap(
                        this.player,
                        currentEatGroup,
                        function (player, eats) {
                            this.eatsCollected(
                                player,
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
        this.game.world.setBounds(0, 0, 2500, 2500);
        this.bounds = new Phaser.Rectangle(100, 100, 2500, 2500);
        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();


        //The Background aninimated dust particles
        this.dusts = this.add.group();
        this.dustPhysicsGroup = this.game.make.group();

        for (var i = 0; i < this.config.dustNumber; i++) {
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
        this.topEatsUI.cameraOffset.setTo(this.config.worldSizeX - 200, 50);

        //title Bar - name of level
        this.titleUI = this.add.image(500, 500, 'title');
        this.titleUI.fixedToCamera = true;
        this.titleUI.cameraOffset.setTo(this.config.worldSizeX - 200, 10);

        this.titleText = this.make.text(5, 5, this.gameState.levelName, {fill: '#24475b'});
        this.titleUI.addChild(this.titleText);


        this.config.scoreValue += 25;

    },

    _createEntities: function () {


        if (this.config.levels[this.gameState.currentLevel].eats){
            var eats = this.config.levels[this.gameState.currentLevel].eats;
            for (var i=0; i < eats.length; ++i){
                var eatsConfig = eats[i];
                this._addAllStaticObjects(eatsConfig.initialCount, this.gameState.eatGroups, eatsConfig.value, eatsConfig.text, 'block')
            }
        }

        if (this.config.levels[this.gameState.currentLevel].sharks){
            var sharks = this.config.levels[this.gameState.currentLevel].sharks;
            for (var i = 0; i < sharks.length; ++i) {
                var sharkConfig = sharks[i];
                this._addAllMovingObjects(sharkConfig.initialCount, this.gameState.sharkGroups, sharkConfig.value, 'enemy');
            }
        }

        if (this.config.levels[this.gameState.currentLevel].jellys) {

            var jellys = this.config.levels[this.gameState.currentLevel].jellys;
            for (var i = 0; i < jellys.length; ++i) {
                var jellyConfig = jellys[i];
                this._addAllMovingObjects(sharkConfig.initialCount, this.gameState.jellyGroups, jellyConfig.value, 'jelly');
            }
        }

        this.addPlayer();
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
        this.Number = this.make.text(25, 20, this.config.levels[this.gameState.currentLevel].startValue, {fill: '#000000'});
        this.player.addChild(this.Number);

    },


    //Functions for changing between levels

    addLevelUpScreen: function (){

        this.config.currentLevel ++;

        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');

        this.levelUp = game.add.tileSprite(0, 0, 1200, 800, 'up');

        game.add.tween(this.levelUp).to( { alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);

        game.time.events.add(Phaser.Timer.SECOND * 4, this._endLevel, this)


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
            this.gameState.currentSpeed -= 80;

        } else {
            this.gameState.lives = 5;
        }

        this.tenToWin();
        console.log(this.gameState.currentSpeed);

    },

    died: function () {
        this.player.frame = 1;
        this.gameState.alive = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.reBorn, this);

        console.log(this.config.currentLevel + 'this is hte config current level')

        this.gameState.lives -= 1;

        if (this.gameState.lives <= 0) {
            
            //go down to easier dificulty
            if(this.config.currentLevel > 1){
                this.config.currentLevel = this.gameState.currentLevel;

                this.game.world.removeAll();
                this.addLevelDownScreen();
            }else{
                // //you now have full lives and you speed is reset to fastest
                this.gameState.currentSpeed = 0;
                this.gameState.currentSpeed += this.config.startSpeed;
                this.gameState.lives = 5;
            }

        } else {
            //you have less lives so you go faster
            this.gameState.currentSpeed += 80;
            this.livesSprite.frame += 1;
        }
        console.log(this.gameState.currentSpeed);

    },

    reBorn: function () {
        this.player.frame = 0;
        this.gameState.alive = true;
    },

    tenToWin: function () {
        if (this.gameState.answered < 9) {
            this.gameState.answered += 1;

            console.log(this.gameState.answered + ' Questions have been answered');
            console.log(this.config.currentLevel + ' this is the config current level');
        } else {
            this.addClam();
        }

    },

    addClam: function () {

        this.clamSprite = this.add.sprite(250, 250, 'clam');
        this.physics.enable(this.clamSprite, Phaser.Physics.ARCADE);
        this.clamSprite.enableBody = true;

        this.clamText = this.make.text(65, 50, this.gameState.endValue, {fill: '#FFFFFF'});
        this.clamSprite.addChild(this.clamText);

        this.endingText = this.add.text(400, 600, 'Become ' + this.gameState.endValue + ' and Get to the Clam!', {fill: '#000000'});
        this.endingText.fixedToCamera = true;

        this.gameState.clamExist = true;

        console.log('there is a clam')
        console.log(this.clamSprite.body);
        console.log(this.gameState.clamExist);


    },

    nextLevel: function () {
        if (this.gameState.currentValue = this.gameState.endValue && this.config.currentLevel < this.config.finalLevel){
            
            this.config.currentLevel = this.gameState.currentLevel;
            this.clamSprite.destroy();

            this.game.world.removeAll();

            this.addLevelUpScreen();

            console.log(this.config.currentLevel);
        }

        else if (this.gameState.currentValue = this.gameState.endValue && this.config.currentLevel == this.config.finalLevel){
            this.game.world.removeAll();

            this.addEndScreen();
        }
    },
    


    //Creating Moving Objects - Such as sharks or jelly fish or dust
    _addAllMovingObjects: function (amount, groupName, value, image) {
        var group = this.add.group();

        group.value = value;

        groupName.push(group);

        this._createMovingObject(amount, group, value, image);
        this._createGroupPhyscis(group, this.gameState.physicsGroup);
    },

    _createMovingObject: function (amount, groupName, value, image) {
        for (var i = 0; i < amount; i++) {
            this._createMovingObjectAndAddToGroup(groupName, value, image);
        }
    },

    _createMovingObjectAndAddToGroup: function(groupName, value, image){
        var object = groupName.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        //give the object a random speed
        object.body.velocity.x = game.rnd.integerInRange(-200, 200);
        object.body.velocity.y = game.rnd.integerInRange(-220, 200);

        var text = this.make.text(25, 25, value, {fill: '#FFFFFF'});
        object.addChild(text);

    },



    //Creating Static Objects - Such as collectables 'eats'
    _createStaticObject: function (amount, groupName, value, text, image) {
        for (var i = 0; i < amount; i++) {
            this._createStaticObjectAndAddToGroup(groupName, value, text, image);
        }
    },

    _createStaticObjectAndAddToGroup: function(groupName, value, text, image){
        var object = groupName.create(this.bounds.randomX, this.bounds.randomY, image);

        this.physics.enable(object, Phaser.Physics.ARCADE);

        var textValue = this.make.text(5, 5, text, {fill: '#000000'});
        object.addChild(textValue);


    },

    _addAllStaticObjects: function (amount, groupName, value, text, image) {
        var group = this.add.group();

        group.value = value;

        groupName.push(group);

        this._createStaticObject(amount, group, value, text, image);
        this._createGroupPhyscis(group, this.gameState.physicsGroup);
    },


    //This physics is used for both static and moving objects
    _createGroupPhyscis: function (groupName, physicsGroup) {
        //Some more physics information for the Shark
        physicsGroup = this.game.make.group();
        physicsGroup.create(-50, -50, 'block');
        groupName.add(physicsGroup);

        groupName.setAll('body.collideWorldBounds', true);
        groupName.setAll('body.bounce.x', 1);
        groupName.setAll('body.bounce.y', 1);
        groupName.setAll('body.minBounceVelocity', 0);
    },


    //Sub-Functions that happen when a group of object e.g. sharks, jellys, eats have been colldied with

    _addSharkSolvedMath: function (currentValue, sharkValue, worldSizeX, textPlace) {
        this.scoreUI = game.add.text(600, 500, currentValue + ' > ' + sharkValue, {
            fill: "#24475b",
            align: "center"
        });
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(worldSizeX - 150, 10 + textPlace);

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

    _addJellySolvedMath: function (currentValue, jellyValue, worldSizeX, textPlace) {
        this.scoreUI = game.add.text(600, 500, currentValue + ' < ' + jellyValue, {
            fill: "#5b2447",
            align: "center"
        });
        this.scoreUI.fixedToCamera = true;
        this.scoreUI.cameraOffset.setTo(worldSizeX - 150, 10 + textPlace);

    },


    //what happens when you collid with something

    sharkAttack: function (player, shark, sharkGroup, sharkValue, image) {

        if (this.gameState.currentValue <= sharkValue) {
            this._animationSharkError(this.gameState.currentValue, sharkValue, player);
            this.died();
        }
        else {
            shark.kill();
            this._addSharkSolvedMath(this.gameState.currentValue, sharkValue, this.config.worldSizeX, this.gameState.textPlace);
            this._aniamtionSharkSolvedMath(this.gameState.currentValue, sharkValue, player);

            this.gameState.textPlace += 25;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(sharkGroup, sharkValue, image);
        }
    },

    jellyAttack: function (player, jelly, jellyGroup, jellyValue, image) {

        if (this.gameState.currentValue >= jellyValue) {
            this._animationJellyError(this.gameState.currentValue, jellyValue, player);
            this.died();
        }
        else {
            jelly.kill();
            this._addJellySolvedMath(this.gameState.currentValue, jellyValue, this.config.worldSizeX, this.gameState.textPlace);
            this._aniamtionJellySolvedMath(this.gameState.currentValue, jellyValue, player);

            this.gameState.textPlace += 25;
            this.moreLives();

            this._createMovingObjectAndAddToGroup(jellyGroup, jellyValue, image);
        }
    },

    eatsCollected: function(player, eats, groupName, value, text, image){
        eats.kill();

        var possibleValue = value + this.gameState.currentValue

        if( possibleValue >= this.gameState.playerMinValue &&  possibleValue <= this.gameState.playerMaxValue ){
            this.gameState.currentValue += (value);
            this._createStaticObjectAndAddToGroup(groupName, value, text, image);

        }else{
            console.log('You cannot pick up anymore')
        }

        this.Number.setText(this.gameState.currentValue);
    }

});
