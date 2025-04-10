let doorClearances = [
    {clearance: 1, rotation:0 ,locked: true},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:1 ,locked: false},
    {clearance: 2, rotation:1 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 2, rotation:0 ,locked: false},
    {clearance: 1, rotation:0 ,locked: false},
    {clearance: 1, rotation:0 ,locked: false},
    {clearance: 1, rotation:0 ,locked: false},
    {clearance: 3, rotation:1 ,locked: false},
    {clearance: 3, rotation:1 ,locked: false},
    {clearance: 3, rotation:1 ,locked: false}
];

let enemyStats = [
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:60,health:99999,power:10,speed:0,atkSpeed:10,atkType:1,bulletSpread:3,killScore:-9999},
    {size:80,health:300,power:10,speed:0,atkSpeed:10,atkType:2,bulletSpread:3,killScore:200},
]

let teleporterPositions = [
    {id:4,linkId:6},
    {id:0,linkId:2},
    {id:1,linkId:3},
    {id:5,linkId:7},
    {id:2,linkId:0},
    {id:3,linkId:1},
    {id:6,linkId:4},
    {id:8,linkId:10},
    {id:7,linkId:5},
    {id:9,linkId:11},
    {id:10,linkId:8},
    {id:11,linkId:9}
];

let signTiles = [
    2,2,4,0,3,0,5,0,5,0,5,0,6,0
]

let imageValues = new Map()

let imageTiles = [];
let objectsCreated = false;

function findTileGroup(sprite) {
    return sprite.groups.find((element) => element.idNum != allSprites.idNum && element.idNum != gameMap.idNum);
}

function createDoor(tile, rotation, clearance, voicelocked) {
    newDoor = new Door(tile.x+32,tile.y-160,rotation,2,4500)
    if (rotation == 0) {
        newReader = new Reader(tile.x-255,tile.y+30,clearance,newDoor,null,12000,voicelocked)
        newReader2 = new Reader(tile.x+315,tile.y-370,clearance,newDoor,newReader,12000,voicelocked)
        newReader.linkedReader = newReader2;
        hiddenGroup.add(newReader2.sprite);
    } else {
        newReader = new Reader(tile.x-50,tile.y-450,clearance,newDoor,null,12000,voicelocked)
        newReader2 = new Reader(tile.x+115,tile.y+130,clearance,newDoor,newReader,12000,voicelocked)
        newReader.linkedReader = newReader2;
        //hiddenGroup.add(newReader2.sprite); 
    }
    
}

function spawnEnemies() {
    print("ENEMIEZ")
    for (i=0;i<enemyGroup.length;i++) {
        enemyGroup[i].moveSpeed = -1;
        enemyGroup[i].parentRef.killScore = 0;
        enemyGroup[i].health = 0;
    }
    enemyGroup.removeAll();
    killscore = 0;
    print(lczEnemy.length);
    for (i=0; i<lczEnemy.length; i++) {
        print("ENEMY")
        new Enemy(lczEnemy[i].x,lczEnemy[i].y,enemyStats[i].size,enemyStats[i].health,enemyStats[i].power,enemyStats[i].speed,enemyStats[i].atkSpeed,enemyStats[i].atkType,enemyStats[i].killScore,enemyStats[i].bulletSpread);
    }
    for (i=0; i<hczEnemy.length; i++) {
        print("ENEMY")
        new Enemy(hczEnemy[i].x,hczEnemy[i].y,enemyStats[lczEnemy.length+1+i].size,enemyStats[lczEnemy.length+1+i].health,enemyStats[lczEnemy.length+1+i].power,enemyStats[lczEnemy.length+1+i].speed,enemyStats[lczEnemy.length+1+i].atkSpeed,enemyStats[lczEnemy.length+1+i].atkType,enemyStats[lczEnemy.length+1+i].killScore,enemyStats[lczEnemy.length+1+i].bulletSpread);
    }
    reset = false;
}

