class Goal 
{
    constructor(x, y, scaleX, id) 
    {			        
        this.goal = game.add.sprite(x, y, "goal");				
        game.physics.enable(this.goal);
        
        this.goal.immovable = true;
        this.goal.anchor.setTo(0, 1);
        this.goal.scale.setTo(scaleX, 1);
        this.goal.id = id;

        var toit = toitsGoals.create(x, y-this.goal.height-10, "goal_toit");
        toit.scale.setTo(scaleX, 1);  
        toit.alpha = 0;
        
        if (id == 0)
        {
			this.goal.tint = colorBlue;
        }
        else
        {
			this.goal.tint = colorRed;
        }
    }
}
