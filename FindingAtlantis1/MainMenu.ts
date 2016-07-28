var GTY = GTY ||{};


GTY.MainMenu = function(){};

GTY.MainMenu.prototype = {

    preload: function () {
        this.game.load.image('bg', 'assets/startScreen.png');
    },


    create: function () {
        this.background = game.add.image(0, 0, 'bg');
    },

    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            GTY.game.state.start('Game');
        }
    }
}