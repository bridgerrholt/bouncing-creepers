scoreUpdater = function() {
	var add = 0;
	var addMax = Math.round(g_game.scoreMax/2);
	var xMid = Math.floor(g_game.canvasW/2);
	var yMid = Math.floor(g_game.canvasH/2);
	var x = xMid-Math.abs(g_game.mouse.x-xMid);
	var y = yMid-Math.abs(g_game.mouse.y-yMid);
	var xAdd, yAdd;

	xAdd = Math.round((x*addMax/xMid)*0.1)*10;
	yAdd = Math.round((y*addMax/yMid)*0.1)*10;

	console.log(addMax);
	console.log(xMid);
	console.log(xAdd);
	console.log(yAdd);

	g_game.score += xAdd+yAdd;
};