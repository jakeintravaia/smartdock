var bartsTimes = [700, 800];
var barteTimes = [2000, 2100];
var fodsTimes = [700, 1030, 1100, 1630];
var fodeTimes = [1030, 1430, 2000];
var cStoreTimes = [[1100, 1500], [0830, 1630], [830, 1600]];
var foodPlaces = [];

function FoodPlace(name){
  this.name = name;
  this.sTime = this.sTime;
  this.eTime = this.eTime;
  this.status = false;
  this.dot = $("<div>", {id:"dot"});
  this.setTime = function(s, e){
    this.sTime = s;
    this.eTime = e;
  }
}

function addPlaces(){
  var bartels = new FoodPlace("Bartels");
  var fod = new FoodPlace("FOD");
  var cStore = new FoodPlace("Campus Store");
  foodPlaces.push(bartels);
  foodPlaces.push(fod);
  foodPlaces.push(cStore);
}

function setTime(fplace, sTime, eTime){
  fplace.sTime = sTime;
  fplace.eTime = eTime;
}

function checkMeal(){
  var cTime = moment().format("HHmm");
  var cDay = moment().format("dddd");

  if(cTime >= 700 && cTime < 1030){
    return 0;
  }

  if(cDay == "Saturday" || cDay == "Sunday"){
    if(cTime >= 1030 && cTime < 1430){
      return 1;
    }
  }


  if(cTime >= 1100 && cTime < 1430){
    return 2;
  }

  if(cTime >= 1630 && cTime < 2000){
    return 3;
  }

  return 4;
}

function formatTime(time){
  return moment(time, "Hmm").format("h:mm a");
}

function displayPlace(){
  var bartels = foodPlaces[0];
  var fod = foodPlaces[1];
  var cStore = foodPlaces[2];
  console.log(bartels.name, bartels.sTime, bartels.eTime);
  console.log(fod.name, fod.sTime, fod.eTime);
    // Remove stuff
    foodWidget.p1.empty();
    foodWidget.p1.append(bartels.dot);
    foodWidget.p1.append(bartels.name + ": <span>" + formatTime(bartels.sTime) + " - " + formatTime(bartels.eTime) + "</span>");
    // Remove stuff
    foodWidget.p2.empty();
    foodWidget.p2.append(fod.dot);
    foodWidget.p2.append(fod.name + ": <span>" + formatTime(fod.sTime) + " - " + formatTime(fod.eTime) + "</span>");
    // Remove stuff
    foodWidget.p3.empty();
    foodWidget.p3.append(cStore.dot);
    foodWidget.p3.append(cStore.name + ": <span>" + formatTime(cStore.sTime) + " - " + formatTime(cStore.eTime) + "</span>");

    // If it is closed, change time to Closed
    if(checkMeal() == 4){
      // Remove stuff
      foodWidget.p1.empty();
      foodWidget.p1.append(bartels.dot);
      foodWidget.p1.append(bartels.name + ": <span>" + formatTime(bartels.sTime) + " - " + formatTime(bartels.eTime) + "</span>");
      // Remove stuff
      foodWidget.p2.empty();
      foodWidget.p2.append(fod.dot);
      foodWidget.p2.append(fod.name + ": <span>" + formatTime(fod.sTime) + " - " + formatTime(fod.eTime) + "</span>");
      // Remove stuff
      foodWidget.p3.empty();
      foodWidget.p3.append(cStore.dot);
      foodWidget.p3.append(cStore.name + ": <span>" + formatTime(cStore.sTime) + " - " + formatTime(cStore.eTime) + "</span>");
    }
}

function updatePlaceTime(){
  console.log(checkMeal());
  var cTime = moment().format("HHmm");
  var cDay = moment().format("dddd");
  var bartels = foodPlaces[0];
  var fod = foodPlaces[1];
  var cStore = foodPlaces[2];

  switch(cDay){
    case "Monday": // [1100, 1500], [0830, 1630], [830, 1600]
    // Bartels Times
      bartels.setTime(bartsTimes[0], barteTimes[1]);
      // Fod Times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[0], fodeTimes[0]);
      }else if(checkMeal() == 2){
        fod.setTime(fodsTimes[2], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[1][0], cStoreTimes[1][1]);
    break;
    case "Tuesday":
    // Bartels times
      bartels.setTime(bartsTimes[0], barteTimes[1]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[0], fodeTimes[0]);
      }else if(checkMeal() == 2){
        fod.setTime(fodsTimes[2], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[1][0], cStoreTimes[1][1]);
    break;
    case "Wednesday":
    // Bartels times
      bartels.setTime(bartsTimes[0], barteTimes[1]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[0], fodeTimes[0]);
      }else if(checkMeal() == 2){
        fod.setTime(fodsTimes[2], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[1][0], cStoreTimes[1][1]);
    break;
    case "Thursday":
    // Bartels times
      bartels.setTime(bartsTimes[0], barteTimes[1]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[0], fodeTimes[0]);
      }else if(checkMeal() == 2){
        fod.setTime(fodsTimes[2], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[1][0], cStoreTimes[1][1]);
    break;
    case "Friday":
    // Bartels times
      bartels.setTime(bartsTimes[0], barteTimes[0]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[0], fodeTimes[0]);
      }else if(checkMeal() == 2){
        fod.setTime(fodsTimes[2], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[2][0], cStoreTimes[2][1]);
    break;
    case "Saturday":
    // Bartels times
      bartels.setTime(bartsTimes[1], barteTimes[0]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[1], fodeTimes[1]);
      }else if(checkMeal() == 1){
        fod.setTime(fodsTimes[1], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[0][0], cStoreTimes[0][1]);
    break;
    case "Sunday":
    // Bartels times
      bartels.setTime(bartsTimes[1], barteTimes[1]);
      // Fod times
      if(checkMeal() == 0){
        fod.setTime(fodsTimes[1], fodeTimes[1]);
      }else if(checkMeal() == 1){
        fod.setTime(fodsTimes[1], fodeTimes[1]);
      }else if(checkMeal() == 3){
        fod.setTime(fodsTimes[3], fodeTimes[2]);
      }else if(checkMeal() == 4){
        fod.setTime(fodsTimes[3], fodeTimes[2])
      }
      // cStore times
      cStore.setTime(cStoreTimes[0][0], cStoreTimes[0][1]);
    break;
  }

// Bartels status and dot

  if(cTime >= bartels.sTime && cTime < bartels.eTime){
    bartels.status = true;
  }else{
    bartels.status = false;
  }

  if(bartels.status){
    bartels.dot.css("background", "#1dd1a1");
  }else{
    bartels.dot.css("background", "#ff6b6b");
  }

// FOD status and dot

  if(cTime >= fod.sTime && cTime < fod.eTime){
    fod.status = true;
  }else{
    fod.status = false;
  }

  if(fod.status){
    fod.dot.css("background", "#1dd1a1");
  }else{
    fod.dot.css("background", "#ff6b6b");
  }

  // cStore status and dot

  if(cTime >= cStore.sTime && cTime < cStore.eTime){
    cStore.status = true;
  }else{
    cStore.status = false;
  }

  if(cStore.status){
    cStore.dot.css("background", "#1dd1a1");
  }else{
    cStore.dot.css("background", "#ff6b6b");
  }


  displayPlace();
}
