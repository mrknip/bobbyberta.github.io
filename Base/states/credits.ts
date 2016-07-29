var Credits = function () {};

Credits.prototype = {

    create: function () {

        game.background = game.add.tileSprite(0, 0, 1200, 800, 'end');
        game.thanks = game.add.text(380, 550, 'Thanks for playing, refresh to play again!', {fill: '#FFFFFF'});
        

    },

};
