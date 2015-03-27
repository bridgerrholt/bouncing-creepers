reset = function() {
	g_game.spawnTimer = g_game.spawnTimerSet;

	g_game.boxMaxSpeed = 5;
	g_game.boxes = [];

	g_game.itemTiles = [];
	g_game.itemTileSpawnSpace = g_game.itemTileSpawnSpaceMax;

	g_game.lastScore = g_game.score;

	g_game.score = 0;

	g_game.pauseCounter = 0
	g_game.canPause = true

	g_game.playerHelmet = 0;
	g_game.playerHelmetImage = 0;

	if (g_game.lastScore > g_game.bestScore) {
		g_game.bestScore = g_game.lastScore;
	}

	for (var i = 0; i < 1; i++) {
		g_game.boxes.push(new Box());
	}
};