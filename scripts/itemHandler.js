const ITEM_FUNCTIONS = [
    (test) => {console.log("ADRENALINE STIM USED"),player.staminaMax = 600,player.stamina = 600,player.fatigued = false,sleep(20),player.staminaMax = 120},
    (test) => {console.log("EXPERIMENTAL STEROIDS USED"),player.staminaMax = 9999,player.stamina = 9999,player.fatigued = false,sleep(20),player.staminaMax = 9999}
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
        console.log("TOO MANY ITEMS");
       }
    }
}

function playerInventory() {
    if (kb.pressed("1")) {
           if (player.inventory.length > 0) {
                   ITEM_FUNCTIONS[player.inventory[0].itemID]();
                   player.inventory.splice(0,0);
                   print(player.inventory)
           }
    }
    if (kb.pressed("2")) {
           if (player.inventory.length > 1) {
                   ITEM_FUNCTIONS[player.inventory[1].itemID]();
                   player.inventory.splice(1,1);
           }
    }
    if (kb.pressed("3")) {
           if (player.inventory.length > 2) {
                   ITEM_FUNCTIONS[player.inventory[2].itemID]();
                   player.inventory.splice(2,2);
           }
    }
    if (kb.pressed("4")) {
           if (player.inventory.length > 3) {
                   ITEM_FUNCTIONS[player.inventory[3].itemID]();
                   player.inventory.splice(3,3);
           }
    }
    if (kb.pressed("5")) {
           if (player.inventory.length > 4) {
                   ITEM_FUNCTIONS[player.inventory[4].itemID]();
                   player.inventory.splice(4,4);
           }
    }
   }