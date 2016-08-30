GreaterThan.Boot = function (game) {
};

GreaterThan.Boot.prototype = {

    preload: function () {
        game.load.image('rotate', 'assets3/rotate.png');
        //should probably add some nice graphics to tell you to change the rotation of the device if it is wrong
        //and graphics of the loading bar for the preload state
    },

    create: function () {

        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 512;
        this.scale.minHeight = 400;
        this.scale.maxWidth = 1200;
        this.scale.maxHeight = 800;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }
        
        this.game.state.start("preload")

    },

};
