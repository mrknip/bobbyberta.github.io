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

        this.background = game.add.sprite(0, 0, 'backgroundTitle');
        this.titleText = this.add.text(500, 180, 'Select a Level:', {fill: '#f4f0ce'});

        this.addLevels();
        this.addTestSettings();

    },

    update: function () {},

    addLevels: function () {
        //_addLevel: function(x, y, stage, startLevel)
        this._addLevel(320, 270, 0, player[0].stageData[0].lowestLevel);
        this._addLevel(520, 270, 1, player[0].stageData[1].lowestLevel);
        this._addLevel(720, 270, 2, player[0].stageData[2].lowestLevel);
        this._addLevel(320, 470, 3, player[0].stageData[3].lowestLevel);
        this._addLevel(520, 470, 4, player[0].stageData[4].lowestLevel);
        this._addLevel(720, 470, 5, player[0].stageData[5].lowestLevel);
    },
    _addLevel: function (x, y, stage, startLevel) {
        if (player[0].stageData[stage].locked == false) {

            this._addButton(x, y, stage, startLevel);
            this._checkAndAddMedal(stage);

        } else {
            game.add.sprite(x, y, 'locked')
        }
    },
    _addButton: function (x, y, stage, level) {
        this.levelButton = game.add.sprite(x, y, 'unlocked');
        this.levelButton.inputEnabled = true;
        this.levelButton.events.onInputDown.add(
            function () {
                this._startLevel(stage, level);
            },
            this);
        this.stageScore = this.make.text(55, 80, +player[0].stageData[stage].score, {fill: '#f4f0ce'});
        this.levelButton.addChild(this.stageScore);
    },
    _checkAndAddMedal: function (stage) {
        if (player[0].stageData[stage].medal != 'none') {
            this.medalScore = this.make.text(35, 55, player[0].stageData[stage].medal, {fill: '#f4f0ce'});
            this.levelButton.addChild(this.medalScore);
        }
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

    addTestSettings: function(){

        this._addSettingButton();
        this._addWrapWorld();
        this._addWorldSize();

        this.settings.add(this.settingsBg);
        this.settings.add(this.title);
        this.settings.add(this.wrapText);
        this.settings.add(this.checkBox);
        this.settings.add(this.worldSizeText);
        this.settings.add(this.worldSize);

        this.settings.visible = false;
    },
    _showSettings: function(){
        if(this.config.settingsClicked == false){
            this.settings.visible = true;
            this.config.settingsClicked = true;
        }else{
            this.settings.visible = false;
            this.config.settingsClicked = false;
        }
    },
    _addSettingButton: function(){
        this.settingsButton = game.add.sprite(10, 680, 'settings');
        this.settingsButton.inputEnabled = true;
        this.settingsButton.events.onInputDown.add(
            function () {
                this._showSettings();
            },
            this);

        //Settings Box
        this.settings = this.add.group();
        this.settingsBg = this.add.image(200, 150, 'box1');
        this.title = this.make.text(450, 180, 'Settings for Testing ', {fill: '#f4f0ce'});
    },
    _addWrapWorld: function(){
        this.wrapText = this.make.text(260, 240, 'Wrap World? ', {fill: '#6f9695'});
        this.checkBox = this.add.sprite(450, 240, 'checkBox');
        this.checkBox.inputEnabled = true;
        this.checkBox.events.onInputDown.add(
            function () {
                this._checkBoxClicked();
            },
            this);

        if(testing[0].worldWrap == false){
            this.checkBox.frame = 0;
        }else{
            this.checkBox.frame = 1;
        }
    },
    _checkBoxClicked: function(){
        if(this.config.checkBoxTicked == false){
            this.checkBox.frame = 1;
            testing[0].worldWrap = true;
            this.config.checkBoxTicked =  true;
        }else{
            this.checkBox.frame = 0;
            testing[0].worldWrap = false;
            this.config.checkBoxTicked =  false;
        }

    },
    _addWorldSize: function(){
        this.worldSizeText = this.make.text(260, 280, 'World Size? ', {fill: '#6f9695'});
        this.worldSize = this.add.sprite(450, 280, 'worldSize');
        this.worldSize.inputEnabled = true;
        this.worldSize.events.onInputDown.add(
            function () {
                this._changeWorldSize();
            },
            this);

        if(ui[0].worldSizeX == 1500){
            this.worldSize.frame = 0;
            this.config.worldSize = 'small';
        }else if(ui[0].worldSizeX == 2000){
            this.worldSize.frame = 1;
            this.config.worldSize = 'medium';
        }else{
            this.worldSize.frame = 2;
            this.config.worldSize = 'large';
        }
    },
    _changeWorldSize: function(){
        if(this.config.worldSize == 'small'){
            this.worldSize.frame = 1;
            this.config.worldSize = 'medium';
            ui[0].worldSizeX = 2000;
            ui[0].worldSizeY = 2000;
        }else if (this.config.worldSize == 'medium'){
            this.worldSize.frame = 2;
            this.config.worldSize = 'large';
            ui[0].worldSizeX = 2500;
            ui[0].worldSizeY = 2500;
        }else{
            this.worldSize.frame = 0;
            this.config.worldSize = 'small';
            ui[0].worldSizeX = 1500;
            ui[0].worldSizeY = 1500;
        }
    }
};

