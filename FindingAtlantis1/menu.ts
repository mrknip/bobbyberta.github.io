var menu = new Phaser.Game(1200, 800, Phaser.AUTO, 'container', {

    preload: function(){
    	this.game.load.image('bg', 'assets/startScreen.png');
     },


    create: function(){
        this.background = game.add.image(game.world.centerX, game.world.centerY, 'bg').anchor.set(0.5);
    },

    update: function(){
        if(this.game.input.activePointer.justPressed()){
        this.game.state.start('Game');
        }
    }
});
