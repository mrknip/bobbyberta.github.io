var Splash = function(){};


    Splash.prototype = {

    preload:function(){
        
    },

    addGameStates: function(){
        game.state.add("GameMenu", GameMenu);
        game.state.add("Game", Game);
        game.state.add("Game2", Game2);
        game.state.add("Game3", Game3);
        game.state.add("Game4", Game4);
        game.state.add("Game5", Game5);
        game.state.add("Win", Win);
        game.state.add("Win2", Win2);
        game.state.add("Win3", Win3);
        game.state.add("Win4", Win4);
        game.state.add("Loose1", Loose1);
        game.state.add("Loose2", Loose2);
        game.state.add("Loose3", Loose3);
        game.state.add("Credits", Credits);
    },

    create: function(){
        game.background = game.add.tileSprite(0, 0, 1200, 800, 'splash');
        this.addGameStates();
    },

        update: function(){

            if (this.game.input.activePointer.isDown)
            {
                game.state.start('Game');
            }

        }
    
};
