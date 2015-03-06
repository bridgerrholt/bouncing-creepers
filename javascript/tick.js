tick = function() {

	if (g_game.menu === 0) {
		var dead = false;

		if (g_game.boxTimer > 0) {
			g_game.boxTimer--;
		} else {
			g_game.boxes.push(new Box());
			g_game.boxMaxSpeed += 0.2;
			g_game.boxTimer = g_game.boxTimerSet;
		}

		for (var i=0; i<g_game.boxes.length; i++) {
			if (!g_game.boxes[i].update()) {
				dead = true;
				break;
			}
		}

		if (g_game.scoreTimer === 0) {
			console.log("AY");
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