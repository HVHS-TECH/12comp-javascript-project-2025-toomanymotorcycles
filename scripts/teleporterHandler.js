class Teleporter{
    constructor(x,y,linkedX,linkedY) {
        this.sprite = new Sprite(x,y,180,60,'k')
        this.sprite.parentRef = this;
        this.sprite.color = "white";
        this.linkedX = linkedX;
        this.linkedY = linkedY;
        teleporterGroup.add(this.sprite);
    }
    async onInteract() {
        freeze = true;
		for (v = 1; v < 101; v++) {
			allSprites.opacity = 1 - v * 0.01
			hiddenGroup.opacity = 0;
			print(player.opacity)
			await sleep(1)
		}
		await sleep(1000)
        player.x = this.linkedX;
        player.y = this.linkedY;
		player.colour = "purple"
		freeze = false;
		for (v = 1; v < 101; v++) {
			allSprites.opacity = v * 0.01;
			hiddenGroup.opacity = 0;
			print(player.opacity)
			await sleep(1)
		}
    }
}