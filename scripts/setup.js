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
itemGroup;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function preload() {
    //Preloading the game's asset files to avoid any errors.
};

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);
    player = new Sprite();
    enemyGroup = new Group();
    readerGroup = new Group();
    itemGroup = new Group();
    itemGroup.overlap(player);
    player.clearnceLevel = 0;
    player.speed = 5;
    player.staminaMax = 120;
    player.stamina = player.staminaMax;
    player.fatigued = false;
    player.inventory = [];
    player.canUseItems = true;
    player.canUseStaminaItems = true;
    itemExecution = true;
    gameState = 1;
    randomItem = new Item(30,30,30,30,0)
    randomItem2 = new Item(50,50,30,30,0)
    randomItem3 = new Item(70,70,30,30,0)
    randomItem4 = new Item(90,90,30,30,0)
    randomItem5 = new Item(110,110,30,30,1)
    randomItem6 = new Item(210,210,30,30,1)
};