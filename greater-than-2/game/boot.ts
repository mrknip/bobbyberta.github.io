window.onload = function () {

    game = new Phaser.Game(1024, 768, Phaser.CANVAS);
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
        game.load.image('splash', 'assets2/background.png');
        game.load.image('play', 'assets2/playButton.png');
        game.load.image('help', 'assets2/helpButton.png');
        game.load.image('titleImage', 'assets2/titleImage.png');
        game.load.image('helpBox', 'assets2/helpBox.png');


        //Menu Graphics
        game.load.image('backgroundTitle', 'assets/titleBackground.png');
        game.load.image('box1', 'assets2/levelBox.png');
        game.load.image('locked', 'assets2/levelBox2.png');
        game.load.spritesheet('unlocked', 'assets2/levelBox.png');
        game.load.spritesheet('stars', 'assets2/starSprites.png', 160, 60, 4);
        game.load.image('play2', 'assets2/playButton2.png');
        game.load.image('home', 'assets/homeButton.png');
        // game.load.image('pause', 'assets/pause.png');
        // game.load.image('settings', 'assets/settings.png');
        // game.load.spritesheet('checkBox', 'assets/checkBox.png', 30, 30, 2);
        // game.load.spritesheet('worldSize', 'assets/worldSize.png', 90, 30, 3);
        // game.load.image('points', 'assets/pointsBlank.png');


        //Game Backgrounds
        game.load.image('bgBase', 'assets2/baseBg.png');
        game.load.image('bgMiddle', 'assets2/middleBg.png');
        game.load.image('bgTop', 'assets2/topBg.png');
        game.load.spritesheet('light', 'assets2/lightAnim.png', 1024, 768, 3);

        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('loose', 'assets/levelDown.png');
        game.load.image('blob', 'assets/dust.png');

        //Game UI
        game.load.image('eatsUI', 'assets/uiBar.png');
        //game.load.spritesheet('lives', 'assets/lives.png', 150, 30, 5);
        //game.load.image('title', 'assets/levelNameUI.png');
        game.load.image('fuelBase', 'assets2/baseHealthBar.png');
        game.load.image('fuelMid', 'assets2/healthBar1.png');
        game.load.image('fuelTop', 'assets2/healthBar2.png');
        game.load.image('title', 'assets2/scoreUI.png');
        //game.load.image('depth', 'assets/depth.png');
        //game.load.image('arrow', 'assets/arrow.png');
        //game.load.image('deepestLine', 'assets/deepestLine.png');


        //Game Elements
        game.load.spritesheet('you', 'assets/player.png', 75, 75, 4);
        //game.load.image('greater', 'assets/enemyGreater.png');
        game.load.image('greaterEqual', 'assets/enemyGreaterEqual.png');
        //game.load.image('lesser', 'assets/enemyLess.png');
        game.load.image('lesserEqual', 'assets/enemyLessEqual.png');
        game.load.image('treasure', 'assets/collectable.png');
        //game.load.image('clam', 'assets/clam.png');

        game.load.image('bubble', 'assets2/bubble2.png');

        game.load.image('sub', 'assets2/sub.png');
        game.load.image('number', 'assets2/number.png');

        game.load.image('headC', 'assets2/headC.png');
        game.load.image('finC', 'assets2/finC.png');
        game.load.image('tailC', 'assets2/tailC.png');

        game.load.image('headB', 'assets2/headB.png');
        game.load.image('finB', 'assets2/finB.png');
        game.load.image('tailB', 'assets2/tailB.png');

        game.load.image('headA', 'assets2/headA.png');
        game.load.image('finA', 'assets2/finA.png');
        game.load.image('tailA', 'assets2/tailA.png');

        game.load.image('fishA', 'assets2/fishA.png');
        game.load.image('fishB', 'assets2/fishB.png');
        game.load.image('fishC', 'assets2/fishC.png');

        game.load.image('sign', 'assets2/greaterThan.png');
        game.load.image('equalTo', 'assets2/equalTo.png');

        game.load.image('greater', 'assets/enemyGreaterSquare.png');
        game.load.image('lesser', 'assets/enemyLessSquare.png');

        //sound for in game
        game.load.audio('pop', 'sound/pop.mp3');
        game.load.audio('splash', 'sound/splash.mp3');
        game.load.audio('tick', 'sound/tick.mp3');
        game.load.audio('win', 'sound/win.mp3');
        game.load.audio('timer', 'sound/timer.mp3');
        game.load.audio('wave', 'sound/wave.mp3');


        //Assets for Level Completed Screen
        game.load.image('bronze', 'assets/bronze.png');
        game.load.image('silver', 'assets/silver.png');
        game.load.image('gold', 'assets/gold.png');
        game.load.image('complete', 'assets/completedDepth.png');
        game.load.image('play', 'assets/playButton.png');
        game.load.image('i', 'assets/information.png');


    },

    create: function () {

        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 568;
        this.scale.minHeight = 426;
        this.scale.maxWidth = 1024;
        this.scale.maxHeight = 768;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }


        this.game.state.start("title")


    },

};