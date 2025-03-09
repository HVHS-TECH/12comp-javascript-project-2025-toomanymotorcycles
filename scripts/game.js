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
        if (kb.pressing("shift") && playerStamina > 0 && !playerFatigued) {
                playerSpeed = 9;
                playerStamina --;
        } else if (playerFatigued) {
                playerSpeed = 1
                playerStamina += 0.5; 
        } else {
                playerSpeed = 5;
                if (playerStamina < playerStaminaMax) {
                  playerStamina += 0.5;      
                } 
        }
        if (playerStamina <= 0) {
                playerFatigued = true;
        }
        if (playerStamina == playerStaminaMax) {
                playerFatigued = false;
        }
        if (kb.pressing("w")) {
                player.vel.y = playerSpeed*-1;
        } else if (kb.pressing("s")) {
                player.vel.y = playerSpeed;
        } else {
                player.vel.y = 0;
        }
        if (kb.pressing("a")) {
                player.vel.x = playerSpeed*-1;
        } else if (kb.pressing("d")) {
                player.vel.x = playerSpeed;
        } else {
                player.vel.x = 0;
        }
        //camera.pos = player.pos;
};
function spawnItem () {
        newItem = new Item(windowWidth/2,windowHeight/2,1);
}

function draw () {
        // Draw function; the primary game loop. Runs 60 times a second.
        if (gameState == 1) {
                camera.on();
                background("black");
                playerMovement();
        }
        
};