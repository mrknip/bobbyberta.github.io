GreaterThan.Preload = function (game) {
};

GreaterThan.Preload.prototype = {
    
    preload: function() {
        game.stage.backgroundColor = "#6f9695";


        //Game Graphics
        game.load.image('splash', 'assets/startScreen.png');

        game.load.spritesheet('you', 'assets2/body6.png', 75, 75, 4);
        game.load.spritesheet('lives', 'assets/LivesGreaterThan.png', 150, 30, 5);
        game.load.spritesheet('tailSwish', 'assets2/tail.png', 150, 150, 16);
        game.load.spritesheet('headFace', 'assets2/headFace.png', 150, 150, 2);

        //game.load.spritesheet('medals', 'assets3/medals.png', 300, 260, 3);
        game.load.image('bronze', 'assets3/bronze.png');
        game.load.image('silver', 'assets3/silver.png');
        game.load.image('gold', 'assets3/gold.png');
        game.load.image('complete', 'assets3/depthCompleted.png');
        game.load.image('play', 'assets3/playButton.png');
        //game.load.spritesheet('enemy', 'assets3/SharkSpriteSheet.png', 50, 50, 15);

        game.load.image('bg', 'assets/background.png');
        game.load.image('up', 'assets/levelUp.png');
        game.load.image('eatsUI', 'assets3/uiBar.png');
        game.load.image('blob', 'assets/bgDust.png');
        game.load.image('block', 'assets/collectable.png');
        game.load.image('enemy', 'assets2/shark.png');
        game.load.image('jelly', 'assets2/jelly.png');
        game.load.image('end', 'assets/credits.png');
        game.load.image('loose', 'assets/loose.png');
        game.load.image('title', 'assets/TitleBar.png');

        game.load.image('clam', 'assets/clam.png');
        game.load.image('waves', 'assets/waves.png');
        game.load.image('head', 'assets/head.png');
        
        
        
        //Menu Graphics
        game.load.image('backgroundTitle', 'assets3/titleBackground.png');
        //'selectWorld', 'bothTitle', 'lessTitle', 'greaterTitle'
        game.load.spritesheet('titleMenu', 'assets3/stageTitle.png', 780, 160, 4);
        game.load.spritesheet('greater', 'assets3/worldGreaterButton.png', 300, 300, 2);

        game.load.spritesheet('less', 'assets3/worldLessButton.png', 300, 300, 2);
        game.load.image('lessLocked', 'assets3/worldLessLocked.png');
        game.load.spritesheet('both', 'assets3/worldBothButton.png', 300, 300, 2);
        game.load.image('bothLocked', 'assets3/worldBothLocked.png');
        game.load.image('locked', 'assets3/levelLocked.png');
        game.load.spritesheet('unlocked', 'assets3/levelUnlocked.png', 150, 150, 4);
        game.load.image('bothLocked', 'assets3/worldBothLocked.png');
        game.load.image('lessLocked', 'assets3/worldLessLocked.png');

        game.load.image('home', 'assets3/homeButton.png');
        game.load.image('box1', 'assets3/levelSelectBox.png');

        game.load.spritesheet('easy', 'assets3/easyMenuButton1.png', 250, 60, 2);
        game.load.spritesheet('medium', 'assets3/mediumMenuButton.png', 250, 60, 3);
        game.load.spritesheet('hard', 'assets3/hardMenuButton.png', 250, 60, 3);

        game.load.spritesheet('levels', 'assets3/levelSprite.png', 150, 150, 5);

        

    },
    create: function () {},
    update: function () {
        
        this.game.state.start("title", true);
        this.add.text(0, 0, 'Loading please wait', {fill: '#f4f0ce'});
    }
    
};
