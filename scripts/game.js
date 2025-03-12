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
        if (kb.pressing("shift") && player.stamina > 0 && !player.fatigued) {
                player.speed = 9;
                player.stamina --;
        } else if (player.fatigued) {
                player.speed = 3;
                player.stamina += 0.5; 
        } else {
                player.speed = 5;
                if (player.stamina < player.staminaMax) {
                  player.stamina += 0.5;      
                } 
        }
        if (player.stamina <= 0) {
                player.fatigued = true;
        }
        if (player.stamina == player.staminaMax) {
                player.fatigued = false;
        }
        if (kb.pressing("w")) {
                player.vel.y = player.speed*-1;
        } else if (kb.pressing("s")) {
                player.vel.y = player.speed;
        } else {
                player.vel.y = 0;
        }
        if (kb.pressing("a")) {
                player.vel.x = player.speed*-1;
        } else if (kb.pressing("d")) {
                player.vel.x = player.speed;
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
                playerInventory();
        }
        itemGroup.overlap(player, (item) => {item.parentRef.onPickup()})
};