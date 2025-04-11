class Sign { //this object simply places a sign down at position (x,y)
    constructor(x, y, textureId) {
        this.sprite = new Sprite(x, y, 0, 0, 's')
        this.sprite.parentRef = this; //already explained in "checkpointHandler.js"
        this.sprite.image = signTextures[textureId]; //sets the sign's texture to the texture in the signTextures array in the index provided
    }
}