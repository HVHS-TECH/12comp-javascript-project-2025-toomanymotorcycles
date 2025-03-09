/************************************************ 
                    BLACKSITE
             A game by Joshua K-H
        Written using p5.js and p5.play
             --------------------
              Started on 07/03/25
             Finished on ??/??/??
             --------------------
*************************************************/
/************************************************
        0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
                MAIN GAME LOOP
        0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
************************************************/
function playerMovement () {
        if (kb.pressing("shift") && playerStamina > 0) {
                playerSpeed = 9;
                playerStamina --;
        } else {
                playerSpeed = 5;
                playerStamina += 0.5;
        }
        if (kb.pressing("w")) {
                player.vel.y = playerSpeed*-1;
        } else if (kb.pressing("s")) {
                player.vel.y = playerSpeed-1;
        } else {
                player.vel.y = 0;
        }
        if (kb.pressing("a")) {
                player.vel.x = playerSpeed*-1;
        } else if (kb.pressing("d")) {
                player.vel.x = playerSpeed-1;
        } else {
                player.vel.x = 0;
        }
        camera.pos = player.pos;
};

function draw () {
        // Draw function; the primary game loop. Runs 60 times a second.
        if (gameState == 1) {
                camera.on();
                background("black");
                playerMovement();
        }
        
};