class Checkpoint{
    constructor(x,y) {
        this.sprite = new Sprite(x,y,60,60,'k')
        this.sprite.parentRef = this;
        this.sprite.color = "white";
        checkpointGroup.add(this.sprite);
    }
    onInteract() {
        if (currentCheckpoint != this.sprite) {
            if (currentCheckpoint) {
                currentCheckpoint.color = "gray";
            }
            currentCheckpoint = this.sprite;
            player.lives = 3;
        }
    }
}