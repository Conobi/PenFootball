
var Game = {
        
    create: function () { 
			
		game.stage.backgroundColor = '#182d3b';
		game.physics.startSystem(Phaser.Physics.ARCADE);
	
		platforms = game.add.group();
		platforms.enableBody = true;

		var ground = platforms.create(0, convertY(100-3.52), "ground");
		ground.width = convertX(100);
		ground.height = convertY(3.52);

		platforms.setAll('body.immovable', true);
		
		players.push(new Player(width * Math.random(), convertY(82.8), controls[0]));
		players.push(new Player(width * Math.random(), convertY(82.8), controls[1]));
    },
    
	update: function () {
		for (var i=0; i < players.length; i++)
			players[i].update(platforms);
	},
};
