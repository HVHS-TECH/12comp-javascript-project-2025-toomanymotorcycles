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
        INITIAL SETUP (preload and setup)
        0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
************************************************/
let 
gameState, //what state the game is in (on the menu screen, playing the game, on the win screen, on the losing screen etc.)
freeze,
deathlock,
currentCheckpoint, //the player's current checkpoint.
itemExecution, //a check variable - whenever an item is used successfully this is set to true. This is to make sure that an item isn't removed from the player's inventory when it isn't supposed to be.
player, //the player sprite.
gameMap, //the game map, this shows the textures.
gameHitbox, //the game hitbox, this controls where you can and can't go. This is where the walls are actually placed.
enemyGroup, //all the enemies currently spawned.
readerGroup, //all the card readers in the game.
doorGroup, //all the doors in the game.
itemGroup, //all the loose items in the game.
checkpointGroup, //all the checkpoints in the game.
enemyBulletGroup, //more like enemy bullet hell group...
interactPrompt; // the "E" interaction prompt that appears whenever you interact with something.

let
randomReader,
randomReader2;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //sleep function (WHY IS THIS NOT NATIVE IN JAVASCRIPT)

function preload() {
    //Preloading the game's asset files to avoid any errors.
    accessDenied = loadSound("././assets/access_denied.flac");
    accessGranted = loadSound("././assets/access_granted.ogg");
    bigDoorAlarm = loadSound("././assets/klaxon1.mp3");
    smallBlastDoorOpen = loadSound("././assets/small_blast_door_open.ogg");
    smallBlastDoorClose = loadSound("././assets/small_blast_door_close.ogg");
    largeBlastDoorOpen = loadSound("././assets/large_blast_door_open.ogg");
    largeBlastDoorClose = loadSound("././assets/large_blast_door_close.ogg");
};

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);
    player = new Sprite(1000,300,50,50,'d');
    interactPrompt = new Sprite(camera.x,camera.y+windowWidth/8,150,150,'s');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.layer = 999;
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)
    enemyGroup = new Group();
    enemyBulletGroup = new Group();
    readerGroup = new Group();
    doorGroup = new Group();
    itemGroup = new Group();
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
    player.health = 100;
    player.lives = 3;
    player.mass = 1000
    itemExecution = true;
    gameState = 1;
    freeze = false;
    randomItem = new Item(30,30,30,30,7)
    randomItem2 = new Item(50,50,30,30,7)
    randomItem3 = new Item(70,70,30,30,7)
    randomItem4 = new Item(90,90,30,30,7)
    randomItem5 = new Item(110,110,30,30,8)
    randomItem6 = new Item(210,210,30,30,8)
    keycard1 = new Item(310,310,30,30,1,true)
    randomDoor = new Door(660,800,0,2,4500)
    randomReader = new Reader(350,810,1,randomDoor,null,12000)
    randomReader2 = new Reader(1000,625,1,randomDoor,randomReader,12000)
    randomReader.linkedReader = randomReader2;
    dumbTestEnemy = new Enemy(1000,1,75,1000,1,5,100,2,20)
    checkpoint1 = new Checkpoint(1500,300)
    allSprites.autoCull = false
};