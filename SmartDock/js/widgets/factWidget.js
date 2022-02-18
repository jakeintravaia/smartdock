class FactWidget{
  constructor(width, height, posX, posY){
    // 500, 200, 600, 590
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 600;
    this.dposY = 590;
    this.title = $("<div>", {id: "factTitle"});
    this.fact = $("<div>", {id: "fact"});
  }
}
