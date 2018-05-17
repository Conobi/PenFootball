// ici on pourrait rajouter une barre de chargement
var Preload = {
    
    // ici on charge toutes les ressources pour l'état actuel (images, sons, etc...)
    preload: function () {
		
		game.stage.backgroundColor = constBG;      		
		
		// on créer la barre de chargement
		console.log("In preload state");
		
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, "logo");
		logo.anchor.setTo(0.5);				
		
		var bgPreloadBar = game.add.sprite(game.world.centerX, convertY(85), "bg_preload_bar");		
		bgPreloadBar.anchor.setTo(0.5);				
		bgPreloadBar.width = width - convertX(5);		
		bgPreloadBar.height = convertY(10);
		
		var preloadBar = game.add.sprite(game.world.centerX, convertY(85), "preload_bar");		
		preloadBar.anchor.setTo(0.5);				
		preloadBar.width = width - convertX(5);		
		preloadBar.height = convertY(10);
		game.load.setPreloadSprite(preloadBar);
		
		style = {font: convertX(5)+"px pixellari", fill: "#000000"};
		styleFat = {font: convertX(8)+"px pixellari", fill: "#000000"};

		// ====
		// CHARGEMENT DES SCRIPTS   
		
		// ====
		// CHARGEMENT DES ASSETS
		game.load.image("ground", "assets/img/ground.png"); 
		game.load.image("player", "assets/img/player.png"); 
		game.load.image("ball", "assets/img/ball.png"); 
		game.load.image("goal", "assets/img/goal.png");
		game.load.image("goal_toit", "assets/img/goal_toit.png");
    },   
    
    create: function () { 
		game.state.add('Menu', Menu);
		game.state.start('Menu');

		controls.push({
            up: game.input.keyboard.addKey(Phaser.Keyboard.Z),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.Q),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        });
        
        controls.push({
            up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
		});
		
		controls.push({
            up: game.input.keyboard.addKey(Phaser.Keyboard.O),
            down: game.input.keyboard.addKey(Phaser.Keyboard.L),
            left: game.input.keyboard.addKey(Phaser.Keyboard.K),
            right: game.input.keyboard.addKey(Phaser.Keyboard.M),
        });
        
        controls.push({
            up: game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8),
            down: game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5),
            left: game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4),
            right: game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6),
        });
    }
    
};
