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
		console.log("ID: "+this.id)
		console.log("LINK: "+this.linkedTeleporterId)
        for (i=0; i<teleporterLinkQueue.length; i++) {
			console.log("ATTEMPTING LINK")
			if (this.linkedTeleporterId == teleporterLinkQueue[i].id) {
				console.log("LINK FOUND")
				this.linkedTeleporter = teleporterLinkQueue[i];
				teleporterLinkQueue[i].linkedTeleporter = this;
				teleporterLinkQueue.splice(i,1);
			}
		}
		if (this.linkedTeleporter == null) {
			console.log("NO LINK MADE")
			teleporterLinkQueue.push(this);
			console.log(teleporterLinkQueue)
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
			fadeProgress = r*2.55
			await sleep(1)
		}
		await sleep(1000)
        player.pos = this.linkedTeleporter.sprite.hitbox.pos;
		player.colour = "purple"
		for (r = 1; r < 101; r++) {
			fadeProgress = 255 - r*2.55
			await sleep(1)
		}
		freeze = false;
		deathlock = false;
		}
    }
}