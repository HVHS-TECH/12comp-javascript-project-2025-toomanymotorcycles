function buildMap() {
    randomItem = new Item(30,30,0)
    randomItem.color = "red"
    randomItem2 = new Item(50,50,7)
    randomItem3 = new Item(70,70,10)
    randomItem4 = new Item(90,90,8)
    randomItem5 = new Item(110,110,9)
    randomItem6 = new Item(210,210,13)
    keycard1 = new Item(310,310,1,true)
    randomDoor = new Door(660,800,0,2,4500)
    randomReader = new Reader(350,810,1,randomDoor,null,12000,true)
    randomReader2 = new Reader(1000,625,1,randomDoor,randomReader,12000,true)
    hiddenGroup.add(randomReader2.sprite);
    randomReader.linkedReader = randomReader2;
    //dumbTestEnemy = new Enemy(1000,0,60,1000,1,5,10,2,0)
    checkpoint1 = new Checkpoint(1500,300)
}
