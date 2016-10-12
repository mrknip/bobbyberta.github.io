GreaterThan.Title = function (game) {
};

GreaterThan.Title.prototype = {


    config: {
        helpClicked: false,
    },


    create: function () {

        this.checkLanguage();

        this.background = game.add.sprite(0, 0, 'splash');

        var x = this.background.width/2;
        var y = this.background.height/3;

        this.titleImage = game.add.sprite(x, y, 'titleImage');

        this._addText(this.titleImage, this.textTitle);
        this.addButton();

        this.titleImage.anchor.setTo(0.5, 0.5);
        this.background.addChild(this.titleImage);

        this.addHelpMenu();


    },


    update: function () {},

    checkLanguage: function(){
        if(player[0].language ==  'PTR_BR'){
            this.textPlay = PTR_BR[0].title[0].play;
            this.textHelp = PTR_BR[0].title[0].help;
            this.textTitle = PTR_BR[0].title[0].title;
        }else{
            this.textPlay = ENG_UK[0].title[0].play;
            this.textHelp = ENG_UK[0].title[0].help;
            this.textTitle = ENG_UK[0].title[0].title;
        }

    },

    addHelpMenu: function(){

        var x = this.background.width/2;
        var y = this.background.height/2;

        this.helpGroup = this.add.group();
        this.helpBg = this.add.image(x, y, 'helpBox');
        this.helpTitle = game.add.text(x-20, y-275, this.textHelp, {fill: "#213f6b"});


        this.helpGroup.add(this.helpBg);
        this.helpGroup.add(this.helpTitle);

        this.helpGroup.visible = false;

        this.helpBg.anchor.setTo(0.5, 0.5);

    },


    addButton:function(){

        var x = this.background.width/2;
        var y = this.background.height/3;


        this._playButton(x, y*2, 'play', this.textPlay);
        this._helpButton(x, y*2.5, 'help', this.textHelp);

    },
    _playButton: function(x, y, image, text){

        this.button = game.add.sprite(x, y, image);
        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(
            function () {
                this._playGame();
            },
            this);

        this.button.anchor.setTo(0.5, 0.5);

        this._addText(this.button, text);
    },
    _helpButton: function(x, y, image, text){

        this.button = game.add.sprite(x, y, image);
        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(
            function () {
                this._checkHelpClicked();
            },
            this);

        this.button.anchor.setTo(0.5, 0.5);

        this._addText(this.button, text);
    },
    _addText: function(sprite, text){
        var textStyle = { fill: "#213f6b", align: "center", wordWrap: true, wordWrapWidth: sprite.width};

        this.text = game.add.text(0, 0, text, textStyle);
        this.text.anchor.setTo(0.5, 0.5);

        sprite.addChild(this.text);

    },

    _playGame : function  () {
        this.game.state.start('menu',true);
    },

    _checkHelpClicked: function(){
        if(this.config.helpClicked == false){
            this.config.helpClicked =  true;
            this.helpGroup.visible = true;
        }else{
            this.config.helpClicked =  false;
            this.helpGroup.visible = false;
        }

    },

};