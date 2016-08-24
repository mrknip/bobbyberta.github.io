var needToTurn = false;

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
        if (game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            document.body.style.backgroundSize = "" + game.scale.width * 3.1796875 + "px 100%";
            document.body.style.backgroundPosition = "center"
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forceOrientation(true, false);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        
        this.game.state.start("preload")

    },
    
    
    enterIncorrectOrientation: function () {
        if (!needToTurn) {
            needToTurn = true;
            game.input.maxPointers = 0;
            if (rotate != null && rotate != undefined)rotate.destroy();
            rotate = game.add.sprite(0, game.camera.x, "rotate");
            game.world.bringToTop(rotate);
            game.physics.arcade.isPaused = false;
        }
    },

    leaveIncorrectOrientation: function () {
         if (!needToTurn) {
            needToTurn = true;
            game.input.maxPointers = 0;
            if (rotate != null && rotate != undefined)rotate.destroy();
            rotate = game.add.sprite(0, game.camera.x, "rotate");
            game.world.bringToTop(rotate);
            game.physics.arcade.isPaused = true
        }
    }

};
