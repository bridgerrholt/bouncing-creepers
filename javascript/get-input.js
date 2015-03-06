getInput = function() {
	g_game.mouse = {
		x: 500,
		y: 500,
	};

	g_game.mouseButtons = {
		lp: false,
		ld: false,
		lr: false,

		rp: false,
		rd: false,
		rr: false
	};

	g_game.keys = {
		p: [],
		d: [],
		r: []
	};

	for (var i=0; i<222; i++) {
		g_game.keys.p.push(false);
	}

	for (var i=0; i<222; i++) {
		g_game.keys.d.push(false);
	}

	for (var i=0; i<222; i++) {
		g_game.keys.r.push(false);
	}

	g_game.keyBinds = {
		pause: 32		// spacebar
	};


	$(document).on('contextmenu', 'canvas', function(e) {
		return false;
	});

	document.addEventListener('mousemove', function(evt) {
		var rect = g_game.canvas.getBoundingClientRect();
		g_game.mouse.x = evt.clientX-rect.left,
		g_game.mouse.y = evt.clientY-rect.top
		var message = 'Mouse position: ' + g_game.mouse.x + ',' + g_game.mouse.y;
		//console.log(message);
	}, false);

	g_game.canvas.onmousedown = function(e) {
		var left, right;
		left = (navigator.appName == "Microsoft Internet Explorer") ? 1 : 0;
		right = 2;

		if (e.button === left) {
			if (g_game.mouseButtons.lp === false) {
				g_game.mouseButtons.lp = true;
			} else {
				g_game.mouseButtons.lp = false;
			}
			g_game.mouseButtons.ld = true;
		} else if (e.button === right) {
			if (g_game.mouseButtons.rp === false) {
				g_game.mouseButtons.rp = true;
			} else {
				g_game.mouseButtons.rp = false;
			}
			g_game.mouseButtons.rd = true;
		}
	};

	g_game.canvas.onmouseup = function(e) {
		var left, right;
		left = (navigator.appName == "Microsoft Internet Explorer") ? 1 : 0;
		right = 2;

		if (e.button === left) {
			g_game.mouseButtons.ld = false;
		} else if (e.button === right) {
			g_game.mouseButtons.rd = false;
		}
	};
	
	$(document).keydown(function(e) {
		if (g_game.keys.d[e.which] === false) {
			g_game.keys.p[e.which] = true;
			g_game.keys.d[e.which] = true;
		}
	})
	
	$(document).keyup(function(e) {
		g_game.keys.d[e.which] = false;
		g_game.keys.r[e.which] = false;
	})

	$(window).resize(function() {
		g_game.canvas.width = window.innerWidth;
		g_game.canvas.height = window.innerHeight;
		g_game.canvasW = $("#main-canvas").width();
		g_game.canvasH = $("#main-canvas").height();
	});
};