var game = new Phaser.Game(800, 600, Phaser.AUTO, 'digital_abacus', {



    //for Phaser to run a file it has to contain at least one of these functions

    //preload is used at the start to load assets and thins
    preload: function(){
        game.load.image('red', 'graphics/beadRed.png');
        game.load.image('blue', 'graphics/beadBlue.png');
        game.load.image('yellow', 'graphics/beadYellow.png');
        game.load.image('rod', 'graphics/rod.png');

    },

    //create makes the game world and calls things into it
    create: function () {

        this.centreAndScaleCanvas();

        game.stage.backgroundColor = "#19A3E0";

        this.left = new Phaser.Rectangle(0, 0, 400, 800);
        this.right = new Phaser.Rectangle(400, 0, 400, 800);

        this.addRods();

        this.redBead1 = game.add.sprite(745, 50, 'red');
        this.redBead1.directionRight = false;
        this.beadPhysics(this.redBead1);
        this.redBead1.events.onInputDown.add(this.clicked1, this);


        this.redBead6 = game.add.sprite(15, 50, 'yellow');
        this.beadPhysics(this.redBead6);
        this.redBead6.events.onInputDown.add(this.clicked6, this);

    },

    beadPhysics: function(bead){
        game.physics.enable(bead, Phaser.Physics.ARCADE);
        bead.body.collideWorldBounds = true;
        bead.anchor.setTo(0, 0.5);
        bead.inputEnabled = true;
        bead.enableBody = true;
        bead.body.immovable = true;
        //this.redBead1.body.bounce.set(1);

    },

    //runs 60 times a second and is where the interactive stuff is
    update: function(){

        game.physics.arcade.collide(this.redBead1, this.redBead6, this.collided, null, this);

    },

    render: function(){
        // game.debug.geom(this.left,'#0fffff');
        // game.debug.geom(this.right,'#fff000');
    },

    collided: function(){
        this.redBead1.body.velocity.x =0;
        this.redBead6.body.velocity.x =0;

    },

    clicked1: function(){
        if(this.redBead1.directionRight == true){
            this.redBead1.body.velocity.x =100;
            this.redBead1.directionRight = false;
        }else{
            this.redBead1.body.velocity.x =-100;
            this.redBead1.directionRight = true;
        }

    },

    clicked6: function(){
        if(this.redBead6.directionRight == false){
            this.redBead6.body.velocity.x =100;
            this.redBead6.directionRight = true;
        }else{
            this.redBead6.body.velocity.x =-100;
            this.redBead6.directionRight = false;
        }

    },


    //sets the canvas size and centres the game vertically
    centreAndScaleCanvas: function(){
        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 800;
        this.scale.minHeight = 600;
        this.scale.maxWidth = 800;
        this.scale.maxHeight = 600;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }
    },

    addRods: function(){
        game.add.image(0, 50, 'rod');
        game.add.image(0, 100, 'rod');
        game.add.image(0, 150, 'rod');
        game.add.image(0, 200, 'rod');
        game.add.image(0, 250, 'rod');

        game.add.image(0, 310, 'rod');
        game.add.image(0, 360, 'rod');
        game.add.image(0, 410, 'rod');
        game.add.image(0, 460, 'rod');
        game.add.image(0, 510, 'rod');
    },

});