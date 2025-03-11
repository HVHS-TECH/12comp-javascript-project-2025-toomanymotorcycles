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