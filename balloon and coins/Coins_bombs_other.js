const konec = {konec:0}
const balloon = {
    x: 28,
    y: 115,
    move: 0,
    width: 44,
    height: 70,

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
        var zbcas = 59 - (Math.floor(dat.getTime() / 1000) - time.sec)
  ctx.font = '48px serif';
  ctx.fillText('your score is: ' + score.score , 10, 50);
  ctx.fillText('time left: ' + zbcas , 10, 100);
}
}

 const time = {
  sec: 0,
  inc: 1,
  check(){
    var dat = new Date();
if (time.inc == 1) {
  time.sec = Math.floor(dat.getTime() / 1000);
  time.inc = 0 ;
}
if (time.sec + 60 <= Math.floor(dat.getTime() / 1000)) {endscreen()}}
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
   this.x = 1900;
   this.y = Math.floor(Math.random() * 588);
   this.move = Math.floor(Math.random() * 10) + 5;
   this.height = 24
   this.width = 24
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