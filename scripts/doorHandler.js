class Door{
    constructor(x,y,horizontal,doorType,activeTime) {
        this.sprite = new Sprite(x,y,1,1,'k')
        this.sprite.hitbox = new Sprite(x,y,1,1,'k')
        this.doorType = doorType;
        if (this.doorType == 1) {
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
        } else if (this.doorType == 2) {
            if (horizontal) {
                this.sprite.height = 500;
                this.sprite.width = 250;
                this.sprite.hitbox.height = 500;
                this.sprite.hitbox.width = 90;
            } else {
                this.sprite.width = 500;
                this.sprite.height = 250;
                this.sprite.hitbox.width = 500;
                this.sprite.hitbox.height = 90;
                this.sprite.hitbox.y -= 75;  
            }
        }
        this.sprite.parentRef = this;
        this.sprite.hitbox.parentRef = this;
        this.activeTime =  activeTime;
        this.active = false;
        this.open = false;
        this.sprite.color = "gray";
        doorGroup.add(this.sprite);
        setInterval(() => {
            this.sprite.overlap(player);
            if (this.open) {
                this.sprite.hitbox.overlap(player);
                this.sprite.hitbox.color = "limegreen";
            } else {
                this.sprite.hitbox.collide(player);
                this.sprite.hitbox.color = "red";
            }
        },1)
    }
    async onTrigger() {
        if (this.doorType == 1) {
            this.active = true;
            this.open = true;
            smallBlastDoorOpen.play();
            await sleep(this.activeTime);
            smallBlastDoorClose.play();
            this.open = false;
            this.active = false;
        } else if (this.doorType == 2) {2
            this.active = true;
            largeBlastDoorOpen.play();
            await sleep(3000)
            this.open = true;
            await sleep(this.activeTime-1500);
            bigDoorAlarm.play();
            await sleep(1500)
            largeBlastDoorClose.play();
            this.open = false;
            this.active = false;
        }
        
    }
}