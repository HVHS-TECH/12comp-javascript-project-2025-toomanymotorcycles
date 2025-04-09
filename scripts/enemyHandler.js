
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
     * @param {int} killScore The amount of points that this enemy adds to the player's kill score upon death.
     * @param {int} bulletSpread How inaccurate the enemy's attacks are - this value is added or subtracted from the enemy's firing direction. Only relevant for ranged enemies.
     */
    constructor(x,y,size,health,power,speed,attackSpeed,attackType,killScore,bulletSpread) {
        this.sprite = new Sprite(x,y,size,size,'k')
        enemyGroup.add(this.sprite)
        this.sprite.parentRef = this
        this.sprite.health = health
        this.sprite.power = power
        this.sprite.moveSpeed = speed
        this.attackSpeed = attackSpeed
        this.attackType = attackType
        this.attackCooldown = 0
        this.killScore = killScore
        this.bulletSpread = bulletSpread
        if (this.sprite.moveSpeed == 0) {
            if (this.attackType == 1) {
                this.sprite.image = puddleOfCrystal;
            } else if (this.attackType == 2) {
                this.sprite.image = enemyTurret;
        }
        }
        this.attack = setInterval(() => {
            if (this.sprite.health <= 0) {
                if (this.sprite.moveSpeed == 0) {
                    explosion.play();
                }
                killscore += this.killScore;
                this.sprite.remove();
                clearInterval(this.attack);
            }
        if (!freeze) {
            if (this.attackCooldown > 0) {
                this.attackCooldown --;
                this.sprite.rotationalVelocity = 0;
            } else {
                player.collide(this.sprite, () => {if (gameState == 1) {takeDamage.play(), player.health -= this.sprite.power}})
            }
            if (this.attackType == 1) {
                if (this.sprite.moveSpeed == 0) {
                    player.overlapping(this.sprite, () => {if (gameState == 1) {takeDamage.play(), player.health -= this.sprite.power}});
                }
                if ((world.rayCast(this.sprite.pos,player) == player || world.rayCast(this.sprite.pos,player) == player.character || world.rayCast(this.sprite.pos,player) == player.crosshair)) {
                    if (!this.attackCooldown) {
                        print(this.sprite.moveSpeed);
                        if(this.sprite.moveSpeed > 0){this.sprite.rotateTowards(player,0.25);}
                        print(this.sprite.moveSpeed);
                        this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed);
                    }
                } else {
                    this.sprite.vel.x = 0;
                    this.sprite.vel.y = 0;
                    this.sprite.rotationalVelocity = 0;
                }
                if (dist(player.x,player.y,this.sprite.x,this.sprite.y) < 200 && this.sprite.moveSpeed > 0) {
                    if (this.attackCooldown == 0) {
                        this.attackCooldown = this.attackSpeed;
                        this.sprite.move(200,this.sprite.rotation,20)
                    }
                }   
            } else if (this.attackType == 2) {
                if (world.rayCast(this.sprite.pos,player) == player || world.rayCast(this.sprite.pos,player) == player.character || world.rayCast(this.sprite.pos,player) == player.crosshair) {
                    if (this.attackCooldown > 0) {
                        this.sprite.rotateTowards(player,0.25);
                        this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed);
                    }
                    if (this.attackCooldown == 0) {
                        this.attackCooldown = this.attackSpeed;
                        let newBullet = new Sprite(this.sprite.x,this.sprite.y,10,10,'d')
                        newBullet.power = this.sprite.power;
                        enemyBulletGroup.add(newBullet)
                        newBullet.image = laserBullet;
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
                        newBullet.life = 200
                        if (random(1,2) == 1) {
                            newBullet.bearing = this.sprite.rotation + random(0,bulletSpread)
                        } else {
                            newBullet.bearing = this.sprite.rotation - random(0,bulletSpread)
                        }
                        if (this.sprite.moveSpeed == 0) {
                            turretFire.play();
                        }
                        newBullet.rotation == newBullet.bearing;
                        newBullet.applyForce(200)
                    }
                } else {
                    this.sprite.rotationalVelocity = 0;
                    this.sprite.vel.x = 0;
                    this.sprite.vel.y = 0;
                }
            } else {
            console.error("Enemy has invalid attack type! Enemy sprite has been removed.")
            this.sprite.remove()
            }
        }
        },1)
    }
}