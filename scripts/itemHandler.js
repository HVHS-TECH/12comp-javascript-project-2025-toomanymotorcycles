const ITEM_FUNCTIONS = [
    async () => {
        if (player.canUseStaminaItems) {
            itemExecution = true;
            player.canUseStaminaItems = false, 
            console.log("ADRENALINE STIM USED"),
            player.staminaMax = 600,
            player.stamina = 600,
            player.fatigued = false,
            await sleep(20000),
            player.staminaMax = 120,
            player.canUseStaminaItems = true
        } else {
            console.warn("Player attempted to use stamina-related item while stamina-related item cooldown was active.")
        }
    },
    async () => {
        if (player.canUseStaminaItems) {
            itemExecution = true;
            player.canUseStaminaItems = false, 
            console.log("EXPERIMENTAL STEROIDS USED"),
            player.staminaMax = 9999,
            player.stamina = 9999,
            player.fatigued = false,
            await sleep(20000),
            player.staminaMax = 120
            player.canUseStaminaItems = true
        } else {
            console.warn("Player attempted to use stamina-related item while stamina-related item cooldown was active.")
        }
    }
]

class Item{
    constructor(x,y,w,h,itemID) {
        this.sprite = new Sprite(x,y,w,h)
        this.sprite.parentRef = this;
        this.itemID = itemID;
        itemGroup.add(this.sprite);
    }
    onPickup() {
       if (player.inventory.length < 5) {
        this.sprite.remove();
        player.inventory.push(this);
        console.log(player.inventory.toString());
       } else {
        console.warn("Player has too many items.");
       }
    }
}

function playerInventory() {
    console.log(player.canUseItems)
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