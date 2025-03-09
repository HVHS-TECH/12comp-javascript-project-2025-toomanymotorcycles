const ITEM_FUNCTIONS = [
    (test) => {console.log("AAAAAAA")},
    (test) => {console.log("BBBBBBB")}
]

class Item extends Sprite {
    constructor(x,y,w,h,itemID) {
        super(x,y,w,h)
        ITEM_FUNCTIONS[itemID]();
    }
}