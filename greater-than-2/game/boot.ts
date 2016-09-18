window.onload = function () {

    game = new Phaser.Game(1200, 800, Phaser.CANVAS);
    Game = game.state.add("game", GreaterThan.Game, false);
    game.state.add("boot", GreaterThan.Boot,true);
    game.state.add("title", GreaterThan.Title, false);
    game.state.add("menu", GreaterThan.Menu, false);
    game.state.add("gameOver", GreaterThan.gameOver, false);
}

GreaterThan.Boot = function (game) {
};

GreaterThan.Boot.prototype = {

    preload: function () {

        game.stage.backgroundColor = "#6f9695";

        //Title screen
        game.load.image('splash', 'assets/title.png');
        game.load.image('play', 'assets/playButtonTitle.png');

        //Menu Graphics
        game.load.image('backgroundTitle', 'assets/titleBackground.png');
        game.load.image('box1', 'assets/levelSelectBox.png');
        game.load.image('locked', 'assets/levelLocked.png');
        game.load.spritesheet('unlocked', 'assets/levelPlay.png');
        game.load.image('home', 'assets/homeButton.png');
        game.load.image('pause', 'assets/pause.png');

        //Game Backgrounds
        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('loose', 'assets/levelDown.png');
        game.load.image('blob', 'assets/dust.png');

        //Game UI
        game.load.image('eatsUI', 'assets/uiBar.png');
        game.load.spritesheet('lives', 'assets/lives.png', 150, 30, 5);
        game.load.image('title', 'assets/levelNameUI.png');
        game.load.image('depth', 'assets/depth.png');
        game.load.image('arrow', 'assets/arrow.png');
        game.load.image('deepestLine', 'assets/deepestLine.png');

        //Game Elements
        game.load.spritesheet('you', 'assets/player.png', 75, 75, 4);
        game.load.image('greater', 'assets/enemyGreater.png');
        game.load.image('greaterEqual', 'assets/enemyGreaterEqual.png');
        game.load.image('lesser', 'assets/enemyLess.png');
        game.load.image('lesserEqual', 'assets/enemyLessEqual.png');
        game.load.image('treasure', 'assets/collectable.png');
        game.load.image('clam', 'assets/clam.png');

        //Assets for Level Completed Screen
        game.load.image('bronze', 'assets/bronze.png');
        game.load.image('silver', 'assets/silver.png');
        game.load.image('gold', 'assets/gold.png');
        game.load.image('complete', 'assets/completedDepth.png');
        game.load.image('play', 'assets3/playButton.png');


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

        this.game.state.start("title")

    },

};