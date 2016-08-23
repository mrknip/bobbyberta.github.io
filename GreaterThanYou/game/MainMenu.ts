GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {



    preload: function() {
        game.load.image('level', 'assets3/levelIconRed.png');
        game.load.image('level2', 'assets3/levelIconBlue.png');

        game.load.image('backgroundTitle', 'assets3/titleBackground.png');
    },


    create: function () {

        this.background = game.add.sprite(0, 0, 'backgroundTitle');

        var levelNumber= 0
        var lineDownDistance = 100;
        var levelsArray = {};

        for( var levelsArray = 0; levelsArray < 9; levelsArray++){
            if(levelsArray === 3){
                lineDownDistance = 300;
            }else if(levelsArray === 6){
                lineDownDistance = 500;
            }

            var levelBox = game.add.button((levelsArray % 3) * 350 + 200, lineDownDistance, 'level', function(){
                Game.config.currentLevel = parseInt(this.txt.text)-1;
                this.game.state.start('game', true);
            });

            levelBox.txt = game.add.text(levelBox.x+65, levelBox.y+75, levelNumber+1, {fill: '#f4f0ce'});
            this.world.add(levelBox);
            this.world.add(levelBox.txt);

            levelNumber +=1;

        }
    }

};

console.log('Main Menu State');


