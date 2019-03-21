const PLAYER_GRAVITY = 1000;

const PLAYER_SPEED = 40;
const PLAYER_DECCEL = 8;

const PLAYER_JUMP_FORCE = 600;
const PLAYER_MAX_JUMPS = 2;

const PLAYER_SUPERPOWER_SPEED = 1.5;
const PLAYER_SUPERPOWER_FORCE = 200;
const PLAYER_SUPERPOWER_RADIUS = 300;

class Player 
{
	constructor(x, y, id, isLobby) 
	{
		this.isUpKeyReleased = true;
		this.isDownKeyReleased = true;
		this.numberOfJumps = 0;
		this.isSuperPowerEnabled = false;
		this.cursors = controls[id];

		this.player = game.add.sprite(x, y, 'player');
		this.player.anchor.setTo(0.5, 0.5);

		// on active la gravité si on est pas dans le lobby
		if (!isLobby) 
		{
			game.physics.enable(this.player);

			this.player.body.setCircle(30);
			this.player.body.mass = 3;
			this.player.body.bounce.y = 0;
			this.player.body.collideWorldBounds = true;
			this.player.body.gravity.y = PLAYER_GRAVITY;
			this.player.body.friction = 1;
		}

		switch (id) 
		{
			case 0:
				this.player.tint = colorBlue;
				break;

			case 1:
				this.player.tint = colorRed;
				break;

			case 2:
				this.player.tint = colorSecondBlue;
				break;

			case 3:
				this.player.tint = colorSecondRed;
				break;
		}

		// create particle system
		this.emitter = game.add.emitter(game.world.centerX, 500, 200);

		this.emitter.makeParticles('player');
		
		this.emitter.setRotation(0, 0);
		this.emitter.setAlpha(0, 0.8, 100);
		this.emitter.setScale(1, 1);
		this.emitter.setXSpeed(0);
		this.emitter.setYSpeed(0);		
		this.emitter.gravity = 0;	
		
		this.emitter.start(false, 100, 3);		
		this.emitter.on = false;
	}

	Update(game) 
	{
		// collision entre les joueurs
		this.CheckCollisions();

		// player deceleration
		this.player.body.velocity.x -= this.player.body.velocity.x / PLAYER_DECCEL * game.time.elapsed;

		// manage inputs
		this.ManageInput(game);

		// reset jumps
		if (this.CheckIfGrounded())
		{
			this.numberOfJumps = 0;
		}		

		// update emitter position
		if (this.CheckIfGrounded())
		{
			this.emitter.on = false;
		}

		this.emitter.x = this.player.body.x + this.player.body.width * 0.5;
		this.emitter.y = this.player.body.y + this.player.body.height * 0.5;
	}

	CheckCollisions()
	{
		game.physics.arcade.collide(this.player, platforms);

		for (var i = 0; i < players.length; i++) 
		{
			if (this.player == players[i])
				continue;

			game.physics.arcade.overlap(this.player, players[i].player);
		}
	}

	ManageInput(game)
	{
		if (this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -PLAYER_SPEED * game.time.elapsed;
		}
		else if (this.cursors.right.isDown)
		{
			this.player.body.velocity.x = PLAYER_SPEED * game.time.elapsed;
		}

		if (this.cursors.up.isDown && this.isUpKeyReleased) 
		{
			this.Jump();
			this.isUpKeyReleased = false;
		}

		if (this.cursors.down.isDown)
		{
			this.SuperPower(game);
			this.isDownKeyReleased = false;
		}

		// check if the UP / DOWN are released
		if (this.cursors.up.isUp)
		{
			this.isUpKeyReleased = true;
		}

		if (this.cursors.down.isUp)
		{
			this.isDownKeyReleased = true;
		}
	}

	/**
	 * Acceleration SuperPower
	 */
	SuperPower(game)
	{		
		if (!this.CheckIfGrounded())
		{
			this.player.body.velocity.y = PLAYER_GRAVITY * PLAYER_SUPERPOWER_SPEED;

			// particle system
			this.emitter.on = true;
			this.isSuperPowerEnabled = true;
		}

		if (this.CheckIfGrounded() && this.isSuperPowerEnabled)
		{
			game.AddForce(this, PLAYER_SUPERPOWER_RADIUS);
			this.isSuperPowerEnabled = false;
		}
	}

	/**
	 * Fais sauter le joueur.
	 */
	Jump()
	{
		if (this.numberOfJumps + 1 < PLAYER_MAX_JUMPS)
		{
			this.player.body.velocity.y = -PLAYER_JUMP_FORCE;
			this.numberOfJumps++;
		}
	}

	/**
	 * @returns true if the player is grounded
	 */
	CheckIfGrounded()
	{		
		if (this.player.body.touching.down || this.player.body.blocked.down)
		{
			return true;
		}
		else
		{			
			return false;
		}
	}
}