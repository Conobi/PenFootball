class Ball {

	constructor(x, y) {
			
		this.ball = game.add.sprite(x, y, 'ball');
		game.physics.enable(this.ball);
		this.ball.anchor.setTo(0.5, 0.5);

		this.ball.body.bounce.y = 0;
		this.ball.body.collideWorldBounds = true;		
		this.ball.body.gravity.y = plyGravity;
	}

	update(platform) {

		var hitPlatform = game.physics.arcade.collide(this.ball, platform);
		
		for (var i=0; i < players.length; i++) {
			
			if (this.ball == players[i])
				continue;

			game.physics.arcade.collide(this.ball, players[i]);
		}
	}

}
