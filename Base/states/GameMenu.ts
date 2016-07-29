var GameMenu = function () {};

GameMenu.prototype = {

    preload: function () {

    },

    create: function () {
        game.background = game.add.tileSprite(0, 0, 1200, 800, 'splash');
        //this.addGameStates();
    },

    update: function(){

        if (this.game.input.activePointer.isDown)
        {
            game.state.start('Game');
        }

    }
}