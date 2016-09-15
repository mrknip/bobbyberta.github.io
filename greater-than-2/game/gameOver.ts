GreaterThan.gameOver = function (game) {
};

GreaterThan.gameOver.prototype = {
    config: {
        highScore: false,
        medal: 'none',
        bronze: player[0].bronze,
        silver: player[0].silver,
        gold: player[0].gold,
    },

    create: function () {
        this._calculateHighScore();
        this.addGraphics();
    },

    update: function () {},

    addGraphics: function(){
        this.background = game.add.sprite(0, 0, 'backgroundTitle');
        game.add.button(40, 700, 'home', this._goHome);

        this.title = this.add.text(500, 300, 'Time is up!', {fill: '#24475b'});

        this.scoreBox = this.add.image(500,400, 'title');
        this.scoreText = this.make.text(5, 5, 'Score: ' + player[0].currentScore, {fill: '#24475b'});
        this.scoreBox.addChild(this.scoreText);

        if(this.config.highScore == true){
            this.highScore = this.add.text(700, 400, 'HighScore!', {fill: '#24475b'});
        }
        if(this.config.medal != 'none' ){
            this.highScore = this.add.text(400, 500, 'You have earned a ' + this.config.medal + ' medal', {fill: '#24475b'});
        }
    },
    _goHome: function(){
        this.game.state.start("menu", true);
    },
    _calculateHighScore: function(){
        var currentStage =  player[0].currentStage;
        //if new score is bigger/equal to old score - replace
        if(player[0].currentScore > player[0].stageData[currentStage].score){
            player[0].stageData[currentStage].score = player[0].currentScore;
            this.config.highScore = true;
            this._calculateMedal(currentStage);
        }else{
            this.config.highScore = false;
        }
    },
    _calculateMedal: function(currentStage){
        if(player[0].stageData[currentStage].score >= this.config.gold){
            this.config.medal = 'gold';
        }else if (player[0].stageData[currentStage].score >= this.config.silver){
            this.config.medal = 'silver';
        }else if(player[0].stageData[currentStage].score >= this.config.bronze){
            this.config.medal = 'bronze';
        }else{
            this.config.medal = 'none';
        }

        player[0].stageData[currentStage].medal = this.config.medal;

    }



};