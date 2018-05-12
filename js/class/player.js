const plySpeed = 40;
const plyGravity = 1000;
const plyJumpforce = 600;
const plyJumpsMax = 2;
const plyDecel = 8;

class Player {

	constructor(x, y, cursors, tint) {
			
		this.isUpKeyReleased = true;
		this.numberOfJumps = 0;
		this.cursors = cursors;
	
		this.player = game.add.sprite(x, y, 'player');
		game.physics.enable(this.player);
		this.player.anchor.setTo(0.5, 0.5);

		this.player.body.bounce.y = 0;
		this.player.body.collideWorldBounds = true;		
		this.player.body.gravity.y = plyGravity;
		this.player.body.friction = 1;

		this.player.tint = tint;
	}

	update(platform) {

		game.physics.arcade.collide(this.player, platform);
		game.physics.arcade.collide(this.player, ball.ball);
		this.player.body.velocity.x -= this.player.body.velocity.x / plyDecel;		
		
		for (var i=0; i < players.length; i++) {
			
			if (this.player == players[i])
				continue;

			game.physics.arcade.collide(this.player, players[i].player);
		}

		

		if (this.cursors.left.isDown)
			this.player.body.velocity.x = -plySpeed * game.time.elapsed;
		else if (this.cursors.right.isDown)
			this.player.body.velocity.x = plySpeed * game.time.elapsed;
		
	 	if (this.cursors.up.isDown && !this.isUpKeyReleased && this.numberOfJumps+1 < plyJumpsMax) 
		{
			this.player.body.velocity.y = -plyJumpforce;	
			this.numberOfJumps++;	
			this.isUpKeyReleased = true;
			
			console.log("numberOfJumps -> " + this.numberOfJumps);
		}

		if (this.cursors.up.isUp)
			this.isUpKeyReleased = false;
			
		if (this.player.body.touching.down || this.player.body.blocked.down)
			this.numberOfJumps = 0;
	}

}
