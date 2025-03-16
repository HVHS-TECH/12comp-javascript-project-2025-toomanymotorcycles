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
itemGroup,
interactPrompt;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function preload() {
    //Preloading the game's asset files to avoid any errors.
};

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);

    playerSetup();
    interactSpriteSetup();

    enemyGroup = new Group();
    readerGroup = new Group();

    itemGroup = new Group();
    itemGroup.overlap(player);

    registerItems();

    itemExecution = true;
    gameState = 1;

    randomReader = new Reader(610,800,1,null,5000)
};