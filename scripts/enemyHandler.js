
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
        this.sprite.parentRef = this;
        this.sprite.health = health; //enemy health
        this.sprite.power = power; //enemy power
        this.sprite.moveSpeed = speed; //enemy speef
        this.attackSpeed = attackSpeed; //enemy attack speed
        this.attackType = attackType; //enemy attack type
        this.attackCooldown = 0; //time remianing until enemy can attack again
        this.killScore = killScore; //points awarded upon death
        this.bulletSpread = bulletSpread; //enemy bullet inaccuracy
        this.dead = false; // a failsafe to stop the enemy firing if it is dead. for some reason, they started firing while dead and I have no idea why.
        if (this.sprite.moveSpeed == 0) { //if the enemy cannot move
            if (this.attackType == 1) { //if the enemy has a melee attack, make it a puddle of crystal
                this.sprite.image = puddleOfCrystal;
            } else if (this.attackType == 2) { //if the enemy has a ranged attack, make it a turret
                this.sprite.image = enemyTurret;
            }
        } else {
            if (this.attackType == 1) { //if the enemy has a melee attack, make it a regular melee enemy
                this.sprite.image = enemyMelee;
            } else if (this.attackType == 2) { //if the enemy has a ranged attack, make it a regular ranged enemy
                this.sprite.image = enemyRanged;
            }
        }
        this.attack = setInterval(() => {  //run the enemy's attack code every x milliseconds, where x is this function's second parameter
            if (this.sprite.health <= 0) { //if the enemy is dead, mark it dead and remove it.
                this.dead = true;
                if (this.sprite.moveSpeed == 0) { //if it cannot move, it plays an explosion sound upon death
                    explosion.play();
                }
                killscore += this.killScore; //award kill points to the player

                //remove all references to the sprite
                enemyGroup.remove(this.sprite);
                this.sprite.remove();

                //stop the enemy's attack code from running every millisecond
                clearInterval(this.attack);
            }
        if (!freeze && !this.dead) { //if the enemy is not frozen or dead
            if (this.attackCooldown > 0) { //if the enemy is still cooling off from its last attack, progress the cooldown timer, else if the enemy is touching the player and the game is actually being played (if gameState == 1), deal damage to the player equal to the enemy's power
                this.attackCooldown --;
                this.sprite.rotationalVelocity = 0; //ensure that the sprite does not rotate
            } else {
                player.collide(this.sprite, () => {if (gameState == 1) {takeDamage.play(), player.health -= this.sprite.power}}) 
            }
            if (this.attackType == 1) { //if this enemy is of type melee
                if (this.sprite.moveSpeed == 0) { //if it cannot move, it deals damage if a player walks over it
                    player.overlapping(this.sprite, () => {if (gameState == 1) {takeDamage.play(), player.health -= this.sprite.power}});
                }
                if ((world.rayCast(this.sprite.pos,player) == player || world.rayCast(this.sprite.pos,player) == player.character || world.rayCast(this.sprite.pos,player) == player.crosshair)) { //if the enemy can see the player (if the enemy's raycast towards the player hits the player)
                    if (!this.attackCooldown && this.sprite.moveSpeed > 0) { //if the enemy can attack and move, it moves towards the player
                        this.sprite.rotateTowards(player,0.25);
                        this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed);
                    }
                } else {
                    //if the enemy cannot see the player, ensure that the enemy does not move or rotate at all
                    this.sprite.vel.x = 0;
                    this.sprite.vel.y = 0;
                    this.sprite.rotationalVelocity = 0;
                }
                if (dist(player.x,player.y,this.sprite.x,this.sprite.y) < 200 && this.sprite.moveSpeed > 0) { //if the enemy is close to the player, it dashes towards them at a speed of 200 and its cooldown timer is activated
                    if (this.attackCooldown == 0) {
                        this.attackCooldown = this.attackSpeed;
                        this.sprite.move(200,this.sprite.rotation,20)
                    }
                }   
            } else if (this.attackType == 2) { //if this enemy is of type ranged
                if (world.rayCast(this.sprite.pos,player) == player || world.rayCast(this.sprite.pos,player) == player.character || world.rayCast(this.sprite.pos,player) == player.crosshair) { //if the enemy can see the player (if the enemy's raycast towards the player hits the player)
                    if (this.attackCooldown > 0) { //if the enemy can attack and move, it moves towards the player
                        this.sprite.rotateTowards(player,0.25);
                        if (this.sprite.moveSpeed > 0) {this.sprite.moveTo(player.x,player.y,this.sprite.moveSpeed)};
                    }
                    if (this.attackCooldown == 0) { //if the enemy can fire, it will. See the playerShoot() function in "game.js" for more information - enemy bullets are spawned the same way
                        this.attackCooldown = this.attackSpeed; //enemy cooldown is activated
                        let newBullet = new Sprite(this.sprite.x,this.sprite.y,10,10,'d')
                        newBullet.power = this.sprite.power;
                        enemyBulletGroup.add(newBullet) // the bullet is an enemy bullet, so it can hurt the player
                        newBullet.image = laserBullet;
                        newBullet.life = 200
                        if (random(1,2) == 1) {
                            newBullet.bearing = this.sprite.rotation + random(0,bulletSpread)
                        } else {
                            newBullet.bearing = this.sprite.rotation - random(0,bulletSpread)
                        }
                        if (this.sprite.moveSpeed == 0) { //if the enemy cannot move, it must be a turret, so the turret firing sound effect is played
                            turretFire.play();
                        }
                        newBullet.rotation == newBullet.bearing;
                        newBullet.applyForce(200)
                    }
                } else {
                    //if the enemy cannot see the player, ensure that the enemy does not move or rotate at all
                    this.sprite.rotationalVelocity = 0;
                    this.sprite.vel.x = 0;
                    this.sprite.vel.y = 0;
                }
            } else { //if the enemy is of neither type melee or type ranged, it is invalid, so it is removed.
            console.error("Enemy has invalid attack type! Enemy sprite has been removed.")
            this.sprite.remove()
            }
        }
        },1)
    }
}