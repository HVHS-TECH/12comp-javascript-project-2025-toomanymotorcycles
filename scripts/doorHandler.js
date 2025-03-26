class Door{
    constructor(x,y,horizontal,doorType,activeTime) {
        this.sprite = new Sprite(x,y,1,1,'k')
        this.doorType = doorType;
        if (this.doorType == 1) {
            if (horizontal) {
                this.sprite.height = 55;
                this.sprite.width = 5;
            } else {
                this.sprite.width = 55;
                this.sprite.height = 60;
            }
        } else if (this.doorType == 2) {
            this.sprite.hitbox1 = new Sprite(x,y,1,1,'k')
            this.sprite.hitbox2 = new Sprite(x,y,1,1,'k')
            if (horizontal) {
                this.sprite.height = 550;
                this.sprite.width = 100;
            } else {
                this.sprite.width = 550;
                this.sprite.height = 380;
                this.sprite.hitbox1.width = 125;
                this.sprite.hitbox1.height = 380;
                this.sprite.hitbox2.width = 125;
                this.sprite.hitbox2.height = 380;
                this.sprite.hitbox1.x -= 212;
                this.sprite.hitbox2.x += 212;
                hiddenGroup.add(this.sprite.hitbox1);
                hiddenGroup.add(this.sprite.hitbox2);
                this.sprite.addAni('closed', largeBlastDoorOpenAni, {width: 512, height: 352, frames: [0]});
                this.sprite.addAni('open', largeBlastDoorOpenAni, {width: 512, height: 352, frames: [12]});
                this.sprite.addAni('opening', largeBlastDoorOpenAni, {width: 512, height: 352, frames: 13});
                this.sprite.ani.frameDelay = 17;
                this.sprite.addAni('closing', largeBlastDoorCloseAni, {width: 512, height: 352, frames: 13});
                this.sprite.ani.frameDelay = 17;
                this.sprite.changeAni('closed')
            }
        }
        this.sprite.parentRef = this;
        this.activeTime =  activeTime;
        this.active = false;
        this.open = false;
        this.sprite.color = "gray";
        doorGroup.add(this.sprite);
        setInterval(() => {
            if (this.open) {
                this.sprite.overlap(player);
            } else {
                this.sprite.collide(player);
            }
            this.sprite.hitbox1.collide(player);
            this.sprite.hitbox2.collide(player);
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
            this.sprite.changeAni('opening')
            this.sprite.ani.frame = 0;
            largeBlastDoorOpen.play();
            await sleep(3000)
            this.open = true;
            await sleep(500)
            this.sprite.changeAni('open')
            await sleep(this.activeTime-1000);
            bigDoorAlarm.play();
            await sleep(1500)
            largeBlastDoorClose.play();
            this.sprite.changeAni('closing')
            this.sprite.ani.frame = 0;
            await sleep(500)
            this.open = false;
            await sleep(3000)
            this.sprite.changeAni('closed')
            this.active = false;
        }
        
    }
}