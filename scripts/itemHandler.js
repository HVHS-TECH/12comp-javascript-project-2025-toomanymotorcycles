let usingVoiceKey = false;

const ITEM_FUNCTIONS = [
    async () => { // Item ID: 0
        if (player.canUseHealthItems) {
            itemExecution = true;
            player.canUseHealthItems = false;
            for(i=player.health; i>0; i--) {
                //console_log_"WHY DID YOU DO THIS");
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
            //console_log_"ADRENALINE STIM USED"),
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
            //console_log_"SPEED STEROIDS USED")
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
            //console_log_"HEALING INJECTION USED")
            itemExecution = true;
            player.canUseHealthItems = false; 
            for(i=player.health; i<100; i++) {
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
            //console_log_"EXPERIMENTAL INJECTION 1 USED")
            itemExecution = true;
            player.canUseStaminaItems = false;
            player.canUseSpeedItems = false;
            player.canUseHealthItems = false;
            player.staminaMax = 600;
            player.stamina = player.staminaMax;
            player.fatigued = false;
            player.speedMultiplier = 1.6;
            //console_log_player.speedMultiplier)
            for (i=0; i<75; i++) {
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
            itemExecution = true;
            player.canUseHealthItems = false; 
            for(i=player.health; i<100; i++) {
                player.health ++;
                await sleep(50);
            };
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 12
        if (player.canUseHealthItems) {
            itemExecution = true;
            player.canUseHealthItems = false; 
            for(i=player.health; i<100; i++) {
                player.health ++;
                await sleep(50);
            };
            player.canUseHealthItems = true;
        } else {
            console.warn("Player attempted to use health-related item while health-related item cooldown was active.")
        }
    },
    async () => { // Item ID: 13
        if (!usingVoiceKey) {
            //console_log_"VOICE KEY USED")
            usingVoiceKey = true;
            voiceKeyAudio.play();
            await sleep(5000)
            //console_log_"VOICE KEY USE COMPLETE")
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
        this.itemID = itemID;
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
        //console_log_player.inventory.toString());
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