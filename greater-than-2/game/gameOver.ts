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
        this.checkLanguage();
        this._calculateHighScore();
        this.addGraphics();
        this.showTestingData();
    },

    update: function () {},

    checkLanguage: function(){
        if(player[0].language ==  'PTR_BR'){
            this.textGameOver = PTR_BR[0].gameOver[0].gameOver;
            this.textScore = PTR_BR[0].gameOver[0].score;
            this.textHighScore = PTR_BR[0].gameOver[0].highScore;
            this.textNext = PTR_BR[0].gameOver[0].next;
            this.textEarned = PTR_BR[0].gameOver[0].earned;
            this.textBronze = PTR_BR[0].gameOver[0].bronze;
            this.textSilver = PTR_BR[0].gameOver[0].silver;
            this.textGold = PTR_BR[0].gameOver[0].gold;
            this.textMedal = PTR_BR[0].gameOver[0].medal;
        }else{
            this.textGameOver = ENG_UK[0].gameOver[0].gameOver;
            this.textScore = ENG_UK[0].gameOver[0].score;
            this.textHighScore = ENG_UK[0].gameOver[0].highScore;
            this.textNext = ENG_UK[0].gameOver[0].next;
            this.textEarned = ENG_UK[0].gameOver[0].earned;
            this.textBronze = ENG_UK[0].gameOver[0].bronze;
            this.textSilver = ENG_UK[0].gameOver[0].silver;
            this.textGold = ENG_UK[0].gameOver[0].gold;
            this.textMedal = ENG_UK[0].gameOver[0].medal;
        }

    },

    addGraphics: function(){
        this.background = game.add.sprite(0, 0, 'splash');

        var x = 1024;
        var y = 768;


        this.homeButton = game.add.button(x/2, y/2, 'play', this._goHome);
        this.homeButton.anchor.setTo(0.5, 0.5);
        this.nextText = this.add.text(0, 0, this.textNext, {fill: '#24475b'});
        this.nextText.anchor.setTo(0.5, 0.5);
        this.homeButton.addChild(this.nextText);

        this.title = this.add.text(x/2, y/5, this.textGameOver, {fill: '#19a3e0'});
        this.title.anchor.setTo(0.5, 0.5);

        this.scoreBox = this.add.image(x/2, y/3, 'title');
        this.scoreBox.anchor.setTo(0.5, 0.5);

        this.scoreText = this.make.text(5, 5, this.textScore + ': ' + player[0].currentScore, {fill: '#24475b'});
        this.scoreText.anchor.setTo(0.5, 0.5);
        this.scoreBox.addChild(this.scoreText);

        this.createInformationBox();
        this.information = game.add.sprite(x/1.05, y/1.1, 'i');
        this.information.anchor.setTo(0.5, 0.5);
        this.information.inputEnabled = true;
        this.information.events.onInputDown.add(
            function () {
                this._showInformation();
            },
            this);

        if(this.config.medal == 'gold'){
                this.medalText = this.textGold;
        }else if(this.config.medal == 'silver'){
            this.medalText = this.textSilver;
        }else if(this.config.medal == 'bronze'){
            this.medalText = this.textBronze;
        }

        if(this.config.highScore == true){
            this.highScore = this.add.text(x/2, y/2.5, this.textHighScore, {fill: '#19a3e0'});
            this.highScore.anchor.setTo(0.5, 0.5);

        }
        if(this.config.medal != 'none' ){
            this.highScore = this.add.text(x/2, y/1.5, this.textEarned + ": " + this.medalText + this.textMedal, {fill: '#19a3e0'});
            this.highScore.anchor.setTo(0.5, 0.5);
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