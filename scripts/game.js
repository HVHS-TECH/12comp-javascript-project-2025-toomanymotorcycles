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

// these variables control the text shown on the manu.
let
	menutext = "",
	subtext = "";
subtext2 = ""

async function introSequence() { //the game's intro sequence - this is how the game's start menu animation works
	if (!introSequencePlaying) { //if the intro sequence isn't already playing
		introSequencePlaying = true;
		menutext = ""; // reset menu text
		console.log("AAA")
		await sleep(1000);
		console.log("AAA")
		background("black");
		menutext = "B";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BL";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLA";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLAC";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLACK";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLACKS";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLACKSI";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLACKSIT";
		await sleep(100);
		console.log("AAA")
		background("black");
		menutext = "BLACKSITE";
	}
}

async function win() { //the game's win sequence - displays your killscore and (no) completion time
	if (!winSequencePlaying) { // Ditto with the start sequence
		winSequencePlaying = true;
		gameMusic.stop();
		klaxon.stop();

		// reset menu display text
		menutext = "";
		subtext = "";
		subtext2 = "";

		textSize(150);
		await sleep(2000);
		winMusic.play();
		menutext = "YOU ESCAPED"; //sets the menu's title
		await sleep(2000);
		subtext = "KILLSCORE:\n" + killscore //sets the menu's subtext to your killscore
		await sleep(1000);
		subtext2 = "COMPLETION TIME:\n" + "???" //sets the menu's second subtext to your (unknown) completion time
	}
}

async function lose() { //near identical to the win sequence - only shows your killscore
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
		menutext = "FLATLINED"; //sets the menu's title
		await sleep(2000);
		subtext = "KILLSCORE:\n" + killscore //sets the menu's subtext
	}
}

function menuActions() { //controls the actions of the menu buttons
	if (!instructionsVisible) { //makes sure the buttons only work if the instructions aren't visible
		if (menuPlay.mouse.pressed()) { //starts the game
			spawnEnemies();
			spawnItems();
			setupRestart();
			//stops any playing music
			loseMusic.stop();
			winMusic.stop();

			//makes sure the endgame sequences play whne they're needed
			loseSequencePlaying = false;
			winSequencePlaying = false;

			//makes the game map visible
			allSprites.opacity = 1;

			//unfreeses the game
			freeze = false;
			deathlock = false;

			//switches to the game screen
			gameState = 1;
		}
		if (menuInst.mouse.pressed()) {
			//shows the instructions
			instructionsVisible = true;
		}
		if (menuQuit.mouse.pressed()) {
			//closes the game
			window.close();
		}
	}
}


// this function is how the player uses their weapon

async function playerShoot(bulletSpread) {
	if (!player.shotCooldown) { //if the player can fire
		if (player.loadedAmmo > 0) {
			player.shotCooldown = true; //stop the player from firing
			let newBullet = new Sprite(player.character.x, player.character.y, 10, 10, 'd') //create a new bullet
			newBullet.power = 20; //makes the bullet do 20 damage to enemies
			playerBulletGroup.add(newBullet) //obvious
			newBullet.colour = "yellow"; //DEPRECATED
			newBullet.life = 200 // the bullet lasts for 200 frames
			newBullet.rotation = player.crosshair.rotation; //the bullet fires in the direction of the player's crosshair
			player.crosshair.rotation = player.crosshair.rotation -= 60; // simulates recoil
			newBullet.bearing = newBullet.rotation; //ensures that applyForce shoots the bullet in the right direction
			newBullet.image = laserBullet; //textures the bullet

			//simulates bullet spread by adding or subtracting a random amount equal to or lower than the function's bullet spread parameter
			if (random(1, 2) == 1) {
				newBullet.bearing += random(0, bulletSpread)
			} else {
				newBullet.bearing -= random(0, bulletSpread)
			}
			//shoots the bullet
			newBullet.applyForce(200)
			laserMagnumShot.play()
			player.loadedAmmo--; //subtracts one from the player's ammo count
			if (player.loadedAmmo == 0) { //if the player is out of ammo, reload
				await sleep(player.shotCooldownReg);
				laserMagnumReload.play();
				await sleep(player.shotCooldownReload);
				player.loadedAmmo = 6; //reset ammo
				player.shotCooldown = false; //player can fire again
			} else { //else, don't reload
				await sleep(player.shotCooldownReg);
				player.shotCooldown = false;//player can fire again
			}
		}
	}
}

