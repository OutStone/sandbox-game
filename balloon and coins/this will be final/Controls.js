    /*========================================================================================================================================================
ovládání
========================================================================================================================================================*/
var up = "w"
var down = "s"
var change_key = 0


window.addEventListener('keydown', function (e) {
    if (e.key == up) {
          balloon.move = - window.innerHeight/187.5;
          
  }}, false);
  window.addEventListener('keydown', function (e) {
      if (e.key == down || e.key == "s") {
          balloon.move = 0 ;
          
  }}, false);
  window.addEventListener('keydown', function (e) {
      if (e.key == down) {
          balloon.move = window.innerHeight/187.5 ;
  }}, false);
  
  
  window.addEventListener('keydown', function (e) {
  if (e.key == "Enter") {
    
      //  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
      //  audio.play();
      
      if (konec.konec == 1) {
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
  }}}, false);
  