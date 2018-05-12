
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
		

		ball = new Ball(width * 0.5, convertY(60));

		players.push(new Player(width * 0.2, convertY(82.8), controls[0], 0x0088bf));
		players.push(new Player(width * 0.8, convertY(82.8), controls[1], 0xc40233));
    },
    
	update: function () {
		for (var i=0; i < players.length; i++)
			players[i].update(platforms);

		ball.update(platforms);
	},
};
