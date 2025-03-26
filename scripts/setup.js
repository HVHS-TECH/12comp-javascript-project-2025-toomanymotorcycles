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
let 
gameState, //what state the game is in (on the menu screen, playing the game, on the win screen, on the losing screen etc.)
hudLayer,
hudTint,
hudHealthbarLerpCurrentValue = 900,
freeze,
deathlock,
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
enemyBulletGroup, //more like enemy bullet hell group...
hiddenGroup,
interactPrompt; // the "E" interaction prompt that appears whenever you interact with something.

let cheatPrevention = false; //cheat prevention

let
securityIDTextures;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //sleep function (WHY IS THIS NOT NATIVE IN JAVASCRIPT)

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);
    player = new Sprite(1000,300,50,50,'d');
    escapeZone = new Sprite(1000,-1000,200,200,'d');
    escapeZone.color = "white";
    hudLayer = createGraphics(windowWidth,windowHeight);
    interactPrompt = new Sprite(camera.x,camera.y+windowWidth/8,150,150,'s');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)
    enemyGroup = new Group();
    enemyBulletGroup = new Group();
    readerGroup = new Group();
    doorGroup = new Group();
    itemGroup = new Group();
    hiddenGroup = new Group();
    checkpointGroup = new Group();
    itemGroup.overlap(player);
    player.clearanceLevel = 0;
    player.speed = 5;
    player.staminaMax = 120;
    player.stamina = player.staminaMax;
    player.fatigued = false;
    player.inventory = [];
    player.canUseItems = true;
    player.canUseStaminaItems = true;
    player.canUseHealthItems = true;
    player.health = 100;
    player.lives = 3;
    player.mass = 1000
    itemExecution = true;
    gameState = 1;
    freeze = false;
    testImage.resize(125,125)
    ident1.resize(125,125);
    ident2.resize(125,125);
    ident3.resize(125,125);
    ident4.resize(125,125);
    ident5.resize(125,125);
    ident6.resize(125,125);
    readerT1.resize(30,40);
    readerT2.resize(30,40);
    readerT3.resize(30,40);
    readerT4.resize(30,40);
    readerT5.resize(30,40);
    readerT6.resize(30,40);
    readerTFail.resize(30,40);
    readerTPass.resize(30,40);
    readerTLockdown.resize(30,40);
    allSprites.autoCull = false;
    interactPrompt.layer = 999;
    hudTint = 255;
    buildMap();
};