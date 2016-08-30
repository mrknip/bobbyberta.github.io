GreaterThan.Menu = function (game) {
};

GreaterThan.Menu.prototype = {

    menuInfo: {

        bothUnlocked: menu[2].worldUnlocked,
        lessUnlocked: menu[1].worldUnlocked,
        greaterUnlocked: menu[0].worldUnlocked,

        greaterEasyLocked: false,
        greaterMedLocked: false,
        greaterHardLocked: true,

        lessEasyLocked: false,
        lessMedLocked: false,
        lessHardLocked: true,

        bothEasyLocked: false,
        bothMedLocked: false,
        bothHardLocked: true,

        currentMenu: 0,

        levelStarX: 300,
        levelStartY: 360,


    },

    menuState: {},


    preload: function () {
    },


    create: function () {

        var menuId = this.menuInfo.currentMenu

        this.menuState = {
            currentMenu: menuId,
            currentDifficulty: 'easy',
            currentWorld: 'greater',
            worldName: menu[menuId].world,
            worldUnlocked: menu[menuId].worldUnlocked,
            easyUnlocked: menu[menuId].easyUnlocked,
            mediumUnlocked: menu[menuId].mediumUnlocked,
            hardUnlocked: menu[menuId].hardUnlocked,
            difficultyUnlocked: menu[menuId].easy,
            easyUnlockedState: menu[menuId].easy[0].unlocked,

            levelX: this.menuInfo.levelStarX,
            levelY: this.menuInfo.levelStartY,

            levelsGreaterEasy: [],

        }

        this.background = game.add.sprite(0, 0, 'backgroundTitle');
        this.title = game.add.sprite(250, 70, 'titleMenu');
        this.homeButton = game.add.button(10, 700, 'home', this.goHome, this);


        this.addWorldMenu();

        this.addDifficultyMenu();

        this.addGreaterEasyLevels();
        this.addGreaterMediumLevels();
        this.addGreaterHardLevels();

        this.addLessEasyLevels();
    },

    update: function(){


        if ( this.levelsGreaterEasyGroup.visible == true) {

        } else {


            for (var i = 0; i < this.menuState.levelsGreaterEasy.length; ++i) {
                var currentLevelSprite = this.menuState.levelsGreaterEasy[i];

                currentLevelSprite.events.onInputDown.add(
                    function (currentLevelSprite) {
                        if (currentLevelSprite.value == 0) {
                            data[0].startLevel = 0,
                                console.log('data start level value: ' + data[0].startLevel)
                            this.game.state.start("game");
                        } else if (currentLevelSprite.value == 1) {
                            data[0].startLevel = 8,
                                console.log('data start level value: ' + data[0].startLevel)
                            this.game.state.start("game");
                        } else if (currentLevelSprite.value == 2) {
                            data[0].startLevel = 17,
                                console.log('data start level value: ' + data[0].startLevel)
                            this.game.state.start("game");
                        }
                    },
                    null,
                        this
            );
            }
        }
    },

    changeLevel: function(currentLevelNumber){
         //var count = 0;
        console.log('Level ' + currentLevelNumber + ' has been clicked')

    },

    addGreaterEasyLevels: function () {

        this.greaterLevelsGroup = game.add.group();

        this.levelsGreaterEasyGroup = game.add.group();


        for (var i = 0; i < menu[0].easy.length; ++i) {

            if (this.menuState.levelX == 1000) {
                this.menuState.levelX = 300;
                this.menuState.levelY += 180;
            }


            this.level = game.add.sprite(this.menuState.levelX, this.menuState.levelY, 'levels');


            if (menu[0].easy[i].unlocked == true) {

                this.levelNumber = game.make.text(65, 65, i);
                this.level.addChild(this.levelNumber);

                this.level.value = i;

                //this.level.events.onInputDown.add(this.levelClicked, this);


                if (menu[0].easy[i].gold) {
                    this.level.frame = 4;
                } else if (menu[0].easy[i].silver) {
                    this.level.frame = 3;
                } else if (menu[0].easy[i].bronze) {
                    this.level.frame = 2;
                } else {
                    this.level.frame = 1;
                }
            } else {
                this.level.frame = 0;
            }

            this.menuState.levelX += 175;
            this.level.inputEnabled = true;
            this.levelsGreaterEasyGroup.add(this.level);
            this.menuState.levelsGreaterEasy.push(this.level);

        }

        this.menuState.levelX = this.menuInfo.levelStarX;
        this.menuState.levelY = this.menuInfo.levelStartY;

        this.levelsGreaterEasyGroup.visible = false;

        console.log('Greater Levels Group = ' + this.greaterLevelsGroup.length)
        console.log('Levels Greater Easy Group = ' + this.levelsGreaterEasyGroup.length)
        console.log('level greater easy group = ' + this.menuState.levelsGreaterEasy)
        console.log('level greater easy group length = ' + this.menuState.levelsGreaterEasy.length)

    },

    addGreaterMediumLevels: function () {


        this.levelsGreaterMediumGroup = game.add.group();

        for (var j = 0; j < menu[0].medium.length; ++j) {

            if (this.menuState.levelX == 1000) {
                this.menuState.levelX = 300;
                this.menuState.levelY += 180;
            }

            this.level = game.add.sprite(this.menuState.levelX, this.menuState.levelY, 'levels');

            if (menu[0].medium[j].unlocked == true) {

                this.levelNumber = game.make.text(65, 65, j);
                this.level.addChild(this.levelNumber);


                if (menu[0].medium[j].gold) {
                    this.level.frame = 4;
                } else if (menu[0].medium[j].silver) {
                    this.level.frame = 3;
                } else if (menu[0].medium[j].bronze) {
                    this.level.frame = 2;
                } else {
                    this.level.frame = 1;
                }
            } else {
                this.level.frame = 0;
            }

            this.menuState.levelX += 175;
            this.level.inputEnabled = true;
            this.levelsGreaterMediumGroup.add(this.level);

        }

        this.menuState.levelX = this.menuInfo.levelStarX;
        this.menuState.levelY = this.menuInfo.levelStartY;

        this.levelsGreaterMediumGroup.visible = false;

    },

    addGreaterHardLevels: function () {


        this.levelsGreaterHardGroup = game.add.group();

        for (var i = 0; i < menu[0].hard.length; ++i) {

            if (this.menuState.levelX == 1000) {
                this.menuState.levelX = 300;
                this.menuState.levelY += 180;
            }

            this.level = game.add.sprite(this.menuState.levelX, this.menuState.levelY, 'levels');

            if (menu[0].hard[i].unlocked == true) {

                this.levelNumber = game.make.text(65, 65, i);
                this.level.addChild(this.levelNumber);


                if (menu[0].hard[i].gold) {
                    this.level.frame = 4;
                } else if (menu[0].hard[i].silver) {
                    this.level.frame = 3;
                } else if (menu[0].hard[i].bronze) {
                    this.level.frame = 2;
                } else {
                    this.level.frame = 1;
                }
            } else {
                this.level.frame = 0;
            }

            this.menuState.levelX += 175;
            this.level.inputEnabled = true;
            this.levelsGreaterHardGroup.add(this.level);

        }

        this.menuState.levelX = this.menuInfo.levelStarX;
        this.menuState.levelY = this.menuInfo.levelStartY;

        this.levelsGreaterHardGroup.visible = false;

    },


    addLessEasyLevels: function () {

        this.lessLevelsGroup = game.add.group();

        this.levelsLessEasyGroup = game.add.group();

        for (var i = 0; i < menu[1].easy.length; ++i) {

            if (this.menuState.levelX == 1000) {
                this.menuState.levelX = 300;
                this.menuState.levelY += 180;
            }

            this.level = game.add.sprite(this.menuState.levelX, this.menuState.levelY, 'levels');


            if (menu[1].easy[i].unlocked == true) {

                this.levelNumber = game.make.text(65, 65, i);
                this.level.addChild(this.levelNumber);

                this.level.events.onInputDown.add(this.levelClicked, this);


                if (menu[1].easy[i].gold) {
                    this.level.frame = 4;
                } else if (menu[1].easy[i].silver) {
                    this.level.frame = 3;
                } else if (menu[1].easy[i].bronze) {
                    this.level.frame = 2;
                } else {
                    this.level.frame = 1;
                }
            } else {
                this.level.frame = 0;
            }

            this.menuState.levelX += 175;
            this.level.inputEnabled = true;
            this.levelsLessEasyGroup.add(this.level);

        }

        this.menuState.levelX = this.menuInfo.levelStarX;
        this.menuState.levelY = this.menuInfo.levelStartY;

        this.levelsLessEasyGroup.visible = false;
        this.lessLevelsGroup.add(this.levelsLessEasyGroup);

    },


    addWorldMenu: function () {
        this.worldButtonGroup = game.add.group();


        for (var i = 0; i < menu.length; ++i) {
            if (menu[0].worldUnlocked == true) {
                this.greaterButton = game.add.button(100, 320, 'greater', this.goToGreaterMenu, this, 0, 0, 1);
                this.worldButtonGroup.add(this.greaterButton);
            }
            if (menu[1].worldUnlocked == true) {
                this.lessButton = game.add.button(460, 320, 'less', this.goToLessMenu, this, 0, 0, 1);
                this.worldButtonGroup.add(this.lessButton);
            } else {
                this.lessLockedIcon = game.add.sprite(460, 320, 'lessLocked');
                this.worldButtonGroup.add(this.lessLockedIcon);
            }
            if (menu[2].worldUnlocked == true) {
                this.bothButton = game.add.button(820, 320, 'both', this.goToBothMenu, this, 0, 0, 1);
                this.worldButtonGroup.add(this.bothButton);
            } else {
                this.bothLockedIcon = game.add.sprite(820, 320, 'bothLocked');
                this.worldButtonGroup.add(this.bothLockedIcon);
            }
        }

    },

    addDifficultyMenu: function () {
        //Adding in menu options for Greater Than Stage Page
        this.menuGroup = game.add.group();

        this.box1 = game.add.sprite(250, 260, 'box1');


        this.easyButton = game.add.sprite(264, 272, 'easy');
        this.easyButton.inputEnabled = true;

        this.easyButton.events.onInputDown.add(this.easyClicked, this);


        this.mediumButton = game.add.sprite(514, 272, 'medium')
        this.mediumButton.inputEnabled = true;

        this.mediumButton.events.onInputDown.add(this.mediumClicked, this);


        this.hardButton = game.add.sprite(764, 272, 'hard')
        this.hardButton.inputEnabled = true;

        this.hardButton.events.onInputDown.add(this.hardClicked, this);


        this.menuGroup.add(this.box1);
        this.menuGroup.add(this.easyButton);
        this.menuGroup.add(this.mediumButton);
        this.menuGroup.add(this.hardButton);


        this.menuGroup.visible = false;

    },

    checkWhichStage: function () {
        //Greater Than World
        if (this.menuState.currentMenu == 0) {

            if (menu[0].easyUnlocked == true) {
                if (this.menuState.currentDifficulty == 'easy') {
                    this.easyButton.frame = 0;
                    this.easyButton.inputEnabled = false;

                    this.levelsGreaterHardGroup.visible = false;
                    this.levelsGreaterMediumGroup.visible = false;
                    this.levelsGreaterEasyGroup.visible = true;

                } else {
                    this.easyButton.frame = 1;
                    this.easyButton.inputEnabled = true;
                }
            } else {
                this.easyButton.frame = 2;
                this.easyButton.inputEnabled = false;
            }

            if (menu[0].mediumUnlocked == true) {
                if (this.menuState.currentDifficulty == 'medium') {
                    this.mediumButton.frame = 0;
                    this.mediumButton.inputEnabled = false;

                    this.levelsGreaterHardGroup.visible = false;
                    this.levelsGreaterMediumGroup.visible = true;
                    this.levelsGreaterEasyGroup.visible = false;


                } else {
                    this.mediumButton.frame = 1;
                    this.mediumButton.inputEnabled = true;
                }
            } else {
                this.mediumButton.frame = 2;
                this.mediumButton.inputEnabled = false;
            }

            if (menu[0].hardUnlocked == true) {
                if (this.menuState.currentDifficulty == 'hard') {
                    this.hardButton.frame = 0;
                    this.hardButton.inputEnabled = false;

                    this.levelsGreaterHardGroup.visible = true;
                    this.levelsGreaterMediumGroup.visible = false;
                    this.levelsGreaterEasyGroup.visible = false;

                } else {
                    this.hardButton.frame = 1;
                    this.hardButton.inputEnabled = true;
                }
            } else {
                this.hardButton.frame = 2;
                this.hardButton.inputEnabled = false;
            }
        }

        //Lesser than world
        if (this.menuState.currentMenu == 1) {
            if (menu[1].easyUnlocked == true) {
                if (this.menuState.currentDifficulty == 'easy') {
                    this.easyButton.frame = 0;
                    this.easyButton.inputEnabled = false;
                } else {
                    this.easyButton.frame = 1;
                    this.easyButton.inputEnabled = true;
                }
            } else {
                this.easyButton.frame = 2;
                this.easyButton.inputEnabled = false;
            }

            if (menu[1].mediumUnlocked == true) {
                if (this.menuState.currentDifficulty == 'medium') {
                    this.mediumButton.frame = 0;
                    this.mediumButton.inputEnabled = false;
                } else {
                    this.mediumButton.frame = 1;
                    this.mediumButton.inputEnabled = true;
                }
            } else {
                this.mediumButton.frame = 2;
                this.mediumButton.inputEnabled = false;
            }

            if (menu[1].hardUnlocked == true) {
                if (this.menuState.currentDifficulty == 'hard') {
                    this.hardButton.frame = 0;
                    this.hardButton.inputEnabled = false;
                } else {
                    this.hardButton.frame = 1;
                    this.hardButton.inputEnabled = true;
                }
            } else {
                this.hardButton.frame = 2;
                this.hardButton.inputEnabled = false;
            }
        }

        //Both World
        if (this.menuState.currentMenu == 2) {
            if (menu[2].easyUnlocked == true) {
                if (this.menuState.currentDifficulty == 'easy') {
                    this.easyButton.frame = 0;
                    this.easyButton.inputEnabled = false;
                } else {
                    this.easyButton.frame = 1;
                    this.easyButton.inputEnabled = true;
                }
            } else {
                this.easyButton.frame = 2;
                this.easyButton.inputEnabled = false;
            }

            if (menu[2].mediumUnlocked == true) {
                if (this.menuState.currentDifficulty == 'medium') {
                    this.mediumButton.frame = 0;
                    this.mediumButton.inputEnabled = false;
                } else {
                    this.mediumButton.frame = 1;
                    this.mediumButton.inputEnabled = true;
                }
            } else {
                this.mediumButton.frame = 2;
                this.mediumButton.inputEnabled = false;
            }

            if (menu[2].hardUnlocked == true) {
                if (this.menuState.currentDifficulty == 'hard') {
                    this.hardButton.frame = 0;
                    this.hardButton.inputEnabled = false;
                } else {
                    this.hardButton.frame = 1;
                    this.hardButton.inputEnabled = true;
                }
            } else {
                this.hardButton.frame = 2;
                this.hardButton.inputEnabled = false;
            }
        }
    },


    easyClicked: function () {
        if (this.menuState.currentMenu == 0) {
            if (menu[0].easyUnlocked == true) {
                this.menuState.currentDifficulty = 'easy';
            }
        } else if (this.menuState.currentMenu == 1) {
            if (menu[1].easyUnlocked == true) {
                this.menuState.currentDifficulty = 'easy';
            }
        } else if (this.menuState.currentMenu == 2) {
            if (menu[2].easyUnlocked == true) {
                this.menuState.currentDifficulty = 'easy';
            }
        }

        this.checkWhichStage();


    },

    mediumClicked: function () {
        if (this.menuState.currentMenu == 0) {
            if (menu[0].mediumUnlocked == true) {
                this.menuState.currentDifficulty = 'medium';
            }
        } else if (this.menuState.currentMenu == 1) {
            if (menu[1].mediumUnlocked == true) {
                this.menuState.currentDifficulty = 'medium';
            }
        } else if (this.menuState.currentMenu == 2) {
            if (menu[2].mediumUnlocked == true) {
                this.menuState.currentDifficulty = 'medium';
            }
        }

        this.checkWhichStage();
    },

    hardClicked: function () {
        if (this.menuState.currentMenu == 0) {
            if (menu[0].hardUnlocked == true) {
                this.menuState.currentDifficulty = 'hard';
            }
        } else if (this.menuState.currentMenu == 1) {
            if (menu[1].hardUnlocked == true) {
                this.menuState.currentDifficulty = 'hard';
            }
        } else if (this.menuState.currentMenu == 2) {
            if (menu[2].hardUnlocked == true) {
                this.menuState.currentDifficulty = 'hard';
            }
        }

        this.checkWhichStage();
    },


    goToGreaterMenu: function () {

        this.worldButtonGroup.visible = false;

        this.title.frame = 3;

        this.levelsGreaterHardGroup.visible = false;
        this.levelsGreaterMediumGroup.visible = false;
        this.levelsGreaterEasyGroup.visible = true;


        this.menuState.currentMenu = 0;

        this.menuGroup.visible = true;
        this.lessLevelsGroup.visible = false;

        this.checkWhichStage();
    },

    goToLessMenu: function () {

        this.title.frame = 2;
        this.menuState.currentMenu = 1;

        this.menuGroup.visible = true;
        this.lessLevelsGroup.visible = true;
        this.levelsLessEasyGroup.visible = true;


        this.levelsGreaterHardGroup.visible = false;
        this.levelsGreaterMediumGroup.visible = false;
        this.levelsGreaterEasyGroup.visible = false;

        this.worldButtonGroup.visible = false;
        ;

        this.checkWhichStage();
    },

    goToBothMenu: function () {

        this.title.frame = 1;
        this.menuState.currentMenu = 2;

        this.levelsGreaterHardGroup.visible = false;
        this.levelsGreaterMediumGroup.visible = false;
        this.levelsGreaterEasyGroup.visible = false;

        this.worldButtonGroup.visible = false;
        this.menuGroup.visible = true;

        this.checkWhichStage();

        this.greaterLevelsGroup.visible = false;
        this.lessLevelsGroup.visible = false;
    },


    goHome: function () {

        this.worldButtonGroup.visible = true;
        this.menuGroup.visible = false;
        this.title.frame = 0;

        this.levelsGreaterHardGroup.visible = false;
        this.levelsGreaterMediumGroup.visible = false;
        this.levelsGreaterEasyGroup.visible = false;

        this.menuState.currentDifficulty = 'easy'
        this.greaterLevelsGroup.visible = false;
        this.lessLevelsGroup.visible = false;


    },


    playGame: function () {
        this.game.state.start("game", true);
    },


    levelClicked: function () {
        this.game.state.start("game", true);
    },

};


