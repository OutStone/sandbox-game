function draw() {

    const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
    
 /* ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;*/

      ctx.clearRect(0, 0, 1918, 600);
      ctx.drawImage(sky_img, 0, -276, 1900, 876)

for (let i = 0; i < coins.length; i++) {cdraw(coins[i]);}
for (let i = 0; i < bombs.length; i++) {bdraw(bombs[i]);}

      balloon.draw();
      score.draw();
      time.check();
      conditions();
    }

function endscreen() {
    const canvas = document.getElementById('canvas');
          const ctx = canvas.getContext('2d');

          ctx.clearRect(0, 0, 1918, 600);
          ctx.drawImage(sky_img, 0, -276, 1900, 876)
    ctx.font = '48px serif';
    if (score.score == 1) {
      var dat = new Date();
      var zbcas = (Math.floor(dat.getTime() / 1000) - time.sec)
     ctx.fillText('In ' + zbcas + ' seconds you got ' + score.score + ' point.' , 600, 300);}
    else {
      var dat = new Date();
      var zbcas = (Math.floor(dat.getTime() / 1000) - time.sec)
      ctx.fillText('In ' + zbcas + ' seconds you got ' + score.score + ' points.' , 600, 300);}
      ctx.fillText("Press 'Enter' to start a new game.", 565, 350);
      konec.konec = 1;
  }