var Game = {

	create: function () 
	{
		goals = [];
		players = [];
		platforms = [];
		console.log("State 'game' loading");

		game.stage.backgroundColor = constBG;
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// ===
		// On créer les plateformes
		platforms = game.add.group();
		platforms.enableBody = true;

		toitsGoals = game.add.group();
		toitsGoals.enableBody = true;

		var ground = platforms.create(0, GetRelativePositionY(100 - 8), "ground");
		ground.width = game.width;
		ground.height = GetRelativePositionY(8);
		ground.tint = colorGround;

		// ===
		// On créer les acteurs (ball, players, goals)
		ball = new Ball(game.width * 0.5, GetRelativePositionY(70));

		players.push(new Player(game.width * 0.3, GetRelativePositionY(75), 0));
		players.push(new Player(game.width * 0.7, GetRelativePositionY(75), 1));

		if (numberOfPlayers > 2) 
		{
			players.push(new Player(game.width * 0.2, GetRelativePositionY(75), 2));
			players.push(new Player(game.width * 0.8, GetRelativePositionY(75), 3));
		}

		goals.push(new Goal(0, GetRelativePositionY(92), 1, 0));
		goals.push(new Goal(game.width, GetRelativePositionY(92), -1, 1));

		// ===
		// affiche le score
		var text = game.add.text(game.world.centerX, GetRelativePositionY(19.0), scoreRed + " - " + scoreBlue, style);
		text.anchor.setTo(.5, .5);
		text.resolution = 3;

		platforms.setAll('body.immovable', true);
		toitsGoals.setAll('body.immovable', true);
	},

	update: function () 
	{
		for (var i = 0; i < players.length; i++)
		{
			players[i].Update(this);
		}

		ball.Update();
	},

	AddForce: function (emitter, radius)
	{
		console.log("AddForce");

		// addforce with the other players
		/*for (var i = 0; i < players.length; i++)
		{
			if (players[i] == emitter)
				continue;

			var distance = this.GetDistance(players[i].player.body.x, players[i].player.body.y, emitter.player.body.x, emitter.player.body.y);	
			
			if (distance < radius)
			{		
				var directionX = players[i].player.body.x - emitter.player.body.x;
				var directionY = players[i].player.body.y - emitter.player.body.y;

				// add velocity
				players[i].player.body.velocity.x = -directionX * PLAYER_SUPERPOWER_FORCE;
				players[i].player.body.velocity.y = -directionY * PLAYER_SUPERPOWER_FORCE;
			}
		}//*/

		// addforce to the ball
		var distance = this.GetDistance(ball.ball.body.x, ball.ball.body.y, emitter.player.body.x, emitter.player.body.y);	
			
		if (distance < radius)
		{		
			var directionX = ball.ball.body.x - emitter.player.body.x;
			var directionY = ball.ball.body.y - emitter.player.body.y;

			// add velocity
			ball.ball.body.velocity.x = directionX * PLAYER_SUPERPOWER_FORCE * 0.03;
			ball.ball.body.velocity.y = directionY * PLAYER_SUPERPOWER_FORCE * 0.03;
		}
	},

	GetDistance: function (x1, y1, x2, y2)
	{
		var a = x1 - x2;
		var b = y1 - y2;

		return Math.sqrt( a*a + b*b );
	}
};