//--------------------------------------images
const bomb_img= new Image();
const hab_img = new Image();
const coin_img = new Image();
const sky_img = new Image();
const fr_begin_img = new Image();
const fr_middle_img = new Image();
const fr_end_img = new Image();
const heart_img = new Image();
var img_and_sounds = 0

  coin_img.src = 'coin.png';
  hab_img.src = 'hab.png';
  bomb_img.src = 'bomb.png';
  sky_img.src = 'sky.jpg';
  fr_begin_img.src = 'fr_begin.png';
  fr_middle_img.src = 'fr_middle.png';
  fr_end_img.src = 'fr_end.png';
  heart_img.src = 'heart.png';

  coin_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  hab_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  bomb_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  sky_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  fr_begin_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  fr_middle_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  fr_end_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);
  heart_img.addEventListener('load', () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  }, false);

  //--------------------------------------sounds
 /* const coin_collect = new Audio('coin_collect.wav')
  coin_collect.addEventListener("canplaythrough", () => {img_and_sounds ++
    if (img_and_sounds > 7) {draw();}
  });*/