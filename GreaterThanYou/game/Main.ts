window.onload = function () {

    game = new Phaser.Game(1200, 800, Phaser.CANVAS);
    Game = game.state.add("game", GreaterThan.Game, false);
    game.state.add("boot", GreaterThan.Boot,true);
    game.state.add("preload", GreaterThan.Preload, false);
    game.state.add("menu", GreaterThan.Menu, false);
    game.state.add("game", GreaterThan.Game,false);
};

console.log('Main State');