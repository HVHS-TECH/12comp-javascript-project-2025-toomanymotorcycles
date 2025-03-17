class Reader{
    constructor(x,y,clearanceRequired,linkedObject,linkedReader,activeTime) {
        this.sprite = new Sprite(x,y,15,5)
        this.sprite.parentRef = this;
        this.clearanceRequired = clearanceRequired;
        this.linkedObject = linkedObject;
        this.linkedReader = linkedReader;
        this.activeTime =  activeTime;
        this.active = false;
        this.sprite.color = "gray";
        readerGroup.add(this.sprite);
    }
    async onInteract() {
    if (!this.active) {
        this.active = true;
        if (player.clearanceLevel >= this.clearanceRequired) {
            console.log("Access granted.");
            this.sprite.color = "limegreen";
            accessGranted.play();
            if (this.linkedReader && this.linkedReader!= null) {
                this.linkedReader.onLock();
            }
            if (this.linkedObject && this.linkedObject!= null) {
                this.linkedObject.onTrigger();
            }
            await sleep(this.activeTime);
            this.sprite.color = "gray";
        } else {
            console.warn("Access denied.");
            this.sprite.color = "red";
            accessDenied.play();
            await sleep(1000);
            this.sprite.color = "gray";
        }
        this.active = false;
    }
    }
    async onLock () {
        if (!this.active) {
            this.active = true;
            this.sprite.color = "limegreen";
            await sleep(this.activeTime);
            this.active = false;
            this.sprite.color = "gray";
        }
    }
}