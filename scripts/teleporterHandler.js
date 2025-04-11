let teleporterLinkQueue = [] // a linking queue - unlinked teleporters will be recorded here

class Teleporter{ // this object takes an ID input (its ID) and a linked ID input (the ID of the teleporter it should link to)
    constructor(x,y,id,linkedTeleporterId) {
        this.sprite = new Sprite(x,y+23,180,20,'k'); //already explained in "checkpointHandler.js"
		this.sprite.hitbox = new Sprite(x,y,180,60,'k'); //function already explained in "checkpointHandler.js" - this sprite is an invisible hitbox that the player can stand in and press E to activate the teleporter
        this.sprite.parentRef = this; //already explained in "checkpointHandler.js"
		this.sprite.hitbox.parentRef = this; //already explained in "checkpointHandler.js"
        this.sprite.color = "white"; //never seen
		this.linkedTeleporterId = linkedTeleporterId; //the ID of the teleporter that this teleporter should link to
		this.linkedTeleporter = null; //the teleporter object that it is linked to - no value yet
		this.id = id; // the ID of this teleporter
		//console.log("ID: "+this.id)
		//console.log("LINK: "+this.linkedTeleporterId)
        for (i=0; i<teleporterLinkQueue.length; i++) { //on creation, the teleporter searches the linking queue. if a link is found, then the two are linked. if not then  the teleporter is recorded into the queue to await another teleporter linking to it.
			//console.log("ATTEMPTING LINK")
			if (this.linkedTeleporterId == teleporterLinkQueue[i].id) { //does the ID of the potential link match the ID of the teleporter that this teleporter sould be linking to?
				//console.log("LINK FOUND")

				//link the two teleporters
				this.linkedTeleporter = teleporterLinkQueue[i]; 
				teleporterLinkQueue[i].linkedTeleporter = this;

				//remove the other teleporter from the linking queue
				teleporterLinkQueue.splice(i,1);
			}
		}
		if (this.linkedTeleporter == null) { //if no links were made
			//console.log("NO LINK MADE")
			teleporterLinkQueue.push(this); //add this teleporter to the queue
			//console.log(teleporterLinkQueue)
		}
        teleporterGroup.add(this.sprite.hitbox); // same as with the door and checkpoint groups - once added, the game will count this object as a teleporter
		hiddenGroup.add(this.sprite.hitbox); //hide the teleporter's interaction hitbox
    }
    async onInteract() { //when the teleporter is activated
		if (!deathlock) { //if the player isn't dead or otherwise frozen, freeze the game, fade the scree, set the player's position to the linked teleporter's position, unfade the screen, and unfreeze the game.
		deathlock = true;
        freeze = true;
		let r;
		for (r = 1; r < 101; r++) {
			fadeProgress = r*2.55
			await sleep(1)
		}
		await sleep(1000)
        player.pos = this.linkedTeleporter.sprite.hitbox.pos;
		player.colour = "purple" // never seen
		for (r = 1; r < 101; r++) {
			fadeProgress = 255 - r*2.55
			await sleep(1)
		}
		freeze = false;
		deathlock = false;
		}
    }
}