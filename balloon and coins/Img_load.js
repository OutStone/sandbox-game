const bomb_img= new Image();
const hab_img = new Image();
const coin_img = new Image();
const sky_img = new Image();

var bomb_img_load = 0
var hab_img_load = 0
var sky_img_load = 0

function wait() {
    console.log("loading numr 2")
    hab_img.onload = () => {
      console.log("2 has loaded")
      wait2();
      hab_img_load = 1
    };
    if (hab_img_load == 0) {window.requestAnimationFrame(wait);}
  }
  function wait2() {
    console.log("loading numr 3")
    bomb_img.onload = () => {
      console.log("3 has loaded")
      wait3();
      bomb_img_load = 1
    };
    if (bomb_img_load == 0) {window.requestAnimationFrame(wait2);}
  }
  function wait3() {
    console.log("loading sky")
    sky_img.onload = () => {
      console.log("sky has loaded")
      draw();
      sky_img_load = 1
    };
    if (sky_img_load == 0) {window.requestAnimationFrame(wait3);}
  }
  
coin_img.onload = () => {
    console.log("it has loaded")
    wait();
  };
  coin_img.src = 'coin.png';
  hab_img.src = 'hab.png';
  bomb_img.src = 'bomb.png';
  sky_img.src = 'sky.jpg';