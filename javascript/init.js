init = function() {
	g_game.frameRate = 60;
	g_game.fps = g_game.frameRate;
	g_game.speed = 60/g_game.frameRate;
	g_game.lastTick = new Date;
	g_game.thisTick = new Date;

	g_game.canvas = document.getElementById("main-canvas");
	g_game.ctx = g_game.canvas.getContext("2d");
	g_game.canvas.width = window.innerWidth;
	g_game.canvas.height = window.innerHeight;
	g_game.canvasW = g_game.canvas.width;
	g_game.canvasH = g_game.canvas.height;

	g_game.spawnTimerSet = g_game.frameRate;
	g_game.playerSpawnRadius = 200;

	g_game.menu = 2;

	g_game.itemTileEraseTimer = 300;

	g_game.itemTileSpawnChance = 5;
	g_game.itemTileSpawnSpaceMax = 6;

	g_game.pauseCounter = 0
	g_game.canPause = true

	g_game.scoreTimerMax = g_game.frameRate;
	g_game.scoreTimer = g_game.scoreTimerMax;
	g_game.scoreMax = 100;


	getInput();
	loadMedia();
	//reset();

	if (typeof g_game.gameLoop != "undefined") clearInterval(g_game.gameLoop);
	g_game.gameLoop = setInterval(tick, 1000/g_game.frameRate);
}



