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
tilemapSetup = true;

let cheatPrevention = false; //cheat prevention - was never used

let
itemTextures,
itemDisplayTextures,
securityIDTextures;

// AMEN


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //sleep function, not my code (WHY IS THIS NOT NATIVE TO JAVASCRIPT)

function resizeImages() {
    readerT1.resize(30,40);
    readerT2.resize(30,40);
    readerT3.resize(30,40);
    readerT4.resize(30,40);
    readerT5.resize(30,40);
    readerT6.resize(30,40);
    readerTFail.resize(30,40);
    readerTPass.resize(30,40);
    readerTLockdown.resize(30,40);
    for (i=0; i<itemTextures.length; i++) {
            itemTextures[i].resize(30,30)
    }
    for (i=0; i<itemDisplayTextures.length; i++) {
        itemDisplayTextures[i].resize(125,125)
    }
    for (i=0; i<signTextures.length; i++) {
        signTextures[i].resize(125,75)
    }
    puddleOfCrystal.resize(60,60);
    enemyTurret.resize(80,80);
    laserBullet.resize(20,20);
    laserMagnumT.resize(60,60);
}

function setupRestart() {
    player.clearanceLevel = 0;
    player.speed = 5;
    player.speedMultiplier = 1;
    player.staminaMax = 120;
    player.stamina = player.staminaMax;
    player.fatigued = false;
    player.inventory = [];
    player.canUseItems = true;
    player.canUseStaminaItems = true;
    player.canUseHealthItems = true;
    player.canUseSpeedItems = true;
    player.health = 100;
    player.lives = 3;
    player.loadedAmmo = 6;
    player.shotCooldown = false;
    player.shotCooldownReg = 500;
    player.shotCooldownReload = 8200;
    player.mass = 1000;
    player.pos = lczFloorStart[0].pos
    fadeProgress = 0;
    killscore = 0;
}

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight, "pixellated x100");
    player = new Sprite(1000,500,50,15,'d');
    player.character = new Sprite(player.x,player.y,50,120,'d');
    player.crosshair = new Sprite(player.character.x,player.character.y,40,40,'d');
    player.crosshair.image = laserMagnumT;
    player.name = "PLAYER"
    player.character.name = "PLAYERCHARACTER"
    // these are all to do with the starting menu and they only appear at the start of the game so I didn't declare their variable names in the holy block of declarations.
    menuPlay = new Sprite(450, windowHeight - 650, 500, 100, 's');
    menuInst = new Sprite(650, windowHeight - 525, 900, 100, 's');
    menuQuit = new Sprite(450, windowHeight - 400, 500, 100, 's');
    menuGroup = new Group();
    menuGroup.add(menuPlay);
    menuGroup.add(menuInst);
    menuGroup.add(menuQuit);
    escapeZone = new Sprite(1000,-1000,200,200,'d');
    escapeZone.color = "white";
    hudLayer = createGraphics(windowWidth,windowHeight);
    imageTileLayer = createGraphics(15000,15000);
    interactPrompt = new Sprite(camera.x,camera.y+windowWidth/8,150,150,'s');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)
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
    itemGroup.overlap(player);
    hiddenGroup.add(player);
    itemExecution = true;
    gameState = 0;
    freeze = false;
    allSprites.autoCull = false;
    interactPrompt.layer = 999;
    hudTint = 255;
    allSprites.autoDraw = false;
    resizeImages();
    buildMap();
    player.pos = lczFloorStart[0].pos
    fadeProgress = 0;
};