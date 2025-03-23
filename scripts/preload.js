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

function preload() {
    //Preloading the game's asset files to avoid any errors.
    largeBlastDoorOpenAni = loadImage("././assets/doors/bigDoor.png")
    accessDenied = loadSound("././assets/access_denied.flac");
    accessGranted = loadSound("././assets/access_granted.ogg");
    bigDoorAlarm = loadSound("././assets/klaxon1.mp3");
    smallBlastDoorOpen = loadSound("././assets/small_blast_door_open.ogg");
    smallBlastDoorClose = loadSound("././assets/small_blast_door_close.ogg");
    largeBlastDoorOpen = loadSound("././assets/large_blast_door_open.ogg");
    largeBlastDoorClose = loadSound("././assets/large_blast_door_close.ogg");
    loadSecurityIDTextures();
    loadCardReaderTextures();
};