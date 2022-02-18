class FoodWidget{
  constructor(width, height, posX, posY){
    // 540, 200, 20, 590
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 20;
    this.dposY = 590;
    this.title = $("<div>", {id:"foodTitle"});
    this.title.text("Food on Campus");
    this.p1 = $("<div>", {id: "foodPlace"});
    this.p2 = $("<div>", {id: "foodPlace"});
    this.p3 = $("<div>", {id: "foodPlace"});
  }
}
