class Door{
    constructor(x,y,horizontal,doorType,activeTime) {
        this.sprite = new Sprite(x,y,1,1,'k')
        this.sprite.hitbox = new Sprite(x,y,1,1,'k')
        if (doorType == 1) {
            if (horizontal) {
                this.sprite.height = 55;
                this.sprite.width = 5;
                this.sprite.hitbox.height = 55;
                this.sprite.hitbox.width = 5;  
            } else {
                this.sprite.width = 55;
                this.sprite.height = 60;
                this.sprite.hitbox.width = 55;
                this.sprite.hitbox.height = 5;
                this.sprite.hitbox.y -= 25;  
            }
            
        } else if (doorType == 2) {

        }
        this.sprite.parentRef = this;
        this.sprite.hitbox.parentRef = this;
        this.activeTime =  activeTime;
        this.active = false;
        this.sprite.color = "gray";
        doorGroup.add(this.sprite);
        setInterval(() => {
            this.sprite.overlap(player);
            if (this.active) {
                this.sprite.hitbox.overlap(player);
                this.sprite.hitbox.color = "limegreen";
            } else {
                this.sprite.hitbox.collide(player);
                this.sprite.hitbox.color = "red";
            }
        },1)
    }
    async onTrigger() {
        this.active = true;
        smallBlastDoorOpen.play();
        await sleep(this.activeTime);
        smallBlastDoorClose.play();
        this.active = false;
    }
}