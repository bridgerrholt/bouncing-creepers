loadMedia = function() {
	var src = "resources/images/";


	g_game.images.push(loadSprite(src + "creeper_head.png"));
	
	g_game.images.push(loadSprite(src + "stone.png"));
};

loadSprite = function(src) {
	var image = new Image();

	image.src = src;

	return image;
};