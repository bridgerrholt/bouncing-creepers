Box = function() {
	this.place();
	this.image = 0;
	/*this.w = g_game.images[this.image].width;
	this.h = g_game.images[this.image].height;

	console.log(g_game.images[0].width);
	console.log(this.w);
	console.log(this.h);*/

	this.w = 32;
	this.h = 32;

	this.baseSpeed = randRangeExt(3, g_game.boxMaxSpeed);
	this.speed = [this.baseSpeed, this.baseSpeed];

	if (randRange(0, 2) === 1) {
		this.speed[0] = -this.speed[0];
	}

	if (randRange(0, 2) === 1) {
		this.speed[1] = -this.speed[1];
	}

};

Box.prototype.place = function() {
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

Box.prototype.update = function() {
	this.x += this.speed[0];
	this.y += this.speed[1];

	return this.collision();
};

Box.prototype.collision = function() {
	if (this.x < 0) {
		this.x = Math.abs(this.x);
		this.speed[0] = -this.speed[0];
	} else if (this.x+this.w >= g_game.canvasW) {
		this.x = g_game.canvasW - (this.x+this.w-g_game.canvasW) - this.w;
		this.speed[0] = -this.speed[0];
	}

	if (this.y < 0) {
		this.y = Math.abs(this.y);
		this.speed[1] = -this.speed[1];
	} else if (this.y+this.h >= g_game.canvasH) {
		this.y = g_game.canvasH - (this.y+this.h-g_game.canvasH) - this.h;
		this.speed[1] = -this.speed[1];
	}
	
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

Box.prototype.draw = function() {
	drawSprite(this.x, this.y, this.image);
};
