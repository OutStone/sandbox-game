    /*========================================================================================================================================================
ovládání
========================================================================================================================================================*/
window.addEventListener('keydown', function (e) {
    if (e.key == "w") {
          balloon.move = - 5;
  }}, false);
  window.addEventListener('keyup', function (e) {
      if (e.key == "w" || e.key == "s") {
          balloon.move = 0 ;
  }}, false);
  window.addEventListener('keydown', function (e) {
      if (e.key == "s") {
          balloon.move = 5 ;
  }}, false);
  
  
  window.addEventListener('keydown', function (e) {
  if (e.key == "Enter") {
      if (konec.konec == 1) {
      score.score = 0
      time.inc = 1
  for (let i = 0; i < coins.length; i++) {
        coins[i] = new Coin();
  }
  for (let i = 0; i < bombs.length; i++) {
        bombs[i] = new Coin();
  }
      konec.konec = 0;
      draw();
  }}}, false);
  