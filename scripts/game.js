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
let 
menutext = "",
subtext = "";
subtext2 = ""

async function introSequence() {
	if (!introSequencePlaying) {
	introSequencePlaying = true;
	menutext = "";
	print("AAA")
	await sleep(1000);
	print("AAA")
	background("black");
	menutext = "B";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BL";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLA";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLAC";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLACK";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLACKS";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLACKSI";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLACKSIT";
	await sleep(100);
	print("AAA")
	background("black");
	menutext = "BLACKSITE";
	}
}

async function win() {
	if (!winSequencePlaying) {
		winSequencePlaying = true;
		gameMusic.stop();
		klaxon.stop();
		menutext = "";
		subtext = "";
		subtext2 = "";
		textSize(150);
		await sleep(2000);
		//loseMusic.play();
		menutext = "YOU ESCAPED";
		await sleep(2000);
		subtext = "KILLSCORE:\n"+killscore
		await sleep(1000);
		subtext2 = "COMPLETION TIME:\n"+"???"
	}
}

async function lose() {
	if (!loseSequencePlaying) {
		loseSequencePlaying = true;
		gameMusic.stop();
		klaxon.stop();
		menutext = "";
		subtext = "";
		subtext2 = "";
		textSize(150);
		await sleep(2000);
		loseMusic.play();
		menutext = "FLATLINED";
		await sleep(2000);
		subtext = "KILLSCORE:\n"+killscore
	}
}

function menuActions() {
	if (menuPlay.mouse.pressed()) {
		spawnEnemies();
		setupRestart();
		loseMusic.stop();
		loseSequencePlaying = false;
		winSequencePlaying = false;
		allSprites.opacity = 1;
		freeze = false;
		deathlock = false;
		gameState = 1;
	}
	if (menuQuit.mouse.pressed()) {
		window.close();
	}
}

async function playerShoot(bulletSpread) {
	if (!player.shotCooldown) {
		if (player.loadedAmmo > 0) {
			player.shotCooldown = true;
			let newBullet = new Sprite(player.character.x,player.character.y,10,10,'d')
   			newBullet.power = 20;
    		playerBulletGroup.add(newBullet)
    		newBullet.colour = "yellow";
    		newBullet.life = 200
			newBullet.rotation = player.crosshair.rotation;
			player.crosshair.rotation = player.crosshair.rotation -= 60;
			newBullet.bearing = newBullet.rotation;
			newBullet.image = laserBullet;
    		if (random(1,2) == 1) {
        		newBullet.bearing += random(0,bulletSpread)
    		} else {
        		newBullet.bearing -= random(0,bulletSpread)
    		}
    		newBullet.applyForce(200)
			laserMagnumShot.play()
			player.loadedAmmo --;
			if (player.loadedAmmo == 0) {
				await sleep(player.shotCooldownReg);
				laserMagnumReload.play();
				await sleep(player.shotCooldownReload);
				player.loadedAmmo = 6;
				player.shotCooldown = false;
			} else {
				await sleep(player.shotCooldownReg);
				player.shotCooldown = false;
			}
		}
	}
}

function playerMovement() {
	if (!deathlock) {
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
	}
	camera.pos = player.pos;
};

function drawHUD() {
	imageMode(CORNER);
	hudHealthbarLerpCurrentValue = lerp(hudHealthbarLerpCurrentValue, 900 / 100 * player.health, 0.075)
	hudLayer.fill("black")
	hudLayer.rect(50, windowHeight - 75, 900, 50)
	hudLayer.fill("maroon")
	hudLayer.rect(50, windowHeight - 75, hudHealthbarLerpCurrentValue, 50)
	hudLayer.fill("red")
	hudLayer.rect(50, windowHeight - 75, 900 / 100 * player.health, 50)
	hudLayer.fill("black")
	hudLayer.rect(50, windowHeight - 200, 90, 90);
	hudLayer.textSize(90)
	hudLayer.fill("white")
	if (player.loadedAmmo == 0) {
		hudLayer.text("R",65,windowHeight-125);
	} else {
		hudLayer.text(player.loadedAmmo,60,windowHeight-125);
	}
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
	player.crosshair.x = player.character.x;
	player.crosshair.y = player.character.y;
	camera.off();
	image(hudLayer, 0, 0);
	camera.on();
	imageMode(CENTER);
}

