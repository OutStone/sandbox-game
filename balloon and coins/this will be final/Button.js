function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rect = {
	x:(window.innerWidth / 2) - 155,
	y:500,
	width:360,
	heigth:100
};

canvas.addEventListener('click', function(evt) {
	if (konec.konec == 1) {
	var mousePos = getMousePos(canvas, evt);

	if (isInside(mousePos,rect)) {
		score.score = 0
      time.inc = 1
  for (let i = 0; i < coins.length; i++) {
        coins[i] = new Coin();
  }
  for (let i = 0; i < bombs.length; i++) {
        bombs[i] = new Coin();
  }
  var balloon = {
    x: window.innerWidth/64,
    y: window.innerHeight/2,
    move: 0,
    height: window.innerWidth/27.5,
    width: (window.innerWidth/27.5 / 30) * 19,
    bfr_bsk_width: (window.innerWidth/27.5 / 30) * 5,
    bsk_width: (window.innerWidth/27.5 / 30) * 9,
    bsk_height: (window.innerWidth/27.5 / 30) * 9,
    ball_height: (window.innerWidth/27.5 / 30) * 21,
  }
      konec.konec = 0;
      draw();

		alert('clicked inside rect');
    }else{
        alert('clicked outside rect');
    }	}
}, false);
