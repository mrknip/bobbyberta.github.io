GreaterThan.Game = function (game) {
};

GreaterThan.Game.prototype = {
    config: {
        viewSizeX: 1200,
        coolDownTime: 1,
        arrowMove: 50,
        rightInARow: 8,
        wrongInARow: 3,
        highestLevel: levels.length,
    },

    gameState: {},

    preload: function () {
    },

    create: function () {

        var levelId = player[0].currentLevel;

        this.gameState = {
            level: levelId,
            //World Data
            levelName: levels[levelId].levelName,
            worldSizeX: levels[levelId].worldSizeX,
            worldSizeY: levels[levelId].worldSizeY,
            depth: player[0].currentDepth,
            //Player information
            playerCurrentValue: levels[levelId].playerValue,
            alive: true,
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
            //Level Progression Information
            levelUp: 0,
            levelDown: 0,
        };

        this.addWorld();
        this.addTreasure();
        this.addGreaterLesserEntities();
        this.addPlayer();
        this.addUI();
        //addTimer - minutes and seconds
        this.addTimer(1, 30);

    },


    update: function () {

        //speed of player movement
        this._playerMovement(400);
        this.collisionDetection();

    },

    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (this.timer.running == true) {
            game.debug.text(this._formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), 1000, 70, "#fff");
        }
        else {
            game.debug.text("GameOver!", 1000, 70, "#fff");
        }
    },

    addWorld: function () {
        this.game.world.setBounds(0, 0, this.gameState.worldSizeX, this.gameState.worldSizeY);
        this.bounds = new Phaser.Rectangle(0, 0, this.gameState.worldSizeX / 1.2, this.gameState.worldSizeY / 1.2);
        this.background = game.add.tileSprite(0, 0, 1600, 900, 'bg');
        this.background.fixedToCamera = true;

        //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();

    },
    addTimer: function (minute, second) {
        this.timer = game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.MINUTE * minute + Phaser.Timer.SECOND * second, this._endTimer, this);
        this.timer.start();
    },

    addUI: function () {

        //title Bar - name of level
        this.levelTitle = this.add.image(0, 0, 'title');
        this._setUIPosition(this.levelTitle, 200, 10);
        this.titleText = this.make.text(5, 5, this.gameState.levelName, {fill: '#24475b'});
        this.levelTitle.addChild(this.titleText);

        //depth UI
        this.depthUI = this.add.image(0, 0, 'depth');
        this._setUIPosition(this.depthUI, 160, 80);

        //add arrow UI (part of the depth UI)
        this.arrow = this.add.image(0, 0, 'arrow');
        this.arrow.scale.setTo(0.1);
        this._setUIPosition(this.arrow, 100, this.gameState.depth);

    },
    _formatTime: function (s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    _endTimer: function () {
        this.timer.stop();
        //this.game.state.start("title", true);
    },
    _setUIPosition: function (uiElement, positionX, positionY) {
        uiElement.fixedToCamera = true;
        uiElement.cameraOffset.setTo(this.config.viewSizeX - positionX, positionY);
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
        this.playerNumber = this.make.text(-10, -15, this.gameState.playerCurrentValue, {fill: '#000000'});
        this.player.addChild(this.playerNumber);
    },
    _playerMovement: function (speed) {
        this._playerMovementMouse(speed);
        this._playerMovementArrows(speed);
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
        if (this.game.cursors.left.isDown) {
            this.player.x -= speed / 80;
        }
        else if (this.game.cursors.right.isDown) {
            this.player.x += speed / 80;
        }

        if (this.game.cursors.up.isDown) {
            this.player.y -= speed / 80;
        }
        else if (this.game.cursors.down.isDown) {
            this.player.y += speed / 80;
        }

    },


    addGreaterLesserEntities: function () {
        // _createGreater(groupOfObjects, amount, image)
        this._createGreater(this.gameState.greater, this.gameState.greaterAmount, 'greater');
        this._createLesser(this.gameState.lesser, this.gameState.lesserAmount, 'lesser');
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
        this.objectGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < amount; i++) {
            this._createEntities(groupOfObjects, this.objectGroup, minValue, maxValue, image, value);
        }
    },
    _createEntities: function (groupOfObjects, objectGroup, minValue, maxValue, image, value) {
        this.object = this.objectGroup.create(this.bounds.randomX, this.bounds.randomY, image);
        value = game.rnd.integerInRange(minValue, maxValue);
        this.object.value = value;

        this._addGroupPhysics(this.objectGroup);
        this._addSpeed(this.object);
        this._addText(this.object, value);

        groupOfObjects.push(this.object);
    },
    _addSpeed: function (object) {
        object.body.velocity.x = game.rnd.integerInRange(-200, 200);
        object.body.velocity.y = game.rnd.integerInRange(-200, 200);
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
        var treasure = levels[player[0].currentLevel].treasure;
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


    collisionDetection(){
        if(this.gameState.alive == true){
            this._checkGreater();
            this._checkLesser();
            this._checkTreasure();
        }
    },
    _checkGreater: function () {
        for (var i = 0; i < this.gameState.greater.length; ++i) {
            var currentGreater = this.gameState.greater[i];

            this.game.physics.arcade.overlap(
                this.player,
                currentGreater,
                function (player, greater) {
                    this._greaterCollided(
                        greater,
                        currentGreater,
                        currentGreater.value,
                        currentGreater.text,
                        'greater'
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

            this.game.physics.arcade.overlap(
                this.player,
                currentLesser,
                function (player, lesser) {
                    this._lesserCollided(
                        lesser,
                        currentLesser,
                        currentLesser.value,
                        currentLesser.text,
                        'lesser'
                    );
                },
                null,
                this
            );
        }

    },
    _checkTreasure:function(){

        for (var i = 0; i < this.gameState.treasure.length; ++i) {
            var currentTreasure = this.gameState.treasure[i];

            this.game.physics.arcade.overlap(
                this.player,
                currentTreasure,
                function (player, treasure) {
                    this._treasureCollided(
                        treasure,
                        currentTreasure.value
                    );
                },
                null,
                this
            );
        }

    },
    _greaterCollided: function (greater, greaterGroup, greaterValue, greaterText, image) {

        if (this.gameState.playerCurrentValue <= greaterValue) {
            this._died();
            this._updateLevelDown();
        }
        else {
            greater.kill();
            this._updateLevelUp();

            this.minValue = this.gameState.greaterMinValue;
            this.maxValue = this.gameState.playerCurrentValue;
            //_createAmountOfEntities(groupOfObjects, amount, image, minValue, maxValue, value)
            this._createAmountOfEntities(this.gameState.greater, 1, image, this.minValue, this.maxValue, greaterValue);
        }
    },
    _lesserCollided: function (lesser, lesserGroup, lesserValue, lesserText, image) {

        if (this.gameState.playerCurrentValue >= lesserValue) {
            this._died();
            this._updateLevelDown();
        }
        else {
            lesser.kill();
            this._updateLevelUp();

            this.minValue = this.gameState.playerCurrentValue;
            this.maxValue = this.gameState.lesserMaxValue;
            //_createAmountOfEntities(groupOfObjects, amount, image, minValue, maxValue, value)
            this._createAmountOfEntities(this.gameState.lesser, 1, image, this.minValue, this.maxValue, lesserValue);
        }
    },
    _treasureCollided: function(treasure, treasureValue){
        this.gameState.playerCurrentValue += treasureValue;
        treasure.kill();

        this.playerNumber.setText(this.gameState.playerCurrentValue);
    },
    _updateLevelUp: function(){
        this.gameState.levelUp +=1;
        this.gameState.levelDown = 0;

        this._checkMoveLevel();
    },
    _updateLevelDown: function(){
        this.gameState.levelUp = 0;
        this.gameState.levelDown +=1;

        this._checkMoveLevel();
    },
    _died: function(){
        this.gameState.alive = false;
        this.player.frame = 1;
        this.game.time.events.add(Phaser.Timer.SECOND * this.config.coolDownTime, this._reBorn, this);
    },
    _reBorn: function(){
        this.gameState.alive = true;
        this.player.frame = 0;
    },
    _checkMoveLevel: function(){
        if(this.gameState.levelUp == this.config.rightInARow){
            //Level Up
            player[0].currentLevel +=1;
            player[0].currentDepth +=this.config.arrowMove;

            this.game.world.removeAll();
            this._levelUpScreen();
        }
        if(this.gameState.levelDown == this.config.wrongInARow && player[0].currentLevel > 0){
            //Level Down
            player[0].currentLevel -=1;
            player[0].currentDepth -=this.config.arrowMove;

            this.game.world.removeAll();
            this._levelUpScreen();
        }
    },
    _levelUpScreen: function(){
        game.stage.backgroundColor = "#6f9695";
        this.background = game.add.image(0, 0, 'bg');
        game.add.tween(this.background).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true);
        game.time.events.add(Phaser.Timer.SECOND * 0.5, this._nextLevel, this)
    },
    _nextLevel: function(){
        if(this.config.highestLevel == player[0].currentLevel){
            player[0].currentLevel = 0;
            player[0].stageData[1].locked = false;
            this.game.state.start("title", true);
        }else{
            this.game.world.removeAll();
            this.create();
        }
    }

};