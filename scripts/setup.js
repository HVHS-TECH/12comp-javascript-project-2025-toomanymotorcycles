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
let gameState,player,gameMap,gameHitbox,inventory,clearnceLevel,enemyGroup,readerGroup,playerSpeed,playerStamina;
function preload() {
    //Preloading the game's asset files to avoid any errors.
};

function setup() {
    //Initial game setup. Creation of the player sprite, the enemy group etc. etc.
    canvas = new Canvas(windowWidth,windowHeight);
    player = new Sprite();
    enemyGroup = new Group();
    readerGroup = new Group();
    clearnceLevel = 0;
    playerSpeed = 5;
    playerStamina = 120;
    inventory = new Array();
    gameState = 1;
};

