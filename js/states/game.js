
var Game = {
        
    create: function () { 
			
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

		var ground = platforms.create(0, convertY(100-8), "ground");
		ground.width = convertX(100);
		ground.height = convertY(8);
		ground.tint = colorGround;
	
		// ===
		// On créer les acteurs (ball, players, goals)
		ball = new Ball(width * 0.5, convertY(70));

		players.push(new Player(width * 0.2, convertY(75), 0));
		players.push(new Player(width * 0.8, convertY(75), 1));
		
		goals.push(new Goal(0, convertY(78.5), 1, 0));
		goals.push(new Goal(game.width, convertY(78.5), -1, 1));

		// ===
		// affiche le score
		var style = {font: convertX(5)+"px pixellari", fill: "#ffffff"};
		var text = game.add.text(game.world.centerX, convertY(19.0), scoreBlue + " - " + scoreRed, style);
		text.anchor.setTo(.5,.5);
		text.resolution = 3;

		platforms.setAll('body.immovable', true);
		toitsGoals.setAll('body.immovable', true);
    },
    
	update: function () {
		for (var i=0; i < players.length; i++)
			players[i].update();

		ball.update();
	},

	render: function () {
		/*for (var i=0; i < players.length; i++)
			game.debug.body(players[i].player);//*/

		//game.debug.spriteInfo(ball.ball, 32, 32);
	},
};
