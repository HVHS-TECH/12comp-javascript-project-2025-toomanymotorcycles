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
                INITIAL SETUP
        0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
************************************************/

// THE HOLY BLOCK OF DECLARATIONS

let
    gameState, //what state the game is in (on the menu screen, playing the game, on the win screen, on the losing screen etc.)
    killscore, //enemies add points to this upon being killed.
    hudLayer,
    allDoors, //a group containing all tilemap tiles that create doors.
    fadeProgress, //used in the fade in and fade out animations that occur when you die or teleport; value controld how "faded" everything is from 0 (visible) to 255 (black screen)
    imageTileLayer,
    imageTileBuffer,
    hudTint,
    hudHealthbarLerpCurrentValue = 900,
    freeze,
    deathlock,
    introSequencePlaying = false,
    loseSequencePlaying = false,
    winSequencePlaying = false,
    currentCheckpoint, //the player's current checkpoint.
    itemExecution, //a check variable - whenever an item is used successfully this is set to true. This is to make sure that an item isn't removed from the player's inventory when it isn't supposed to be.
    player, //the player sprite.
    gameMap, //the game map, this shows the textures.
    gameHitbox, //the game hitbox, this controls where you can and can't go. This is where the walls are actually placed.
    escapeZone, //the win zone - if the player touches this they win.
    enemyGroup, //all the enemies currently spawned.
    readerGroup, //all the card readers in the game.
    doorGroup, //all the doors in the game.
    itemGroup, //all the loose items in the game.
    checkpointGroup, //all the checkpoints in the game.
    teleporterGroup,
    playerBulletGroup, //all player-fired bullets
    enemyBulletGroup, //all enemy-fired bullets; more like enemy bullet hell group...
    hiddenGroup,
    interactPrompt, // the "E" interaction prompt that appears whenever you interact with something.
    tilemapSetup = true,
    instructionsVisible = false;

let cheatPrevention = false; //cheat prevention - was never used

let
    itemTextures,
    itemDisplayTextures,
    securityIDTextures;

// AMEN

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //sleep function used in conjunction with the await keyword, waits a specified time in milliseconds before moving on to the next line of code not my code, no idea who actually wrote this, forgot where I got it from, so many different places have this line of code (ALSO, WHY IS THIS NOT NATIVE TO JAVASCRIPT!?)

function resizeImages() { //resizes all images to that they match their sprite hitboxes
    readerT1.resize(30, 40);
    readerT2.resize(30, 40);
    readerT3.resize(30, 40);
    readerT4.resize(30, 40);
    readerT5.resize(30, 40);
    readerT6.resize(30, 40);
    readerTFail.resize(30, 40);
    readerTPass.resize(30, 40);
    readerTLockdown.resize(30, 40);
    for (i = 0; i < itemTextures.length; i++) {
        itemTextures[i].resize(30, 30)
    }
    for (i = 0; i < itemDisplayTextures.length; i++) {
        itemDisplayTextures[i].resize(125, 125)
    }
    for (i = 0; i < signTextures.length; i++) {
        signTextures[i].resize(125, 75)
    }
    puddleOfCrystal.resize(60, 60);
    enemyTurret.resize(80, 80);
    enemyMelee.resize(100, 100);
    enemyRanged.resize(100, 100);
    laserBullet.resize(20, 20);
    laserMagnumT.resize(60, 60);
}

