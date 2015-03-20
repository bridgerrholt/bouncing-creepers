loadMedia = function() {
	var src = "resources/images/";


	g_game.images.push(loadSprite("creeperHead",
		src + "creeper_head.png"));
	
	g_game.images.push(loadSprite("stoneBackground",
		src + "stone.png"));

	g_game.images.push(loadSprite("diamondHelmetItem",
		src + "diamond_helmet_item.png"));
	g_game.images.push(loadSprite("diamondHelmet",
		src + "diamond_helmet.png"));

	g_game.images.push(loadSprite("ironHelmetItem",
		src + "iron_helmet_item.png"));
	/*g_game.images.push(loadSprite("ironHelmet",
		src + "iron_helmet.png"));*/

	g_game.images.push(loadSprite("leatherHelmetItem",
		src + "leather_helmet_item.png"))
	/*g_game.images.push(loadSprite("leatherHelmet",
		src + "leather_helmet.png"));*/
};

loadSprite = function(name, src) {
	var image = new Image();

	image.src = src;

	g_game.imageMap[name] = g_game.images.length;

	return image;
};