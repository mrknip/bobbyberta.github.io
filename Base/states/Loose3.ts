var Loose3 = function () {};

Loose3.prototype = {

    preload: function () {
    },

    create: function () {

        game.background = game.add.tileSprite(0, 0, 1200, 800, 'loose');

        this.timer = game.time.create();
        this.timerEvent = this.timer.add( Phaser.Timer.SECOND * 3, this.endTimer, this);

        this.timer.start();
    },

    render: function() {
        if(this.timer.running) {
            game.debug.text(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), 625, 575, '#FFFFFF');
        }else{
            game.state.start('Game4');
        }
    },

    endTimer: function(){
        this.timer.stop();
    },

    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var seconds = (s);
        return seconds;

    }

};