// ici on pourrait rajouter une barre de chargement
var Preload = {
    
    // ici on charge toutes les ressources pour l'état actuel (images, sons, etc...)
    preload: function () {
		
		game.stage.backgroundColor = '#182d3b';      		
		
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
		
		// ====
		// CHARGEMENT DES SCRIPTS   
		
		// STATES
		game.load.script("main_menu", "js/states/game.js");
		
		// CLASSES
		game.load.script("player", "js/class/player.js");
		
		// ====
		// CHARGEMENT DES ASSETS
		game.load.image("ground", "assets/img/ground.png"); 
		game.load.image("player", "assets/img/player.png"); 
    },   
    
    create: function () { 
		game.state.add('Game', Game);
		game.state.start('Game');

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
    }
    
};
