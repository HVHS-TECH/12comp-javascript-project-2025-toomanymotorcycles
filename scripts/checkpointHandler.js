class Checkpoint{
    constructor(x,y) {
        this.sprite = new Sprite(x,y,60,60,'k') //creates a 60 point by 60 point checkpoint at the coordinates given when the checkpoint object is created
        this.sprite.parentRef = this; //a reference to the sprite's parent object within the sprite
        this.sprite.color = "white"; //never seen
        checkpointGroup.add(this.sprite); //adds the sprite to the checkpoint group - the game will now count it as a checkpoint
    }
    onInteract() { //when this checkpoint object is activated, if it isn't somehow already the active checkpoint, the old activated checkpoint is disabled (its sprite is removed), this object becomes the new active checkpoint, and the player is healed back to full health. The player also regins their lives.
        if (currentCheckpoint != this.sprite) {
            if (currentCheckpoint) {
                currentCheckpoint.remove();
            }
            currentCheckpoint = this.sprite;
            player.lives = 3;
            player.health = 100;
        }
    }
}