var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, update: update, create: create });

function preload() {

    game.load.image('redBlock', 'graphics/redBlock.png');
    game.load.image('yelBlock', 'graphics/yelBlock.png');
    game.load.image('bluBlock', 'graphics/bluBlock.png');
    game.load.image('whiBlock', 'graphics/whiBlock.png');

}

var text;
var counter = 0;
var redBlock;
var redBlocks = 1;


function create() {
    
    game.stage.backgroundColor = '#000000';


    //Red Block
    var redBlock = this.add.sprite(730, 10, 'redBlock');
    var colorText = this.add.text(745, 20, '', {fill: '#ffffff'});
        colorText.text = 'R';

    redBlock.inputEnabled = true;
    redBlock.events.onInputDown.add(redClick, this);


    // Yellow Block
        var yelBlock = this.add.sprite(630, 10 , 'yelBlock');

        yelBlock.inputEnabled = true;
        yelBlock.input.enableDrag(true);


    // Blue Block
        var bluBlock = this.add.sprite(530, 10, 'bluBlock');

        bluBlock.inputEnabled = true;
        bluBlock.input.enableDrag(true);

    //Colour Counter

    text = this.add.text(10,10, 'Red = ' + counter,
        {fill: '#ffffff',}
    );

    //White Dump Box
    var whiBlock = this.add.sprite(300, 500, 'whiBlock');

    console.log(whiBlock.getBounds());



}


function update() {

    colourCounter();
    //redInBox();

    //console.log(this.game.whiBlock);
    //console.log(this.getBounds());

}


function redClick(){

    redBlock = game.add.group();
    for(var i=0; i < redBlocks; i++){

        var block = game.add.sprite(730, 100, 'redBlock');
        //redBlock.add(block);

        block.inputEnabled = true;
        block.input.enableDrag();

        //console.log(redBlock.getBounds());
    }

    counter++;

}

function redInBox(){

    var redBlock = game.redBlock.getBounds();

}


function colourCounter(){

    text.setText('Red = ' + counter);
}