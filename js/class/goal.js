class Goal {

	constructor(x, y, scaleX, id) {
			        
        this.goal = game.add.sprite(x, y, "goal");				
        game.physics.enable(this.goal);
        
        this.goal.immovable = true;
        this.goal.anchor.setTo(0, 0);
        this.goal.scale.setTo(scaleX, 1);
        this.goal.id = id;

        var ground = platforms.create(x, y-20, "goal_toit");
        ground.scale.setTo(scaleX, 1);        

        if (id == 0)
			this.goal.tint = colorBlue;
		else
			this.goal.tint = colorRed;
    }
}
