function setupTilemaps() {
lczFloor = new Group();
lczFloor.collider = "static";
lczFloor.spriteSheet = facilityTileset;
lczFloor.addAni({w:64,h:64,row:0,col:0});
lczFloor.tile = "f";

lczFloorStart = new Group();
lczFloorStart.collider = "static";
lczFloorStart.spriteSheet = facilityTileset;
lczFloorStart.addAni({w:64,h:64,row:0,col:0});
lczFloorStart.tile = "S";

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

    gameMap = new Tiles(
        [
            ".vvvvvvvvvvvvvvvvvvvvvvvvvvvv.",
            "<TTTTTTTTTTTTTTTTTTTTTTTTTTTT>",
            "<MMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<MMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<MMMMMMMMMMMMMMMMMMMMMMMMMMMM>",
            "<BBBBBBBBBBBBBBBBBBBBBBBBBBBB>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            "<FFFFFFFFFFFFFFFFFFFFFFFFFFFF>",
            ".^^^^^^^^^^FFFFFFFF^^^^^^^^^^.",
            ".vvvvvvvvvvFFFFFFFFvvvvvvvvvv.",
            "<tttttttttxFFFFFFFFxttttttttt>",
            "<mmm1mmmmmyffffffffymmmmmmmmm>",
            "<mmmm6m2mmxffffffffxmmmmmmmmm>",
            "<mmmmmmmmmyffffffffymmmmmmmmm>",
            "<bbbbbbbbbxffffffffxbbbbbbbbb>",
            "<ffffffffffffffffffffffffffff>",
            "<fffffffffffffSffffffffffffff>",
            "<ffffffffffffffffffffffffffff>"
        ],
        0, 0, //x, y
        64, 64 //w, h
    )
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
    randomDoor = new Door(928,1120,0,2,4500)
    randomReader = new Reader(640,1320,4,randomDoor,null,12000,true)
    randomReader2 = new Reader(1000,625,4,randomDoor,randomReader,12000,true)
    hiddenGroup.add(randomReader2.sprite);
    randomReader.linkedReader = randomReader2;
    //dumbTestEnemy = new Enemy(1000,0,60,1000,1,5,10,2,0)
    checkpoint1 = new Checkpoint(1500,300)
}

//lczFloor.removeColliders()