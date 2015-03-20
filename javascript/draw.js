draw = function() {
	var w = 768;
	var h = 768;
	for (var x=0; x < Math.ceil(g_game.canvasW/w); x++) {
		for (var y=0; y < Math.ceil(g_game.canvasH/h); y++) {
			drawSprite(x*w, y*h, g_game.imageMap.stoneBackground);
		}
	}

	if (g_game.menu !== 2) {

		for (var i=0; i<g_game.boxes.length; i++) {
			g_game.boxes[i].draw();
		}

		for (var i=0; i<g_game.itemTiles.length; i++) {
			g_game.itemTiles[i].draw();
		}


		/*g_game.ctx.beginPath();
		g_game.ctx.arc(g_game.mouse.x, g_game.mouse.y,
			g_game.playerSpawnRadius, 0, 2 * Math.PI, false);
		g_game.ctx.strokeStyle = "#f0f";
		g_game.ctx.lineWidth = 3;
		g_game.ctx.stroke();*/

		g_game.ctx.font = "20px Times";
		g_game.ctx.fillText(String(g_game.mouse.x) + ', '
			+ String(g_game.mouse.y), 1, 21);
		g_game.ctx.fillText(String(g_game.boxes[0].x) + ', '
			+ String(g_game.boxes[0].y), 1, 41);
		g_game.ctx.font = "30px Times";
		g_game.ctx.fillText(String(g_game.boxes.length) + " Creepers", 1, 75);
		g_game.ctx.fillText(String(g_game.itemTileSpawnSpace), 300, 75);
		g_game.ctx.fillText("Score: " + String(g_game.score), 1, 105);
		g_game.ctx.font = "20px Times";
		g_game.ctx.fillText("you have " + String(Math.abs(g_game.pauseCounter - 4)) + " pause(s) left", 1, 130)
	}
};