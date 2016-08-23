GreaterThan.Title = function (game) {
};

GreaterThan.Title.prototype = {

    preload: function() {
        game.load.image('splash', 'assets3/title.png');
        game.load.image('play', 'assets3/backgroundPlay.png');

    },
    create: function () {

        this.background = game.add.sprite(0, 0, 'splash');


        this.playButton = game.add.button(480, 550, 'play', this._playGame, this);
    },
    update: function () {},

    _playGame : function  () {
        this.game.state.start('menu',true);
    },

};
