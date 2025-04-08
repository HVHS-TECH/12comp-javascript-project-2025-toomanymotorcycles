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

function loadTilemaps() {
    facilityTileset = loadImage("././assets/world/facility_tiles.png");
    checkpointTileTex = loadImage("././assets/world/checkpoint.png");
}

function loadSignTextures() {
    sign0T = loadImage("././assets/world/signs/sign_00.png");
    sign1T = loadImage("././assets/world/signs/sign_01.png");
    sign2T = loadImage("././assets/world/signs/sign_02.png");
    sign3T = loadImage("././assets/world/signs/sign_03.png");
    sign4T = loadImage("././assets/world/signs/sign_04.png");
    sign5T = loadImage("././assets/world/signs/sign_05.png");
    sign6T = loadImage("././assets/world/signs/sign_06.png");
    sign7T = loadImage("././assets/world/signs/sign_07.png");
    sign8T = loadImage("././assets/world/signs/sign_08.png");
    sign9T = loadImage("././assets/world/signs/sign_09.png");
    signTextures = [sign0T,sign1T,sign2T,sign3T,sign4T,sign5T,sign6T,sign7T,sign8T,sign9T]
}

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

function loadItemDisplayTextures() {
    disp0T = loadImage("././assets/display/item_0.png");
    disp1ST = loadImage("././assets/display/SecurityID-1.png");
    disp2ST = loadImage("././assets/display/SecurityID-2.png");
    disp3ST = loadImage("././assets/display/SecurityID-3.png");
    disp4ST = loadImage("././assets/display/SecurityID-4.png");
    disp5ST = loadImage("././assets/display/SecurityID-5.png");
    disp6ST = loadImage("././assets/display/SecurityID-6.png");
    disp7T = loadImage("././assets/display/item_1.png");
    disp8T = loadImage("././assets/display/item_2.png");
    disp9T = loadImage("././assets/display/item_3.png");
    disp10T = loadImage("././assets/display/item_4.png");
    disp11T = loadImage("././assets/display/item_5.png");
    disp12T = loadImage("././assets/display/item_6.png");
    disp13T = loadImage("././assets/display/item_7.png");
    itemDisplayTextures = [disp0T,disp1ST,disp2ST,disp3ST,disp4ST,disp5ST,disp6ST,disp7T,disp8T,disp9T,disp10T,disp11T,disp12T,disp13T];
}

function loadDoorTextures() {
    largeBlastDoorOpenAni = loadImage("././assets/doors/bigDoorOpen.png")
    largeBlastDoorOpenAni2 = loadImage("././assets/doors/bigDoorVertOpen.png")
    largeBlastDoorCloseAni = loadImage("././assets/doors/bigDoorClose.png")
    largeBlastDoorCloseAni2 = loadImage("././assets/doors/bigDoorVertClose.png")
}

function loadEnemyTextures() {
    puddleOfCrystal = loadImage("././assets/enemy/puddle_of_crystal.png");
}

function loadWorldSounds() {
    klaxon = loadSound("././assets/background_klaxon.ogg");
    accessDenied = loadSound("././assets/access_denied.flac");
    accessGranted = loadSound("././assets/access_granted.ogg");
    bigDoorAlarm = loadSound("././assets/klaxon1.mp3");
    voiceKeyAudio = loadSound("././assets/voicekey.ogg");
    smallBlastDoorOpen = loadSound("././assets/small_blast_door_open.ogg");
    smallBlastDoorClose = loadSound("././assets/small_blast_door_close.ogg");
    largeBlastDoorOpen = loadSound("././assets/large_blast_door_open.ogg");
    largeBlastDoorClose = loadSound("././assets/large_blast_door_close.ogg");
    laserMagnumShot = loadSound("././assets/laser_magnum_shot.ogg");
}

function loadSFX() {
    deathSting = loadSound("././assets/death_sting.wav");
    takeDamage = loadSound("././assets/take_damage.ogg");
}

function loadMusic() {
    gameMusic = loadSound("././assets/music/Twilight.mp3");
}

function preload() {
    //Preloading the game's asset files to avoid any errors.
    testImage = loadImage("././assets/testing.jpeg")
    loadTilemaps();
    loadSignTextures();
    loadWorldSounds();
    loadSFX();
    loadMusic();
    loadDoorTextures();
    loadCardReaderTextures();
    loadItemTextures();
    loadItemDisplayTextures();
    loadEnemyTextures();
};