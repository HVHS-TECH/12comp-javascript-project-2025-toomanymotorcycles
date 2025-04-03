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
function playerMovement() {
	if (kb.pressing("shift") && player.stamina > 0 && !player.fatigued) {
		player.speed = 9;
		player.stamina--;
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
		player.vel.y = player.speed * -1 * player.speedMultiplier;
	} else if (kb.pressing("s")) {
		player.vel.y = player.speed * player.speedMultiplier;
	} else {
		player.vel.y = 0;
	}
	if (kb.pressing("a")) {
		player.vel.x = player.speed * -1 * player.speedMultiplier;
	} else if (kb.pressing("d")) {
		player.vel.x = player.speed * player.speedMultiplier;
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
	hudHealthbarLerpCurrentValue = lerp(hudHealthbarLerpCurrentValue, 900 / 100 * player.health, 0.075)
	hudLayer.fill("gray")
	hudLayer.rect(0, windowHeight - 100, 1000, 100)
	hudLayer.fill("black")
	hudLayer.rect(50, windowHeight - 75, 900, 50)
	hudLayer.fill("maroon")
	hudLayer.rect(50, windowHeight - 75, hudHealthbarLerpCurrentValue, 50)
	hudLayer.fill("red")
	hudLayer.rect(50, windowHeight - 75, 900 / 100 * player.health, 50)
	hudLayer.fill("darkgray")
	hudLayer.rect(0, 0, 900, 200)
	hudLayer.rect(25, 25, 150, 150)
	hudLayer.rect(200, 25, 150, 150)
	hudLayer.rect(375, 25, 150, 150)
	hudLayer.rect(550, 25, 150, 150)
	hudLayer.rect(725, 25, 150, 150)
	hudLayer.fill("gray")
	hudLayer.rect(900, 0, 200, 200)
	hudLayer.rect(915, 15, 170, 170)
	hudLayer.rect(925, 25, 150, 150)
	if (player.inventory.length > 0) {
		hudLayer.image(itemDisplayTextures[player.inventory[0].itemID], 37, 37)
	}
	if (player.inventory.length > 1) {
		hudLayer.image(itemDisplayTextures[player.inventory[1].itemID], 212, 37)
	}
	if (player.inventory.length > 2) {
		hudLayer.image(itemDisplayTextures[player.inventory[2].itemID], 387, 37)
	}
	if (player.inventory.length > 3) {
		hudLayer.image(itemDisplayTextures[player.inventory[3].itemID], 562, 37)
	}
	if (player.inventory.length > 4) {
		hudLayer.image(itemDisplayTextures[player.inventory[4].itemID], 737, 37)
	}
	if (player.clearanceLevel > 0) {
		hudLayer.image(itemDisplayTextures[player.clearanceLevel], 937, 37)
	}
	player.character.x = player.x;
	player.character.y = player.y-50;
	camera.off();
	image(hudLayer, 0, 0);
	camera.on();
}

async function playerDeath(deathType) {
	if (!deathlock) {
		deathlock = true;
		player.colour = "red"
		player.lives--;
		print("lives " + player.lives)
		deathSting.play()
		await sleep(2000)
		for (v = 1; v < 101; v++) {
			allSprites.opacity = 1 - v * 0.01
			hiddenGroup.opacity = 0;
			print(player.opacity)
			await sleep(1)
		}
		if (currentCheckpoint != undefined && player.lives > 0) {
			player.pos = currentCheckpoint.pos;
			player.y = currentCheckpoint.y + 100;
			player.health = 100;
			await sleep(1000)
			player.colour = "purple"
			freeze = false;
			deathlock = false;
			gameState = 1;
			for (v = 1; v < 101; v++) {
				allSprites.opacity = v * 0.01;
				hiddenGroup.opacity = 0;
				print(player.opacity)
				await sleep(1)
			}
		} else {
			gameState = 3;
		}
	}
}

function spawnItem() {
	newItem = new Item(windowWidth / 2, windowHeight / 2, 30, 30, 1);
}

function draw() {
	// Draw function; the primary game loop. Runs 60 times a second.
	clear();
	if (gameState == 1) {
		camera.on();
		background("black");
		playerMovement();
		playerInventory();
	}
	if (gameState == 2) {
		camera.on();
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
		deathlock = false;
		allSprites.opacity = 0;
		background("green")
	}

	/*for(i=0;i<allSprites.length;i++) {
		if (dist(camera.x,camera.y,allSprites[i].x,allSprites[i].y < windowWidth)) {
			allSprites[i].visible = true;
			allSprites[i].sleeping = false;
		} else {
			allSprites[i].visible = false;
			allSprites[i].sleeping = true;
		}
	}*/

	player.collide(doorGroup)

	escapeZone.overlap(player, () => { gameState = 4 })

	itemGroup.overlap(player, () => { if (player.inventory.length < 5) { interactPrompt.visible = true } })
	itemGroup.overlapping(player, (item) => { if (kb.pressed("e")) { item.parentRef.onPickup() } })
	itemGroup.overlapped(player, () => { interactPrompt.visible = false })

	readerGroup.overlap(player)
	readerGroup.overlap(player.character, (reader) => { if (!reader.parentRef.active && !reader.parentRef.voiceLocked) { interactPrompt.visible = true } })
	readerGroup.overlapping(player.character, (reader) => { if (kb.pressed("e") && !reader.parentRef.active) { interactPrompt.visible = false, reader.parentRef.onInteract() } })
	readerGroup.overlapped(player.character, () => { interactPrompt.visible = false })

	checkpointGroup.overlap(player);
	checkpointGroup.overlap(player.character, (checkpoint) => { if (currentCheckpoint != checkpoint) { interactPrompt.visible = true } })
	checkpointGroup.overlapping(player.character, (checkpoint) => { if (kb.pressed("e") && currentCheckpoint != checkpoint) { interactPrompt.visible = false, checkpoint.parentRef.onInteract() } })
	checkpointGroup.overlapped(player.character, () => { interactPrompt.visible = false })

	enemyBulletGroup.overlap(player.character, (bullet) => { takeDamage.play(), player.health -= bullet.power, bullet.remove() })

	allSprites.overlap(enemyBulletGroup)
	allSprites.overlap(player.character)
	enemyBulletGroup.overlap(doorGroup, (bullet) => { bullet.remove() })

	interactPrompt.x = camera.x;
	interactPrompt.y = camera.y + windowWidth / 8;

	player.rotation = 0;
	gameMap.layer = 0;
	//gameHitbox.layer = 1;
	checkpointGroup.layer = 2;
	itemGroup.layer = 3;
	doorGroup.layer = 4;
	readerGroup.layer = 4;
	enemyBulletGroup.layer = 5;
	enemyGroup.layer = 6;
	player.layer = 7;
	player.character.layer = 7;

	for(i=0; i<lczFloor.length; i++) {
		lczFloor[i].removeColliders()
	};

	for(i=0; i<lczFloorStart.length; i++) {
		lczFloorStart[i].removeColliders()
	};

	for(i=0; i<lczFloorBigDoor.length; i++) {
		lczFloorBigDoor[i].removeColliders()
	};

	for(i=0; i<hczFloor.length; i++) {
		hczFloor[i].removeColliders()
	};

	allSprites.draw()
	if (gameState == 1) {
		drawHUD();
	}

	hiddenGroup.opacity = 0;
};