class WeatherWidget{
  constructor(width, height, posX, posY){
    // 500, 200, 20, 10
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 20;
    this.dposY = 10;
    this.city = $("<div>", {id:"city"});
    this.temp = $("<div>", {id:"temp"});
    this.hlTemp = $("<div>", {id:"hlTemp"});
    this.condition = $("<div>", {id:"condition"});
    this.humidity = $("<div>", {id:"humidity"});
    this.icon = $("<img>", {id:"icon"});
  }
}
