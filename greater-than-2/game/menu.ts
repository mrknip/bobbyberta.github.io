GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {

    config: {
        settingsClicked: false,
        checkBoxTicked: false,
        worldSize: 'small',
    },

    preload: function () {},

    create: function () {

        this.checkLanguage();

        this.background = game.add.sprite(0, 0, 'splash');


        var bgX = this.background.width/2;
        var bgY = this.background.height/5;

        this.titleText = this.add.text(bgX, bgY, this.textTitle, {fill: '#19a3e0', align: "center", wordWrap: true, wordWrapWidth: this.background.width});

        this.titleText.anchor.setTo(0.5, 0.5);
        this.background.addChild(this.titleText);



        this.addLevels();
        //this.addTestSettings();

    },

    update: function () {},

    checkLanguage: function(){
        if(player[0].language ==  'PTR_BR'){
            this.textTitle = PTR_BR[0].menu[0].title;
            this.textWorld1 = PTR_BR[0].menu[0].world1;
            this.textWorld2 = PTR_BR[0].menu[0].world2;
            this.textWorld3 = PTR_BR[0].menu[0].world3;
            this.textWorld4 = PTR_BR[0].menu[0].world4;
            this.textWorld5 = PTR_BR[0].menu[0].world5;
            this.textWorld6 = PTR_BR[0].menu[0].world6;
        }else{
            this.textTitle = ENG_UK[0].menu[0].title;
            this.textWorld1 = ENG_UK[0].menu[0].world1;
            this.textWorld2 = ENG_UK[0].menu[0].world2;
            this.textWorld3 = ENG_UK[0].menu[0].world3;
            this.textWorld4 = ENG_UK[0].menu[0].world4;
            this.textWorld5 = ENG_UK[0].menu[0].world5;
            this.textWorld6 = ENG_UK[0].menu[0].world6;
        }

    },

    addLevels: function () {

        var topY = 250;
        var bottomY = 500;

        var leftX = 200;
        var midX = 425;
        var rightX = 650;


        //_addLevel: function(x, y, stage, startLevel)
        this._addLevel(leftX, topY, 0, player[0].stageData[0].lowestLevel, this.textWorld1);
        this._addLevel(midX, topY, 1, player[0].stageData[1].lowestLevel, this.textWorld2);
        this._addLevel(rightX, topY, 2, player[0].stageData[2].lowestLevel, this.textWorld3);
        this._addLevel(leftX, bottomY, 3, player[0].stageData[3].lowestLevel, this.textWorld4);
        this._addLevel(midX, bottomY, 4, player[0].stageData[4].lowestLevel, this.textWorld5);
        this._addLevel(rightX, bottomY, 5, player[0].stageData[5].lowestLevel, this.textWorld6);
    },
    _addLevel: function (x, y, stage, startLevel, text) {
        if (player[0].stageData[stage].locked == false) {

            this._addButton(x, y, stage, startLevel, text);
            this._checkAndAddMedal(stage);

        } else {
            game.add.sprite(x, y, 'locked')
        }
    },
    _addButton: function (x, y, stage, level, text) {
        this.levelButton = game.add.sprite(x, y, 'unlocked');
        this.levelButton.inputEnabled = true;
        this.levelButton.events.onInputDown.add(
            function () {
                this._startLevel(stage, level);
            },
            this);

        var textStyle = { fill: "#213f6b", align: "center", wordWrap: true, wordWrapWidth: this.levelButton.width};

        var textX = this.levelButton.width/2;
        var textY = this.levelButton.height/5;

        var scoreY = this.levelButton.height/1.8;
        var starY = this.levelButton.height/1.2;

        this.text = game.add.text(textX, textY, text, textStyle);
        this.text.anchor.setTo(0.5, 0.5);
        this.levelButton.addChild(this.text);

        this.stageScore = this.make.text(textX, scoreY, + player[0].stageData[stage].score, textStyle);
        this.stageScore.anchor.setTo(0.5, 0.5);
        this.levelButton.addChild(this.stageScore);

        this.stars = game.add.sprite(textX, starY, 'stars');
        this.stars.anchor.setTo(0.5, 0.5);
        this.levelButton.addChild(this.stars);
    },
    _checkAndAddMedal: function (stage) {
        if (player[0].stageData[stage].medal == 'gold') {
            this.stars.frame = 3;
        }else if(player[0].stageData[stage].medal == 'silver') {
            this.stars.frame = 2;
        }else if(player[0].stageData[stage].medal == 'bronze') {
            this.stars.frame = 1;
        }else{
            this.stars.frame = 0;
        }

        this.levelButton.addChild(this.stars);
    },
    _setGameData: function (stage, level) {
        player[0].currentLevel = level;
        player[0].currentStage = stage;
        player[0].currentDepth = 100;
        player[0].currentScore = 0;
        player[0].levelLocation = 0;
        player[0].maxLevel = 0;
        player[0].maxLevelLine = 155;
        player[0].endLevel = player[0].stageData[stage].highestLevel;
        player[0].startLevel = player[0].stageData[stage].lowestLevel;

    },
    _startLevel: function (stage, level) {
        if (this.config.settingsClicked == false) {
            this._setGameData(stage, level);
            this.game.state.start("game", true);
        }
    },


    // addTestSettings: function(){
    //
    //     this._addSettingButton();
    //     this._addWrapWorld();
    //     this._addWorldSize();
    //     this._addAllPoints();
    //
    //     this.settings.add(this.settingsBg);
    //     this.settings.add(this.title);
    //     this.settings.add(this.wrapText);
    //     this.settings.add(this.checkBox);
    //     this.settings.add(this.worldSizeText);
    //     this.settings.add(this.worldSize);
    //     this.settings.add(this.pointsTitle);
    //     this.settings.add(this.pointsBox);
    //     this.settings.add(this.pointsText);
    //
    //     this.settings.visible = false;
    // },
    // _showSettings: function(){
    //     if(this.config.settingsClicked == false){
    //         this.settings.visible = true;
    //         this.config.settingsClicked = true;
    //     }else{
    //         this.settings.visible = false;
    //         this.config.settingsClicked = false;
    //     }
    // },
    // _addSettingButton: function(){
    //     this.settingsButton = game.add.sprite(10, 680, 'settings');
    //     this.settingsButton.inputEnabled = true;
    //     this.settingsButton.events.onInputDown.add(
    //         function () {
    //             this._showSettings();
    //         },
    //         this);
    //
    //     //Settings Box
    //     this.settings = this.add.group();
    //     this.settingsBg = this.add.image(200, 150, 'box1');
    //     this.title = this.make.text(450, 180, 'Settings for Testing ', {fill: '#f4f0ce'});
    // },
    // _addWrapWorld: function(){
    //     this.wrapText = this.make.text(260, 240, 'Wrap World? ', {fill: '#6f9695'});
    //     this.checkBox = this.add.sprite(470, 240, 'checkBox');
    //     this.checkBox.inputEnabled = true;
    //     this.checkBox.events.onInputDown.add(
    //         function () {
    //             this._checkBoxClicked();
    //         },
    //         this);
    //
    //     if(testing[0].worldWrap == false){
    //         this.checkBox.frame = 0;
    //     }else{
    //         this.checkBox.frame = 1;
    //     }
    // },
    // _checkBoxClicked: function(){
    //     if(this.config.checkBoxTicked == false){
    //         this.checkBox.frame = 1;
    //         testing[0].worldWrap = true;
    //         this.config.checkBoxTicked =  true;
    //     }else{
    //         this.checkBox.frame = 0;
    //         testing[0].worldWrap = false;
    //         this.config.checkBoxTicked =  false;
    //     }
    //
    // },
    // _addWorldSize: function(){
    //     this.worldSizeText = this.make.text(260, 280, 'World Size? ', {fill: '#6f9695'});
    //     this.worldSize = this.add.sprite(470, 280, 'worldSize');
    //     this.worldSize.inputEnabled = true;
    //     this.worldSize.events.onInputDown.add(
    //         function () {
    //             this._changeWorldSize();
    //         },
    //         this);
    //
    //     if(ui[0].worldSizeX == 1500){
    //         this.worldSize.frame = 0;
    //         this.config.worldSize = 'small';
    //     }else if(ui[0].worldSizeX == 2000){
    //         this.worldSize.frame = 1;
    //         this.config.worldSize = 'medium';
    //     }else{
    //         this.worldSize.frame = 2;
    //         this.config.worldSize = 'large';
    //     }
    // },
    // _changeWorldSize: function(){
    //     if(this.config.worldSize == 'small'){
    //         this.worldSize.frame = 1;
    //         this.config.worldSize = 'medium';
    //         ui[0].worldSizeX = 2000;
    //         ui[0].worldSizeY = 2000;
    //     }else if (this.config.worldSize == 'medium'){
    //         this.worldSize.frame = 2;
    //         this.config.worldSize = 'large';
    //         ui[0].worldSizeX = 2500;
    //         ui[0].worldSizeY = 2500;
    //     }else{
    //         this.worldSize.frame = 0;
    //         this.config.worldSize = 'small';
    //         ui[0].worldSizeX = 1500;
    //         ui[0].worldSizeY = 1500;
    //     }
    // },
    // _addAllPoints: function(){
    //     this._addPoints(260, 320, testing[0].bronzePoints, 'Bronze Points:  ', this._changeBronzePoints );
    //     //this._addPoints(260, 330, testing[0].silverPoints, 'Silver Points:  ', this._changeSilverPoints );
    //     //this._addPoints(260, 340, testing[0].goldPoints, 'Gold Points:  ', this._changeGoldPoints );
    //
    // },
    // _addPoints: function(x, y, points, title, onClick){
    //
    //     var spritePosition = x + 210;
    //     var pointsTextPosition = x + 220
    //
    //     this.pointsTitle = this.make.text(x, y, title, {fill: '#6f9695'});
    //     this.pointsBox = this.add.sprite(spritePosition, y, 'points');
    //     this.pointsBox.inputEnabled = true;
    //     this.pointsBox.events.onInputDown.add(
    //         function () {
    //             onClick();
    //         },
    //         this);
    //     this.pointsText = this.make.text(pointsTextPosition, y, points, {fill: '#b4d6ae'});
    // },
    // _changeBronzePoints: function(){
    //
    // },
    // _changeSilverPoints: function(){
    //
    // },
    // _changeGoldPoints: function(){
    //
    // },
};

