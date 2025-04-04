let teleporterLinkQueue = []

class Teleporter{
    constructor(x,y,id,linkedTeleporterId) {
        this.sprite = new Sprite(x,y+23,180,20,'k');
		this.sprite.hitbox = new Sprite(x,y,180,60,'k');
        this.sprite.parentRef = this;
		this.sprite.hitbox.parentRef = this;
        this.sprite.color = "white";
		this.linkedTeleporterId = linkedTeleporterId;
		this.linkedTeleporter = null;
		this.id = id;
		print("ID: "+this.id)
		print("LINK: "+this.linkedTeleporterId)
        for (i=0; i<teleporterLinkQueue.length; i++) {
			print("ATTEMPTING LINK")
			if (this.linkedTeleporterId == teleporterLinkQueue[i].id) {
				print("LINK FOUND")
				this.linkedTeleporter = teleporterLinkQueue[i];
				teleporterLinkQueue[i].linkedTeleporter = this;
				teleporterLinkQueue.splice(i,1);
			}
		}
		if (this.linkedTeleporter == null) {
			print("NO LINK MADE")
			teleporterLinkQueue.push(this);
			print(teleporterLinkQueue)
		}
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
        player.pos = this.linkedTeleporter.sprite.hitbox.pos;
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