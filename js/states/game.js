// ici on pourrait rajouter une barre de chargement
var Game = {
    
    // ici on charge toutes les ressources pour l'état actuel (images, sons, etc...)
    preload: function () {
		
		game.stage.backgroundColor = '#182d3b';      		
		
		var platforms = game.add.group();
		var ground = platforms.create(0, 0, "ground");
    },   
    
    create: function () { 
		
    }
    
};
