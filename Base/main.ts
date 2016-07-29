var
    game = new Phaser.Game(1200, 800, Phaser.AUTO, 'game'),
    Main = function () {};


Main.prototype = {

    preload: function () {
        game.load.image('splash', 'assets/startScreen.png');

        game.load.spritesheet('you', 'assets/IconYouSprite.png', 75, 75, 2);
        game.load.spritesheet('lives', 'assets/LivesGreaterThan.png', 150, 30, 5);

        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('eatsUI', 'assets/eatsUI.png');
        game.load.image('blob', 'assets/bgDust.png');
        game.load.image('block', 'assets/collectable.png');
        game.load.image('enemy', 'assets/shark1.png');
        game.load.image('jelly', 'assets/jelly1.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('loose', 'assets/loose.png');

        game.load.image('clam', 'assets/clam.png');
    },

    create: function () {
        game.state.add('Splash', Splash);
        game.state.start('Splash');
    },

};

//not sure what these do - but they ARE important...
game.state.add('Main', Main);
game.state.start('Main');
