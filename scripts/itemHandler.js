const ITEM_FUNCTIONS = [
    (test) => {console.log("ADRENALINE STIM USED"),player.staminaMax = 600,player.stamina = 600,sleep(20),player.staminaMax = 120},
    (test) => {console.log("BBBBBBB")}
]

class Item{
    constructor(x,y,w,h,itemID) {
        this.sprite = new Sprite(x,y,w,h)
        this.sprite.parentRef = this;
        this.itemID = itemID;
        itemGroup.add(this.sprite);
    }
    onPickup() {
       this.sprite.remove();
       if (player.inventory.length < 5) {
        player.inventory.push(this);
        console.log(player.inventory.toString());
        ITEM_FUNCTIONS[console.inventory[0].itemID]();
       }
    }
}