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
        if (player.health <= 0) {
                freeze = true;
                player.vel.x = 0;
                player.vel.y = 0;
                gameState = 2;
        }
        camera.pos = player.pos;
};

function drawHUD() {
        hudLayer.fill("gray")
        hudLayer.rect(0,windowHeight-100,1000,100)
        hudLayer.fill("black")
        hudLayer.rect(50,windowHeight-75,900,50)
        hudLayer.fill("red")
        hudLayer.rect(50,windowHeight-75,900/100*player.health,50)
        hudLayer.fill("darkgray")
        hudLayer.rect(0,0,900,200)
        hudLayer.rect(25,25,150,150)
        hudLayer.rect(200,25,150,150)
        hudLayer.rect(375,25,150,150)
        hudLayer.rect(550,25,150,150)
        hudLayer.rect(725,25,150,150)
        hudLayer.fill("gray")
        hudLayer.rect(900,0,200,200)
        hudLayer.rect(915,15,170,170)
        hudLayer.rect(925,25,150,150)
        hudLayer.image(testImage,37,37)
        hudLayer.image(testImage,212,37)
        hudLayer.image(testImage,387,37)
        hudLayer.image(testImage,562,37)
        hudLayer.image(testImage,737,37)
        hudLayer.image(securityIDTextures[player.clearanceLevel],937,37)
}

async function playerDeath(deathType) {
        if (!deathlock) {
        deathlock = true;
        player.colour = "red"
        player.lives --;
        print("lives "+player.lives)
        await sleep(2000)
        allSprites.opacity = 0;
        if (currentCheckpoint != undefined && player.lives > 0) {
                player.pos = currentCheckpoint.pos;
                player.health = 100;
                await sleep(1000)
                allSprites.opacity = 1;
                player.colour = "purple"
                freeze = false;
                deathlock = false;
                gameState = 1;
        } else {
                gameState = 3;
        }
        }
}

function spawnItem () {
        newItem = new Item(windowWidth/2,windowHeight/2,30,30,1);
}

function draw () {
        // Draw function; the primary game loop. Runs 60 times a second.
        if (gameState == 1) {
                camera.on();
                background("black");
                playerMovement();
                playerInventory();
                drawHUD();
        }
        if (gameState == 2) {
                background("black");
                enemyGroup.vel.x = 0;
                enemyGroup.vel.y = 0;
                playerDeath();
        }
        if (gameState == 3) {
                deathlock = false;
                background("red")  
        }
        if (gameState == 4) {
                
        }

        player.collide(doorGroup)

        itemGroup.overlap(player, () => {if (player.inventory.length < 5) {interactPrompt.visible = true}})
        itemGroup.overlapping(player, (item) => {if (kb.pressed("e")) {item.parentRef.onPickup()}})
        itemGroup.overlapped(player, () => {interactPrompt.visible = false})

        readerGroup.overlap(player, (reader) => {if (!reader.parentRef.active) {interactPrompt.visible = true}})
        readerGroup.overlapping(player, (reader) => {if (kb.pressed("e") && !reader.parentRef.active) {interactPrompt.visible = false,reader.parentRef.onInteract()}})
        readerGroup.overlapped(player, () => {interactPrompt.visible = false})

        checkpointGroup.overlap(player, (checkpoint) => {if (currentCheckpoint != checkpoint) {interactPrompt.visible = true}})
        checkpointGroup.overlapping(player, (checkpoint) => {if (kb.pressed("e") && currentCheckpoint != checkpoint) {interactPrompt.visible = false,checkpoint.parentRef.onInteract()}})
        checkpointGroup.overlapped(player, () => {interactPrompt.visible = false})

        enemyBulletGroup.overlap(player, (bullet) => {print("bulletpower "+bullet.power), player.health -= bullet.power, print("health " + player.health), bullet.remove()})

        allSprites.overlap(enemyBulletGroup)

        interactPrompt.x = camera.x;
        interactPrompt.y = camera.y+windowWidth/8;

        player.rotation = 0;
        //gameMap.layer = 0;
        //gameHitbox.layer = 1;
        checkpointGroup.layer = 2;
        itemGroup.layer = 3;
        doorGroup.layer = 4;
        enemyBulletGroup.layer = 5;
        enemyGroup.layer = 6;
        player.layer = 7;
        readerGroup.layer = 8;

        image(hudLayer, camera.x-windowWidth/2,camera.y-windowHeight/2);
};