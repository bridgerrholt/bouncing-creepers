ItemTile = function(image) {
	this.x = 0;
	this.y = 0;
	this.place();

	this.index = g_game.itemTiles[g_game.itemTiles.length];

	this.image = image;

	this.w = 32;
	this.h = 32;

	this.eraseTimer = g_game.itemTileEraseTimer;

};

ItemTile.prototype.place = function() {
	this.x = randRangeExt(0, g_game.canvasW);
	this.y = randRangeExt(0, g_game.canvasH);
	var tries = 1000;

	while (tries > 0 &&
		pointDis(this.x, this.y, g_game.mouse.x, g_game.mouse.y) <
		g_game.playerSpawnRadius+46) {
			this.x = randRangeExt(0, g_game.canvasW);
			this.y = randRangeExt(0, g_game.canvasH);
			tries--;
	}

	if (pointDis(this.x, this.y, g_game.mouse.x, g_game.mouse.y) <
		g_game.playerSpawnRadius+46) {
			var pos = disDir(g_game.playerSpawnRadius+46, pointDir(
				g_game.mouse.x, g_game.mouse.y, this.x, this.y));
			this.x = pos.x;
			this.y = pos.y;

			if (this.x < 0)
				this.x = 0;

			if (this.y < 0)
				this.y = 0;

			if (this.x+this.w >= g_game.canvasW)
				this.x = g_game.canvasW-1-this.w;

			if (this.y+this.h >= g_game.canvasH)
				this.y = g_game.canvasH-1-this.h;
	}

};

ItemTile.prototype.update = function() {
	if (this.eraseTimer === 0) {
		return false;
	} else {
		--this.eraseTimer;
	}

	this.collision();
	return true;
};

ItemTile.prototype.collision = function() {
	var mouse_rect = {
		x1: g_game.mouse.x-15,
		y1: g_game.mouse.y-15,
		x2: g_game.mouse.x-15+32,
		y2: g_game.mouse.y-15+32
	};

	if (this.x < mouse_rect.x2 && this.x+this.w > mouse_rect.x1 &&
		this.y < mouse_rect.y2 && this.y+this.h > mouse_rect.y1) {
			return false;
	}

	return true;
};

ItemTile.prototype.draw = function() {
	drawSprite(this.x, this.y, this.image);
};