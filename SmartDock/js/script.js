var widgetList = [];
var timeWidget = new TimeWidget(500, 200, 600, 10);
// 500, 200, 600, 10
var dateWidget = new DateWidget(200, 200, 20, 270);
// 200, 200, 20, 270
var weatherWidget = new WeatherWidget(500, 200, 20, 10);
// 500, 200, 20, 10
var classWidget = new ClassWidget(300, 300, 260, 270);
// 300, 300, 260, 270
var factWidget = new FactWidget(500, 200, 600, 590);
// 500, 200, 600, 590
var foodWidget = new FoodWidget(540, 200, 20, 590);
// 540, 200, 20, 590


// Make a widget div
function makeDiv(width, height, id, d1, d2, d3, d4){
  this.width = width;
  this.height = height;
  this.id = id;
  this.div = $("<div>", {id: this.id, class: "widget"});
  this.div.draggable();
  this.div.css({
    "width": this.width,
    "height": this.height
  });
  this.div.append(d1);
  this.div.append(d2);
  this.div.append(d3);
  this.div.append(d4);
  widgetList.push(this.div);
  $("body").append(this.div);
}

function positionWidgets(){
  widgetList[0].css({"left": timeWidget.posX + "px", "top": timeWidget.posY + "px"});
  widgetList[1].css({"left": dateWidget.posX + "px", "top": dateWidget.posY + "px"});
  widgetList[2].css({"left": weatherWidget.posX + "px", "top": weatherWidget.posY + "px"});
  widgetList[3].css({"left": classWidget.posX + "px", "top": classWidget.posY + "px"});
  widgetList[4].css({"left": factWidget.posX + "px", "top": factWidget.posY + "px"});
  widgetList[5].css({"left": foodWidget.posX + "px", "top": foodWidget.posY + "px"});
}

function loadWidgets(){
  // Time Widget
  makeDiv(timeWidget.width, timeWidget.height, "timeWidget", timeWidget.time);
  // Date Widget
  makeDiv(dateWidget.width, dateWidget.height, "dateWidget", dateWidget.month, dateWidget.day);
  // Weather widget
  makeDiv(weatherWidget.width, weatherWidget.height, "weatherWidget", weatherWidget.icon);
  // Class widget
  makeDiv(classWidget.width, classWidget.height, "classWidget", classWidget.title, classWidget.nextClass, classWidget.img, classWidget.duration);
  // Fact widget
  makeDiv(factWidget.width, factWidget.height, "factWidget", factWidget.title, factWidget.fact);
  // Food widget
  makeDiv(foodWidget.width, foodWidget.height, "foodWidget", foodWidget.title, foodWidget.p1, foodWidget.p2, foodWidget.p3);
}

$(document).ready(function(){
  loadWidgets();
  positionWidgets();
  updateTime();
  updateDate();
  addClasses();
  populateWeek();
  updateClass();
  loadFacts();
  getFact();
  getWeather(4845419);
  addPlaces();
  updatePlaceTime();
  setInterval(updateTime, 1000);
  setInterval(updateDate, 3600000);
  setInterval(updateClass, 60000);
  setInterval(getWeather(4845419), 3600000);
  setInterval(updatePlaceTime, 60000);

  // Load a fact when fact widget is clicked

  $("#factWidget").draggable().click(function(){
    if($(this).is("ui-draggable-dragging")){
      return;
    }
    getFact();
  });

  // Reset default widget locations on double tap

  $(document).dblclick(function(){
    for(var i = 0; i < widgetList.length; i++){
      widgetList[i].posX = widgetList[i].dposX;
      widgetList[i].posY = widgetList[i].dposY;
    }
    positionWidgets();
  });
});
