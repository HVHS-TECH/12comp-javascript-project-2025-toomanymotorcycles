class Reader{
    constructor(x,y,clearanceRequired,linkedObject,activeTime) {
        this.sprite = new Sprite(x,y,15,5)
        this.sprite.parentRef = this;
        this.clearanceRequired = clearanceRequired;
        this.linkedObject = linkedObject;
        this.activeTime =  activeTime;
        this.active = false;
        this.sprite.color = "gray";
        readerGroup.add(this.sprite);
    }
    async onInteract() {
        this.active = true;
        if (player.clearanceLevel >= this.clearanceRequired) {
            console.log("Access granted.");
            this.sprite.color = "limegreen";
            await sleep(this.activeTime);
            this.sprite.color = "gray";
        } else {
            console.warn("Access denied.");
            this.sprite.color = "red";
            await sleep(1000);
            this.sprite.color = "gray";
        }
        this.active = false;
    }
}