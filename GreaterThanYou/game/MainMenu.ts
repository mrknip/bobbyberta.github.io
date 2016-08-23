GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {

    preload: function() {
        game.load.image('splash', 'assets/startScreen.png');
        game.load.image('play', 'assets3/playButton.png');
    },
    create: function () {

        this.background = game.add.sprite(0, 0, 'splash');


        this.playButton = game.add.button(630, 280, 'play', this._playGame, this);
    },
    update: function () {},

    _playGame : function  () {
        this.game.state.start('game',true);
    },

};

console.log('Main Menu State');
