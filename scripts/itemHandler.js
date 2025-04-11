let usingVoiceKey = false;

const ITEM_FUNCTIONS = [
    async () => { // Item ID: 0
        if (player.canUseHealthItems) {
            itemExecution = true;
            player.canUseHealthItems = false;
            for(o=player.health; o>0; o--) {
                console.log("WHY DID YOU DO THIS");
                takeDamage.play();
                player.health --;
                await sleep(10);
            }
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    () => { // Item ID: 1
        player.clearanceLevel = 1;
    },
    () => { // Item ID: 2
        player.clearanceLevel = 2;
    },
    () => { // Item ID: 3
        player.clearanceLevel = 3;
    },
    () => { // Item ID: 4
        player.clearanceLevel = 4;
    },
    () => { // Item ID: 5
        player.clearanceLevel = 5;
    },
    () => { // Item ID: 6
        player.clearanceLevel = 6;
    },
    async () => { // Item ID: 7
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
    async () => { // Item ID: 8
        if (player.canUseSpeedItems) {
            console.log("SPEED STEROIDS USED")
            itemExecution = true;
            player.canUseSpeedItems = false; 
            player.speedMultiplier = 1.2;
            await sleep(20000),
            player.speedMultiplier = 1;
            player.canUseSpeedItems = true;
        } else {
            console.warn("Player attempted to use speed-related item while speed-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 9
        if (player.canUseHealthItems) {
            console.log("HEALING INJECTION USED")
            itemExecution = true;
            player.canUseHealthItems = false; 
            for(d=player.health; d<100; d++) {
                player.health ++;
                await sleep(50);
            };
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 10
        if (player.canUseStaminaItems && player.canUseSpeedItems && player.canUseHealthItems) {
            console.log("EXPERIMENTAL INJECTION 1 USED")
            itemExecution = true;
            player.canUseStaminaItems = false;
            player.canUseSpeedItems = false;
            player.canUseHealthItems = false;
            player.staminaMax = 600;
            player.stamina = player.staminaMax;
            player.fatigued = false;
            player.speedMultiplier = 1.6;
            console.log(player.speedMultiplier)
            for (t=0; t<75; t++) {
                player.health --;
                await sleep(266);
            };
            player.staminaMax = 120;
            player.stamina = player.staminaMax-10;
            player.speedMultiplier = 1;
            player.canUseStaminaItems = true;
            player.canUseSpeedItems = true;
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use experimental injection 1 while an item cooldown was active.")
        }
    },
    async () => { // Item ID: 11
        if (player.canUseHealthItems) {
            console.log("EXPERIMENTAL INJECTION 2 USED")
            itemExecution = true;
            player.canUseHealthItems = false;
            for(g=0; g<10; g++) {
                print("DAMAGE x"+g)
                takeDamage.play();
                player.health --;
                await sleep(500);
            };
            player.health = 100;
            await sleep(50);
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 12
        if (player.canUseHealthItems) {
            console.log("EXPERIMENTAL INJECTION 3 USED")
            itemExecution = true;
            player.canUseHealthItems = false;
            player.prevX = player.x;
            player.prevY = player.y;
            console.log("TELEPORT GO")
            for(g=0; g<Math.round(random(5,200)); g++) {
                console.log("TELEPORT")
                player.x = random(100,10000);
                player.y = random(100,10000);
                await sleep(50);
            };
            player.x = player.prevX;
            player.y = player.prevY;
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 13
        if (!usingVoiceKey) {
            console.log("VOICE KEY USED")
            usingVoiceKey = true;
            voiceKeyAudio.play();
            await sleep(5000)
            console.log("VOICE KEY USE COMPLETE")
            usingVoiceKey = false;
        } else {
            console.warn("Player attempted to use voice key while voice key was already being used.")
        }
    }
]

class Item{
    constructor(x,y,itemID,triggerOnPickup) {
        this.sprite = new Sprite(x,y,30,30,'k');
        this.sprite.parentRef = this;
        console.log("ITEMID: "+itemID)
        if (itemID == -1) {
            while (true) {
                console.log("RANDOM")
                this.itemID = Math.round(random(0,13));
                if ((this.itemID < 1 || this.itemID > 6) && this.itemID != 13) {break}
            }
        } else {
            console.log("SET")
            this.itemID = itemID;
        }
        console.log("SETITEMID: "+this.itemID)
        this.sprite.image = itemTextures[this.itemID];
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
    if (player.canUseItems) {
        if (kb.pressed("1")) {
            itemExecution = false;
           if (player.inventory.length > 0) {
            try {ITEM_FUNCTIONS[player.inventory[0].itemID]();}
            finally {
                if (itemExecution) {
                    player.inventory.splice(0,1);
                    itemExecution = false;
                }
            }
           }
        }
        if (kb.pressed("2")) {
            itemExecution = false;
           if (player.inventory.length > 1) {
                try {ITEM_FUNCTIONS[player.inventory[1].itemID]();}
                finally {
                    if (itemExecution) {
                        player.inventory.splice(1,1);
                        itemExecution = false;
                    }
                }
           }
        }
        if (kb.pressed("3")) {
            itemExecution = false;
           if (player.inventory.length > 2) {
            try {ITEM_FUNCTIONS[player.inventory[2].itemID]();}
            finally {
                if (itemExecution) {
                    player.inventory.splice(2,1);
                    itemExecution = false;
                }
            }
           }
        }
        if (kb.pressed("4")) {
            itemExecution = false;
           if (player.inventory.length > 3) {
            try {ITEM_FUNCTIONS[player.inventory[3].itemID]();}
            finally {
                if (itemExecution) {
                    player.inventory.splice(3,1);
                    itemExecution = false;
                }
            }
           }
        }
        if (kb.pressed("5")) {
            itemExecution = false;
           if (player.inventory.length > 4) {
            try {ITEM_FUNCTIONS[player.inventory[4].itemID]();}
            finally {
                if (itemExecution) {
                    player.inventory.splice(4,1);
                    itemExecution = false;
                }
            }
           }
        }
    }  else if (kb.pressed("1") || kb.pressed("2") || kb.pressed("3") || kb.pressed("4") || kb.pressed("5")) {
        console.warn("Player attempted to use item while full item cooldown was active.")
    }
   }