function setupRestart() { // resets all player data
    player.clearanceLevel = 0; // controls where the player can go
    player.speed = 5; // obvious
    player.speedMultiplier = 1; // obvious
    player.staminaMax = 120; // obvious
    player.stamina = player.staminaMax; // obvious
    player.fatigued = false; // whether the player is fatigued or not
    player.inventory = []; //the player's inventory
    player.canUseItems = true; //whether or not the player can use any items
    player.canUseStaminaItems = true; //whether or not the player can use stamina items
    player.canUseHealthItems = true; //whether or not the player can use health items
    player.canUseSpeedItems = true; //whether or not the player can use speed items
    player.health = 100; //obvious
    player.lives = 3; //obvious
    player.loadedAmmo = 6; //how much ammo the player has loaded into their weapon
    player.shotCooldown = false; //whether or not the player can fire
    player.shotCooldownReg = 500; //the regular shot cooldown in milliseconds
    player.shotCooldownReload = 8200; //the shot cooldown if the player is reloading in milliseconds
    player.mass = 1000; // DEPRECATED
    player.pos = lczFloorStart[0].pos //sets the player's position to the starting tile.
    fadeProgress = 0; //how black the screen is
    killscore = 0; //the player's kill score - the player earns points when enemies are killed
}

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.

    canvas = new Canvas(windowWidth, windowHeight, "pixellated x100"); //this line creates the actual drawing canvas - without it the page would simply display a white screen.

    // these lines create the playable character
    player = new Sprite(1000, 500, 50, 15, 'd'); // invisible hitbox
    player.character = new Sprite(player.x, player.y, 50, 120, 'd'); //visible character
    player.crosshair = new Sprite(player.character.x, player.character.y, 40, 40, 'd'); //the crosshair controls where the bullets go -
    player.crosshair.image = laserMagnumT; // - and it also looks like a gun
    player.name = "PLAYER"
    player.character.name = "PLAYERCHARACTER"

    // these are all to do with the starting menu and they only appear at the start of the game so I didn't declare their variable names in the holy block of declarations.
    // they are clickable sprites placed over the start menu text - they allow you to actually click the text.
    menuPlay = new Sprite(450, windowHeight - 3 * (windowHeight / 8) - 50, 500, 100, 's'); // the play button
    menuInst = new Sprite(650, windowHeight - 2 * (windowHeight / 8) - 50, 900, 100, 's'); //the instructions button
    menuQuit = new Sprite(450, windowHeight - (windowHeight / 8) - 50, 500, 100, 's'); // the quit button; closes the game window upon being clicked.
    menuGroup = new Group(); // a group containing all menu buttons
    menuGroup.add(menuPlay);
    menuGroup.add(menuInst);
    menuGroup.add(menuQuit);
    // well, NOW containing all menu buttons

    //these lines create the escape zone - touch it and you win
    escapeZone = new Sprite(320, 0, 200, 1000, 'd');
    escapeZone.color = "white";

    //this creates a graphics layer for the player's HUD
    hudLayer = createGraphics(windowWidth, windowHeight);

    //creates a graphics layer for all image tiles - see "build.js" for more information
    imageTileLayer = createGraphics(15000, 15000);

    //creates the "E" interact promt
    interactPrompt = new Sprite(camera.x, camera.y + windowWidth / 8, 150, 150, 's');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)

    //creates all of the groups used in the game's code
    enemyGroup = new Group();
    enemyBulletGroup = new Group();
    playerBulletGroup = new Group();
    readerGroup = new Group();
    doorGroup = new Group();
    itemGroup = new Group();
    hiddenGroup = new Group();
    checkpointGroup = new Group();
    teleporterGroup = new Group();
    allDoors = new Group();

    //ensures that the player can walk over items
    itemGroup.overlap(player);

    //makes the player's base hitbox invisible
    hiddenGroup.add(player);

    itemExecution = true; // a value set to true if an item works when it is used to make sure that it is not deleted if the item isn't actually used.
    gameState = 0;
    freeze = false;
    allSprites.autoCull = false; //sprites will never auto-despawn if they get too far off-camera
    interactPrompt.layer = 999; //makes the interaction prompt draw over everything else
    hudTint = 255; // DEPRECATED
    allSprites.autoDraw = false; //sprites must be drawn manually
    resizeImages();
    buildMap();
    player.pos = lczFloorStart[0].pos
    fadeProgress = 0; // makes the game visible
};