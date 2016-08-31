var game = new Phaser.Game(800, 600, Phaser.AUTO, 'container', {
    config: {
        rightX: 730,
        topY: 10,
        redCount: 1,
        yelCount: 1,
        bluCount: 1,
        bucketValue: 0,

        followSpeed: 100,

        redMirror: false,
        redBlocks: [],

    },


preload: function () {
    this.load.image('redBlock', 'graphics/redBlock.png');
    this.load.image('yelBlock', 'graphics/yelBlock.png');
    this.load.image('bluBlock', 'graphics/bluBlock.png');
    this.load.image('whiBlock', 'graphics/whiBlock.png');

    },

create: function (){

    this.stage.backgroundColor = '#000000';

    this.addTopRed();
    //this.addTopYellow();
    //this.addTopBlue();

    this.addBucket();
    this.bucketValueCheck();

},

update: function (){

    //this.redMoveToCheck();

        for (var i = 0; i < this.config.redBlocks.length; ++i){
            var blob = this.config.redBlocks[i];
            this.texture.renderXY(blob, blob.position.x, blob.position.y, true);
            this.texture.renderXY(blob, 800 - blob.x, blob.y, false);

            this.game.physics.arcade.overlap(
                blob,
                this.bucket,
                function(blob){
                    this.bucketValueUp(
                        blob
                    )
                }
            )
        }
},




addBucket: function(){
    this.bucket = game.add.sprite(200, 450, 'whiBlock');

    this.bucketText = game.make.text(100, 30, 'Total = ' + this.config.bucketValue, {fill: '#000000', align: 'center',});
    this.physics.enable(this.bucket, Phaser.Physics.ARCADE);

    this.bucket.addChild(this.bucketText);

},

addTopRed: function () {
    var x = this.config.rightX,
        y = this.config.topY


    this.topRed  = game.add.sprite(x, y, 'redBlock');
    this.redText =  game.add.text(x+15, y+10, 'R', {fill: '#000000'});

    this.topRed.inputEnabled = true;
    this.topRed.events.onInputDown.add(this.redClicked, this);

    //add value to white bucket
    this.topRed.events.onInputDown.add(this.bucketValueUp, this);
},

addTopYellow: function () {
    var x = this.config.rightX-75,
        y = this.config.topY

    this.topYel = game.add.sprite(x, y, 'yelBlock');
    this.yelText =  game.add.text(x+15, y+10, 'Y', {fill: '#000000'});

    this.topYel.inputEnabled = true;
    this.topYel.events.onInputDown.add(this.yelClicked, this);

    //add value to white bucket
    this.topYel.events.onInputDown.add(this.bucketValueUp, this);

},

addTopBlue: function () {
    var x = this.config.rightX-150,
        y = this.config.topY

    this.topBlu = game.add.sprite(x, y, 'bluBlock');
    this.bluText =  game.add.text(x+15, y+10, 'B', {fill: '#000000'});

    this.topBlu.inputEnabled = true;
    this.topBlu.events.onInputDown.add(this.bluClicked, this);

    //add value to white bucket
    this.topBlu.events.onInputDown.add(this.bucketValueUp, this);

},


redClicked: function (){
    var x = this.config.rightX,
        y = this.config.topY+200

    // var redBlockGroup = this.add.group();
    //
    // var redBlock = redBlockGroup.create(x, y, 'redBlock');
    // this.physics.enable(redBlock, Phaser.Physics.ARCADE);
    // redBlock.inputEnabled = true;
    // redBlock.input.enableDrag();
    //
    // var text = this.make.text(15, 10, this.config.redCount, {fill: '#000000'});
    // redBlock.addChild(text);

    this.redBlock = game.add.sprite(x, y, 'redBlock');
    this.redBlockCount = game.make.text(15, 10, this.config.redCount, {fill: '#000000'});

    this.redBlock.addChild(this.redBlockCount);
    this.physics.enable(this.redBlock, Phaser.Physics.ARCADE);
    this.redBlock.inputEnabled = true;
    this.redBlock.input.enableDrag();

    //adding a block as a refelction
    this.addRedMirror();
    this.bucketValueCheck();

    this.config.redCount++;
    this.config.redBlocks.push(this.redBlock);
},

yelClicked: function (){
    var x = this.config.rightX-75,
        y = this.config.topY+200

    this.yelBlock = game.add.sprite(x, y, 'yelBlock');
    this.yelBlockCount = game.make.text(15, 10, this.config.yelCount, {fill: '#000000'});


    this.yelBlock.addChild(this.yelBlockCount);

    this.yelBlock.inputEnabled = true;
    this.yelBlock.input.enableDrag();

    this.config.yelCount++;
    this.bucketValueCheck();
},


bluClicked: function (){
    var x = this.config.rightX-150,
        y = this.config.topY+200

    this.bluBlock = game.add.sprite(x, y, 'bluBlock');
    this.bluBlockCount = game.make.text(15, 10, this.config.bluCount, {fill: '#000000'});


    this.bluBlock.addChild(this.bluBlockCount);

    this.bluBlock.inputEnabled = true;
    this.bluBlock.input.enableDrag();

    this.config.bluCount++;
    this.bucketValueCheck();
},

bucketValueCheck: function(){

    this.bucketText.setText('Total = ' + this.config.bucketValue);
    console.log(this.config.bucketValue);
},

bucketValueUp: function(){

    this.config.bucketValue += 2;
    console.log(this.config.bucketValue);

},

addRedMirror: function(){

    this.texture = game.add.renderTexture(800, 600, 'texture')

    this.redMirror = game.make.sprite(10,10, 'redBlock');
    this.redMirror.anchor.setTo(0.5, 0.5);

    game.add.sprite(0,0, this.texture);

},


});