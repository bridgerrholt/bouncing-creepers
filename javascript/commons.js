var g_game = {};

g_game.frameRate;
g_game.fps;
g_game.speed;
g_game.lastTick;
g_game.thisTick;

g_game.canvas;
g_game.ctx;
g_game.canvasW;
g_game.canvasH;

g_game.mouse = {};
g_game.mouseButtons = {};
g_game.keys = {};
g_game.keyBinds = {};

g_game.gameLoop;

g_game.images = [];
g_game.imageMap = {};

g_game.spawnTimer;
g_game.spawnTimerSet;

g_game.boxes = [];
g_game.boxMaxSpeed;

g_game.itemTiles = [];
g_game.itemTileEraseTimer;

g_game.itemTileSpawnChance;
g_game.itemTileSpawnSpace;
g_game.itemTileSpawnSpaceMax;

g_game.playerSpawnRadius;

g_game.menu;

g_game.pauseCounter;
g_game.canPause;

g_game.score;
g_game.scoreTimer;
g_game.scoreTimerMax;
g_game.scoreMax;


var init = function(){};
var getInput = function(){};
var loadMedia = function(){};
var reset = function(){};
var tick = function(){};
var scoreUpdater = function(){};
var draw = function(){};

var drawSprite = function(){};

var Box = function(){};
var ItemTile = function(){};

var randRangeExt = function(){};
var randRange = function(){};
var disDir = function(){};
var pointDir = function(){};
var pointDis = function(){};