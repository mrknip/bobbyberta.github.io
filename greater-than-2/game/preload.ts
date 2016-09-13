module GreaterThan {

    export class Preloader extends Phaser.State {

        preload() {
            {

                game.stage.backgroundColor = "#6f9695";

                //Title screen
                game.load.image('splash', 'assets/title.png');
                game.load.image('play', 'assets/playButtonTitle.png');

                //Menu Graphics
                game.load.image('backgroundTitle', 'assets/titleBackground.png');
                game.load.image('box1', 'assets/levelSelectBox.png');
                game.load.image('locked', 'assets/levelLocked.png');
                game.load.spritesheet('unlocked', 'assets/levelPlay.png');
                game.load.image('home', 'assets/homeButton.png');

                //Game Backgrounds
                game.load.image('bg', 'assets/background.png');
                game.load.image('up', 'assets/levelUp.png');
                game.load.image('loose', 'assets/levelDown.png');
                game.load.image('blob', 'assets/dust.png');

                //Game UI
                game.load.image('eatsUI', 'assets/uiBar.png');
                game.load.spritesheet('lives', 'assets/lives.png', 150, 30, 5);
                game.load.image('title', 'assets/levelNameUI.png');
                game.load.image('depth', 'assets/depth.png');

                //Game Elements
                game.load.spritesheet('you', 'assets/player.png', 75, 75, 4);
                game.load.image('enemy', 'assets/enemyGreater.png');
                game.load.image('jelly', 'assets/enemyLess.png');
                game.load.image('block', 'assets/collectable.png');
                game.load.image('clam', 'assets/clam.png');

                //Assets for Level Completed Screen
                game.load.image('bronze', 'assets/bronze.png');
                game.load.image('silver', 'assets/silver.png');
                game.load.image('gold', 'assets/gold.png');
                game.load.image('complete', 'assets/completedDepth.png');
                game.load.image('play', 'assets3/playButton.png');


            }

        }

        create(){
            this.input.maxPointers = 1;
            this.disableVisibilityChange = true;

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
            this.scale.minWidth = 512;
            this.scale.minHeight = 400;
            this.scale.maxWidth = 1200;
            this.scale.maxHeight = 800;
            this.scale.pageAlignHorizontally = true;

            if (game.device.desktop) {
                this.scale.forceOrientation(true, false);
            }

            this.game.state.start("main")

        }

    }

}