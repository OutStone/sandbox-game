const konec = {konec:0}

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


    draw() {
        const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.drawImage(hab_img,this.x, this.y, this.width, this.height)
    }
}

const score = {
  score: 0,
draw() {
      const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        var dat = new Date();
        var zbcas = (Math.floor(dat.getTime() / 100) - time.sec)

        ctx.save();
        ctx.fillStyle = `rgb(0,0,0)`
        ctx.fillRect(canvas.width / 4,0, (canvas.width / 2), canvas.height / 62.5);
        if (zbcas > 300) {ctx.fillStyle = `rgb(255, ${Math.floor(255 - 0.85 * (zbcas - 300))}, 0)`;} else {ctx.fillStyle = `rgb(${Math.floor(0 + 0.85 * zbcas)}, 255, 0)`;}
        ctx.fillRect(canvas.width / 4,0, (canvas.width / 2) - ((canvas.width / 2) / 600) * zbcas, canvas.height / 62.5);
        ctx.restore();

  ctx.font = '48px pixel';
  ctx.fillText("x " + score.score,canvas.width / 2 - 10, canvas.height / 62.5 + 48);
  ctx.drawImage(coin_img,canvas.width / 2 - 10 - 60, canvas.height / 62.5 + 5, 48, 48)
}
}

 const time = {
  sec: 0,
  inc: 1,
  check(){
    var dat = new Date();
if (time.inc == 1) {
  time.sec = Math.floor(dat.getTime() / 100);
  time.inc = 0 ;
}
if (time.sec + 600 <= Math.floor(dat.getTime() / 100)) {endscreen()}}
 }

 const sq = {x: 0,y: 0,}
function square(x) {
return x * x 
}

/*========================================================================================================================================================
mince
========================================================================================================================================================*/
class Coin{
 
 constructor(){
   this.x = window.innerWidth;
   this.y = Math.floor(Math.random() *  (window.innerHeight - window.innerWidth / 80));
   this.move = Math.floor(Math.random() * window.innerWidth / 192) + window.innerWidth / 384;
   this.height = window.innerWidth / 80
   this.width = window.innerWidth / 80
}
}
var coins = []
for (let i = 0; i < 10; i++) {
    coins[i] = new Coin()
}
function cdraw(name) {
      const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        ctx.drawImage(coin_img,name.x, name.y, name.width, name.height)

    }
/*========================================================================================================================================================
bomby
========================================================================================================================================================*/
var bombs = []
for (let i = 0; i < 10; i++) {
  bombs[i] = new Coin()
}
function bdraw(name) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bomb_img,name.x, name.y, name.width, name.height)

}