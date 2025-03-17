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
gameState,
itemExecution,
player,
gameMap,
gameHitbox,
enemyGroup,
readerGroup,
doorGroup,
itemGroup,
interactPrompt;

let
randomReader,
randomReader2;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function preload() {
    //Preloading the game's asset files to avoid any errors.
    accessDenied = loadSound("././assets/access_denied.flac");
    accessGranted = loadSound("././assets/access_granted.ogg");
    smallBlastDoorOpen = loadSound("././assets/small_blast_door_open.ogg");
    smallBlastDoorClose = loadSound("././assets/small_blast_door_close.ogg");
    largeBlastDoorOpen = loadSound("././assets/large_blast_door_open.ogg");
    largeBlastDoorClose = loadSound("././assets/large_blast_door_close.ogg");
};

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);
    player = new Sprite();
    print(player.width)
    interactPrompt = new Sprite(camera.x,camera.y+windowWidth/8,150,150,'s');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.layer = 999;
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)
    enemyGroup = new Group();
    readerGroup = new Group();
    doorGroup = new Group();
    itemGroup = new Group();
    itemGroup.overlap(player);
    player.clearanceLevel = 0;
    player.speed = 5;
    player.staminaMax = 120;
    player.stamina = player.staminaMax;
    player.fatigued = false;
    player.inventory = [];
    player.canUseItems = true;
    player.canUseStaminaItems = true;
    player.layer = -1000;
    itemExecution = true;
    gameState = 1;
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
    player.layer = 1000;
};