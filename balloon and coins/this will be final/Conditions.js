function conditions() {
    if (balloon.y + balloon.height > canvas.height) {
        balloon.y = canvas.height - balloon.height;
    }
    if (balloon.y < 0) {
        balloon.y = 0;
    }
    
    //---------------------------------------------------coiny
    
    for (let i = 0; i < coins.length; i++) {
     if (coins[i].x > balloon.x + balloon.width) {
      coins[i].x -= coins[i].move;
      continue;}
    
    //coin vyletěl z pole -> generuji nový coin
      if (coins[i].x < 0 - coins[i].width) {
        coins[i] = new Coin();
        continue;}
    
     if (balloon.x + balloon.bfr_bsk_width + balloon.bsk_width + (coins[i].width / 2) > coins[i].x
    && balloon.x + balloon.bfr_bsk_width - (coins[i].width / 2) < coins[i].x) {
      if (balloon.y + balloon.ball_height < coins[i].y
    && balloon.y + balloon.ball_height + balloon.bsk_height > coins[i].y) {
      score.score += 1;
      coins[i] = new Coin();
      continue;}}
      
    if (balloon.x + balloon.bfr_bsk_width + balloon.bsk_width> coins[i].x
    && balloon.x + balloon.bfr_bsk_width < coins[i].x) {
      if (balloon.y + balloon.ball_height - (coins[i].width / 2) < coins[i].y
    && balloon.y + balloon.ball_height + balloon.bsk_height + (coins[i].width / 2) > coins[i].y) {
      score.score += 1;
      coins[i] = new Coin();
      continue;}}
    
      sq.x = square((balloon.x + balloon.bfr_bsk_width) - (coins[i].x + (coins[i].width / 2)))
      sq.y = square((balloon.y + balloon.ball_height + balloon.bsk_width) - (coins[i].y + (coins[i].height / 2)))
    if (Math.sqrt(sq.x + sq.y) <= coins[i].width / 2) {
      score.score += 1;
      coins[i] = new Coin();
      continue;
    } 
    
      sq.x = square((balloon.x + balloon.bfr_bsk_width + balloon.bsk_width) - (coins[i].x + (coins[i].width / 2)))
      sq.y = square((balloon.y + balloon.ball_height + balloon.bsk_height) - (coins[i].y + (coins[i].height / 2)))
    if (Math.sqrt(sq.x + sq.y) <= coins[i].width / 2) {
      score.score += 1;
      coins[i] = new Coin();
      continue;
    }
    
    sq.x = square((balloon.x + (balloon.width/2)) - (coins[i].x + (coins[i].width / 2)))
    sq.y = square((balloon.y + ((balloon.ball_height - 5)/2)) - (coins[i].y + (coins[i].height / 2)))
    
    if (Math.sqrt(sq.x + sq.y) <= (balloon.width/2) +  coins[i].width / 2) {
      score.score += 1;
      coins[i] = new Coin();
      continue;
    }
    
    sq.y = square((balloon.y + ((balloon.ball_height + 5)/2)) - (coins[i].y + (coins[i].height / 2)))
    
    if (Math.sqrt(sq.x + sq.y) <= (balloon.width/2) +  coins[i].width / 2) {
      score.score += 1;
      coins[i] = new Coin();
      continue;
    }
      coins[i].x -= coins[i].move;}
    //---------------------------------------------------bomby
    for (let i = 0; i < bombs.length; i++) {
     if (bombs[i].x > balloon.x + balloon.width) {
      bombs[i].x -= bombs[i].move;
      continue;}
    
      //bomba vyletěla z pole -> generuji novou bombu
      if (bombs[i].x < 0 - bombs[i].width) {
        bombs[i] = new Coin();
        continue;}
    
      if (balloon.x + balloon.bfr_bsk_width + balloon.bsk_width + ((bombs[i].width - 2) / 2) + 2 > bombs[i].x
     && balloon.x + balloon.bfr_bsk_width - ((bombs[i].width - 2) + 2 / 2) < bombs[i].x) {
       if (balloon.y + balloon.ball_height < bombs[i].y
     && balloon.y + balloon.ball_height + balloon.bsk_height > bombs[i].y) {
      endscreen();}}
       
     if (balloon.x + balloon.bfr_bsk_width + balloon.bsk_width> bombs[i].x
     && balloon.x + balloon.bfr_bsk_width < bombs[i].x) {
       if (balloon.y + balloon.ball_height - ((bombs[i].width - 2) / 2) + 2 < bombs[i].y
     && balloon.y + balloon.ball_height + balloon.bsk_height + ((bombs[i].width - 2) / 2) + 2 > bombs[i].y) {
      endscreen();}}
     
       sq.x = square((balloon.x + balloon.bfr_bsk_width) - (bombs[i].x + ((bombs[i].width - 2) / 2) + 2))
       sq.y = square((balloon.y + balloon.ball_height + balloon.bsk_height) - (bombs[i].y + (bombs[i].height / 2) + 2))
     if (Math.sqrt(sq.x + sq.y) <= (bombs[i].width - 2) / 2) {
      endscreen();
     } 
     
       sq.x = square((balloon.x + balloon.bfr_bsk_width + balloon.bsk_width) - (bombs[i].x + ((bombs[i].width - 2) / 2) + 2))
       sq.y = square((balloon.y + balloon.ball_height + balloon.bsk_height) - (bombs[i].y + (bombs[i].height / 2) + 2))
     if (Math.sqrt(sq.x + sq.y) <= (bombs[i].width - 2) / 2) {
      endscreen();
     }
     
     sq.x = square((balloon.x + (balloon.width/2)) - (bombs[i].x + ((bombs[i].width - 2) / 2) + 2))
     sq.y = square((balloon.y + ((balloon.ball_height - 5)/2)) - (bombs[i].y + (bombs[i].height / 2) + 2))
     
     if (Math.sqrt(sq.x + sq.y) <= (balloon.width/2) + ((bombs[i].width - 2) / 2) + 2) {
      endscreen();
     }
     
     sq.y = square((balloon.y + ((balloon.ball_height + 5)/2)) - (bombs[i].y + (bombs[i].height / 2) + 2))
     
     if (Math.sqrt(sq.x + sq.y) <= (balloon.width/2) +  ((bombs[i].width - 2) / 2) + 2) {
      endscreen();
     }
       bombs[i].x -= bombs[i].move;}
    
       balloon.y += balloon.move;
    
    if (konec.konec == 1) {return} else { 
         window.requestAnimationFrame(draw);
          }}