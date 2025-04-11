class Reader{
    constructor(x,y,clearanceRequired,linkedObject,linkedReader,activeTime,voiceLocked) {
        this.sprite = new Sprite(x,y,30,40,'k') //already explained in "checkpointHandler.js"
        this.sprite.parentRef = this; //already explained in "checkpointHandler.js"
        this.clearanceRequired = clearanceRequired; //the clearance level required to trigger this reader
        this.linkedObject = linkedObject; //the door that this reader is linked to
        this.linkedReader = linkedReader; //the reader on the other side of the linked door that this is linked to
        this.activeTime =  activeTime; //how long the reader remains active
        this.active = false;//whether or not the reader is active
        this.voiceLocked = voiceLocked;//whether or not the director's voice recording item must be used within the vicinity of the reader to unlock it and make it interactable
        if (this.voiceLocked) { //if the reader is voicelocked
           this.sprite.image = readerTLockdown //display the locked texture
           this.interval = setInterval(async () => { //check every millisecond if the director's voice key has been used within the vicinity of the reader, if so unlock the reader
            if (this.voiceLocked && usingVoiceKey == true && dist(this.sprite.x,this.sprite.y,player.x,player.y) < 200) {
                print("READER TRIGGERED")
                clearInterval(this.interval);
                await sleep(5000);
                accessGranted.play();
                this.voiceLocked = false; // remove the lock
                this.linkedReader.voiceLocked = false; //remove the lock of its linked reader
                this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //display the appropriate clearance texture
                this.linkedReader.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //do the same to the linked reader
            }
           },1);
        } else {
           this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //display the appropriate clearance texture
        }
        
        readerGroup.add(this.sprite); //same as with all other object groups - once added the game counts this object as a reader
    }
    async onInteract() { //when the reader is interacted with
    if (!this.active && !this.voiceLocked) { //if the reader isn't already active and isn't locked
        this.active = true;
        if (player.clearanceLevel >= this.clearanceRequired) { //if the player's clearance level is equal to or higher than the clearance required to open the door, display the access granted texture on this reader and its linked reader, trigger the linked door, and reset after wiating for the objects active time
            console.log("Access granted.");
            this.sprite.image = readerTPass; //access grated texture
            accessGranted.play(); //sound effect
            if (this.linkedReader && this.linkedReader!= null) { //if there is a linked reader, lock it active
                this.linkedReader.onLock();
            }
            if (this.linkedObject && this.linkedObject!= null) { //if there is a linked door, trigger it
                this.linkedObject.onTrigger();
            }
            await sleep(this.activeTime);
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //reset the reader's texture
        } else { //if the player's clearance is not high enough, display the access denied texture, wait one second, and then reset
            console.warn("Access denied.");
            this.sprite.image = readerTFail;
            accessDenied.play(); //sound effect
            await sleep(1000);
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //reset texture
        }
        this.active = false;
    }
    }
    async onLock () { //when this reader is locked active, display the access granted texture until the active time expires.
        if (!this.active) {
            this.active = true;
            this.sprite.image = readerTPass;
            await sleep(this.activeTime);
            this.active = false;
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; //reset texture
        }
    }
}