//controls player movement
function playerMovement() {
	if (!deathlock) { //only runs if the player isn't dead
		if (kb.pressing("shift") && player.stamina > 0 && !player.fatigued) { //sprinting
			player.speed = 9;
			player.stamina--; //reduce the player's stamina for every frame where they are sprinting
		} else if (player.fatigued) { //if the player runs out of stamina they move really slowly until they regain all of their stamina
			player.speed = 3;
			player.stamina += 0.5;
		} else { //not sprinting
			player.speed = 5;
			if (player.stamina < player.staminaMax) {
				player.stamina += 0.5;
			}
		}
		if (player.stamina <= 0) { //player becomes fatigued if they run out of stamina
			player.fatigued = true;
		}
		if (player.stamina == player.staminaMax) { //fatigue ends when player is at max stamina
			player.fatigued = false;
		}
		if (kb.pressing("w")) { //move up
			player.vel.y = player.speed * -1 * player.speedMultiplier; //reducing y moves objects up
		} else if (kb.pressing("s")) { //move down
			player.vel.y = player.speed * player.speedMultiplier; //increasing y moves objects down
		} else {
			player.vel.y = 0; //don't move up or down
		}
		if (kb.pressing("a")) { //move left
			player.vel.x = player.speed * -1 * player.speedMultiplier; //reducing x moves objects left
		} else if (kb.pressing("d")) { //move right
			player.vel.x = player.speed * player.speedMultiplier; //increasing y moves objects right
		} else {
			player.vel.x = 0; //don't move left or right
		}
		if (player.health <= 0) { //if player runs out of health then they die
			freeze = true; //freeze the enemies

			//stop the player from moving
			player.vel.x = 0;
			player.vel.y = 0;

			//change game state to the loss-check state (more infomation below)
			gameState = 2;
		}
	}
	camera.pos = player.pos; //obvious
};

