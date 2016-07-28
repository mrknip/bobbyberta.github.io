var game = new Phaser.Game(1200, 800, Phaser.AUTO, 'container', {
    
    config: {
        dustNumber: 200,
        youValue: 1,
        alive: true,

        liveCount: 3,
        questionAnswered: 0,

        startSpeed: 400,
        youSpeed: 400,

        //number of edible 2 pieces on screen
        blockNumber: 10,
        blockValue: 1,

        tailBlock: 1,

        sharkSpeed: 100,


        shark10Start: 5,
        sharkValue10: 10,
        shark10Remain: 5,

        shark2Start: 10,
        sharkValue2: 2,
        shark2Remain: 10,

        shark3Start: 5,
        sharkValue3: 3,
        shark3Remain: 5,

        shark4Start: 5,
        sharkValue4: 3,
        shark4Remain: 5,

        scoreValue: 30,
        worldSizeX: 1200,
        worldSizeY: 800,

    },

    preload: function () {

        this.load.spritesheet('you', 'assets/IconYouSprite.png', 75, 75, 2);
        this.load.spritesheet('lives', 'assets/LivesGreaterThan.png', 150, 30, 5);

    	this.load.image('bg', 'assets/background.png');
        this.load.image('eatsUI', 'assets/eatsUI.png');
        this.load.image('blob', 'assets/bgDust.png');
        this.load.image('block', 'assets/collectable.png');
        this.load.image('enemy', 'assets/shark1.png');
    },

    create: function (){

        this.addWorld();

        this.addInputEnable();

        this.addHead();
        this.addDust();

        this.addBlocks();

        this.addEnemy10();
        this.addEnemy2();
        this.addEnemy3();

        this.addTopEatsUI();
        this.addLivesUI();

        //this.addLives();
        //this.coolDown();

        console.log(this.block.name);

	},

	update: function (){

        //this.physics.arcade.collide(this.dusts);

        //move to mouse
        if (this.game.input.mousePointer.isDown)
        {
            //  400 is the speed it will move towards the mouse
            this.game.physics.arcade.moveToPointer(this.head, this.config.youSpeed);

            //  if it's overlapping the mouse, don't move any more
            if (Phaser.Rectangle.contains(this.head.body, game.input.x, game.input.y))
            {
                this.head.body.velocity.setTo(0, 0);
            }
        }
        else
        {
            this.head.body.velocity.setTo(0, 0);
        }


        //player can 'push' dust particles
        //this.game.physics.arcade.collide(this.head, this.dusts);


        if(this.config.alive == false){

        } else{

            // //sharks going to follow you if he can eat you  - otherwise run away
            // if(this.config.sharkValue10 > this.config.tailBlock){
            //     this.game.physics.arcade.moveToObject(this.sharks10, this.head, this.config.sharkSpeed);
            // }else{
            //     this.game.physics.arcade.moveToObject(this.sharks10, this.head, -this.config.sharkSpeed*2);
            // }

            //removing Blocks on collision with them
            this.game.physics.arcade.overlap(this.head, this.blocks, this.removeBlock, null, this);

            //if you collide with Shark10
            this.game.physics.arcade.overlap(this.head, this.sharks10, this.sharkAttack10, null, this);

            //if you collide with Shark3
            this.game.physics.arcade.overlap(this.head, this.sharks3, this.sharkAttack3, null, this);

            //if you collide with Shark2
            this.game.physics.arcade.overlap(this.head, this.sharks2, this.sharkAttack2, null, this);
        }


	},


    addWorld: function(){

        this.game.world.setBounds(0, 0, 2500, 2500);

        this.bounds = new Phaser.Rectangle(100, 100, 2500, 2500);

        this.background = game.add.tileSprite(0, 0, 1200, 800, 'bg');
        this.background.fixedToCamera = true;

    },

    addLivesUI: function(){

        this.livesSprite = this.add.sprite(10, 10, 'lives');
        this.livesSprite.fixedToCamera = true;

        this.livesSprite.frame = 2;



    },

    addTopEatsUI: function(){

        //this.topEatsUI = game.add.text(600, 500, 'Top Eats:', { fill: "#000000", align: "center"});

        this.topEatsUI = this.add.image(600, 500, 'eatsUI')
        this.topEatsUI.fixedToCamera = true;
        this.topEatsUI.cameraOffset.setTo(this.config.worldSizeX-200, 10);

        this.config.scoreValue += 25;

    },

    addDust: function(){

        this.dusts = this.add.group();

        for (var i = 0; i < this.config.dustNumber; i++){
            this.dust = this.dusts.create(this.bounds.randomX, this.bounds.randomY, 'blob');
            this.physics.enable(this.dust, Phaser.Physics.ARCADE);
            this.dust.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.dust.body.velocity.y = game.rnd.integerInRange(-220, 200);
        }

        this.dustGroupB = this.game.make.group();
        this.dustGroupB.create(-50, -50, 'blob');
        this.dusts.add(this.dustGroupB);

        this.dusts.setAll('body.collideWorldBounds', true);
         this.dusts.setAll('body.bounce.x', 1);
         this.dusts.setAll('body.bounce.y', 1);
         this.dusts.setAll('body.minBounceVelocity', 0);


},


    addHead: function (){

        this.head = this.add.sprite(400, 300, 'you');
        this.physics.enable(this.head, Phaser.Physics.ARCADE);
        this.head.scale.setTo(1, 1);
        this.head.body.setCircle(45);

        this.head.body.collideWorldBounds = true;
        this.head.body.bounce.x = 1;
        this.head.body.bounce.y = 1;
        this.head.body.minBounceVelocity = 0;

        this.yourValue = this.make.text(30, 25, this.config.youValue, {fill: '#000000'});
        this.head.addChild(this.yourValue);

        this.game.camera.follow(this.head);

    },

    addBlocks: function(){

        this.blocks = this.add.group();
        this.blocks.enableBody = true;
        this.blocks.physicsBodyType = Phaser.Physics.ARCADE;

        for (var blockIndex = 0; blockIndex < this.config.blockNumber; blockIndex++){

            this.block = this.blocks.create(this.bounds.randomX, this.bounds.randomY, 'block');
            //this.block.name = 'block' + blockIndex.toString();
            //this.physics.enable(this.block, Phaser.Physics.ARCADE);
            //this.block.body.velocity.x = game.rnd.integerInRange(-200, 200);
            //this.block.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.shownBlockValue = this.make.text(7, 8, '+' + this.config.blockValue, {fill: '#000000'});
            this.block.addChild(this.shownBlockValue);
        }

        this.blockGroupB = this.game.make.group();
        this.blockGroupB.create(-50, -50, 'block');
        this.blocks.add(this.blockGroupB);

        this.blocks.setAll('body.collideWorldBounds', true);
        this.blocks.setAll('body.bounce.x', 1);
        this.blocks.setAll('body.bounce.y', 1);
        this.blocks.setAll('body.minBounceVelocity', 0);


    },

    addInputEnable: function(){

        this.game.cursors = this.game.input.keyboard.createCursorKeys();

},

    youValueCheck: function(){
        this.yourValue.setText(this.config.youValue);
        console.log(this.config.youValue);

    },

    tenToWin: function(){

        if( this.config.questionAnswered <10) {
            this.config.questionAnswered +=1;
        } else {
            console.log('you have won! Go to the next level')

            //create an equal than chest
        }

},

    addLives: function(){

        if(this.config.liveCount < 5){
            this.config.liveCount += 1;
            this.livesSprite.frame -= 1;

            //if you have more lives you go slower
            this.config.youSpeed -= 80;

        }else{
            this.config.liveCount = 5;
        }

        this.tenToWin();

    },

    coolDown: function(){
        this.head.frame = 1;
        this.config.alive = false;
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.reBorn, this);

        this.config.liveCount -=1;

        if(this.config.liveCount <= 0){
            //you now have full lives and you speed is reset to fastest

            this.config.youSpeed = 0;
            this.config.youSpeed += this.config.startSpeed;
            this.config.liveCount = 5;
        }else{
            //you have less lives so you go faster
            this.config.youSpeed += 80;
            this.livesSprite.frame += 1;
        }

        console.log('how fast you going?' + this.config.youSpeed);


},

    reBorn: function(){
        this.head.frame = 0;
        this.config.alive = true;

    },

    removeBlock: function(_head, _block){

        _block.kill();
        this.config.tailBlock+=(this.config.blockValue);

        console.log(this.config.tailBlock);

        this.addTail();

        this.yourValue.setText(this.config.tailBlock)


    },

    addTail: function(){


    },

    addEnemy10: function(){

        this.sharks10 = this.add.group();

        for (var shark10Index = 0; shark10Index < this.config.shark10Start; shark10Index++){

            this.shark10 = this.sharks10.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            this.physics.enable(this.shark10, Phaser.Physics.ARCADE);
            this.shark10.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark10.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.sharkValue10 = this.make.text(25, 25, this.config.sharkValue10, {fill: '#FFFFFF'});
            this.shark10.addChild(this.sharkValue10);
        }

        this.shark10Group = this.game.make.group();
        this.shark10Group.create(-50, -50, 'block');
        this.sharks10.add(this.shark10Group);

        this.sharks10.setAll('body.collideWorldBounds', true);
        this.sharks10.setAll('body.bounce.x', 1);
        this.sharks10.setAll('body.bounce.y', 1);
        this.sharks10.setAll('body.minBounceVelocity', 0);


        console.log('There are ' + this.config.shark10Start + ' Shark 10 around');


    },

    addEnemy2: function(){

        this.sharks2 = this.add.group();

        for (var shark2Index = 0; shark2Index < this.config.shark2Start; shark2Index++){

            this.shark2 = this.sharks2.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            this.physics.enable(this.shark2, Phaser.Physics.ARCADE);
            this.shark2.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark2.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.sharkValue2 = this.make.text(30, 25, this.config.sharkValue2, {fill: '#FFFFFF'});
            this.shark2.addChild(this.sharkValue2);
        }

        this.shark2Group = this.game.make.group();
        this.shark2Group.create(-50, -50, 'block');
        this.sharks2.add(this.shark2Group);

        this.sharks2.setAll('body.collideWorldBounds', true);
        this.sharks2.setAll('body.bounce.x', 1);
        this.sharks2.setAll('body.bounce.y', 1);
        this.sharks2.setAll('body.minBounceVelocity', 0);

        console.log('There are ' + this.config.shark2Start + ' Shark 2 around');

    },

    addEnemy3: function(){

        this.sharks3 = this.add.group();

        for (var shark3Index = 0; shark3Index < this.config.shark3Start; shark3Index++){

            this.shark3 = this.sharks3.create(this.bounds.randomX, this.bounds.randomY, 'enemy');
            this.physics.enable(this.shark3, Phaser.Physics.ARCADE);
            this.shark3.body.velocity.x = game.rnd.integerInRange(-200, 200);
            this.shark3.body.velocity.y = game.rnd.integerInRange(-220, 200);

            this.sharkValue3 = this.make.text(30, 25, this.config.sharkValue3, {fill: '#FFFFFF'});
            this.shark3.addChild(this.sharkValue3);
        }

        this.shark3Group = this.game.make.group();
        this.shark3Group.create(-50, -50, 'block');
        this.sharks3.add(this.shark3Group);

        this.sharks3.setAll('body.collideWorldBounds', true);
        this.sharks3.setAll('body.bounce.x', 1);
        this.sharks3.setAll('body.bounce.y', 1);
        this.sharks3.setAll('body.minBounceVelocity', 0);

        console.log('There are ' + this.config.shark3Start + ' Shark 3 around');


    },

    sharkAttack10: function(_head, _shark){

        if(this.config.tailBlock < this.config.sharkValue10+1){
            this.coolDown();
        }
        else
        {
            _shark.kill();
            console.log('you have eaten a Shark 10!');
            this.scoreUI = game.add.text(600, 500, this.config.tailBlock + ' > ' + this.config.sharkValue10, { fill: "#000000", align: "center" });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX-150, 10+this.config.scoreValue);

            this.config.scoreValue += 25;
            console.log(this.config.scoreValue);

            this.config.shark10Remain -=1;

            //gain a life for killing a shark
            this.addLives();

            if(this.config.shark10Remain <= 0){
                this.addEnemy10();

                this.config.shark10Remain += this.config.shark10Start;

                console.log('The start value of shark 10 = ' + this.config.shark10Start);
                console.log('The remain value of shark 10 = ' + this.config.shark10Remain);
                console.log('here are more Shark 10s');
            }
        }

    },

    sharkAttack3:function(_head, _shark){

        if(this.config.tailBlock < this.config.sharkValue3+1){
            this.coolDown();
        }
        else
        {
            _shark.kill();
            console.log('you have eaten a Shark 3!');
            this.scoreUI = game.add.text(600, 500, this.config.tailBlock + ' > ' + this.config.sharkValue3, { fill: "#000000", align: "center" });
            this.scoreUI.fixedToCamera = true;
            this.scoreUI.cameraOffset.setTo(this.config.worldSizeX-150, 10+this.config.scoreValue);

            this.config.scoreValue += 25;
            console.log(this.config.scoreValue);

            this.config.shark3Remain -=1;

            //gain a life for killing a shark
            this.addLives();

            if(this.config.shark3Remain <= 0){
                this.addEnemy3();

                this.config.shark3Remain += this.config.shark3Start;

                console.log('The start value of shark 3 = ' + this.config.shark3Start);
                console.log('The remain value of shark 3 = ' + this.config.shark3Remain);
                console.log('here are more Shark 3');
            }
        }

    },

     sharkAttack2: function(_head, _shark){

         if(this.config.tailBlock < this.config.sharkValue2+1){
             this.coolDown();
         }
         else
         {
             _shark.kill();
            console.log('you have eaten a Shark 2!');
             this.scoreUI = game.add.text(600, 500, this.config.tailBlock + ' > ' + this.config.sharkValue2, { fill: "#000000", align: "center" });
             this.scoreUI.fixedToCamera = true;
             this.scoreUI.cameraOffset.setTo(this.config.worldSizeX-150, 10+this.config.scoreValue);

             this.config.scoreValue += 25;
             console.log(this.config.scoreValue);

             this.config.shark2Remain -=1;

             //gain a life for killing a shark
             this.addLives();

             if(this.config.shark2Remain <= 0){
                 this.addEnemy2();

                 this.config.shark2Remain += this.config.shark2Start;
                 console.log('here are more Shark 2');
             }
        }

    },


});