reset = function() {
	g_game.spawnTimer = g_game.spawnTimerSet;

	g_game.boxMaxSpeed = 5;
	g_game.boxes = [];

	g_game.itemTiles = [];
	g_game.itemTileSpawnSpace = g_game.itemTileSpawnSpaceMax;

	g_game.score = 0;

	g_game.pauseCounter = 0
	g_game.canPause = true

	for (var i = 0; i < 1; i++) {
		g_game.boxes.push(new Box());
	}
};