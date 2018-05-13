class Goal {

	constructor(x, y, scaleX, id) {
			        
        this.goal = game.add.sprite(x, y, "goal");				
        game.physics.enable(this.goal);
        
        this.goal.immovable = true;
        //this.goal.anchor.setTo(anchorX, 0);
        this.goal.scale.setTo(scaleX, 1);
        this.goal.id = id;

        if (id == 0)
			this.goal.tint = 0x0088bf;
		else
			this.goal.tint = 0xc40233;
    }
}