// thsi function draws the player's HUD onto the HUD's graphical layer and draws the layer to the canvas.
function drawHUD() {
	//ensures that the x and y parameters entered into the image() function designate the position of the image's top left corner
	imageMode(CORNER);

	// creates the health bar's interpolation effect when you take damage
	hudHealthbarLerpCurrentValue = lerp(hudHealthbarLerpCurrentValue, 900 / 100 * player.health, 0.075)

	//draw the health bar
	//background
	hudLayer.fill("black") //sets shape fill to red
	hudLayer.rect(50, windowHeight - 75, 900, 50)
	//interpolation effect
	hudLayer.fill("maroon") //sets shape fill to maroon
	hudLayer.rect(50, windowHeight - 75, hudHealthbarLerpCurrentValue, 50)
	//current health
	hudLayer.fill("red") //sets shape fill to black
	hudLayer.rect(50, windowHeight - 75, 900 / 100 * player.health, 50)

	//draw the ammo counter in the corner
	hudLayer.fill("black")
	hudLayer.rect(50, windowHeight - 200, 90, 90);
	hudLayer.textSize(90)
	hudLayer.fill("white")
	if (player.loadedAmmo == 0) { //if player is reloading then display "R", otherwise display player ammo variable value
		hudLayer.text("R", 65, windowHeight - 125);
	} else {
		hudLayer.text(player.loadedAmmo, 60, windowHeight - 125);
	}

	//draw inventory
	hudLayer.fill("darkgray")
	//background
	hudLayer.rect(0, 0, 900, 200)
	//slots
	hudLayer.rect(25, 25, 150, 150)
	hudLayer.rect(200, 25, 150, 150)
	hudLayer.rect(375, 25, 150, 150)
	hudLayer.rect(550, 25, 150, 150)
	hudLayer.rect(725, 25, 150, 150)

	//draw clearance level display - displays your current clearance level.
	hudLayer.fill("gray")
	hudLayer.rect(900, 0, 200, 200)
	hudLayer.rect(915, 15, 170, 170)
	hudLayer.rect(925, 25, 150, 150)

	//draw inventory slot item display images in the specified slots if there's an item there

	//slot 1
	if (player.inventory.length > 0) {
		hudLayer.image(itemDisplayTextures[player.inventory[0].itemID], 37, 37)
	}

	//slot 2
	if (player.inventory.length > 1) {
		hudLayer.image(itemDisplayTextures[player.inventory[1].itemID], 212, 37)
	}

	//slot 3
	if (player.inventory.length > 2) {
		hudLayer.image(itemDisplayTextures[player.inventory[2].itemID], 387, 37)
	}

	//slot 4
	if (player.inventory.length > 3) {
		hudLayer.image(itemDisplayTextures[player.inventory[3].itemID], 562, 37)
	}

	//slot 5
	if (player.inventory.length > 4) {
		hudLayer.image(itemDisplayTextures[player.inventory[4].itemID], 737, 37)
	}

	//slot 6
	if (player.clearanceLevel > 0) {
		hudLayer.image(itemDisplayTextures[player.clearanceLevel], 937, 37)
	}

	//turns the camera off briefly to ensure that the HUD is drawn correctly
	camera.off();

	//draws the HUD
	image(hudLayer, 0, 0);
	camera.on();

	//ensures that the x and y parameters entered into the image() function designate the position of the image's center
	imageMode(CENTER);
}

// this function runs if the player dies
async function playerDeath(deathType) {
	if (!deathlock) { //if the player isn't already dead somehow
		deathlock = true; //decree the player dead
		player.colour = "red" //DEPRECATED - never seen
		player.lives--; //player loses a life
		//console_log_"lives " + player.lives)
		deathSting.play() //play the death sound effect
		await sleep(2000)

		//fade the screen to black
		for (v = 1; v < 101; v++) {
			fadeProgress = v * 2.55
			await sleep(1)
		}

		//if the player has a checkpoint, respawn them at the checkpoint
		if (currentCheckpoint != undefined && player.lives > 0) {
			player.pos = currentCheckpoint.pos;
			player.y = currentCheckpoint.y + 100;
			player.health = 100; //reset player health
			await sleep(1000)
			player.colour = "purple" //DEPRECATED - not seen
			freeze = false; //unfreeze the game
			deathlock = false; //unfreeze the player
			gameState = 1; //switches to the game screen

			//unfade the screen
			for (v = 1; v < 101; v++) {
				fadeProgress = 255 - v * 2.55
				await sleep(1)
			}
		} else { //if the player is out of lives or has no checkpoint, the game is lost

			//reset the text displayed on menu screens
			menutext = ""
			subtext = ""

			//switches to lose screen
			gameState = 3;
		}
	}
}

function mousePressed() { //it's obvious what triggers this
	if (gameState == 1 && !deathlock) { //if the game is running and the player isn't dead, fire the player's gun
		playerShoot(5);
	}
	if (instructionsVisible) { //if the instructions are visible, hide them
		instructionsVisible = false;
	}
}

