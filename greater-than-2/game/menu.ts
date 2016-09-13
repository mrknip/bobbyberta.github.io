GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {

    preload: function (){},

    create: function (){

        this.background = game.add.sprite(0, 0, 'backgroundTitle');

        this.box1 = game.add.sprite(250, 260, 'box1');

        this.addLevels();

    },

    update: function (){},

    addLevels: function () {
        if(player[0].stageData[0].locked == false){
            game.add.button(300, 380, 'unlocked', this._startLevel1);
        }else{
            game.add.sprite(300, 380, 'locked')
        }

        if(player[0].stageData[1].locked == false){
            game.add.button(500, 380, 'unlocked', this._startLevel2);
        }else{
            game.add.sprite(500, 380, 'locked')
        }

        if(player[0].stageData[2].locked == false){
            game.add.button(700, 380, 'unlocked', this._startLevel3);
        }else{
            game.add.sprite(700, 380, 'locked')
        }

        if(player[0].stageData[3].locked == false){
            game.add.button(300, 580, 'unlocked', this._startLevel4);
        }else{
            game.add.sprite(300, 580, 'locked')
        }

        if(player[0].stageData[4].locked == false){
            game.add.button(500, 580, 'unlocked', this._startLevel5);
        }else{
            game.add.sprite(500, 580, 'locked')
        }

        if(player[0].stageData[5].locked == false){
            game.add.button(700, 580, 'unlocked', this._startLevel6);
        }else{
            game.add.sprite(700, 580, 'locked')
        }

    },


    _startLevel1: function () {
        this.game.state.start("game", true);
        player[0].currentLevel = 0
    },

    _startLevel2: function () {
        this.game.state.start("game", true);
        player[0].currentLevel = 4
    },

    _startLevel3: function () {
        this.game.state.start("game", true);
        player.currentLevel = 36
    },

    _startLevel4: function () {
        this.game.state.start("game", true);
        player.currentLevel = 54
    },

    _startLevel5: function () {
        this.game.state.start("game", true);
        player.currentLevel = 72
    },

    _startLevel6: function () {
        this.game.state.start("game", true);
        player.currentLevel = 70
    },


};

