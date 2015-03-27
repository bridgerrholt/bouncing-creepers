tick = function() {
	console.log(g_game.spawnTimer);
	if (g_game.menu === 0) {
		var dead = false;

		if (g_game.spawnTimer > 0) {
			g_game.spawnTimer--;
		} else {
			g_game.boxes.push(new Box());
			g_game.boxMaxSpeed += 0.2;
			g_game.spawnTimer = g_game.spawnTimerSet;

			if (g_game.itemTileSpawnSpace === 0) {
				if (randRange(0, g_game.itemTileSpawnChance) === 0) {
					g_game.itemTiles.push(
						new ItemTile(randRange(1, 4)));
					g_game.itemTileSpawnSpace = g_game.itemTileSpawnSpaceMax;
					console.log(g_game.itemTiles);
				}
			} else {
				g_game.itemTileSpawnSpace--;
			}
		}

		for (var i=0; i<g_game.boxes.length; i++) {
			if (!g_game.boxes[i].update()) {
				dead = true;
				break;
			}
		}

		for (var i=0; i<g_game.itemTiles.length; i++) {
			if (!g_game.itemTiles[i].update()) {
				g_game.itemTiles.splice(i, 1);
			}
		}

		if (g_game.scoreTimer === 0) {
			scoreUpdater();
			g_game.scoreTimer = g_game.scoreTimerMax;
		} else {
			g_game.scoreTimer--;
		}

		if (dead) {
			console.log(g_game.boxes.length)
			reset();
		}

		if (g_game.keys.p[g_game.keyBinds.pause] && g_game.canPause === true) {
			g_game.menu = 1;
		}
	} else if (g_game.menu === 1) {
		if (g_game.keys.p[g_game.keyBinds.pause]) {
			g_game.pauseCounter += 1
			if (Math.abs(g_game.pauseCounter - 4) === 0) {
				g_game.canPause = false
			}
			g_game.menu = 0;
		}
	} else if (g_game.menu === 2) {
		if (g_game.keys.p[g_game.keyBinds.pause]) {
			g_game.menu = 0;
			reset();
		}
	}

	draw();


	for (var i=0; i<222; i++) {
		g_game.keys.p[i] = false;
	}

	for (var i=0; i<222; i++) {
		g_game.keys.r[i] = false;
	}
};