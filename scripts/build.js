let doorClearances = [{clearance: 1, rotation:0 ,locked: false},{clearance: 1, rotation:0 ,locked: true},{clearance: 2, rotation:1 ,locked: false},{clearance: 1, rotation:1 ,locked: false}]
let teleporterPositions = [{id:0,linkId:2},{id:1,linkId:3},{id:2,linkId:0},{id:3,linkId:1}];
let imageTiles = [];
let objectsCreated = false;

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

function setupTilemaps() {
    if (!objectsCreated) {
lczFloor = new Group();
lczFloor.collider = "static";
lczFloor.spriteSheet = facilityTileset;
lczFloor.addAni({w:64,h:64,row:0,col:0});
lczFloor.tile = "f";

checkpointTile = new Group();
checkpointTile.collider = "static";
checkpointTile.spriteSheet = checkpointTileTex;
checkpointTile.addAni({w:64,h:64,row:0,col:0});
checkpointTile.tile = "C";

lczFloorStart = new Group();
lczFloorStart.collider = "static";
lczFloorStart.spriteSheet = facilityTileset;
lczFloorStart.addAni({w:64,h:64,row:0,col:0});
lczFloorStart.tile = "S";

teleporterCreator = new Group();
teleporterCreator.collider = "static";
teleporterCreator.spriteSheet = facilityTileset;
teleporterCreator.addAni({w:64,h:64,row:0,col:0});
teleporterCreator.tile = "'";

lczFloorBigDoor = new Group();
lczFloorBigDoor.collider = "static";
lczFloorBigDoor.spriteSheet = facilityTileset;
lczFloorBigDoor.addAni({w:64,h:64,row:0,col:0});
lczFloorBigDoor.tile = "D";

lczWallBlue = new Group();
lczWallBlue.collider = "static";
lczWallBlue.spriteSheet = facilityTileset;
lczWallBlue.addAni({w:64,h:64,row:0,col:2});
lczWallBlue.tile = "b";

lczWallOrange = new Group();
lczWallOrange.collider = "static";
lczWallOrange.spriteSheet = facilityTileset;
lczWallOrange.addAni({w:64,h:64,row:0,col:3});
lczWallOrange.tile = "o";

lczWallRed = new Group();
lczWallRed.collider = "static";
lczWallRed.spriteSheet = facilityTileset;
lczWallRed.addAni({w:64,h:64,row:0,col:4});
lczWallRed.tile = "r";

lczWallPurple = new Group();
lczWallPurple.collider = "static";
lczWallPurple.spriteSheet = facilityTileset;
lczWallPurple.addAni({w:64,h:64,row:0,col:5});
lczWallPurple.tile = "p";

lczWallGray = new Group();
lczWallGray.collider = "static";
lczWallGray.spriteSheet = facilityTileset;
lczWallGray.addAni({w:64,h:64,row:0,col:6});
lczWallGray.tile = "g";

lczWallMiddle = new Group();
lczWallMiddle.collider = "static";
lczWallMiddle.spriteSheet = facilityTileset;
lczWallMiddle.addAni({w:64,h:64,row:1,col:0});
lczWallMiddle.tile = "m";

lczWallCrack1 = new Group();
lczWallCrack1.collider = "static";
lczWallCrack1.spriteSheet = facilityTileset;
lczWallCrack1.addAni({w:64,h:64,row:1,col:1});
lczWallCrack1.tile = "1";

lczWallCrack2 = new Group();
lczWallCrack2.collider = "static";
lczWallCrack2.spriteSheet = facilityTileset;
lczWallCrack2.addAni({w:64,h:64,row:1,col:2});
lczWallCrack2.tile = "2";

lczWallCrack3 = new Group();
lczWallCrack3.collider = "static";
lczWallCrack3.spriteSheet = facilityTileset;
lczWallCrack3.addAni({w:64,h:64,row:1,col:3});
lczWallCrack3.tile = "3";

lczWallClaw1 = new Group();
lczWallClaw1.collider = "static";
lczWallClaw1.spriteSheet = facilityTileset;
lczWallClaw1.addAni({w:64,h:64,row:1,col:4});
lczWallClaw1.tile = "4";

lczWallClaw2 = new Group();
lczWallClaw2.collider = "static";
lczWallClaw2.spriteSheet = facilityTileset;
lczWallClaw2.addAni({w:64,h:64,row:1,col:5});
lczWallClaw2.tile = "5";

lczWallClaw3 = new Group();
lczWallClaw3.collider = "static";
lczWallClaw3.spriteSheet = facilityTileset;
lczWallClaw3.addAni({w:64,h:64,row:1,col:6});
lczWallClaw3.tile = "6";

lczWallClaw4 = new Group();
lczWallClaw4.collider = "static";
lczWallClaw4.spriteSheet = facilityTileset;
lczWallClaw4.addAni({w:64,h:64,row:2,col:0});
lczWallClaw4.tile = "7";

lczWallTop = new Group();
lczWallTop.collider = "static";
lczWallTop.spriteSheet = facilityTileset;
lczWallTop.addAni({w:64,h:64,row:2,col:1});
lczWallTop.tile = "t";

hczFloor = new Group();
hczFloor.collider = "static";
hczFloor.spriteSheet = facilityTileset;
hczFloor.addAni({w:64,h:64,row:0,col:1});
hczFloor.tile = "F";

hczWallBottom = new Group();
hczWallBottom.collider = "static";
hczWallBottom.spriteSheet = facilityTileset;
hczWallBottom.addAni({w:64,h:64,row:5,col:4});
hczWallBottom.tile = "B";

hczWallMiddle = new Group();
hczWallMiddle.collider = "static";
hczWallMiddle.spriteSheet = facilityTileset;
hczWallMiddle.addAni({w:64,h:64,row:5,col:5});
hczWallMiddle.tile = "M";

hczWallClaw1 = new Group();
hczWallClaw1.collider = "static";
hczWallClaw1.spriteSheet = facilityTileset;
hczWallClaw1.addAni({w:64,h:64,row:5,col:6});
hczWallClaw1.tile = "!";

hczWallClaw2 = new Group();
hczWallClaw2.collider = "static";
hczWallClaw2.spriteSheet = facilityTileset;
hczWallClaw2.addAni({w:64,h:64,row:6,col:0});
hczWallClaw2.tile = "@";

hczWallClaw3 = new Group();
hczWallClaw3.collider = "static";
hczWallClaw3.spriteSheet = facilityTileset;
hczWallClaw3.addAni({w:64,h:64,row:6,col:1});
hczWallClaw3.tile = "#";

hczWallClaw4 = new Group();
hczWallClaw4.collider = "static";
hczWallClaw4.spriteSheet = facilityTileset;
hczWallClaw4.addAni({w:64,h:64,row:6,col:2});
hczWallClaw4.tile = "$";

hczWallTop = new Group();
hczWallTop.collider = "static";
hczWallTop.spriteSheet = facilityTileset;
hczWallTop.addAni({w:64,h:64,row:6,col:3});
hczWallTop.tile = "T";

cautionLine1 = new Group();
cautionLine1.collider = "static";
cautionLine1.spriteSheet = facilityTileset;
cautionLine1.addAni({w:64,h:64,row:6,col:4});
cautionLine1.tile = "x";

cautionLine2 = new Group();
cautionLine2.collider = "static";
cautionLine2.spriteSheet = facilityTileset;
cautionLine2.addAni({w:64,h:64,row:6,col:5});
cautionLine2.tile = "y";

wallTopLeft = new Group();
wallTopLeft.collider = "static";
wallTopLeft.spriteSheet = facilityTileset;
wallTopLeft.addAni({w:64,h:64,row:2,col:2});
wallTopLeft.tile = ">";

wallTopRight = new Group();
wallTopRight.collider = "static";
wallTopRight.spriteSheet = facilityTileset;
wallTopRight.addAni({w:64,h:64,row:2,col:3});
wallTopRight.tile = "<";

wallTopUp = new Group();
wallTopUp.collider = "static";
wallTopUp.spriteSheet = facilityTileset;
wallTopUp.addAni({w:64,h:64,row:2,col:4});
wallTopUp.tile = "^";

wallTopDown = new Group();
wallTopDown.collider = "static";
wallTopDown.spriteSheet = facilityTileset;
wallTopDown.addAni({w:64,h:64,row:2,col:5});
wallTopDown.tile = "v";

wallTopUpDown = new Group();
wallTopUpDown.collider = "static";
wallTopUpDown.spriteSheet = facilityTileset;
wallTopUpDown.addAni({w:64,h:64,row:2,col:6});
wallTopUpDown.tile = "%";

wallTopLeftRight = new Group();
wallTopLeftRight.collider = "static";
wallTopLeftRight.spriteSheet = facilityTileset;
wallTopLeftRight.addAni({w:64,h:64,row:3,col:2});
wallTopLeftRight.tile = "&";

wallTopLeftNarrow = new Group();
wallTopLeftNarrow.collider = "static";
wallTopLeftNarrow.spriteSheet = facilityTileset;
wallTopLeftNarrow.addAni({w:64,h:64,row:3,col:0});
wallTopLeftNarrow.tile = "*";

wallTopRightNarrow = new Group();
wallTopRightNarrow.collider = "static";
wallTopRightNarrow.spriteSheet = facilityTileset;
wallTopRightNarrow.addAni({w:64,h:64,row:3,col:1});
wallTopRightNarrow.tile = "(";

wallTopDownNarrow = new Group();
wallTopDownNarrow.collider = "static";
wallTopDownNarrow.spriteSheet = facilityTileset;
wallTopDownNarrow.addAni({w:64,h:64,row:3,col:3});
wallTopDownNarrow.tile = ")";

wallTopUpNarrow = new Group();
wallTopUpNarrow.collider = "static";
wallTopUpNarrow.spriteSheet = facilityTileset;
wallTopUpNarrow.addAni({w:64,h:64,row:3,col:4});
wallTopUpNarrow.tile = "-";

 wallTopCorner1234 = new Group();
wallTopCorner1234.collider = "static";
wallTopCorner1234.spriteSheet = facilityTileset;
wallTopCorner1234.addAni({w:64,h:64,row:3,col:5});
wallTopCorner1234.tile = "=";

wallTopCorner234 = new Group();
wallTopCorner234.collider = "static";
wallTopCorner234.spriteSheet = facilityTileset;
wallTopCorner234.addAni({w:64,h:64,row:3,col:6});
wallTopCorner234.tile = "{";

wallTopCorner134 = new Group();
wallTopCorner134.collider = "static";
wallTopCorner134.spriteSheet = facilityTileset;
wallTopCorner134.addAni({w:64,h:64,row:4,col:0});
wallTopCorner134.tile = "}";

wallTopCorner123 = new Group();
wallTopCorner123.collider = "static";
wallTopCorner123.spriteSheet = facilityTileset;
wallTopCorner123.addAni({w:64,h:64,row:4,col:1});
wallTopCorner123.tile = "[";

wallTopCorner124 = new Group();
wallTopCorner124.collider = "static";
wallTopCorner124.spriteSheet = facilityTileset;
wallTopCorner124.addAni({w:64,h:64,row:4,col:2});
wallTopCorner124.tile = "]";

wallTopCorner34 = new Group();
wallTopCorner34.collider = "static";
wallTopCorner34.spriteSheet = facilityTileset;
wallTopCorner34.addAni({w:64,h:64,row:4,col:3});
wallTopCorner34.tile = ";";

wallTopCorner12 = new Group();
wallTopCorner12.collider = "static";
wallTopCorner12.spriteSheet = facilityTileset;
wallTopCorner12.addAni({w:64,h:64,row:4,col:4});
wallTopCorner12.tile = ":";

wallTopCorner13 = new Group();
wallTopCorner13.collider = "static";
wallTopCorner13.spriteSheet = facilityTileset;
wallTopCorner13.addAni({w:64,h:64,row:4,col:5});
wallTopCorner13.tile = "?";

wallTopCorner24 = new Group();
wallTopCorner24.collider = "static";
wallTopCorner24.spriteSheet = facilityTileset;
wallTopCorner24.addAni({w:64,h:64,row:4,col:6});
wallTopCorner24.tile = "/";

wallTopCorner1 = new Group();
wallTopCorner1.collider = "static";
wallTopCorner1.spriteSheet = facilityTileset;
wallTopCorner1.addAni({w:64,h:64,row:5,col:0});
wallTopCorner1.tile = "|";

wallTopCorner3 = new Group();
wallTopCorner3.collider = "static";
wallTopCorner3.spriteSheet = facilityTileset;
wallTopCorner3.addAni({w:64,h:64,row:5,col:1});
wallTopCorner3.tile = "K";

wallTopCorner4 = new Group();
wallTopCorner4.collider = "static";
wallTopCorner4.spriteSheet = facilityTileset;
wallTopCorner4.addAni({w:64,h:64,row:5,col:2});
wallTopCorner4.tile = "L";

wallTopCorner2 = new Group();
wallTopCorner2.collider = "static";
wallTopCorner2.spriteSheet = facilityTileset;
wallTopCorner2.addAni({w:64,h:64,row:5,col:3});
wallTopCorner2.tile = "R";
}

    gameMap = new Tiles(
        [
            ".....<ffffffffff>..........................................................................................vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            ".....<ffffffffff>.........................................................................................<tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            ".....<ffffffffff>.........................................................................................<oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo>",
            ".....<ffffffffff>................................<vvvvvvvvvvvvvvvvvvvvvvffffffffvvvvvvvvvvvvvvvvvvvvvvvvv><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            ".....<ffffffffff>................................<ttttttttttttttttttttttffffffffttttttttttttttttttttttttt><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            ".....R^ffffffff^|................................<mmmmmmmmmmmmmmmmmmmmmmffffffffmmmmmmmmmmmmmmmmmmmmmmmmm><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            ".vvvvvvffffffffvvvvvv..............vvvvvvvvvvvvv.<mmmmmmmmmmmmmmmmmmmmmmffffffffmmmmmmmmmmmmmmmmmmmmmmmmm>.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
            "<tttttxffffffffxttttt>............<ttttttttttttt><mmmmmmmmmmmmmmmmmmmmmmfffDffffmmmmmmmmmmmmmmmmmmmmmmmmm>.vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            "<mmmmmyffffffffymmmmm>............<mmmmmmmmmmmmm><bbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbb><tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt>",
            "<mmmmmxffffffffxmmmmm>............<mmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<mmCmmyfffDffffymmmmm>............<mmmmmmmmmmmmm><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<bbbbbxffffffffxbbbbb>............<ggggggggggggg><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffffffffffffffffffffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffffffffffffffffffffffffffffffffSffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffffff'fffffffff'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffff>^^^^^^^^^^^^^<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffff>.............<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffff>vvvvvvvvvvvvv<fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffffDfffffffffffffffffffftttttttttttttttfffffffffffffffffffffDfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<ffffffffffffffffffffffffffffffffffmmmmmmmmmmmmmmmfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffmmmmmmmmmmmmmmmfffffffffffffffffffff><ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "<ffffffffffffffffffff>............<fffffffffffff><fffffffffffffffffffmmmmmmmmmmmmmmmfffffffffffffffffffff>.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
            "<ffffffffffffffffffff>.............^^^^^^^^^^^^^.<fffffffffffffffffffbbbbbbbbbbbbbbbfffffffffffffffffffff>.vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            "<ffffffffffffffffffff>...........................<fffffffffffffffffffffffffffffffffffffffffffffffffffffff><tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt>",
            "<ffff'ffffffffff'ffff>...........................<fffffffffffffffffffffffffffffffffffffffffffffffffffffff><mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            ".^^^^^^^^^^^^^^^^^^^^.............................^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "..........................................................................................................<mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm>",
            "..........................................................................................................<bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb>",
            "..........................................................................................................<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "..........................................................................................................<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "..........................................................................................................<ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff>",
            "...........................................................................................................^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.",
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
            createDoor(lczFloorBigDoor[i],doorClearances[i].rotation,doorClearances[i].clearance,doorClearances[i].locked);
        }
        for (i=0; i<checkpointTile.length; i++) {
            hiddenGroup.add(new Checkpoint(checkpointTile[i].x,checkpointTile[i].y).sprite);
        }
        for (i=0; i<teleporterCreator.length; i++) {
            new Teleporter(teleporterCreator[i].x,teleporterCreator[i].y,teleporterPositions[i].id,teleporterPositions[i].linkId);
        }
    }
    for (v=0;v<20;v++) {
    for (i=0;i<gameMap.length;i++) {
        if (lczWallBlue.includes(gameMap[i]) || lczWallRed.includes(gameMap[i]) || lczWallOrange.includes(gameMap[i]) || lczWallPurple.includes(gameMap[i]) || lczWallGray.includes(gameMap[i]) || hczWallBottom.includes(gameMap[i]) || wallTopLeft.includes(gameMap[i]) || wallTopRight.includes(gameMap[i]) || wallTopUp.includes(gameMap[i]) || lczFloorStart.includes(gameMap[i])) {
            
        } else {
            image(gameMap[i].ani.frameImage,gameMap[i].x,gameMap[i].y);
            imageTiles.push({img:gameMap[i].ani.frameImage,x:gameMap[i].x,y:gameMap[i].y})
            gameMap[i].remove();
        }
    }
    }
    for(i=0;i<imageTiles.length;i++) {
		imageTileLayer.image(imageTiles[i].img,imageTiles[i].x,imageTiles[i].y);
	};
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