class Sign{
    constructor(x,y,textureId) {
        this.sprite = new Sprite(x,y,0,0,'s')
        this.sprite.parentRef = this;
        this.sprite.image = signTextures[textureId];
    }
}