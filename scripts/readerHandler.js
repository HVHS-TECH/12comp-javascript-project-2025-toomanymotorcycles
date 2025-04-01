class Reader{
    constructor(x,y,clearanceRequired,linkedObject,linkedReader,activeTime,voiceLocked) {
        this.sprite = new Sprite(x,y,30,40,'k')
        this.sprite.parentRef = this;
        this.clearanceRequired = clearanceRequired;
        this.linkedObject = linkedObject;
        this.linkedReader = linkedReader;
        this.activeTime =  activeTime;
        this.active = false;
        this.voiceLocked = voiceLocked;
        if (this.voiceLocked) {
           this.sprite.image = readerTLockdown
           this.interval = setInterval(async () => {
            if (this.voiceLocked && usingVoiceKey == true && dist(this.sprite.x,this.sprite.y,player.x,player.y) < 200) {
                print("READER TRIGGERED")
                clearInterval(this.interval);
                await sleep(5000);
                accessGranted.play();
                this.voiceLocked = false;
                this.linkedReader.voiceLocked = false;
                this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1];
                this.linkedReader.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1];
            }
           },1);
        } else {
           this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1]; 
        }
        
        readerGroup.add(this.sprite);
    }
    async onInteract() {
    if (!this.active && !this.voiceLocked) {
        this.active = true;
        if (player.clearanceLevel >= this.clearanceRequired) {
            console.log("Access granted.");
            this.sprite.image = readerTPass;
            accessGranted.play();
            if (this.linkedReader && this.linkedReader!= null) {
                this.linkedReader.onLock();
            }
            if (this.linkedObject && this.linkedObject!= null) {
                this.linkedObject.onTrigger();
            }
            await sleep(this.activeTime);
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1];
        } else {
            console.warn("Access denied.");
            this.sprite.image = readerTFail;
            accessDenied.play();
            await sleep(1000);
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1];
        }
        this.active = false;
    }
    }
    async onLock () {
        if (!this.active) {
            this.active = true;
            this.sprite.image = readerTPass;
            await sleep(this.activeTime);
            this.active = false;
            this.sprite.image = cardReaderClearanceTextures[this.clearanceRequired-1];
        }
    }
}