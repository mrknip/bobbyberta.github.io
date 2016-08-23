GreaterThan.Preload = function (game) {
};

GreaterThan.Preload.prototype = {
    
    preload: function() {
        game.stage.backgroundColor = "#6f9695";

    },
    create: function () {},
    update: function () {
        
        this.game.state.start("menu", true);
    }
    
};
