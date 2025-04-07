
class Enemy{
    /**
     * 
     * @param {int} x The starting x position of the enemy.
     * @param {int} y The starting y position of the enemy.
     * @param {int} size The size of the enemy.
     * @param {int} health The health of the enemy.
     * @param {int} power How much damage the enemy does to the player.
     * @param {int} speed How fast the enemy is.
     * @param {int} attackSpeed How fast the enemy attacks (in milliseconds).
     * @param {int} attackType The type of attack the enemy performs. 1: melee attack, 2: ranged attack.
     * @param {int} bulletSpread How inaccurate the enemy's attacks are - this value is added or subtracted from the enemy's firing direction. Only relevant for ranged enemies.
     */
    constructor(x,y,size,health,power,speed,attackSpeed,attackType,bulletSpread) {
        this.sprite = new Sprite(x,y,size,size,'k')
        enemyGroup.add(this.sprite)
        this.sprite.parentRef = this
        this.sprite.health = health
        this.sprite.power = power
        this.sprite.moveSpeed = speed
        this.attackSpeed = attackSpeed
        this.attackType = attackType
        this.attackCooldown = 0
        this.bulletSpread = bulletSpread
        setInterval(() => {
        if (!freeze) {
            if (this.attackCooldown > 0) {
                this.attackCooldown --;
                this.sprite.rotationalVelocity = 0;
            } else {
                player.collide(this.sprite, () => {takeDamage.play(), player.health -= this.sprite.power})
            }
            if (this.attackType == 1) {
                //if (world.rayCast(this.sprite,player) == player) {
                    if (!this.attackCooldown) {
                        this.sprite.rotateTowards(player,0.25);
                        this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed);
                    }
                } else {
                    this.sprite.vel.x = 0;
                    this.sprite.vel.y = 0;
                    this.sprite.rotationalVelocity = 0;
                }
                if (dist(player.x,player.y,this.sprite.x,this.sprite.y) < 200) {
                    if (this.attackCooldown == 0) {
                        this.attackCooldown = this.attackSpeed;
                        this.sprite.move(200,this.sprite.rotation,20)
                    }
               // }
            } else if (this.attackType = 2) {
                //if (world.rayCast(this.sprite,player) == player) {
                    if (this.attackCooldown > 0) {
                        this.sprite.rotateTowards(player,0.25);
                        this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed);
                    }
                    if (this.attackCooldown == 0) {
                        this.attackCooldown = this.attackSpeed;
                        let newBullet = new Sprite(this.sprite.x,this.sprite.y,10,10,'d')
                        newBullet.power = this.sprite.power;
                        enemyBulletGroup.add(newBullet)
                        if (newBullet.power >= 25) {
                            newBullet.colour = "white";
                            newBullet.width = 40;
                            newBullet.height = 40;
                        } else if (this.attackSpeed < 2) {
                            newBullet.colour = "red";
                            newBullet.stroke = "red";
                            newBullet.width = 25;
                            newBullet.height = 25;
                        } else {
                            newBullet.colour = "yellow";
                        }
                        newBullet.life = 30
                        if (random(1,2) == 1) {
                            newBullet.bearing = this.sprite.rotation + random(0,bulletSpread)
                        } else {
                            newBullet.bearing = this.sprite.rotation - random(0,bulletSpread)
                        }
                        newBullet.applyForce(200)
                    }
                //}
            } else {
            console.error("Enemy has invalid attack type! Enemy sprite has been removed.")
            this.sprite.remove()
            }
        }
        },1)
    }
}