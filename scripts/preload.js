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
                   PRELOAD
        0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
************************************************/

function loadCardReaderTextures() {
    readerT1 = loadImage("././assets/card_reader/reader_1.png");
    readerT2 = loadImage("././assets/card_reader/reader_2.png");
    readerT3 = loadImage("././assets/card_reader/reader_3.png");
    readerT4 = loadImage("././assets/card_reader/reader_4.png");
    readerT5 = loadImage("././assets/card_reader/reader_5.png");
    readerT6 = loadImage("././assets/card_reader/reader_6.png");
    readerTFail = loadImage("././assets/card_reader/reader_fail.png");
    readerTPass = loadImage("././assets/card_reader/reader_pass.png");
    readerTLockdown = loadImage("././assets/card_reader/reader_lockdown.png");
    cardReaderClearanceTextures = [readerT1,readerT2,readerT3,readerT4,readerT5,readerT6];
}

function loadSecurityIDTextures() {
    testImage = loadImage("././assets/testing.jpeg");
    ident1 = loadImage("././assets/SecurityID-1.png");
    ident2 = loadImage("././assets/SecurityID-2.png");
    ident3 = loadImage("././assets/SecurityID-3.png");
    ident4 = loadImage("././assets/SecurityID-4.png");
    ident5 = loadImage("././assets/SecurityID-5.png");
    ident6 = loadImage("././assets/SecurityID-6.png");
    securityIDTextures = [testImage,ident1,ident2,ident3,ident4,ident5,ident6];
}

function loadItemTextures() {
    item0T = loadImage("././assets/items/item_0.png");
    item1ST = loadImage("././assets/items/SecurityID-1.png");
    item2ST = loadImage("././assets/items/SecurityID-2.png");
    item3ST = loadImage("././assets/items/SecurityID-3.png");
    item4ST = loadImage("././assets/items/SecurityID-4.png");
    item5ST = loadImage("././assets/items/SecurityID-5.png");
    item6ST = loadImage("././assets/items/SecurityID-6.png");
    item7T = loadImage("././assets/items/item_1.png");
    item8T = loadImage("././assets/items/item_2.png");
    item9T = loadImage("././assets/items/item_3.png");
    item10T = loadImage("././assets/items/item_4.png");
    item11T = loadImage("././assets/items/item_5.png");
    item12T = loadImage("././assets/items/item_6.png");
    item13T = loadImage("././assets/items/item_7.png");
    itemTextures = [item0T,item1ST,item2ST,item3ST,item4ST,item5ST,item6ST,item7T,item8T,item9T,item10T,item11T,item12T,item13T];
}

function loadDoorTextures() {
    largeBlastDoorOpenAni = loadImage("././assets/doors/bigDoorOpen.png")
    largeBlastDoorCloseAni = loadImage("././assets/doors/bigDoorClose.png")
}

function loadWorldSounds() {
    accessDenied = loadSound("././assets/access_denied.flac");
    accessGranted = loadSound("././assets/access_granted.ogg");
    bigDoorAlarm = loadSound("././assets/klaxon1.mp3");
    smallBlastDoorOpen = loadSound("././assets/small_blast_door_open.ogg");
    smallBlastDoorClose = loadSound("././assets/small_blast_door_close.ogg");
    largeBlastDoorOpen = loadSound("././assets/large_blast_door_open.ogg");
    largeBlastDoorClose = loadSound("././assets/large_blast_door_close.ogg");
}

function loadSFX() {
    deathSting = loadSound("././assets/death_sting.wav");
    takeDamage = loadSound("././assets/take_damage.ogg");
}

function preload() {
    //Preloading the game's asset files to avoid any errors.
    loadWorldSounds();
    loadSFX();
    loadDoorTextures();
    loadSecurityIDTextures();
    loadCardReaderTextures();
    loadItemTextures();
};