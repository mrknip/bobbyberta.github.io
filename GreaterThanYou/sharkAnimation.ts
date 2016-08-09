var game = new Phaser.Game(1200, 800, Phaser.AUTO, 'container', {
    preload: function () {


        game.load.spritesheet('body', 'assets2/body.png', 150, 150, 2);
        game.load.spritesheet('head', 'assets2/head.png', 150, 150, 2);
        game.load.spritesheet('tail', 'assets2/tail.png', 150, 150, 16);
        game.load.spritesheet('topFin', 'assets2/topFin.png', 150, 150, 2);
        game.load.spritesheet('bottomFin', 'assets2/bottomFin.png', 150, 150, 2);
        game.load.spritesheet('body2', 'assets2/additionalBody.png', 150, 150, 2);

        game.load.image('bg', 'assets/background.png');

        game.load.image('blob', 'assets/bgDust.png');

    },

    create: function () {

        //create world bounds, background image and lock to camera
        this.game.world.setBounds(0, 0, 2500, 2500);
        this.bounds = new Phaser.Rectangle(0, 0, 2000, 600);
        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;
        //
        // //this.waves = game.add.tileSprite(0, 0, 2500 , 2500, 'waves');
        //
        // //enable Input
        this.game.cursors = this.game.input.keyboard.createCursorKeys();
        //
        //create a group for the player and head

        this.playerGroup = this.add.group();

        //text
        this.Number = this.add.text(1000, 1000, '2x + 5', {fill: '#000000'});
        this.Number.anchor.setTo(0.5,0.5);

        this.tailNumber = this.add.text(1000, 1000, '+5', {fill: '#000000'});
       //this.tailNumber.anchor.setTo(3.5, 0.5);

        //player
        this.player = this.add.sprite(1000, 1000, 'body');

        //Player Physics
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.setSize(150, 150, 0, 0);
        this.player.anchor.setTo(0.5,0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.x = 1;
        this.player.body.bounce.y = 1;
        this.player.body.minBounceVelocity = 0;

        this.game.camera.follow(this.player);

        //Text on Player - Showing the players value
        //this.player.addChild(this.Number);


        //create a tail

        this.tail = this.add.sprite(1000, 1000, 'tail');
        this.tail.anchor.setTo(1.5, 0.6);
        this.tail.animations.add('tailSwishEaten', [8,9,10,11,12,13,14,15], 10, true);
        this.tail.animations.add('tailSwish', [0, 1, 2, 3, 4,5,6,7], 10, true).play();

        //this.tail.animations.add('tailSwish', [0, 1, 2, 3, 4,5,6,7], 30, true).play();

        //create a head
         this.head = this.add.sprite(1000, 1000, 'head');
         this.head.frame = 1;
         this.head.anchor.setTo(-0.2, 0.5);

        //create fins
        this.topFin = this.add.sprite(100, 100, 'topFin');
        this.topFin.frame = 1;
        this.topFin.anchor.setTo(0.4, 0.9);

        this.bottomFin = this.add.sprite(100, 100, 'bottomFin');
        this.bottomFin.frame = 1;
        this.bottomFin.anchor.setTo(0.4, 0.1);

        //extra tail piece
        this.addTail1 = this.add.sprite(1000, 1000, 'body2');
        this.addTail1.anchor.setTo(1.1, 0.5)

        this.addTail1.addChild(this.tailNumber);

        //add all these elements to a group
        this.playerGroup.add(this.player);
        this.playerGroup.add(this.tail);
        this.playerGroup.add(this.head);
        this.playerGroup.add(this.topFin);
        this.playerGroup.add(this.bottomFin);
        this.playerGroup.add(this.addTail1);
        this.playerGroup.add(this.Number);
        this.playerGroup.add(this.tailNumber);

        this.playerGroup.sort(0,  Phaser.Group.SORT_DESCENDING);







    },

    update: function () {

        //Player movement with mouse
        if (this.game.input.activePointer.isDown) {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.player, 400);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)) {
                this.player.body.velocity.setTo(0, 0);
            }
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }

        this.tail.x = this.player.x
        this.tail.y = this.player.y

        this.head.x = this.player.x
        this.head.y = this.player.y

        this.topFin.x = this.player.x
        this.topFin.y = this.player.y

        this.bottomFin.x = this.player.x
        this.bottomFin.y = this.player.y

        this.addTail1.x = this.player.x
        this.addTail1.y = this.player.y

        this.Number.x = this.player.x
        this.Number.y = this.player.y

        this.tailNumber.x = this.addTail1.x-100
        this.tailNumber.y = this.addTail1.y

        this.tail.rotation = game.physics.arcade.angleToPointer(this.tail);
        this.head.rotation = game.physics.arcade.angleToPointer(this.head);
        this.player.rotation = game.physics.arcade.angleToPointer(this.head);
        this.topFin.rotation = game.physics.arcade.angleToPointer(this.topFin);
        this.addTail1.rotation = game.physics.arcade.angleToPointer(this.addTail1);
        this.bottomFin.rotation = game.physics.arcade.angleToPointer(this.bottomFin);

    },

});