async function playerDeath(deathType) {
	if (!deathlock) {
		deathlock = true;
		player.colour = "red"
		player.lives--;
		//console_log_"lives " + player.lives)
		deathSting.play()
		await sleep(2000)
		for (v = 1; v < 101; v++) {
			fadeProgress = v*2.55
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
				fadeProgress = 255 - v*2.55
				await sleep(1)
			}
		} else {
			menutext = ""
			subtext = ""
			gameState = 3;
		}
	}
}

function spawnItem() {
	newItem = new Item(windowWidth / 2, windowHeight / 2, 30, 30, 1);
}

function mousePressed() {
	if (gameState == 1 && !deathlock) {
		playerShoot(5);
	}
  }

function draw() {
	// Draw function; the primary game loop. Runs 60 times a second.
	clear();
	if (gameState == 0) {
		background("black");
		textSize(200);
		fill("white");
		text(menutext, 200, windowHeight/4);
		if(menuPlay.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> PLAY", 200, windowHeight - 3*(windowHeight/8));
		if(menuInst.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> INSTRUCTIONS", 200, windowHeight - 2*(windowHeight/8));
		if(menuQuit.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> QUIT", 200, windowHeight - (windowHeight/8));
		freeze = true;
		deathlock = true;
		fadeProgress = 0;
		allSprites.opacity = 0;
		menuGroup.opacity = 1;
		introSequence();
		menuActions()
	}
	if (gameState == 1) {
		if (!gameMusic.isPlaying()) {
			//console_log_"PLAYING MUSIC");
			gameMusic.loop();
			klaxon.loop();
		}
		camera.on();
		background("black")
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
		deathlock = true;
		freeze = true;
		allSprites.opacity = 0;
		menuGroup.opacity = 1;
		menuInst.opacity = 0;
		fadeProgress = 0;
		background("black");
		textSize(100);
		fill("red");
		text(menutext, 100, windowHeight/4);
		textSize(60);
		fill("white");
		text(subtext, 100, windowHeight/4+200);
		menuPlay.x = 450;
		menuPlay.y = windowHeight - windowHeight/4-25;
		menuQuit.x = 450;
		menuQuit.y = windowHeight - windowHeight/4+75;
		if (menuQuit.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> QUIT", 100, windowHeight - windowHeight/4+100);
		if (menuPlay.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> RESTART", 100, windowHeight - windowHeight/4);
		lose();
		menuActions();
	}
	if (gameState == 4) {
		deathlock = true;
		freeze = true;
		allSprites.opacity = 0;
		menuGroup.opacity = 1;
		menuInst.opacity = 0;
		fadeProgress = 0;
		background("black");
		textSize(100);
		fill("white");
		text(menutext, 100, windowHeight/4);
		textSize(60);
		fill("white");
		text(subtext, 100, windowHeight/4+200);
		text(subtext2, 700, windowHeight/4+200);
		menuPlay.x = 450;
		menuPlay.y = windowHeight - windowHeight/4-25;
		menuQuit.x = 450;
		menuQuit.y = windowHeight - windowHeight/4+75;
		if (menuQuit.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> QUIT", 100, windowHeight - windowHeight/4+100);
		if (menuPlay.mouse.hovering()) {textSize(120);} else {textSize(100);}
		text("> RESTART", 100, windowHeight - windowHeight/4);
		win();
		menuActions();
	}

	player.collide(doorGroup)

	escapeZone.overlap(player, () => { gameState = 4 })

	itemGroup.overlap(player, () => { if (player.inventory.length < 5) { interactPrompt.visible = true } })
	itemGroup.overlapping(player, (item) => { if (kb.pressed("e")) { item.parentRef.onPickup() } })
	itemGroup.overlapped(player, () => { interactPrompt.visible = false })

	readerGroup.overlap(player)
	readerGroup.overlap(player.character, (reader) => { if (!reader.parentRef.active && !reader.parentRef.voiceLocked) { interactPrompt.visible = true } })
	readerGroup.overlapping(player.character, (reader) => { if (kb.pressed("e") && !reader.parentRef.active) { interactPrompt.visible = false, reader.parentRef.onInteract() } })
	readerGroup.overlapped(player.character, () => { interactPrompt.visible = false })
	
	teleporterGroup.overlap(player)
	teleporterGroup.overlap(player.character, (teleporter) => { if (!teleporter.parentRef.active && !teleporter.parentRef.voiceLocked) { interactPrompt.visible = true } })
	teleporterGroup.overlapping(player.character, (teleporter) => { if (kb.pressed("e") && !teleporter.parentRef.active) { interactPrompt.visible = false, teleporter.parentRef.onInteract() } })
	teleporterGroup.overlapped(player.character, () => { interactPrompt.visible = false })


	checkpointGroup.overlap(player);
	checkpointGroup.overlap(player.character, (checkpoint) => { if (currentCheckpoint != checkpoint) { interactPrompt.visible = true } })
	checkpointGroup.overlapping(player.character, (checkpoint) => { if (kb.pressed("e") && currentCheckpoint != checkpoint) { interactPrompt.visible = false, checkpoint.parentRef.onInteract() } })
	checkpointGroup.overlapped(player.character, () => { interactPrompt.visible = false })

	enemyBulletGroup.overlap(player.character, (bullet) => { if(!freeze) {takeDamage.play(), player.health -= bullet.power, bullet.remove()} })
	enemyBulletGroup.overlap(allSprites)
	playerBulletGroup.overlap(allSprites)
	playerBulletGroup.overlap(gameMap, (bullet,tile) => { if (!lczEnemy.includes(tile) && !hczEnemy.includes(tile)) {bullet.remove()} })
	playerBulletGroup.overlap(doorGroup, (bullet) => { bullet.remove() })
	
	enemyGroup.overlap(playerBulletGroup, (enemy,bullet) => {console.log("ENEMY HIT: "+enemy); enemy.health -= 50; if (enemy.moveSpeed == 0) {laserImpactMetal.play()}; bullet.remove() });

	playerBulletGroup.overlap(player.character)
	playerBulletGroup.overlap(player)
	playerBulletGroup.overlap(playerBulletGroup)

	allSprites.overlap(enemyBulletGroup)
	allSprites.overlap(player.crosshair)
	allSprites.overlap(player.character)
	enemyBulletGroup.overlap(doorGroup, (bullet) => { bullet.remove() })
	enemyBulletGroup.overlap(gameMap, (bullet,tile) => { if (!lczEnemy.includes(tile)) {bullet.remove()} })

	interactPrompt.x = camera.x;
	interactPrompt.y = camera.y + windowWidth / 8;

	player.rotation = 0;
	gameMap.layer = 0;
	checkpointGroup.layer = 2;
	itemGroup.layer = 3;
	doorGroup.layer = 4;
	readerGroup.layer = 4;
	enemyBulletGroup.layer = 5;
	enemyGroup.layer = 6;
	player.layer = 7;
	player.character.layer = 7;
	playerBulletGroup.layer = 8;
	player.crosshair.layer = 9;

	for(i=0; i<lczFloorStart.length; i++) {
		lczFloorStart[i].removeColliders()
	};

	for(i=0; i<lczFloorBigDoor.length; i++) {
		lczFloorBigDoor[i].removeColliders()
	};

	for(i=0; i<hczFloorBigDoor.length; i++) {
		hczFloorBigDoor[i].removeColliders()
	};

	for(i=0; i<teleporterCreator.length; i++) {
		teleporterCreator[i].removeColliders()
	};

	for(i=0; i<lczEnemy.length; i++) {
		lczEnemy[i].removeColliders()
	};

	for(i=0; i<hczEnemy.length; i++) {
		hczEnemy[i].removeColliders()
	};

	for(i=0; i<menuGroup.length; i++) {
		menuGroup[i].removeColliders()
	};

	if (gameState == 1 || gameState == 2) {image(imageTileLayer,-32,-32)};
	allSprites.draw();
	camera.off();
	//console_log_"fadeprogress "+fadeProgress);
	if (gameState == 1 || gameState == 2) {
		fill(0,fadeProgress);
		rect(0,0,windowWidth,windowHeight);
	}
	
	camera.on();

	if (!deathlock) {player.crosshair.rotateTowards(mouse,0.2)};
	
	if (gameState == 1) {
		drawHUD();
	}

	hiddenGroup.opacity = 0;

	//allSprites.debug = true;
};