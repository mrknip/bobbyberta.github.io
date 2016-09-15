GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {

    preload: function (){},

    create: function (){

        this.background = game.add.sprite(0, 0, 'backgroundTitle');
        this.titleText = this.add.text(500, 180, 'Select a Level:', {fill: '#f4f0ce'});
        //this.box1 = game.add.sprite(225, 160, 'box1');

        this.addLevels();

    },

    update: function (){},

    addLevels: function () {
        //_addLevel: function(x, y, stage, startLevel)
        this._addLevel(320, 270, 0, 0);
        this._addLevel(520, 270, 1, 4);
        this._addLevel(720, 270, 2, 8);
        this._addLevel(320, 470, 3, 12);
        this._addLevel(520, 470, 4, 16);
        this._addLevel(720, 470, 5, 20);
    },
    _addLevel: function(x, y, stage, startLevel){
        if(player[0].stageData[stage].locked == false){

            this._addButton(x, y, stage);
            this._checkAndAddMedal(stage);
            this._setGameData(startLevel, stage);

        }else{
            game.add.sprite(x, y, 'locked')
        }
    },
    _addButton: function(x, y, stage){
        this.levelButton = game.add.button(x, y, 'unlocked', this._startLevel);
        this.stageScore = this.make.text(55, 80, + player[0].stageData[stage].score, {fill: '#f4f0ce'});
        this.levelButton.addChild(this.stageScore);
    },
    _checkAndAddMedal: function(stage){
        if(player[0].stageData[stage].medal != 'none'){
            this.medalScore = this.make.text(35, 55, player[0].stageData[stage].medal, {fill: '#f4f0ce'});
            this.levelButton.addChild(this.medalScore);
        }
    },
    _setGameData: function (level, stage){
        player[0].currentLevel = level;
        player[0].currentStage = stage;
        player[0].currentDepth = 100;
        player[0].currentScore = 0;
        player[0].levelLocation = 0;
        player[0].maxLevel = 0;
        player[0].endLevel = player[0].stageData[stage].highestLevel;
        player[0].startLevel = player[0].stageData[stage].lowestLevel;
    },
    _startLevel: function () {
        this.game.state.start("game", true);
    },
};

