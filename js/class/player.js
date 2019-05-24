var plySpeed = 40;
var plyGravity = 1000;
var plyJumpforce = 600;
var plyJumpsMax = 2;
var plyDecel = 8;

class Player {

	constructor(x, y, id, isLobby) {

		this.isUpKeyReleased = true;
		this.numberOfJumps = 0;
		this.cursors = controls[id];

		this.player = game.add.sprite(x, y, 'player');
		this.player.anchor.setTo(0.5, 0.5);

		// on active la gravité si on est pas dans le lobby
		if (!isLobby) {
			game.physics.enable(this.player);

			this.player.body.setCircle(30);
			this.player.body.mass = 3;
			this.player.body.bounce.y = 0;
			this.player.body.collideWorldBounds = true;
			this.player.body.gravity.y = plyGravity;
			this.player.body.friction = 1;
		}

		switch (id) {
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
	}

	update() {

		// collision entre les joueurs
		game.physics.arcade.collide(this.player, platforms);

		for (var i=0; i < players.length; i++) {

			if (this.player == players[i])
				continue;

			game.physics.arcade.overlap(this.player, players[i].player);
		}

		this.player.body.velocity.x -= this.player.body.velocity.x / plyDecel;

		if (this.cursors.left.isDown)
			this.player.body.velocity.x = -plySpeed * game.time.elapsed;
		else if (this.cursors.right.isDown)
			this.player.body.velocity.x = plySpeed * game.time.elapsed;

	 	if (this.cursors.up.isDown && !this.isUpKeyReleased && this.numberOfJumps+1 < plyJumpsMax)
		{
			this.player.body.velocity.y = -plyJumpforce;
			this.numberOfJumps++;
			this.isUpKeyReleased = true;
		}

		if (this.cursors.up.isUp)
			this.isUpKeyReleased = false;

		if (this.player.body.touching.down || this.player.body.blocked.down)
			this.numberOfJumps = 0;
	}
}
