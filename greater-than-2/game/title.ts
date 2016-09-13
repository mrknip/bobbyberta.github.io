GreaterThan.Title = function (game) {
};

GreaterThan.Title.prototype = {

    create: function () {

        this.background = game.add.sprite(0, 0, 'splash');
        this.playButton = game.add.button(480, 550, 'play', this._playGame, this);
    },


    update: function () {},

    _playGame : function  () {
        this.game.state.start('menu',true);
    },

};