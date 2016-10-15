GreaterThan.Game = function (game) {
};

GreaterThan.Game.prototype = {
    config: {
        viewSizeX: 1024,
        viewSizeY: 768,
        worldSizeX: ui[0].worldSizeX,
        worldSizeY: ui[0].worldSizeY,
        coolDownTime: 0.5,
        arrowMove: 75,
        lineMove: 75,
        rightInARow: 6,
        wrongInARow: 3,
        unlockLevel: 600,
        minutes: 4,
        seconds: 0,
    },

    testingData: {},

    gameState: {},

    preload: function () {
    },

    create: function () {

        this.checkLanguage();


        this.addGameInformation();


        this.addTestingData();


        this.addWorld();
        this.addTreasure();
        this.checkImageOfEntities();
        this.addPlayer();
        this.addUI();
        //addTimer - minutes and seconds
        this.addTimer(this.config.minutes, this.config.seconds);
        this.animateFuel();

        game.time.advancedTiming = true;
        //Testing Data
        //this.showTestingData();
    },

    update: function () {

        //speed of player movement
        this._playerMovement(this.gameState.playerSpeed);
        this.collisionDetection();

    },

    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (this.timer.running == true) {
            game.debug.text(this._formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), 540, 35, "#fff");
        }
        else {
            game.debug.text("GameOver!", 600, 60, "#fff");
        }

        game.debug.text(game.time.fps || '--', 5, 20, "#00ff00");
    },


    checkLanguage: function(){
        if(player[0].language ==  'PTR_BR'){
            this.textStage = PTR_BR[0].game[0].stage;
            this.textScore = PTR_BR[0].game[0].score;
            this.textPauseMenu = PTR_BR[0].game[0].pause;
            this.textQuit = PTR_BR[0].game[0].quit;
            this.textContinue = PTR_BR[0].game[0].continue;

        }else{
            this.textStage = ENG_UK[0].game[0].stage;
            this.textScore = ENG_UK[0].game[0].score;
            this.textPauseMenu = ENG_UK[0].game[0].pause;
            this.textQuit = ENG_UK[0].game[0].quit;
            this.textContinue = ENG_UK[0].game[0].continue;

        }

    },

    addGameInformation: function () {
        var levelId = player[0].currentLevel;
        var stageId = player[0].currentStage;

        this.gameState = {
            level: levelId,
            //World Data
            levelName: levels[levelId].levelName,
            worldSizeX: this.config.worldSizeX,
            worldSizeY: this.config.worldSizeY,
            equalToLevel: levels[levelId].equalTo,
            pauseEnabled: player[0].pauseEnabled,
            //Stage Data
            depth: player[0].currentDepth, //The height of the arrow, indicating depth/level progression
            backgroundColour: '#6f9695',
            currentStage: player[0].currentStage,
            currentLevel: player[0].currentLevel,
            lowestLevel: player[0].startLevel,
            highestLevel: player[0].endLevel,
            score: player[0].currentScore,
            //unlockNextLevel: player[0].stageData[stageId].locked,
            //criteria for unlocking the next level
            toNextLevel: this.config.unlockLevel,
            //Player information
            playerCurrentValue: levels[levelId].playerValue,
            alive: true,
            playerSpeed: 400,
            //Level Progression Information
            levelUp: 0,
            levelDown: 0,
            levelLocation: player[0].levelLocation,  //If the level you are playing is the highest level you have attempted
            maxLevel: player[0].maxLevel,
            maxLevelLine: player[0].maxLevelLine,
            //Greater Than Information
            greaterMinValue: levels[levelId].greater[0].minValue,
            greaterMaxValue: levels[levelId].greater[0].maxValue,
            greaterAmount: levels[levelId].greater[0].amount,
            greaterPropAbove: levels[levelId].greater[0].proportionAbove,
            greaterPropEqual: levels[levelId].greater[0].proportionEqual,
            greaterPropBelow: levels[levelId].greater[0].proportionBelow,
            greater: [],
            //Less Than Information
            lesserMinValue: levels[levelId].lesser[0].minValue,
            lesserMaxValue: levels[levelId].lesser[0].maxValue,
            lesserAmount: levels[levelId].lesser[0].amount,
            lesserPropAbove: levels[levelId].lesser[0].proportionAbove,
            lesserPropEqual: levels[levelId].lesser[0].proportionEqual,
            lesserPropBelow: levels[levelId].lesser[0].proportionBelow,
            lesser: [],
            //Treasure Information
            treasure: [],
            //pause menu clicked
            paused: false,
        };

    },

    addTestingData: function () {

        testing[0].totalEaten = 0;
        testing[0].treasure = 0;
        testing[0].rightAnswers = 0;
        testing[0].wrongAnswers = 0;
        testing[0].pointsAtBronze = 0;
        testing[0].pointsAtSilver = 0;
        testing[0].pointsAtGold = 0;
        testing[0].levelUpBoonus = 0;


        this.testing = {
            treasure: testing[0].totalEaten,
            rightAnswers: testing[0].rightAnswers,
            wrongAnswers: testing[0].wrongAnswers,
            pointsAtBronze: testing[0].pointsAtBronze,
            pointsAtSilver: testing[0].pointsAtSilver,
            pointsAtGold: testing[0].pointsAtGold,
            levelUpBoonus: testing[0].levelUpBoonus,

        }
    },


    addWorld: function () {
        this.game.world.setBounds(0, 0, this.gameState.worldSizeX, this.gameState.worldSizeY);
        this.bounds = new Phaser.Rectangle(0, 0, this.gameState.worldSizeX, this.gameState.worldSizeY);
        // /1.2

        this.background = game.add.image(0, 0, 'bgBase');
        this.background.fixedToCamera = true;
        this.background3 = game.add.image(0,0, 'bgMiddle');
        this.background2 = game.add.image(0,0, 'bgTop');
        this.background2.fixedToCamera = true;
        this.lightAnim = game.add.sprite(0, 0, 'light');
        this.lightAnim.fixedToCamera = true;

        var light = this.lightAnim.animations.add('twinkle');

        light.enableUpdate = true;

        //this.lightAnim.animations.play('twinkle', 0.25, true);



        //this._addBackgroundColour();

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();

    },
    _addBackgroundColour: function () {
        this._defineBackground();

        this.game.stage.backgroundColor = this.gameState.backgroundColour;
    },
    _defineBackground: function () {
        var currentLevel = this.gameState.currentLevel - this.gameState.lowestLevel
        if (currentLevel == 0) {
            this.gameState.backgroundColour = '#z6f9695'
        } else if (currentLevel == 1) {
            this.gameState.backgroundColour = '#56908E'
        }
        else if (currentLevel == 2) {
            this.gameState.backgroundColour = '#4D8B86'
        }
        else if (currentLevel == 3) {
            this.gameState.backgroundColour = '#418481'
        }
        else if (currentLevel == 4) {
            this.gameState.backgroundColour = '#377F7B'
        }
        else if (currentLevel == 5) {
            this.gameState.backgroundColour = '#327A76'
        }
        else if (currentLevel == 6) {
            this.gameState.backgroundColour = '#307571'
        }
        else if (currentLevel == 7) {
            this.gameState.backgroundColour = '#2E716C'
        }
        else if (currentLevel == 8) {
            this.gameState.backgroundColour = '#2C6C68'
        }
    },

    addTimer: function (minute, second) {
        this.timer = game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.MINUTE * minute + Phaser.Timer.SECOND * second, this._endTimer, this);
        this.timer.start();
    },
    _formatTime: function (s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    _endTimer: function () {
        player[0].currentScore = this.gameState.score;
        this.addTestingInformation();
        this.timer.stop();
        this.game.state.start("gameOver", true);
    },

    addUI: function () {
        //seUiPosition x and y are game screen size / number

        var textStyle = { fill: "#213f6b", align: "center", wordWrap: true, wordWrapWidth: 200};

        this._addTitle(textStyle);
        this._addScore(textStyle);
        this._addFuelBar();
        //this._addDepthUi();
        this._addHomeButton();
        //this._checkHomePauseButtons();
        this._addPauseMenu();

    },
    _addTitle: function(textStyle){
        this.levelTitle = this.add.image(0, 0, 'title');
        this._setUIPosition(this.levelTitle, 10, 20);
        this.titleText = this.make.text(5, 5, this.textStage + ": " + this.gameState.levelName, textStyle);
        this.titleText.anchor.setTo(0.5, 0.5);
        this.levelTitle.addChild(this.titleText);
    },
    _addScore: function(textStyle){
        this.scoreBox = this.add.image(0, 0, 'title');
        this._setUIPosition(this.scoreBox, 10, 9);
        this.scoreText = this.make.text(5, 5, this.textScore + ": " + this.gameState.score, textStyle);
        this.scoreText.anchor.setTo(0.5, 0.5);
        this.scoreBox.addChild(this.scoreText);
    },
    _addFuelBar: function(){
        //Fuel Bar
        this.fuelBase = this.add.image(0, 0, 'fuelBase');
        this.fuelBase.fixedToCamera = true;
        this.fuelBase.cameraOffset.setTo(250, 30);
        this.fuelBase.anchor.setTo(0, 0.5);

        //
        this.fuelMid = this.add.image(10, 0, 'fuelMid');
        this.fuelMid.anchor.setTo(0, 0.5);
        this.fuelBase.addChild(this.fuelMid);

        this.fuelTop = this.add.image(10, 0, 'fuelTop');
        this.fuelTop.anchor.setTo(0, 0.5);
        this.fuelBase.addChild(this.fuelTop);

    },
    animateFuel: function(){
        var minutes = this.config.minutes;
        var seconds = this.config.seconds;

        var minutesToMill = minutes * 60000;
        var secondsToMill = seconds * 1000;

        var totalTime = minutesToMill + secondsToMill;

        game.add.tween(this.fuelTop.scale).to({ x: 0, y: 1}, totalTime, null, true, 0, Infinity);
    },
    _addDepthUi: function(){
        //depth UI
        this.depthUI = this.add.image(0, 0, 'depth');
        this.depthUI.scale.setTo(1.2, 1.5)
        this._setUIPosition(this.depthUI, 150, 80);

        //add arrow UI (part of the depth UI)
        this.arrow = this.add.image(0, 0, 'arrow');
        this._setUIPosition(this.arrow, 115, this.gameState.depth);

        //deepest depth line
        this.deepestDepth = this.add.image(0, 0, 'deepestLine');
        this.deepestDepth.scale.setTo(1.2, 1.5)
        this._setUIPosition(this.deepestDepth, 145, this.gameState.maxLevelLine);

    },
    _addHomeButton: function(){
        this.homeButton = game.add.sprite(40, 700, 'home');
        this._setUIPosition(this.homeButton, 1.05, 15);
        this.homeButton.inputEnabled = true;
        this.homeButton.events.onInputDown.add(
            function () {
                this._pause();
            },
            this);

    },
    _checkHomePauseButtons(){
        if (this.gameState.pauseEnabled == true) {
            //Home button
            this.homeButton = game.add.button(40, 700, 'home', this._pause);
            this._setUIPosition(this.homeButton, 1.05, 15);

            //Pause button
            this.pauseButton = game.add.button(40, 700, 'pause', this._pause);
            this._setUIPosition(this.pauseButton, 1.150, 15);
        }
        else {
            //Home button
            this.homeButton = game.add.button(40, 700, 'home', this._pause);
            this._setUIPosition(this.homeButton, 10, 1.15);
        }
    },
    _setUIPosition: function (uiElement, positionX, positionY) {
        uiElement.fixedToCamera = true;

        var screenX = this.config.viewSizeX;
        var screenY = this.config.viewSizeY;

        uiElement.cameraOffset.setTo(screenX/positionX, screenY/positionY);

        uiElement.anchor.setTo(0.5, 0.5);


    },
    _goHome: function () {
        player[0].currentScore = this.gameState.score;
        this.addTestingInformation();
        this.timer.stop();
        game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;
        this.game.state.start("gameOver", true);
    },
    _pause: function () {

        game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;

        if(this.gameState.paused == false){
            this.pauseGroup.visible = true;
            this.gameState.paused = true;
        }else{
            this.pauseGroup.visible = false;
            this.gameState.paused = false;
        }



    },
    _addPauseMenu: function(){
        this.pauseGroup = this.add.group();
        this.box = this.add.image(0, 0, 'helpBox');
        this._setUIPosition(this.box, 2, 2);
        this.pauseGroup.add(this.box);

        this.quitButton = game.add.sprite(0,0, "play2");
        this._setUIPosition(this.quitButton, 3.5, 2);
        this.quitButton.inputEnabled = true;
        this.quitButton.events.onInputDown.add(
            function () {
                this._goHome();
            },
            this);
        this.pauseGroup.add(this.quitButton);

        this.continueButton = game.add.sprite(0,0, "play2");
        this._setUIPosition(this.continueButton, 1.4, 2);
        this.continueButton.inputEnabled = true;
        this.continueButton.events.onInputDown.add(
            function () {
                this._pause();
            },
            this);
        this.pauseGroup.add(this.continueButton);

        this._addPauseText(this.textPauseMenu, "#213f6b", 2, 4);
        this._addPauseText(this.textQuit, "#19a3e0", 3.5, 2);
        this._addPauseText(this.textContinue, "#19a3e0", 1.4, 2);

        this.pauseGroup.add(this.box);
        this.pauseGroup.visible = false;


    },
    _addPauseText: function(text, colour, x, y){
        var style = { fill: colour, align: "centre"};

        this.pauseText = game.add.text(0, 0, text, style);
        this.pauseText.anchor.setTo(0.5, 0.5);
        this.pauseGroup.add(this.pauseText);

        this._setUIPosition(this.pauseText, x, y);
    },

    addPlayer: function () {

        this.player = this.add.sprite(this.config.worldSizeX / 2, this.config.worldSizeY / 2, 'you');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(75, 75, 0, 0);
        this.player.anchor.setTo(0.5, 0.5);

        this.game.camera.follow(this.player);

        if(testing[0].worldWrap == true){
            this.game.camera.bounds = null;
        }else{
            this.game.camera.bounds = this.bounds;
            this.player.body.collideWorldBounds = true;
            this.player.body.bounce.x = 1;
            this.player.body.bounce.y = 1;
            this.player.body.minBounceVelocity = 0;
        }

        //Text on Player - Showing the players value
        this.playerNumber = this.make.text(-10, -15, this.gameState.playerCurrentValue, {fill: '#000000'});
        this.player.addChild(this.playerNumber);
    },
    _playerMovement: function (speed) {

        game.physics.arcade.moveToPointer(this.player, speed);


        //This works only in top right corner where the game screen is the same postion as the game world
        //need to find a way to get the screen position not the world position
                if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                    this.player.body.velocity.setTo(0, 0);
                }


                if (testing[0].worldWrap == true) {
                    game.world.wrap(this.player);
                }

    },

    _playerMovementMouse: function (speed) {
        if (this.game.input.activePointer.isDown) {
            this.game.physics.arcade.moveToPointer(this.player, speed);

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
    },
    _playerMovementArrows: function (speed) {


        // if (this.game.cursors.left.isDown) {
        //     this.player.x -= speed / 80;
        // }
        // else if (this.game.cursors.right.isDown) {
        //     this.player.x += speed / 80;
        // }
        //
        // if (this.game.cursors.up.isDown) {
        //     this.player.y -= speed / 80;
        // }
        // else if (this.game.cursors.down.isDown) {
        //     this.player.y += speed / 80;
        // }
    },


    checkImageOfEntities: function () {
        if (this.gameState.equalToLevel == true) {
            var greaterImage = 'greaterEqual';
            var lesserImage = 'lesserEqual';
        } else {
            var greaterImage = 'greater';
            var lesserImage = 'lesser';
        }
        this.addGreaterLesserEntities(greaterImage, lesserImage);
    },
    addGreaterLesserEntities: function (greaterImage, lesserImage) {
        // _createGreater(groupOfObjects, amount, image)
        this._createGreater(this.gameState.greater, this.gameState.greaterAmount, greaterImage);
        this._createLesser(this.gameState.lesser, this.gameState.lesserAmount, lesserImage);
    },
    _createGreater(groupOfObjects, amount, image){
        //this.createEntityGroup(groupOfObjects, amount, image, minValue, maxValue, percentage)
        this._calculateValue(groupOfObjects, amount, image, this.gameState.greaterMinValue, this.gameState.playerCurrentValue - 1, this.gameState.greaterPropBelow);
        this._calculateValue(groupOfObjects, amount, image, this.gameState.playerCurrentValue + 1, this.gameState.greaterMaxValue, this.gameState.greaterPropAbove);
        this._calculateValue(groupOfObjects, amount, image, this.gameState.playerCurrentValue, this.gameState.playerCurrentValue, this.gameState.greaterPropEqual);
    },
    _createLesser(groupOfObjects, amount, image){
        //this.createEntityGroup(groupOfObjects, amount, image, minValue, maxValue, percentage)
        this._calculateValue(groupOfObjects, amount, image, this.gameState.lesserMinValue, this.gameState.playerCurrentValue - 1, this.gameState.lesserPropBelow);
        this._calculateValue(groupOfObjects, amount, image, this.gameState.playerCurrentValue + 1, this.gameState.lesserMaxValue, this.gameState.lesserPropAbove);
        this._calculateValue(groupOfObjects, amount, image, this.gameState.playerCurrentValue, this.gameState.playerCurrentValue, this.gameState.lesserPropEqual);
    },
    _calculateValue: function (groupOfObjects, amount, image, minValue, maxValue, percentage) {
        var value = game.rnd.integerInRange(minValue, maxValue);
        this._calculateAmount(groupOfObjects, amount, image, minValue, maxValue, percentage, value);
    },
    _calculateAmount: function (groupOfObjects, amount, image, minValue, maxValue, percentage, value) {
        var rawValue = amount * percentage;
        var amount = game.math.roundTo(rawValue, 0);

        this._createAmountOfEntities(groupOfObjects, amount, image, minValue, maxValue, value);

    },
    _createAmountOfEntities: function (groupOfObjects, amount, image, minValue, maxValue, value) {
        this.objectGroup = this.add.group();
        this.objectGroup.enableBody = true;
        this.objectGroup.inputEnabled = true;
        this.objectGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < amount; i++) {
            this._createEntities(groupOfObjects, this.objectGroup, minValue, maxValue, image, value);
        }
    },
    _createEntities: function (groupOfObjects, objectGroup, minValue, maxValue, image, value) {
        this.object = this.objectGroup.create(this.bounds.randomX, this.bounds.randomY, image);
        value = game.rnd.integerInRange(minValue, maxValue);
        this.object.value = value;

        if(testing[0].worldWrap ==! true){
            this._addGroupPhysics(this.objectGroup);
        }

        //this._addGroupPhysics(this.objectGroup);
        this._addSpeed(this.object);
        this._addText(this.object, value);

        groupOfObjects.push(this.object);
    },
    _addSpeed: function (object) {
        object.body.velocity.x = game.rnd.integerInRange(-100, 100);
        object.body.velocity.y = game.rnd.integerInRange(-100, 100);
    },
    _addText: function (object, text) {
        this.text = this.make.text(42, 22, text, {fill: '#f4f0ce'});
        object.addChild(this.text);
    },
    _addGroupPhysics(objectGroup){
        this.physicsGroup = this.game.make.group();
        objectGroup.add(this.physicsGroup);

        objectGroup.setAll('body.collideWorldBounds', true);
        objectGroup.setAll('body.bounce.x', 1);
        objectGroup.setAll('body.bounce.y', 1);
        objectGroup.setAll('body.minBounceVelocity', 0);

    },


    addTreasure(){
        var treasure = levels[this.gameState.currentLevel].treasure;
        for (var i = 0; i < treasure.length; ++i) {
            var treasureConfig = treasure[i];
            this._createAmountOfTreasure(treasureConfig.amount, this.gameState.treasure, treasureConfig.value, treasureConfig.text, 'treasure');
        }
    },
    _createAmountOfTreasure: function (amount, treasureConfigGroup, value, textValue, image) {
        this.treasureGroup = this.add.group();
        this.treasureGroup.enableBody = true;
        this.treasureGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < amount; i++) {
            this._createTreasure(treasureConfigGroup, value, textValue, image);
        }
    },
    _createTreasure: function (treasureConfigGroup, value, textValue, image) {

        this.treasure = this.treasureGroup.create(this.bounds.randomX, this.bounds.randomY, image);
        this.treasure.value = value;
        this.treasure.text = textValue;


        this._addGroupPhysics(this.treasureGroup);
        this._addTreasureSpeed(this.treasure);
        this._addTreasureText(this.treasure, textValue);

        treasureConfigGroup.push(this.treasure);
    },
    _addTreasureText: function (object, text) {
        this.text = this.make.text(5, 5, text, {fill: '#24475b'});
        object.addChild(this.text);
    },
    _addTreasureSpeed: function (object) {
        object.body.velocity.x = game.rnd.integerInRange(-50, 50);
        object.body.velocity.y = game.rnd.integerInRange(-50, 50);
    },


    //collision detection
    collisionDetection(){
        if (this.gameState.alive == true) {
            this._checkGreater();
            this._checkLesser();
            this._checkTreasure();
        }
    },
    _checkGreater: function () {
        for (var i = 0; i < this.gameState.greater.length; ++i) {
            var currentGreater = this.gameState.greater[i];
            var location = i;

            if(testing[0].worldWrap == true){
                game.world.wrap(currentGreater);
            }

            this.game.physics.arcade.overlap(
                this.player,
                currentGreater,
                function (player, greater) {
                    this._greaterCollided(
                        greater,
                        location,
                        currentGreater,
                        currentGreater.value
                    );
                },
                null,
                this
            );
        }

    },
    _checkLesser: function () {
        for (var i = 0; i < this.gameState.lesser.length; ++i) {
            var currentLesser = this.gameState.lesser[i];
            var location = i;

            if(testing[0].worldWrap == true){
                game.world.wrap(currentLesser);
            }

            this.game.physics.arcade.overlap(
                this.player,
                currentLesser,
                function (player, lesser) {
                    this._lesserCollided(
                        lesser,
                        location,
                        currentLesser,
                        currentLesser.value
                    );
                },
                null,
                this
            );
        }

    },
    _checkTreasure: function () {

        for (var i = 0; i < this.gameState.treasure.length; ++i) {
            var currentTreasure = this.gameState.treasure[i];
            var location = i;

            if(testing[0].worldWrap == true){
                game.world.wrap(currentTreasure);
            }

            this.game.physics.arcade.overlap(
                this.player,
                currentTreasure,
                function (player, treasure) {
                    this._treasureCollided(
                        treasure,
                        location,
                        currentTreasure.value
                    );
                },
                null,
                this
            );
        }

    },
    _greaterCollided: function (greater, location, greaterGroup, greaterValue) {
        if (this.gameState.equalToLevel == true && this.gameState.playerCurrentValue < greaterValue) {
            this._wrongAnswer(greater);
        } else if (this.gameState.equalToLevel == false && this.gameState.playerCurrentValue <= greaterValue) {
            this._wrongAnswer(greater);
        } else {

            //check if equal to world
            if (this.gameState.equalToLevel == true) {
                var greaterImage = 'greaterEqual';
                var greaterSymbol = '≥';
                var maxValue = this.gameState.playerCurrentValue;
            } else {
                var greaterImage = 'greater';
                var greaterSymbol = '>';
                var maxValue = this.gameState.playerCurrentValue - 1;
            }

            greater.kill();
            this.gameState.greater.splice(location, 1);

            //_rightAnswer: function(min, max, value, symbol, groupOfObjects, amount, image){
            this._rightAnswer(this.gameState.greaterMinValue, maxValue, greaterValue, greaterSymbol, this.gameState.greater, 1, greaterImage);
        }
    },
    _lesserCollided: function (lesser, location, lesserGroup, lesserValue) {
        if (this.gameState.equalToLevel == true && this.gameState.playerCurrentValue > lesserValue) {
            this._wrongAnswer(lesser);
        } else if (this.gameState.equalToLevel == false && this.gameState.playerCurrentValue >= lesserValue) {
            this._wrongAnswer(lesser);
        } else {

            //check if equal to world
            if (this.gameState.equalToLevel == true) {
                var lesserImage = 'lesserEqual';
                var lesserSymbol = '≤';
                var minValue = this.gameState.playerCurrentValue;
            } else {
                var lesserImage = 'lesser';
                var lesserSymbol = '<';
                var minValue = this.gameState.playerCurrentValue + 1;
            }

            lesser.kill();
            this.gameState.lesser.splice(location, 1);

            //_rightAnswer: function(min, max, value, symbol, groupOfObjects, amount, image){
            this._rightAnswer(minValue, this.gameState.lesserMaxValue, lesserValue, lesserSymbol, this.gameState.lesser, 1, lesserImage);
        }
    },
    _treasureCollided: function (treasure, location, treasureValue) {
        this.gameState.playerCurrentValue += treasureValue;
        this.addPoints(testing[0].treasurePoints);
        this.testing.treasure += 1;
        treasure.kill();
        this.gameState.treasure.splice(location, 1);

        this.playerNumber.setText(this.gameState.playerCurrentValue);
    },

    //level progression
    updateLevelUp: function () {
        this.gameState.levelUp += 1;
        this.gameState.levelDown = 0;

        this._checkChangeLevel();
    },
    _updateLevelDown: function () {
        this.gameState.levelUp = 0;
        this.gameState.levelDown += 1;

        this._checkChangeLevel();
    },
    _checkChangeLevel: function () {
        if (this.gameState.levelUp == this.config.rightInARow && this.gameState.currentLevel < this.gameState.highestLevel) {
            if (this.gameState.levelLocation == this.gameState.maxLevel) {
                this.addPoints(testing[0].levelUpBonus);
                this.testing.levelUpBoonus += testing[0].levelUpBonus;
                this.gameState.maxLevel += 1;
                this.gameState.maxLevelLine += this.config.lineMove;
            }
            this.gameState.levelLocation += 1;
            this._levelChangeScreen();
        }
        if (this.gameState.levelDown == this.config.wrongInARow && this.gameState.currentLevel > this.gameState.lowestLevel) {
            this._levelChangeScreen();
            this.gameState.levelLocation -= 1;
        }
    },
    _removeGreaterLesser: function (group) {
        for (var i = 0; i < group.length; ++i) {
            var current = group[i];
            current.kill();
        }
        for (var i = 0; i < group.length; ++i) {
            group.splice(i);
        }
    },
    _levelChangeScreen: function () {
        if (this.gameState.currentLevel >= this.gameState.lowestLevel && this.gameState.currentLevel <= this.gameState.highestLevel) {
            this._removeGreaterLesser(this.gameState.greater);
            this._removeGreaterLesser(this.gameState.lesser);
            this._removeGreaterLesser(this.gameState.treasure);

            game.time.events.add(Phaser.Timer.SECOND * 1, this._nextLevel, this);

            this.addTestingInformation();
            //this.showTestingData();
        }
    },
    _nextLevel: function () {
        //update last level information
        this._addToPlayerInformation();

        //before generating new context
        this.addGameInformation();
        this._addBackgroundColour();
        this.checkImageOfEntities();
        this.addTreasure();
        this._setNewLevelText();
    },
    _setNewLevelText: function () {
        this.playerNumber.setText(this.gameState.playerCurrentValue);
        this.titleText.setText(this.textStage + ": " + this.gameState.levelName);
        this.scoreText.setText(this.textScore + ": " + this.gameState.score);
        //this._setUIPosition(this.arrow, 115, this.gameState.depth);
        //this._setUIPosition(this.deepestDepth, 145, this.gameState.maxLevelLine);

    },
    _addToPlayerInformation: function () {

        this._checkMoveUpDown();

        player[0].currentScore = this.gameState.score;
        player[0].levelLocation = this.gameState.levelLocation;
        player[0].maxLevel = this.gameState.maxLevel;
        player[0].maxLevelLine = this.gameState.maxLevelLine;

        if (player[0].currentStage == 5) {
        } else {

            if (this.gameState.score >= this.gameState.toNextLevel) {
                //Unlock next stage
                var nextStage = this.gameState.currentStage + 1;
                player[0].stageData[nextStage].locked = false;
            }
        }
    },
    _checkMoveUpDown: function () {
        if (this.gameState.levelUp == this.config.rightInARow) {
            //Level Up
            player[0].currentLevel += 1;
            //player[0].currentDepth += this.config.arrowMove;
        }
        if (this.gameState.levelDown == this.config.wrongInARow && player[0].currentLevel > 0) {
            //Level Down
            player[0].currentLevel -= 1;
            //player[0].currentDepth -= this.config.arrowMove;
        }
    },

    //Feedback on game progression
    addPoints: function (value) {
        this.gameState.score += value;
        this.scoreText.setText(this.textScore + ": " + this.gameState.score);
        // if (this.gameState.levelLocation == this.gameState.maxLevel) {
        //     this.gameState.score += value;
        // }
    },
    _wrongAnswer: function (entity) {
        this._animateFishEscape(entity);
        this._died();
        this._updateLevelDown();

        this.testing.wrongAnswers += 1;
    },
    _animateFishEscape: function (entity) {
        this.fade = game.add.tween(entity).to({alpha: 0.5}, 1, Phaser.Easing.Linear.None, true);
        this.fade.onComplete.add(this._unfade, this);
    },
    _unfade: function (entity) {
        this.game.add.tween(entity).to({alpha: 1}, 3000, Phaser.Easing.Linear.None, true);
    },
    _rightAnswer: function (min, max, value, symbol, groupOfObjects, amount, image) {

        this.minValue = min;
        this.maxValue = max;
        this._addEntityPoints();
        this._textSolvedAnimation(value, symbol);
        //_createAmountOfEntities(groupOfObjects, amount, image, minValue, maxValue, value)
        this._createAmountOfEntities(groupOfObjects, 1, image, min, max, value);

        this.updateLevelUp();

        this.testing.rightAnswers += 1;
    },
    _textSolvedAnimation: function (value, sign) {
        this.solvedEquation = game.add.text(this.player.x, this.player.y, this.gameState.playerCurrentValue + sign + value, {fill: "#24475b"});
        game.add.tween(this.solvedEquation).to({alpha: 0}, 3000, Phaser.Easing.Linear.None, true);
    },
    _died: function () {
        this.gameState.alive = false;
        //this.player.frame = 1;
        this.game.time.events.add(Phaser.Timer.SECOND * this.config.coolDownTime, this._reBorn, this);
    },
    _reBorn: function () {
        this.gameState.alive = true;
        this.player.frame = 0;
    },
    _addEntityPoints(){
        var currentLevel = this.gameState.currentLevel - this.gameState.lowestLevel
        if (currentLevel >= 6) {
            this.addPoints(testing[0].goldPoints);
            this.testing.pointsAtGold += testing[0].goldPoints;

        } else if (currentLevel >= 3) {
            this.addPoints(testing[0].silverPoints);
            this.testing.pointsAtSilver += testing[0].silverPoints;
        } else {
            this.addPoints(testing[0].bronzePoints);
            this.testing.pointsAtBronze += testing[0].bronzePoints;
        }
    },

    addTestingInformation: function () {

        var totalEaten = this.testing.rightAnswers + this.testing.wrongAnswers;
        testing[0].totalEaten = totalEaten;
        testing[0].treasure = this.testing.treasure;
        testing[0].rightAnswers = this.testing.rightAnswers;
        testing[0].wrongAnswers = this.testing.wrongAnswers;
        testing[0].pointsAtBronze = this.testing.pointsAtBronze;
        testing[0].pointsAtSilver = this.testing.pointsAtSilver;
        testing[0].pointsAtGold = this.testing.pointsAtGold;
        testing[0].levelUpBoonus = this.testing.levelUpBoonus;

    },
    showTestingData: function () {

        console.log('amount of right answers: ' + testing[0].rightAnswers);
        console.log('amount of wrong answers: ' + testing[0].wrongAnswers);
        console.log('total Eaten: ' + testing[0].totalEaten);
        console.log('points earned at Bronze: ' + testing[0].pointsAtBronze);
        console.log('points earned at Silver: ' + testing[0].pointsAtSilver);
        console.log('points earned at Gold: ' + testing[0].pointsAtGold);

        var highestLevel = player[0].currentLevel - player[0].startLevel;

        console.log('Highest Level: ' + highestLevel);
        console.log('Treasure Eaten: ' + testing[0].treasure);
        console.log('Level Up Bonus: ' + testing[0].levelUpBoonus);

    },

};