function draw() {
	// Draw function; the primary game loop. Runs 60 times a second.
	clear(); //CLEARS THE SCREEN
	if (gameState == 0) { //if the game is on the start menu
		camera.off(); //the camera is unnecessary here
		background("black");
		textSize(200);
		fill("white"); //sets shape fill to white (text is technically a shape)
		text(menutext, 200, windowHeight / 4); //draws the menu text, in this case "BLACKSITE"
		if (menuPlay.mouse.hovering() && !instructionsVisible) { textSize(120); } else { textSize(100); } //makes the text of the play button bigger if the player is hovering over it
		text("> PLAY", 200, windowHeight - 3 * (windowHeight / 8)); //the text of the play button
		if (menuInst.mouse.hovering() && !instructionsVisible) { textSize(120); } else { textSize(100); } //makes the text of the instructions button bigger if the player is hovering over it
		text("> INSTRUCTIONS", 200, windowHeight - 2 * (windowHeight / 8)); //the text of the instructions button
		if (menuQuit.mouse.hovering() && !instructionsVisible) { textSize(120); } else { textSize(100); } //makes the text of the quit button bigger if the player is hovering over it
		text("> QUIT", 200, windowHeight - (windowHeight / 8)); //the text of the quit button
		if (instructionsVisible) { //if the instructions are supposed to be visible, draw them
			print("INSTRUCTIONS!!!!!!!!")
			imageMode(CENTER);
			image(instructions, windowWidth / 2, windowHeight / 2);
			imageMode(CORNER);
		}
		//freeze the actual game
		freeze = true;
		deathlock = true;

		//make the game visible
		fadeProgress = 0;

		//hide all sprites
		allSprites.opacity = 0;

		//make the menu buttons basically invisible but still clickable
		menuGroup.opacity = 0.01;

		introSequence();
		menuActions()
	}
	if (gameState == 1) { //if the actual game is being played - this whole section of code is explained above
		if (!gameMusic.isPlaying()) { //play the music
			//console_log_"PLAYING MUSIC");
			gameMusic.loop();
			klaxon.loop();
		}
		camera.on();
		background("black")
		playerMovement();
		playerInventory();
	}
	if (gameState == 2) { //the "loss-check" state - kills the player and checks if they have lost the game or not
		camera.on();
		background("black");
		enemyGroup.vel.x = 0;
		enemyGroup.vel.y = 0;
		playerDeath();
	}
	if (gameState == 3) { //the loss screen

		//this boilerplate code has already been explained above
		deathlock = true;
		freeze = true;
		allSprites.opacity = 0;
		menuGroup.opacity = 1;
		menuInst.opacity = 0;
		fadeProgress = 0;

		background("black");
		textSize(100);
		fill("red"); //already explained
		text(menutext, 100, windowHeight / 4); //already explained
		textSize(60);
		fill("white"); //already explained
		text(subtext, 100, windowHeight / 4 + 200); //draws the menu's subtext, in this case your killscore

		//repositions the buttons to match up with the displayed text
		menuPlay.x = 450;
		menuPlay.y = windowHeight - windowHeight / 4 - 25;
		menuQuit.x = 450;
		menuQuit.y = windowHeight - windowHeight / 4 + 75;

		//already explained
		if (menuQuit.mouse.hovering()) { textSize(120); } else { textSize(100); }
		text("> QUIT", 100, windowHeight - windowHeight / 4 + 100);
		if (menuPlay.mouse.hovering()) { textSize(120); } else { textSize(100); }
		text("> RESTART", 100, windowHeight - windowHeight / 4);
		lose();
		menuActions();
	}
	if (gameState == 4) { //the win screen
		//near identical to the loss screen
		deathlock = true;
		freeze = true;
		allSprites.opacity = 0;
		menuGroup.opacity = 1;
		menuInst.opacity = 0;
		fadeProgress = 0;
		background("black");
		textSize(100);
		fill("white"); //first difference - menu title is white instead of red.
		text(menutext, 100, windowHeight / 4);
		textSize(60);
		fill("white");
		text(subtext, 100, windowHeight / 4 + 200);
		text(subtext2, 700, windowHeight / 4 + 200); //second difference - draws the menu's second subtext, in this case a placeholder for your completion time
		menuPlay.x = 450;
		menuPlay.y = windowHeight - windowHeight / 4 - 25;
		menuQuit.x = 450;
		menuQuit.y = windowHeight - windowHeight / 4 + 75;
		if (menuQuit.mouse.hovering()) { textSize(120); } else { textSize(100); }
		text("> QUIT", 100, windowHeight - windowHeight / 4 + 100);
		if (menuPlay.mouse.hovering()) { textSize(120); } else { textSize(100); }
		text("> RESTART", 100, windowHeight - windowHeight / 4);
		win(); //third difference - win sequence, not loss sequence
		menuActions();
	}

	player.collide(doorGroup) // the player can't walk through doors

	escapeZone.overlap(player, () => { gameState = 4 }) //if the player touches the escape zone, the win screen is displayed

	itemGroup.overlap(player, () => { if (player.inventory.length < 5) { interactPrompt.visible = true } }) // if the player is standing on an item and their inventory is not full, the interact prompt appears
	itemGroup.overlapping(player, (item) => { if (kb.pressed("e")) { item.parentRef.onPickup() } }) // if the player presses E while standing on an item and their inventory is not full, the item is picked up - see "itemHandler.js" for more information
	itemGroup.overlapped(player, () => { interactPrompt.visible = false }) // if the player is no longer standing on an item, the interact prompt is hidden

	readerGroup.overlap(player) // the player can walk over readers
	readerGroup.overlap(player.character, (reader) => { if (!reader.parentRef.active && !reader.parentRef.voiceLocked) { interactPrompt.visible = true } }) //if the player is near a reader, the interact prompt appears
	readerGroup.overlapping(player.character, (reader) => { if (kb.pressed("e") && !reader.parentRef.active) { interactPrompt.visible = false, reader.parentRef.onInteract() } }) //if the player is near a reader and presses E, the reader is activated - see "readerHandler.js" for more information
	readerGroup.overlapped(player.character, () => { interactPrompt.visible = false }) //if the player is no longer near a reader, the interact prompt is hidden

	teleporterGroup.overlap(player) // the player can walk over teleporter hitboxes
	teleporterGroup.overlap(player.character, (teleporter) => { if (!teleporter.parentRef.active && !teleporter.parentRef.voiceLocked) { interactPrompt.visible = true } }) //if the player is at a teleporter, the interact prompt appears
	teleporterGroup.overlapping(player.character, (teleporter) => { if (kb.pressed("e") && !teleporter.parentRef.active) { interactPrompt.visible = false, teleporter.parentRef.onInteract() } }) //if the player is at a teleporter, the teleporter is activated - see "teleporterHandler.js" for more information
	teleporterGroup.overlapped(player.character, () => { interactPrompt.visible = false }) //if the player is no longer at a teleporter, the interact prompt is hidden


	checkpointGroup.overlap(player); // the player can walk over checkpoints
	checkpointGroup.overlap(player.character, (checkpoint) => { if (currentCheckpoint != checkpoint) { interactPrompt.visible = true } }) //if the player is at an inactive checkpoint, the interact prompt appears
	checkpointGroup.overlapping(player.character, (checkpoint) => { if (kb.pressed("e") && currentCheckpoint != checkpoint) { interactPrompt.visible = false, checkpoint.parentRef.onInteract() } }) //if the player is at an inactive checkpoint and presses E, the interact prompt is hidden and the checkpoint is activated - see "checkpointHandler.js" for more information
	checkpointGroup.overlapped(player.character, () => { interactPrompt.visible = false }) //if the player is no longer at an inactive checkpoint, the interact prompt is hidden

	enemyBulletGroup.overlap(player.character, (bullet) => { if (!freeze) { takeDamage.play(), player.health -= bullet.power, bullet.remove() } }) //if an enemy bullet hits the player and enemies aren't frozen, the player takes damage equal to the bullet's power
	// bothe nemy and player bullets overlap everything
	enemyBulletGroup.overlap(allSprites)
	playerBulletGroup.overlap(allSprites)
	playerBulletGroup.overlap(gameMap, (bullet, tile) => { if (!lczEnemy.includes(tile) && !hczEnemy.includes(tile) && !lczItem.includes(tile) && !hczItem.includes(tile)) { bullet.remove() } }) //if a player bullet hits a tile that isn't a special tile - i.e it hits a wall - it is removed
	playerBulletGroup.overlap(doorGroup, (bullet) => { bullet.remove() }) //if a player bullet hits the hitbox of a door, it is removed even if the door is open (a feature, not a bug)

	enemyGroup.overlap(playerBulletGroup, (enemy, bullet) => { console.log("ENEMY HIT: " + enemy); enemy.health -= 50; if (enemy.moveSpeed == 0) { laserImpactMetal.play() }; bullet.remove() }); //if a player bullet hits an enemy, the enemy takes damage equal to the bullet's power and special sound effects are played if the enemy's move speed is zero (if it's a turret or a puddle of crystal)

	playerBulletGroup.overlap(player.character)
	playerBulletGroup.overlap(player)
	playerBulletGroup.overlap(playerBulletGroup)

	//allSprites.overlap(enemyBulletGroup)
	allSprites.overlap(player.crosshair) //everything overlaps the player's gun
	allSprites.overlap(player.character) //everything overlaps the player's character
	enemyBulletGroup.overlap(doorGroup, (bullet) => { bullet.remove() }) //if an enemy bullet hits the hitbox of a door, it is removed even if the door is open (a feature, not a bug)
	enemyBulletGroup.overlap(gameMap, (bullet, tile) => { if (!lczEnemy.includes(tile) && !hczEnemy.includes(tile) && !lczItem.includes(tile) && !hczItem.includes(tile)) { bullet.remove() } }) //if n enemy bullet hits a tile that isn't a special tile - i.e it hits a wall - it is removed

	//positioning the interact prompt at the center of the lower half of the screen
	interactPrompt.x = camera.x;
	interactPrompt.y = camera.y + windowWidth / 8;

	//positioning the player's character and crosshair correctly
	player.character.x = player.x;
	player.character.y = player.y - 50;
	player.crosshair.x = player.character.x;
	player.crosshair.y = player.character.y;

	player.rotation = 0; //the player always faces upwards

	//the following block of code controls  the layers of all drawn sprites (i.e it controls what sprites get drawn over others)
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

	// this removes the colliders from any special tiles so that nothing can collide with them.
	for (i = 0; i < lczFloorBigDoor.length; i++) {
		lczFloorBigDoor[i].removeColliders()
	};

	for (i = 0; i < hczFloorBigDoor.length; i++) {
		hczFloorBigDoor[i].removeColliders()
	};

	for (i = 0; i < teleporterCreator.length; i++) {
		teleporterCreator[i].removeColliders()
	};

	for (i = 0; i < lczEnemy.length; i++) {
		lczEnemy[i].removeColliders()
	};

	for (i = 0; i < lczItem.length; i++) {
		lczItem[i].removeColliders()
	};

	for (i = 0; i < hczEnemy.length; i++) {
		hczEnemy[i].removeColliders()
	};

	for (i = 0; i < hczItem.length; i++) {
		hczItem[i].removeColliders()
	};

	for (i = 0; i < menuGroup.length; i++) {
		menuGroup[i].removeColliders()
	};

	if (gameState == 1 || gameState == 2) { image(imageTileLayer, -32, -32) }; // if the game is being played or is in the loss-check state, draw all image tiles - see "build.js" for more information.
	allSprites.draw(); //DRAW EVERYTHING
	camera.off();
	//console_log_"fadeprogress "+fadeProgress);
	if (gameState == 1 || gameState == 2) { //draw a black rectangle over the game map if the game is being played or is in the loss-check state, the transparency of which is controlled by the fadeprogress variable - this is used to fade the game map in and out.
		fill(0, fadeProgress);
		rect(0, 0, windowWidth, windowHeight);
	}

	camera.on();

	if (!deathlock) { player.crosshair.rotateTowards(mouse, 0.2) }; //if the player isn't dead, the player's gun tracks towards the mouse

	if (gameState == 1) { //if the game is being played, draw the HUD over everything else (this layering is why it's the last thing drawn)
		drawHUD();
	}

	hiddenGroup.opacity = 0; //hise any sprites in the hidden group

	//allSprites.debug = true;
};