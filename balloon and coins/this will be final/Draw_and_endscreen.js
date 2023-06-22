function draw() {

    const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
    
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, 1918, 600);
      ctx.drawImage(sky_img, 0, 0, canvas.height * 2.16919739696, canvas.height)

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
          ctx.drawImage(sky_img, 0, 0, canvas.height * 2.16919739696, canvas.height)
    ctx.font = '48px pixel';
    if (score.score == 1) {
      var dat = new Date();
      var zbcas = (Math.floor(dat.getTime() / 100) - time.sec)
      ctx.font = '48px pixel';
     ctx.fillText('In ' + Math.floor(zbcas / 10) + ' seconds you got ' + score.score + ' point.' , 600, 300);}
    else {
      var dat = new Date();
      var zbcas = (Math.floor(dat.getTime() / 100) - time.sec)
      ctx.font = '48px pixel';
      ctx.fillText('In ' + Math.floor(zbcas / 10) + ' seconds you got ' + score.score + ' points.', 600, 300);}
     // ctx.fillText("Press 'Enter' to start a new game.", 565, 350);
      
      konec.konec = 1;
            
ctx.beginPath();
ctx.rect(rect.x, rect.y, rect.width, rect.heigth); 
ctx.lineWidth = 2;
ctx.strokeStyle = '#000000'; 
ctx.stroke();
ctx.closePath();
ctx.font = '48px pixel';
ctx.fillStyle = '#000000';
ctx.fillText('Start new game', rect.x + 10, rect.y + 60);
  }