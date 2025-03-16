function playerSetup() {
    player = new Sprite();

    player.clearanceLevel = 5;
    player.speed = 5;
    player.staminaMax = 120;
    player.stamina = player.staminaMax;
    player.fatigued = false;
    player.inventory = [];
    player.canUseItems = true;
    player.canUseStaminaItems = true;
}

function interactSpriteSetup() {
    interactPrompt = new Sprite(camera.x,camera.y+windowWidth/8,150,150,'s');
    interactPrompt.textSize = 100
    interactPrompt.textColor = "white"
    interactPrompt.text = "E"
    interactPrompt.color = "black"
    interactPrompt.layer = 999;
    interactPrompt.visible = false;
    interactPrompt.overlap(allSprites)
}