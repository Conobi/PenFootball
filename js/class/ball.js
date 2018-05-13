const ballMinVel = 15;
const ballMaxVel = 150;
const ballMaxFactorVel = 2;

class Ball {

	constructor(x, y) {
			
		this.ball = game.add.sprite(x, y, 'ball');
		game.physics.enable(this.ball);
		this.ball.anchor.setTo(0.5, 0.5);
		
		this.ball.body.setCircle(20);
		this.ball.body.mass = 0.5;
		this.ball.body.bounce.y = 0.8;
		this.ball.body.collideWorldBounds = true;		
		this.ball.body.gravity.y = plyGravity;
	}

	update(platform) {

	 	game.physics.arcade.collide(this.ball, platform);
		
		for (var i=0; i < players.length; i++)		
			game.physics.arcade.overlap(this.ball, players[i].player, this.playerHit, null, this);	
			
		for (var i=0; i < goals.length; i++)		
			game.physics.arcade.collide(this.ball, goals[i].goal, this.goalHit, null, this);	
	}

	
	playerHit (ball, player) {
		// la balle part à 45degrees donc vel x = vel y
		var vel = Math.abs(player.body.velocity.x) * ballMaxFactorVel;

		if (vel < ballMinVel)
			vel = ballMinVel;
		if (vel > ballMaxVel)
			vel = ballMaxVel;

		var dir = ball.body.x - player.body.x;		

		ball.body.velocity.x += vel * Math.sign(dir);
		ball.body.velocity.y -= vel;
	}
	
	goalHit (ball, goal) {
		console.log("La balle est rentré dans un goal d'id #" + goal.id);
		
		if (goal.id == 0)
			scoreBlue++;
		else
			scoreRed++;

		game.state.start('Game');
    }
}
