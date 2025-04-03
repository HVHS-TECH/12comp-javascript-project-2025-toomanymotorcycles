class Teleporter{
    constructor(x,y,linkedX,linkedY) {
        this.sprite = new Sprite(x,y+23,180,20,'k');
		this.sprite.hitbox = new Sprite(x,y,180,60,'k');
        this.sprite.parentRef = this;
		this.sprite.hitbox.parentRef = this;
        this.sprite.color = "white";
        this.linkedX = linkedX;
        this.linkedY = linkedY;
        teleporterGroup.add(this.sprite.hitbox);
		hiddenGroup.add(this.sprite.hitbox);
    }
    async onInteract() {
		if (!deathlock) {
		deathlock = true;
        freeze = true;
		let r;
		for (r = 1; r < 101; r++) {
			allSprites.opacity = 1 - r * 0.01
			hiddenGroup.opacity = 0;
			print(player.opacity)
			await sleep(1)
		}
		await sleep(1000)
        player.x = this.linkedX;
        player.y = this.linkedY;
		player.colour = "purple"
		freeze = false;
		for (r = 1; r < 101; r++) {
			allSprites.opacity = r * 0.01;
			hiddenGroup.opacity = 0;
			print(player.opacity)
			await sleep(1)
		}
		deathlock = false;
		}
    }
}