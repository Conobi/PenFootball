var Menu = {

    create: function () {
        
        game.stage.backgroundColor = constBG;
        
        // LE TITRE		
		var text = game.add.text(game.world.centerX, convertY(12.0), "PenFootball", styleFat);
		text.anchor.setTo(.5,.5);
		text.resolution = 3;
        
        // 1VS1 Button
        var posY = 45;

        buttonTwo = game.add.button(game.world.centerX, convertY(posY), 'ground', loadGameTwo, this, 2, 1, 0);
        buttonTwo.alpha = 0.3;
        buttonTwo.anchor.setTo(.5,.5);
		buttonTwo.width = convertX(80);
        buttonTwo.height = convertY(25);
        buttonTwo.inputEnabled = true;
        
        players.push(new Player(width * 0.3, convertY(posY), 0, true));
        players.push(new Player(width * 0.7, convertY(posY), 1, true));
        
        var text = game.add.text(game.world.centerX, convertY(posY), "VS", style);
		text.anchor.setTo(.5,.5);
		text.resolution = 3;
        
        // 2VS2 Button
        buttonFour = game.add.button(game.world.centerX, convertY(80), 'ground', loadGameFour, this, 2, 1, 0);
        buttonFour.alpha = 0.3;
        buttonFour.anchor.setTo(.5,.5);
		buttonFour.width = convertX(80);
        buttonFour.height = convertY(25);
        buttonFour.inputEnabled = true;
        
        
        players.push(new Player(width * 0.3, convertY(80), 0, true));
        players.push(new Player(width * 0.7, convertY(80), 1, true));                
		players.push(new Player(width * 0.2, convertY(80), 2, true));
        players.push(new Player(width * 0.8, convertY(80), 3, true));
        
        var text = game.add.text(game.world.centerX, convertY(80), "VS", style);
		text.anchor.setTo(.5,.5);
		text.resolution = 3;
    },      
    
    update: function() {
        if (buttonFour.input.pointerOver())
            buttonFour.alpha = 0.8;
        else
            buttonFour.alpha = 0.5;

        if (buttonTwo.input.pointerOver())
            buttonTwo.alpha = 0.8;
        else
            buttonTwo.alpha = 0.5;
    }
};