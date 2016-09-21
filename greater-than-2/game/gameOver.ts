GreaterThan.gameOver = function (game) {
};

GreaterThan.gameOver.prototype = {
    config: {
        highScore: false,
        medal: 'none',
        bronze: player[0].bronze,
        silver: player[0].silver,
        gold: player[0].gold,
        clicked: false,
    },

    create: function () {
        this._calculateHighScore();
        this.addGraphics();
        this.showTestingData();
    },

    update: function () {},

    addGraphics: function(){
        this.background = game.add.sprite(0, 0, 'backgroundTitle');
        game.add.button(40, 700, 'home', this._goHome);

        this.title = this.add.text(500, 300, 'Time is up!', {fill: '#24475b'});

        this.scoreBox = this.add.image(500,400, 'title');
        this.scoreText = this.make.text(5, 5, 'Score: ' + player[0].currentScore, {fill: '#24475b'});
        this.scoreBox.addChild(this.scoreText);

        this.createInformationBox();
        this.information = game.add.sprite(120, 680, 'i');
        this.information.inputEnabled = true;
        this.information.events.onInputDown.add(
            function () {
                this._showInformation();
            },
            this);

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

    },

    showTestingData: function(){
        console.log('Stage ' + player[0].currentStage + ' report');
        console.log('amount of right answers: ' + testing[0].rightAnswers);
        console.log('amount of wrong answers: ' + testing[0].wrongAnswers);
        console.log('total Eaten: ' + testing[0].totalEaten);
        console.log('points earned at Bronze: ' + testing[0].pointsAtBronze);
        console.log('points earned at Silver: ' + testing[0].pointsAtSilver);
        console.log('points earned at Gold: '   + testing[0].pointsAtGold);

        var highestLevel = player[0].currentLevel - player[0].startLevel;

        console.log('Highest Level: '   + highestLevel);
        console.log('Treasure Eaten: '   + testing[0].treasure);
        console.log('Level Up Bonus: '   + testing[0].levelUpBoonus);

    },
    createInformationBox: function(){
        var levelNormalisation = player[0].currentLevel - player[0].startLevel;
        var stage = player[0].currentStage + 1;
        var highestLevel = levelNormalisation +1;

        this.informBox = this.add.image(200, 150, 'box1');
        this.textGroup = this.add.group();

        var x = 260;
        var y = 240;
        this.height = 0;

        this.title = this.make.text(440, 180, 'Stage ' + stage + ' Points Break Down:', {fill: '#6f9695'});
        this.textGroup.add(this.title);

        this._addInfomrationText(x, y, 'Amount of right answers: ', testing[0].rightAnswers);
        this._addInfomrationText(x, y, 'Amount of wrong answers: ', testing[0].wrongAnswers);
        this._addInfomrationText(x, y, 'Total Eaten: ', testing[0].totalEaten);
        this._addInfomrationText(x, y, 'Points earned at Bronze: ', testing[0].pointsAtBronze);
        this._addInfomrationText(x, y, 'Points earned at Silver: ', testing[0].pointsAtSilver);
        this._addInfomrationText(x, y, 'Points earned at Gold: ', testing[0].pointsAtGold);
        this._addInfomrationText(x, y, 'Highest Level Reached: ', highestLevel);
        this._addInfomrationText(x, y, 'Bubbles Collected: ' , testing[0].treasure);
        this._addInfomrationText(x, y, 'Level Up Bonus Points:  ' , testing[0].levelUpBoonus);

        this.textGroup.visible = false;
        this.informBox.visible = false;

    },
    _addInfomrationText: function(x, y, text, data ){
        var line = y + this.height;
        this.text = this.make.text(x, line, text + data, {fill: '#6f9695'} );
        this.textGroup.add(this.text);
        this.height +=40;

    },
    _showInformation: function(){
        if(this.config.clicked == false){
            this.informBox.visible = true;
            this.textGroup.visible = true;
            this.config.clicked = true;
        }else{
            this.informBox.visible = false;
            this.textGroup.visible = false;
            this.config.clicked = false;
        }
    },


};