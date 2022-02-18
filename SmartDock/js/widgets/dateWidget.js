class DateWidget{
  constructor(width, height, posX, posY){
    // 200, 200, 20, 270
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 20;
    this.dposY = 270;
    this.month = $("<div>", {id:"month"});
    this.day = $("<div>", {id:"day"});
    this.month.text(moment().format("MMM"));
    this.day.text(moment().format("D"));
  }
}
