class Door{
    constructor(x,y,horizontal,doorType,activeTime) {
        this.sprite = new Sprite(x,y,1,1,'k') //creates the door's central hitbox
        this.doorType = doorType; //sets this door objects's door type
        if (this.doorType == 1) {
            /*if (horizontal) {
                this.sprite.height = 55;
                this.sprite.width = 5;
            } else {
                this.sprite.width = 55;
                this.sprite.height = 60;
            } - small doors were never used */
        } else if (this.doorType == 2) {
            //creates the door's outer hitboxes - these stop you from walking over the two doors in the animation while they are open
            this.sprite.hitbox1 = new Sprite(x,y,1,1,'k')
            this.sprite.hitbox2 = new Sprite(x,y,1,1,'k')

            if (horizontal) { //horizontal should be vertical; shut up.

                //sets the height and width of the door's hitboxes
                this.sprite.height = 100;
                this.sprite.width = 575;
                this.sprite.hitbox1.width = 100;
                this.sprite.hitbox1.height = 50;
                this.sprite.hitbox2.width = 100;
                this.sprite.hitbox2.height = 80;

                this.sprite.rotation = 90; //makes the door vertical

                //positions the door's outer hitboxes
                this.sprite.hitbox1.y -= 232;
                this.sprite.hitbox2.y += 212;

                //hides the door's outer hitboxes
                hiddenGroup.add(this.sprite.hitbox1);
                hiddenGroup.add(this.sprite.hitbox2);

                //sets up the door's opening and losing animations
                this.sprite.addAni('closed', largeBlastDoorOpenAni2, {width: 512, height: 96, frames: [0]}); //closed - first frame of opening animation only
                this.sprite.addAni('open', largeBlastDoorOpenAni2, {width: 512, height: 96, frames: [12]}); //open - last frame of opening animation only
                this.sprite.addAni('opening', largeBlastDoorOpenAni2, {width: 512, height: 96, frames: 13}); //opening - full opening animation
                this.sprite.ani.frameDelay = 17; // the game draws seventeen frames before progressing the door's opening animation
                this.sprite.addAni('closing', largeBlastDoorCloseAni2, {width: 512, height: 96, frames: 13}); //closing - full closing animation
                this.sprite.ani.frameDelay = 17; // the game draws seventeen frames before progressing the door's closing animation
                this.sprite.changeAni('closed') //sets the door's animation to its closed state
            } else {

                // basically the same as before, except the values are different because the door is horizontal
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
        this.sprite.parentRef = this; // already explained in "checkpointHandler.js"
        this.activeTime =  activeTime; // how long the door is considered active and cannot be retriggered
        this.active = false; //whether or not the door is active
        this.open = false; //whether or not the door is open
        this.sprite.color = "gray"; //not seen
        doorGroup.add(this.sprite); //adds the door's sprite to the door group - the game now considers it a door.
        setInterval(() => { // this function is called once every x milliseconds where this function's second parameter is x
            //if the door is open, the player can walk through its central hitbox
            if (this.open) {
                this.sprite.overlap(player);
            } else {
                this.sprite.collide(player);
            }
            //the player cannot walk through its outer hitboxes
            this.sprite.hitbox1.collide(player);
            this.sprite.hitbox2.collide(player);
        },1)
    }
    async onTrigger() {
        if (this.doorType == 1) {
            /*this.active = true;
            this.open = true;
            smallBlastDoorOpen.play();
            await sleep(this.activeTime);
            smallBlastDoorClose.play();
            this.open = false;
            this.active = false; - never used */
        } else if (this.doorType == 2) {2
            this.active = true; //obvious
            this.sprite.changeAni('opening') //sets the door to its opening state
            this.sprite.ani.frame = 0; //resets the door's current animation (to ensure that the opening animation plays in full)
            largeBlastDoorOpen.play(); //sound effect
            await sleep(3000)
            this.open = true; //obvious
            await sleep(500)
            this.sprite.changeAni('open') //this function has already been explained 
            await sleep(this.activeTime-1000); //the door takes 1000 milliseconds to close, so this time is subtracted from the door's total time open
            bigDoorAlarm.play(); //warning alarm sound effect
            await sleep(1500)
            largeBlastDoorClose.play(); //sound effect
            this.sprite.changeAni('closing') //this function has already been explained 
            this.sprite.ani.frame = 0; //this has already been explained 
            await sleep(500)
            this.open = false; //obvious
            await sleep(3000)
            this.sprite.changeAni('closed') //this function has already been explained 
            this.active = false; //obvious
        }
        
    }
}