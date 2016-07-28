










var BallSprite = function(game, x, y) {
    Phaser.Sprite.call(this,  game, x, y, 'balls',2);
}

BallSprite.prototype = Object.create(Phaser.Sprite.prototype);

BallSprite.prototype.constructor = BallSprite;

BallSprite.prototype.customMethod = function() { console.log('i am a ball sprite'); }


BallSprite = function(/* params */) {
    Phaser.Sprite.call(/* params */);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enableBody = true;}





BallSprite.prototype.update = function() {

// guess how you can obtain a body size of the `ball instance` here.}



    var BallSprite = function(game, x, y,{
        Phaser.Sprite.call(this,  game, x, y, 'balls',2);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enableBody = true;    this.y -= 50;
    this.body.velocity.setTo(0, -200);
    this.body.bounce.setTo(1, 1);
    this.a = b;
}
    
    
    
    
    BallSprite.prototype = Object.create(Phaser.Sprite.prototype);
    BallSprite.prototype.constructor = BallSprite;
    BallSprite.prototype.update = function() {
        if (this.body.x <= 0) {
            this.body.x = 0;
            this.body.velocity.x *= -1;
        }
        if (this.body.x > this.game.world.width - this.body.width) {
            this.body.x = this.game.world.width - this.body.width;
            this.body.velocity.x *= -1;
        }        if (this.body.y < 0) {
            this.body.y = 0;
            this.body.velocity.y *= -1;
        }
        if (this.body.y > this.game.world.height + this.body.height) {
            this.a.remove(this, true);
        }
    }
}
