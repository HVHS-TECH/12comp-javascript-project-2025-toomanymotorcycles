const ITEM_FUNCTIONS = [
    async () => {
        if (player.canUseStaminaItems) {
            itemExecution = true;
            player.canUseStaminaItems = false, 
            console.log("AHOOGA"),
            player.staminaMax = 0,
            player.stamina = player.staminaMax
        } else {
            console.warn("Player attempted to use stamina-related item while stamina-related item cooldown was active.")
        }
    },
    () => {
        player.clearanceLevel = 1;
    },
    () => {
        player.clearanceLevel = 2;
    },
    () => {
        player.clearanceLevel = 3;
    },
    () => {
        player.clearanceLevel = 4;
    },
    () => {
        player.clearanceLevel = 5;
    },
    () => {
        player.clearanceLevel = 6;
    },
    async () => {
        if (player.canUseStaminaItems) {
            itemExecution = true;
            player.canUseStaminaItems = false, 
            console.log("ADRENALINE STIM USED"),
            player.staminaMax = 600,
            player.stamina = player.staminaMax,
            player.fatigued = false,
            await sleep(20000),
            player.staminaMax = 120,
            player.stamina = player.staminaMax-10,
            player.canUseStaminaItems = true
        } else {
            console.warn("Player attempted to use stamina-related item while stamina-related item cooldown was active.")
        }
    },
    async () => {
        if (player.canUseStaminaItems) {
            itemExecution = true,
            player.canUseStaminaItems = false, 
            console.log("EXPERIMENTAL STEROIDS USED"),
            player.staminaMax = 9999,
            player.stamina = player.staminaMax,
            player.fatigued = false,
            await sleep(20000),
            player.stamina = 0,
            await sleep(2000),
            player.staminaMax = 120,
            player.stamina = player.staminaMax-10,
            player.canUseStaminaItems = true
        } else {
            console.warn("Player attempted to use stamina-related item while stamina-related item cooldown was active.")
        }
    }
]

class Item{
    constructor(x,y,w,h,itemID,triggerOnPickup) {
        this.sprite = new Sprite(x,y,w,h,'k')
        this.sprite.parentRef = this;
        this.itemID = itemID;
        this.triggerOnPickup = triggerOnPickup;
        itemGroup.add(this.sprite);
    }
    onPickup() {
        if (this.triggerOnPickup) {
            this.sprite.remove();
            ITEM_FUNCTIONS[this.itemID]();
        } else if (player.inventory.length < 5) {
        this.sprite.remove();
        player.inventory.push(this);
        console.log(player.inventory.toString());
       }
    }
}

function playerInventory() {
    console.log(player.canUseStaminaItems)
    if (player.canUseItems) {
        if (kb.pressed("1")) {
           if (player.inventory.length > 0) {
                   ITEM_FUNCTIONS[player.inventory[0].itemID]();
                   if (itemExecution) {
                        player.inventory.splice(0,1);
                        itemExecution = false;
                   }
                   print(player.inventory)
           }
        }
        if (kb.pressed("2")) {
           if (player.inventory.length > 1) {
                   ITEM_FUNCTIONS[player.inventory[1].itemID]();
                    if (itemExecution) {
                        player.inventory.splice(1,1);
                        itemExecution = false;
                    }
           }
        }
        if (kb.pressed("3")) {
           if (player.inventory.length > 2) {
                   ITEM_FUNCTIONS[player.inventory[2].itemID]();
                   if (itemExecution) {
                        player.inventory.splice(2,1);
                        itemExecution = false;
                    }
           }
        }
        if (kb.pressed("4")) {
           if (player.inventory.length > 3) {
                   ITEM_FUNCTIONS[player.inventory[3].itemID]();
                   if (itemExecution) {
                        player.inventory.splice(3,1);
                        itemExecution = false;
                    }
           }
        }
        if (kb.pressed("5")) {
           if (player.inventory.length > 4) {
                   ITEM_FUNCTIONS[player.inventory[4].itemID]();
                   if (itemExecution) {
                        player.inventory.splice(4,1);
                        itemExecution = false;
                    }
           }
        }
    }  else if (kb.pressed("1") || kb.pressed("2") || kb.pressed("3") || kb.pressed("4") || kb.pressed("5")) {
        console.warn("Player attempted to use item while full item cooldown was active.")
    }
   }