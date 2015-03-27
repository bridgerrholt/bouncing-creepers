loadMedia = function() {
	var src = "resources/images/";

	g_game.cursorMap = {
		playerLeatherHelmet: src+"player-leather-helmet.gif",
		playerIronHelmet: src+"player-iron-helmet.gif",
		playerDiamondHelmet: src+"player-diamond-helmet.gif"
	};

	g_game.images.push(loadSprite("creeperHead",
		src + "creeper_head.png"));
	
	g_game.images.push(loadSprite("stoneBackground",
		src + "stone.png"));

	g_game.images.push(loadSprite("diamondHelmetItem",
		src + "diamond_helmet_item.png"));

	g_game.images.push(loadSprite("ironHelmetItem",
		src + "iron_helmet_item.png"));

	g_game.images.push(loadSprite("leatherHelmetItem",
		src + "leather_helmet_item.png"));

};

loadSprite = function(name, src) {
	var image = new Image();

	image.src = src;

	g_game.imageMap[name] = g_game.images.length;

	return image;
};