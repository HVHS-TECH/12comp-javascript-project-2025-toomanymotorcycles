class Enemy{
    constructor(x,y,size,health,power,speed,attackSpeed,attackType) {
        this.sprite = new Sprite(x,y,size,size,'k')
        this.sprite.parentRef = this
        this.sprite.health = health
        this.sprite.power = power
        this.sprite.speed = speed
        this.attackSpeed = attackSpeed
        this.attackType = attackType
        this.attackCooldown = false
        setInterval(async () => {
            if (this.attackType == 1) {
                if (world.rayCast(this.sprite,player) == player && !this.attackCooldown) {
                    this.sprite.rotateTowards(player,0.25);
                    this.sprite.moveTo(player.x,player.y,3);
                } 
                if (dist(player.x,player.y,this.sprite.x,this.sprite.y) < 200 && !this.attackCooldown) {
                    print("AAAAAAAAAAAAAAAAAA")
                    this.attackCooldown = true;
                    this.sprite.move(30,this.sprite.rotation,20)
                    await sleep(10000)
                    this.attackCooldown = false;
                }
            } else if (this.attackType = 2) {
                //?
            } else {
                console.error("Enemy has invalid attack type!")
                this.sprite.remove()
            }
        },1)
    }
}