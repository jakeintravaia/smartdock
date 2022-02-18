class ClassWidget{
  constructor(width, height, posX, posY){
    // 300, 300, 260, 270
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.dposX = 260;
    this.dposY = 270;
    this.title = $("<div>", {id: "title"});
    this.nextClass = $("<div>", {id: "nextClass"});
    this.img = $("<img>", {id:"classIcon"});
    this.duration = $("<div>", {id: "duration"});
  }
}
