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
    gameState = 1;
    randomItem = new Item(30,30,30,30,0)
};