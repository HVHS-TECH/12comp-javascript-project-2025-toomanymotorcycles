class Enemy{
    constructor(x,y,health,power,attackType) {
        this.sprite = new Sprite(x,y,1,1,'k')
        this.sprite.parentRef = this
        this.sprite.health = health
        this.sprite.power = power
        this.attackType = attackType
    }
}