function setupTilemaps() {
    if (!objectsCreated) {
lczFloor = new Group();
lczFloor.collider = "static";
lczFloor.spriteSheet = facilityTileset;
lczFloor.addAni({w:64,h:64,row:0,col:0});
imageValues.set(lczFloor.idNum,{row:0,col:0})
lczFloor.tile = "f";

lczEnemy = new Group();
lczEnemy.collider = "static";
lczEnemy.spriteSheet = facilityTileset;
lczEnemy.addAni({w:64,h:64,row:0,col:0});
imageValues.set(lczEnemy.idNum,{row:0,col:0})
lczEnemy.tile = "Ж";

lczItem = new Group();
lczItem.collider = "static";
lczItem.spriteSheet = facilityTileset;
lczItem.addAni({w:64,h:64,row:0,col:0});
imageValues.set(lczItem.idNum,{row:0,col:0})
lczItem.tile = "µ";

hczFloor = new Group();
hczFloor.collider = "static";
hczFloor.spriteSheet = facilityTileset;
hczFloor.addAni({w:64,h:64,row:0,col:1});
imageValues.set(hczFloor.idNum.idNum,{row:0,col:1});
hczFloor.tile = "F";

hczEnemy = new Group();
hczEnemy.collider = "static";
hczEnemy.spriteSheet = facilityTileset;
hczEnemy.addAni({w:64,h:64,row:0,col:0});
imageValues.set(hczEnemy.idNum,{row:0,col:1})
hczEnemy.tile = "Д";

hczItem = new Group();
hczItem.collider = "static";
hczItem.spriteSheet = facilityTileset;
hczItem.addAni({w:64,h:64,row:0,col:0});
imageValues.set(hczItem.idNum,{row:0,col:1})
hczItem.tile = "Ø";

checkpointTile = new Group();
checkpointTile.collider = "static";
checkpointTile.spriteSheet = checkpointTileTex;
checkpointTile.addAni({w:64,h:64,row:0,col:0});
imageValues.set(checkpointTile.idNum,{row:0,col:0});
checkpointTile.tile = "C";

lczFloorStart = new Group();
lczFloorStart.collider = "static";
lczFloorStart.spriteSheet = facilityTileset;
lczFloorStart.addAni({w:64,h:64,row:0,col:0});
imageValues.set(lczFloorStart.idNum,{row:0,col:0});
lczFloorStart.tile = "S";

teleporterCreator = new Group();
teleporterCreator.collider = "static";
teleporterCreator.spriteSheet = facilityTileset;
teleporterCreator.addAni({w:64,h:64,row:0,col:0});
imageValues.set(teleporterCreator.idNum,{row:0,col:0});
teleporterCreator.tile = "'";

lczFloorBigDoor = new Group();
lczFloorBigDoor.collider = "static";
lczFloorBigDoor.spriteSheet = facilityTileset;
lczFloorBigDoor.addAni({w:64,h:64,row:0,col:0});
imageValues.set(lczFloorBigDoor.idNum,{row:0,col:0});
lczFloorBigDoor.tile = "d";

hczFloorBigDoor = new Group();
hczFloorBigDoor.collider = "static";
hczFloorBigDoor.spriteSheet = facilityTileset;
hczFloorBigDoor.addAni({w:64,h:64,row:0,col:0});
imageValues.set(hczFloorBigDoor.idNum,{row:0,col:1});
hczFloorBigDoor.tile = "D";

signCreator = new Group();
signCreator.collider = "static";
imageValues.set(signCreator.idNum,{row:1,col:0});
signCreator.tile = "ɸ";

lczWallBlue = new Group();
lczWallBlue.collider = "static";
lczWallBlue.spriteSheet = facilityTileset;
lczWallBlue.addAni({w:64,h:64,row:0,col:2});
imageValues.set(lczWallBlue.idNum,{row:0,col:2});
lczWallBlue.tile = "b";

lczWallOrange = new Group();
lczWallOrange.collider = "static";
lczWallOrange.spriteSheet = facilityTileset;
lczWallOrange.addAni({w:64,h:64,row:0,col:3});
imageValues.set(lczWallOrange.idNum,{row:0,col:3});
lczWallOrange.tile = "o";

lczWallRed = new Group();
lczWallRed.collider = "static";
lczWallRed.spriteSheet = facilityTileset;
lczWallRed.addAni({w:64,h:64,row:0,col:4});
imageValues.set(lczWallRed.idNum,{row:0,col:4});
lczWallRed.tile = "r";

lczWallPurple = new Group();
lczWallPurple.collider = "static";
lczWallPurple.spriteSheet = facilityTileset;
lczWallPurple.addAni({w:64,h:64,row:0,col:5});
imageValues.set(lczWallPurple.idNum,{row:0,col:5});
lczWallPurple.tile = "p";

lczWallGray = new Group();
lczWallGray.collider = "static";
lczWallGray.spriteSheet = facilityTileset;
lczWallGray.addAni({w:64,h:64,row:0,col:6});
imageValues.set(lczWallGray.idNum,{row:0,col:6});
lczWallGray.tile = "g";
//console_log_"group pass image value ahooga"+imageValues.get(lczWallGray.idNum));

lczWallMiddle = new Group();
lczWallMiddle.collider = "static";
lczWallMiddle.spriteSheet = facilityTileset;
lczWallMiddle.addAni({w:64,h:64,row:1,col:0});
imageValues.set(lczWallMiddle.idNum,{row:1,col:0});
lczWallMiddle.tile = "m";
//console_log_"group fail image value ahooga"+imageValues.get(lczWallMiddle.idNum));

lczWallMiddleCollision = new Group();
lczWallMiddleCollision.collider = "static";
lczWallMiddleCollision.spriteSheet = facilityTileset;
lczWallMiddleCollision.addAni({w:64,h:64,row:1,col:0});
imageValues.set(lczWallMiddleCollision.idNum,{row:1,col:0});
lczWallMiddleCollision.tile = "æ";

lczWallTopCollision = new Group();
lczWallTopCollision.collider = "static";
lczWallTopCollision.spriteSheet = facilityTileset;
lczWallTopCollision.addAni({w:64,h:64,row:2,col:1});
imageValues.set(lczWallTopCollision.idNum,{row:2,col:1});
lczWallTopCollision.tile = "þ";

lczWallCrack1 = new Group();
lczWallCrack1.collider = "static";
lczWallCrack1.spriteSheet = facilityTileset;
lczWallCrack1.addAni({w:64,h:64,row:1,col:1});
imageValues.set(lczWallCrack1.idNum,{row:1,col:1});
lczWallCrack1.tile = "1";

lczWallCrack2 = new Group();
lczWallCrack2.collider = "static";
lczWallCrack2.spriteSheet = facilityTileset;
lczWallCrack2.addAni({w:64,h:64,row:1,col:2});
imageValues.set(lczWallCrack2.idNum,{row:1,col:2});
lczWallCrack2.tile = "2";

lczWallCrack3 = new Group();
lczWallCrack3.collider = "static";
lczWallCrack3.spriteSheet = facilityTileset;
lczWallCrack3.addAni({w:64,h:64,row:1,col:3});
imageValues.set(lczWallCrack3.idNum,{row:1,col:3});
lczWallCrack3.tile = "3";

lczWallClaw1 = new Group();
lczWallClaw1.collider = "static";
lczWallClaw1.spriteSheet = facilityTileset;
lczWallClaw1.addAni({w:64,h:64,row:1,col:4});
imageValues.set(lczWallClaw1.idNum,{row:1,col:4});
lczWallClaw1.tile = "4";

lczWallClaw2 = new Group();
lczWallClaw2.collider = "static";
lczWallClaw2.spriteSheet = facilityTileset;
lczWallClaw2.addAni({w:64,h:64,row:1,col:5});
imageValues.set(lczWallClaw2.idNum,{row:1,col:5});
lczWallClaw2.tile = "5";

lczWallClaw3 = new Group();
lczWallClaw3.collider = "static";
lczWallClaw3.spriteSheet = facilityTileset;
lczWallClaw3.addAni({w:64,h:64,row:1,col:6});
imageValues.set(lczWallClaw3.idNum,{row:1,col:6});
lczWallClaw3.tile = "6";

lczWallClaw4 = new Group();
lczWallClaw4.collider = "static";
lczWallClaw4.spriteSheet = facilityTileset;
lczWallClaw4.addAni({w:64,h:64,row:2,col:0});
imageValues.set(lczWallClaw4.idNum,{row:2,col:0});
lczWallClaw4.tile = "7";

lczWallTop = new Group();
lczWallTop.collider = "static";
lczWallTop.spriteSheet = facilityTileset;
lczWallTop.addAni({w:64,h:64,row:2,col:1});
imageValues.set(lczWallTop.idNum,{row:2,col:1});
lczWallTop.tile = "t";

hczWallBottom = new Group();
hczWallBottom.collider = "static";
hczWallBottom.spriteSheet = facilityTileset;
hczWallBottom.addAni({w:64,h:64,row:5,col:4});
imageValues.set(hczWallBottom.idNum,{row:5,col:4});
hczWallBottom.tile = "B";

hczWallMiddle = new Group();
hczWallMiddle.collider = "static";
hczWallMiddle.spriteSheet = facilityTileset;
hczWallMiddle.addAni({w:64,h:64,row:5,col:5});
imageValues.set(hczWallMiddle.idNum,{row:5,col:5});
hczWallMiddle.tile = "M";

hczWallClaw1 = new Group();
hczWallClaw1.collider = "static";
hczWallClaw1.spriteSheet = facilityTileset;
hczWallClaw1.addAni({w:64,h:64,row:5,col:6});
imageValues.set(hczWallClaw1.idNum,{row:5,col:6});
hczWallClaw1.tile = "!";

hczWallClaw2 = new Group();
hczWallClaw2.collider = "static";
hczWallClaw2.spriteSheet = facilityTileset;
hczWallClaw2.addAni({w:64,h:64,row:6,col:0});
imageValues.set(hczWallClaw2.idNum,{row:6,col:0});
hczWallClaw2.tile = "@";

hczWallClaw3 = new Group();
hczWallClaw3.collider = "static";
hczWallClaw3.spriteSheet = facilityTileset;
hczWallClaw3.addAni({w:64,h:64,row:6,col:1});
imageValues.set(hczWallClaw3.idNum,{row:6,col:1});
hczWallClaw3.tile = "#";

hczWallClaw4 = new Group();
hczWallClaw4.collider = "static";
hczWallClaw4.spriteSheet = facilityTileset;
hczWallClaw4.addAni({w:64,h:64,row:6,col:2});
imageValues.set(hczWallClaw4.idNum,{row:6,col:2});
hczWallClaw4.tile = "$";

hczWallTop = new Group();
hczWallTop.collider = "static";
hczWallTop.spriteSheet = facilityTileset;
hczWallTop.addAni({w:64,h:64,row:6,col:3});
imageValues.set(hczWallTop.idNum,{row:6,col:3});
hczWallTop.tile = "T";

cautionLine1 = new Group();
cautionLine1.collider = "static";
cautionLine1.spriteSheet = facilityTileset;
cautionLine1.addAni({w:64,h:64,row:6,col:4});
imageValues.set(cautionLine1.idNum,{row:6,col:4});
cautionLine1.tile = "x";

cautionLine2 = new Group();
cautionLine2.collider = "static";
cautionLine2.spriteSheet = facilityTileset;
cautionLine2.addAni({w:64,h:64,row:6,col:5});
imageValues.set(cautionLine2.idNum,{row:6,col:5});
cautionLine2.tile = "y";

wallTopLeft = new Group();
wallTopLeft.collider = "static";
wallTopLeft.spriteSheet = facilityTileset;
wallTopLeft.addAni({w:64,h:64,row:2,col:2});
imageValues.set(wallTopLeft.idNum,{row:2,col:2});
wallTopLeft.tile = ">";

wallTopRight = new Group();
wallTopRight.collider = "static";
wallTopRight.spriteSheet = facilityTileset;
wallTopRight.addAni({w:64,h:64,row:2,col:3});
imageValues.set(wallTopRight.idNum,{row:2,col:3});
wallTopRight.tile = "<";

wallTopUp = new Group();
wallTopUp.collider = "static";
wallTopUp.spriteSheet = facilityTileset;
wallTopUp.addAni({w:64,h:64,row:2,col:4});
imageValues.set(wallTopUp.idNum,{row:2,col:4});
wallTopUp.tile = "^";

wallTopDown = new Group();
wallTopDown.collider = "static";
wallTopDown.spriteSheet = facilityTileset;
wallTopDown.addAni({w:64,h:64,row:2,col:5});
imageValues.set(wallTopDown.idNum,{row:2,col:5});
wallTopDown.tile = "v";

wallTopUpDown = new Group();
wallTopUpDown.collider = "static";
wallTopUpDown.spriteSheet = facilityTileset;
wallTopUpDown.addAni({w:64,h:64,row:2,col:6});
imageValues.set(wallTopUpDown.idNum,{row:2,col:6});
wallTopUpDown.tile = "%";

wallTopLeftRight = new Group();
wallTopLeftRight.collider = "static";
wallTopLeftRight.spriteSheet = facilityTileset;
wallTopLeftRight.addAni({w:64,h:64,row:3,col:2});
imageValues.set(wallTopLeftRight.idNum,{row:3,col:2});
wallTopLeftRight.tile = "&";

wallTopLeftNarrow = new Group();
wallTopLeftNarrow.collider = "static";
wallTopLeftNarrow.spriteSheet = facilityTileset;
wallTopLeftNarrow.addAni({w:64,h:64,row:3,col:0});
imageValues.set(wallTopLeftNarrow.idNum,{row:3,col:0});
wallTopLeftNarrow.tile = "*";

wallTopRightNarrow = new Group();
wallTopRightNarrow.collider = "static";
wallTopRightNarrow.spriteSheet = facilityTileset;
wallTopRightNarrow.addAni({w:64,h:64,row:3,col:1});
imageValues.set(wallTopRightNarrow.idNum,{row:3,col:1});
wallTopRightNarrow.tile = "(";

wallTopDownNarrow = new Group();
wallTopDownNarrow.collider = "static";
wallTopDownNarrow.spriteSheet = facilityTileset;
wallTopDownNarrow.addAni({w:64,h:64,row:3,col:3});
imageValues.set(wallTopDownNarrow.idNum,{row:3,col:3});
wallTopDownNarrow.tile = ")";

wallTopUpNarrow = new Group();
wallTopUpNarrow.collider = "static";
wallTopUpNarrow.spriteSheet = facilityTileset;
wallTopUpNarrow.addAni({w:64,h:64,row:3,col:4});
imageValues.set(wallTopUpNarrow.idNum,{row:3,col:4});
wallTopUpNarrow.tile = "-";

wallTopCorner1234 = new Group();
wallTopCorner1234.collider = "static";
wallTopCorner1234.spriteSheet = facilityTileset;
wallTopCorner1234.addAni({w:64,h:64,row:3,col:5});
imageValues.set(wallTopCorner1234.idNum,{row:3,col:5});
wallTopCorner1234.tile = "=";

wallTopCorner234 = new Group();
wallTopCorner234.collider = "static";
wallTopCorner234.spriteSheet = facilityTileset;
wallTopCorner234.addAni({w:64,h:64,row:3,col:6});
imageValues.set(wallTopCorner234.idNum,{row:3,col:6});
wallTopCorner234.tile = "{";

wallTopCorner134 = new Group();
wallTopCorner134.collider = "static";
wallTopCorner134.spriteSheet = facilityTileset;
wallTopCorner134.addAni({w:64,h:64,row:4,col:0});
imageValues.set(wallTopCorner134.idNum,{row:4,col:0});
wallTopCorner134.tile = "}";

wallTopCorner123 = new Group();
wallTopCorner123.collider = "static";
wallTopCorner123.spriteSheet = facilityTileset;
wallTopCorner123.addAni({w:64,h:64,row:4,col:1});
imageValues.set(wallTopCorner123.idNum,{row:4,col:1});
wallTopCorner123.tile = "[";

wallTopCorner124 = new Group();
wallTopCorner124.collider = "static";
wallTopCorner124.spriteSheet = facilityTileset;
wallTopCorner124.addAni({w:64,h:64,row:4,col:2});
imageValues.set(wallTopCorner124.idNum,{row:4,col:2});
wallTopCorner124.tile = "]";

wallTopCorner34 = new Group();
wallTopCorner34.collider = "static";
wallTopCorner34.spriteSheet = facilityTileset;
wallTopCorner34.addAni({w:64,h:64,row:4,col:3});
imageValues.set(wallTopCorner34.idNum,{row:4,col:3});
wallTopCorner34.tile = ";";

wallTopCorner12 = new Group();
wallTopCorner12.collider = "static";
wallTopCorner12.spriteSheet = facilityTileset;
wallTopCorner12.addAni({w:64,h:64,row:4,col:4});
imageValues.set(wallTopCorner12.idNum,{row:4,col:4});
wallTopCorner12.tile = ":";

wallTopCorner13 = new Group();
wallTopCorner13.collider = "static";
wallTopCorner13.spriteSheet = facilityTileset;
wallTopCorner13.addAni({w:64,h:64,row:4,col:5});
imageValues.set(wallTopCorner13.idNum,{row:4,col:5});
wallTopCorner13.tile = "?";

wallTopCorner24 = new Group();
wallTopCorner24.collider = "static";
wallTopCorner24.spriteSheet = facilityTileset;
wallTopCorner24.addAni({w:64,h:64,row:4,col:6});
imageValues.set(wallTopCorner24.idNum,{row:4,col:6});
wallTopCorner24.tile = "/";

wallTopCorner1 = new Group();
wallTopCorner1.collider = "static";
wallTopCorner1.spriteSheet = facilityTileset;
wallTopCorner1.addAni({w:64,h:64,row:5,col:0});
imageValues.set(wallTopCorner1.idNum,{row:5,col:0});
wallTopCorner1.tile = "|";

wallTopCorner3 = new Group();
wallTopCorner3.collider = "static";
wallTopCorner3.spriteSheet = facilityTileset;
wallTopCorner3.addAni({w:64,h:64,row:5,col:1});
imageValues.set(wallTopCorner3.idNum,{row:5,col:1});
wallTopCorner3.tile = "K";

wallTopCorner4 = new Group();
wallTopCorner4.collider = "static";
wallTopCorner4.spriteSheet = facilityTileset;
wallTopCorner4.addAni({w:64,h:64,row:5,col:2});
imageValues.set(wallTopCorner4.idNum,{row:5,col:2});
wallTopCorner4.tile = "L";

wallTopCorner2 = new Group();
wallTopCorner2.collider = "static";
wallTopCorner2.spriteSheet = facilityTileset;
wallTopCorner2.addAni({w:64,h:64,row:5,col:3});
imageValues.set(wallTopCorner2.idNum,{row:5,col:3});
wallTopCorner2.tile = "R";

}

    gameMap = new Tiles(
        [
            ".....<ffffffffff>..........................................................................................vvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvv.",
            ".....<ffffffffff>.........................................................................................<tttttttttttttttttttttttt><ttttttttttttttttttt><ttttttttttttttttttt><tttttttttttttttttttttttt>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<gggggggggggggggggggggggg><ggggggggggggggggggg><ggggggggggggggggggg><gggggggggggggggggggggggg>",
            ".....<ffffffffff>................................<vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".....<ffffffffff>................................<ttttttttttttttttttttttttttttttttttttttttttttttttttttttt><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".....R^ffffffff^|................................<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".vvvvvvffffffffvvvvvv..............vvvvvvvvvvvvv.<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>.^^^^^^^^ffffffff^^^^^^^^..^^^^^^ffffffff^^^^^..^^^^^ffffffff^^^^^^..^^^^^^^^ffffffff^^^^^^^^.",
            "<tttttxffffffffxttttt>............<ttttttttttttt><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>.vvvvvvvvffffffffvvvvvvvvvvvvvvvvffffffffvvvvvvvvvvvvffffffffvvvvvvvvvvvvvvvvffffffffvvvvvvvv.",
            "<mmmmmyffffffffymmmmm>............<mmmmmmmmmmmmm><bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb><tttttttxffffffffxttttttttttttttxffffffffxttttttttttxffffffffxttttttttttttttxffffffffxttttttt>",
            "<mmɸmmxffffffffxmmɸmm>............<mmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmyffffffffymmmmmmmmmmmmmmyffffffffymmmmmmmmmmyffffffffymmmmmmmmmmmmmmyffffffffymmmmmmm>",
            "<mmCmmyfffdffffymmmmm>............<mmmmmmmmmmmmm><ffffffffffffffffffffffffffffffffЖffffffffffffffffffffff><mmɸmɸmmxffffffffxmmmmmmmmmmmmmmxffffffffxmmmmmmmmmmxffffffffxmmmmmmmmmmmmmmxffffffffxmmmmmmm>",
            "<bbbbbxffffffffxbbbbb>............<ggggggggggggg><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmyfffdffffymmmmmmmmmmmmmmyfffdffffymmmmmmmmmmyfffdffffymmmmmmmmmmmmmmyfffdffffymmmmmmm>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><oooooooxffffffffxooooooooooooooxffffffffxooooooooooxffffffffxooooooooooooooxffffffffxooooooo>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffffffffffffffffffffffffffffffffSfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffff>",
            "<ffffffffffffffЖfffff>............<ffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffffff'fffffffff'ffffffffffffffffffЖffffffffffffffffffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffffffffffЖfffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffff>^^^^^^^^^^^^^<ffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffЖfffffffffffffffffffffffffffff>.............<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖfffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffff>vvvvvvvvvvvvv<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffffdffffffffffffffffffffþtttttttttttttþfffffffffffffffffffffdfffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffffæmmmmmmmmmmmmmæfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<fffЖffffffffffffffff>............<fffffffffffff><fffffffffffffffffffæmmmmmɸmɸmmmmmæfffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffæmmmmmmmmmmmmmæffffffffffЖffffffffff>.^^^^^^^^ffffffff^^^^^^^^^^^^^^^^ffffffff^^^^^^^^^^^^ffffffff^^^^^^^^^^^^^^^^ffffffff^^^^^^^^.",
            "<ffffffffffffffffffff>.............^^^^^^^^^^^^^.<fffffffffffffffffffbbbbbbbbbbbbbbbfffffffffffffffffffff>.vvvvvvvvffffffffvvvvvvvv..vvvvvvffffffffvvvvv..vvvvvffffffffvvvvvv..vvvvvvvvffffffffvvvvvvvv.",
            "<ffffffffffffffffffff>...........................<fffffffffffffffffffffffffffffffffffffffffffffffffffffff><tttttttxffffffffxttttttt><tttttxffffffffxtttt><ttttxffffffffxttttt><tttttttxffffffffxttttttt>",
            "<ffff'ffffffffff'ffff>...........................<ffffffffffffffffffffffffffЖffffffffffffffffffffffffffff><mmmmmmmyffffffffymmmmmmm><mmmmmyffffffffymmmm><mmmmyffffffffymmmmm><mmmmmmmyffffffffymmmmmmm>",
            ".^^^^^^^^^^^^^^^^^^^^.............................^^^^ffffffff^^^^^^^^^^^ffffffff^^^^^^^^^^^^ffffffff^^^^.<mmmmmmmxffffffffxmmmmmmm><mmmmmxffffffffxmmmm><mmmmxffffffffxmmmmm><mmmmmmmxffffffffxmmmmmmm>",
            "..................................................vvvvffffffffvvvv..vvvvvffffffffvvvvvv..vvvvffffffffvvvv.<mmmmmmmyfffdffffymmmmmmm><mmmmmyfffdffffymmmm><mmmmyfffdffffymmmmm><mmmmmmmyfffdffffymmmmmmm>",
            ".................................................<tttxffffffffxttt><ttttxffffffffxttttt><tttxffffffffxttt><gggggggxffffffffxggggggg><gggggxffffffffxgggg><ggggxffffffffxggggg><gggggggxffffffffxggggggg>",
            ".................................................<mmmyffffffffymmm><mmmmyffffffffymmmmm><mmmyffffffffymmm><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".................................................<mmmxffffffffxmmm><mmmmxffffffffxmmmmm><mmmxffffffffxmmm><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".................................................<mmmyfffdffffymmm><mmmmyfffdffffymmmmm><mmmyfffdffffymmm><ffffffffffffffffffffffff><fffffffffffffffffff><fffffffffffffffffff><ffffffffffffffffffffffff>",
            ".................................................<gggxffffffffxggg><ggggxffffffffxggggg><gggxffffffffxggg>.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
            ".................................................<fffffffЖffffffff><fffffffffffffffffff><ffffffffffffffff>..............................................................................................",
            ".................................................<ffffffffffffffff><fffffffffffffffffff><ffffffЖfffffffff>..............................................................................................",
            ".................................................<ffffffffffffffff><ffffffffffЖffffffff><ffffffffffffffff>..............................................................................................",
            ".................................................<ffffffffffffffff><fffffffffffffffffff><ffffffffffffffff>..............................................................................................",
            ".................................................<ffffffffffffffff><fffffffffffffffffff><ffffffffffffffff>..............................................................................................",
            ".................................................<ffffffffffffffff><fffffffffffffffffff><ffffffffffffffff>..............................................................................................",
            "..................................................^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^...............................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            ".vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg><gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg>",
            "<fffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^..^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^>",
            "<vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv>",
            "<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt><tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmɸmɸmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo><rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖfffffffffffffffffff>",
            "<'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<fffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'>",
            "<'fffffffffffffffffffffffffffffffffffffffffffffffffffЖfffffffffffffffffffffdfffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^..^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^>",
            "<vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv>",
            "<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt><tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg><gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            ".^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^..^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            ".vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv..vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            "<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt><ttttttttttttttttttttttttttttttttttttttttttttttttttttttt><TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmɸmɸmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmɸmɸmm><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg><ggggggggggggggggggggggggggggggggggggggggggggggggggggggg><BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffЖfffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.<fffffffffffffffffffffffffffffffffffffffffffffffffffffff>.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^>",
            "<vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.<fffffffffffffffffffffffffffffffffffffffffffffffffffffff>.vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv>",
            "<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt><ffffffffffffffffffffffffffffffffffffffffЖffffffffffffff><TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><MMɸMɸMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr><ffffffffffffffffffffffffЖffffffffffffffffffffffffffffff><BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffЖfffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<fffffffffffЖffffffffffffffffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffЖffffffffffffffffffffDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffffffЖffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.<ffffffffffffffffffЖffffffffffffffffffffffffffffffffffff>.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^>",
            "<vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.<fffffffffffffffffffffffffffffffffffffffffffffffffffffff>.vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv>",
            "<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffЖfffffffffff><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm><ffffffffffffffffffЖffffffffffffffffffffffffffffffffffff><MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffЖffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            ".^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^..^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^..^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
            "........................................................................................................................................................................................................",
        ],
        0, 0, //x, y
        64, 64 //w, h
    )
    if (!objectsCreated) {
        objectsCreated = true;
        for (i=0; i<lczFloorBigDoor.length; i++) {
            allDoors.add(lczFloorBigDoor[i]);
        }
        for (i=0; i<hczFloorBigDoor.length; i++) {
            allDoors.add(hczFloorBigDoor[i]);
        }
        for (i=0; i<allDoors.length; i++) {
            createDoor(allDoors[i],doorClearances[i].rotation,doorClearances[i].clearance,doorClearances[i].locked);
        }
        for (i=0; i<checkpointTile.length; i++) {
            hiddenGroup.add(new Checkpoint(checkpointTile[i].x,checkpointTile[i].y).sprite);
        }
        for (i=0; i<teleporterCreator.length; i++) {
            new Teleporter(teleporterCreator[i].x,teleporterCreator[i].y,teleporterPositions[i].id,teleporterPositions[i].linkId);
        }
        for (i=0; i<signCreator.length; i++) {
            new Sign(signCreator[i].x,signCreator[i].y, signTiles[i]);
        }
    }
    //console_log_"row: "+imageValues.get(findTileGroup(gameMap[5]).idNum).row)
    //console_log_"id: "+findTileGroup(gameMap[8730]).idNum);
    //console_log_"group pass: "+findTileGroup(gameMap[8729]).idNum);
    //console_log_"group fail: "+findTileGroup(gameMap[8730]).idNum);
    //console_log_"group fail image value "+imageValues.get(21));
    //console_log_"light middle wall id "+lczWallMiddle.idNum);
    //console_log_gameMap[8730]);
    //console_log_)
    for (v=0;v<20;v++) {
    for (i=0;i<gameMap.length;i++) {
        try {
        if (lczWallBlue.includes(gameMap[i]) || cautionLine1.includes(gameMap[i]) || cautionLine2.includes(gameMap[i]) || lczWallMiddleCollision.includes(gameMap[i]) || lczWallTopCollision.includes(gameMap[i]) || signCreator.includes(gameMap[i]) || lczWallRed.includes(gameMap[i]) || lczWallOrange.includes(gameMap[i]) || lczWallPurple.includes(gameMap[i]) || lczWallGray.includes(gameMap[i]) || hczWallBottom.includes(gameMap[i]) || wallTopLeft.includes(gameMap[i]) || wallTopRight.includes(gameMap[i]) || wallTopUp.includes(gameMap[i]) || lczFloorStart.includes(gameMap[i]) || lczEnemy.includes(gameMap[i]) || hczEnemy.includes(gameMap[i])) {
        } else if(!imageTiles.includes({row:1,col:0,x:gameMap[i].x,y:gameMap[i].y}) || !imageTiles.includes({row:imageValues.get(findTileGroup(gameMap[i]).idNum).row,col:imageValues.get(findTileGroup(gameMap[i]).idNum).col,x:gameMap[i].x,y:gameMap[i].y})){
            //console_log_"tile "+i);
            //console_log_findTileGroup(gameMap[i]).idNum);
            if (findTileGroup(gameMap[i]).idNum == 21) {
                //console_log_"tile 21 failsafe")
                imageTiles.push({row:1,col:0,x:gameMap[i].x,y:gameMap[i].y});
            } else {
                imageTiles.push({row:imageValues.get(findTileGroup(gameMap[i]).idNum).row,col:imageValues.get(findTileGroup(gameMap[i]).idNum).col,x:gameMap[i].x,y:gameMap[i].y});
            }
            gameMap[i].remove();
        }
        } catch {
            if(!imageTiles.includes({row:1,col:0,x:gameMap[i].x,y:gameMap[i].y})){
                //console_log_"FAILSAFE")
                imageTiles.push({row:6,col:4,x:gameMap[i].x,y:gameMap[i].y})
            }
        }
    }
	};
    for(i=0;i<imageTiles.length;i++) {
        imageTileLayer.image(facilityTileset,imageTiles[i].x,imageTiles[i].y,64,64,imageTiles[i].col*64,imageTiles[i].row*64,64,64); //I made a mistake here and fixed it by swapping the uses of the row and column values.
    }
};

function buildMap() {
    setupTilemaps()
    randomItem = new Item(30,30,0)
    randomItem.color = "red"
    randomItem2 = new Item(50,50,7)
    randomItem3 = new Item(70,70,10)
    randomItem4 = new Item(90,90,8)
    randomItem5 = new Item(110,110,9)
    randomItem6 = new Item(210,1500,13)
    keycard1 = new Item(310,1540,4,true)
    //dumbTestEnemy = new Enemy(1000,0,60,1000,1,5,10,2,0)
}

//lczFloor.removeColliders()