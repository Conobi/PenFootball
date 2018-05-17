const ballMinVel = 15;
const ballMaxVel = 150;
const ballMaxFactorVel = 2;

class Ball {

	constructor(x, y) {
			
		this.ball = game.add.sprite(x, y, 'ball');
		this.ball.anchor.setTo(1, 1);		

		game.physics.enable(this.ball);
		
		this.ball.body.setCircle(20);
		this.ball.body.mass = 0.5;
		this.ball.body.bounce.y = 0.5;
		this.ball.body.collideWorldBounds = true;		
		this.ball.body.gravity.y = plyGravity;
	}

	update() {

		 game.physics.arcade.collide(this.ball, platforms);
		 game.physics.arcade.collide(this.ball, toitsGoals);
		
		for (var i=0; i < players.length; i++)		
			game.physics.arcade.overlap(this.ball, players[i].player, this.playerHit, null, this);	
			
		for (var i=0; i < goals.length; i++)		
			game.physics.arcade.collide(this.ball, goals[i].goal, this.goalHit, null, this);	

		if (this.ball.body.y > game.height - 180)
			return;

		if (this.ball.body.x < 30)
			this.ball.body.velocity.x += 10;
		else if (this.ball.body.x > game.width - 80)
			this.ball.body.velocity.x -= 10;
	}

	
	playerHit (ball, player) {
		// la balle part à 45degrees donc vel x = vel y
		var vel = Math.abs(player.body.velocity.x) * ballMaxFactorVel;

		if (vel < ballMinVel)
			vel = ballMinVel;
		if (vel > ballMaxVel)
			vel = ballMaxVel;

		var dir = ball.body.x - player.body.x;
		
		if ((dir > 0 && ball.body.velocity.x < 0) || (dir < 0 && ball.body.velocity.x > 0))
			ball.body.velocity.x = 0;

		ball.body.velocity.x += vel * Math.sign(dir);
		ball.body.velocity.y = -vel * 3;
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
