
var Game = {
        
    create: function () { 
			
		goals = [];
		players = [];
		platforms = [];
		console.log("State 'game' loading");

		game.stage.backgroundColor = '#182d3b';
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
		// ===
		// On créer les plateformes
		platforms = game.add.group();
		platforms.enableBody = true;

		var ground = platforms.create(0, convertY(100-3.52), "ground");
		ground.width = convertX(100);
		ground.height = convertY(3.52);

		platforms.setAll('body.immovable', true);
		
		// ===
		// On créer les acteurs (ball, players, goals)
		ball = new Ball(width * 0.5, convertY(60));

		players.push(new Player(width * 0.2, convertY(82.8), 0));
		players.push(new Player(width * 0.8, convertY(82.8), 1));
		
		goals.push(new Goal(0, convertY(82.8), 1, 0));
		goals.push(new Goal(game.width, convertY(82.8), -1, 1));

		// ===
		// affiche le score
		var style = {font: convertX(5)+"px pixellari", fill: "#ffffff"};
		var text = game.add.text(game.world.centerX, convertY(19.0), scoreBlue + " - " + scoreRed, style);
		text.anchor.setTo(.5,.5);
		text.resolution = 3;
    },
    
	update: function () {
		for (var i=0; i < players.length; i++)
			players[i].update(platforms);

		ball.update(platforms);
	},
};
