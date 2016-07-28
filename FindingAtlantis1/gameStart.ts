var GTY = GTY ||{};

GTY.game = new Phaser.Game(1200, 800, Phaser.AUTO, 'container');

GTY.game.state.add('MainMenu', GTY.MainMenu);
GTY.game.state.add('Game', GTY.game1);

GTY.game.state.start('MainMenu');

