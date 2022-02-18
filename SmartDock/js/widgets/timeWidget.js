class TimeWidget{
  constructor(width, height, posX, posY){
    // 500, 200, 600, 10
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 600;
    this.dposY = 10;
    this.time = moment().format('hh:mm:ss a');
  }
}
