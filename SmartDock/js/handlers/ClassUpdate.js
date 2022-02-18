var classes = [];
var [Mon, Tue, Wed, Thur, Fri] = [[], [], [], [], []];

function Class(name, sTime, eTime, days, img){
  this.name = name;
  this.sTime = sTime;
  this.eTime = eTime;
  this.days = days;
  this.img = img;
}

function addClasses(){
  var physLab = new Class("Physics Lab", 0800, 1050, ["Monday"], "assets/icons/classes/physlab.png");
  var algDes = new Class("Algorithm Design and Analysis", 1730, 1845, ["Monday", "Wednesday"], "assets/icons/classes/algDes.png");
  var profIssues = new Class("Prof Issues in Comp Tech", 1555, 1710, ["Tuesday", "Thursday"], "assets/icons/classes/profIssues.png");
  var physics = new Class("Physics", 1730, 1845, ["Tuesday", "Thursday"], "assets/icons/classes/physics.png");
  var assembly = new Class("Assembly", 1905, 2155, ["Wednesday"], "assets/icons/classes/assembly.png");

  classes.push(physLab);
  classes.push(algDes);
  classes.push(profIssues);
  classes.push(physics);
  classes.push(assembly);
}

function quickSort(array)
{
  for(var i = 0; i < array.length; i++)
  {
    var temp;
    if(array.sTime[i + 1] < array.sTime[i])
    {
      temp = array[i];
      aray[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

function isDay(day)
{
  if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
  {
    return true;
  }
  return false;
}

function populateWeek()
{
  cDay = moment().format("dddd");

  for(const x in classes)
  {
    var c = classes[x];

    for(const d in c.days)
    {
      if(isDay(c.days[d]))
      {
      switch(c.days[d])
      {
        case "Monday":
        Mon.push(c);
        break;
        case "Tuesday":
        Tue.push(c);
        break;
        case "Wednesday":
        Wed.push(c);
        break;
        case "Thursday":
        Thur.push(c);
        break;
        case "Friday":
        Fri.push(c);
        break;
      }
      }
    }
  }
  console.log(Mon[0]);
  console.log(Tue[0]);
  console.log(Wed[0]);
  console.log(Thur[0]);
  console.log(Fri[0]);
  console.log(Mon[1]);
  console.log(Tue[1]);
  console.log(Wed[1]);
  console.log(Thur[1]);
  console.log(Fri[1]);
}

function sortArrays()
{
  quickSort(Mon);
  quickSort(Tue);
  quickSort(Wed);
  quickSort(Thur);
  quickSort(Fri);
}

function formatDur(c){
  return moment(c.sTime, "Hmm").format("hh:mm a") + " - " + moment(c.eTime, "HHmm").format("hh:mm a");
}

function updateWidget(name, img, duration)
{
  classWidget.nextClass.text(name);
  classWidget.img.attr("src", img);
  classWidget.duration.text(formatDur(duration));
}

function endDay()
{
  classWidget.nextClass.text("No more classes for today.")
  classWidget.img.attr("src", "assets/icons/classes/done.png");
  classWidget.duration.text("");
}

function updateClass(){
  var cDay = moment().format('dddd');
  var cTime = moment().format("HHmm");
  var physLab = classes[0];
  var algDes = classes[1];
  var profIssues = classes[2];
  var physics = classes[3];
  var assembly = classes[4];

  classWidget.title.text("Up Next");

  switch(cDay){
    case "Monday":
    console.log(cTime);
    if(cTime < Mon[0].eTime){
      updateWidget(Mon[0].name, Mon[0].img, Mon[0]);
    }

    if(cTime > Mon[0].eTime){
      updateWidget(Mon[1].name, Mon[1].img, Mon[1]);
    }

    if(cTime > Mon[1].eTime){
      endDay();
    }
    break;
    case "Tuesday":
    if(cTime < Tue[0].eTime){
      updateWidget(Tue[0].name, Tue[0].img, Tue[0]);
    }

    if(cTime > Tue[0].eTime){
      updateWidget(Tue[1].name, Tue[1].img, Tue[1]);
    }

    if(cTime > Tue[1].eTime){
      endDay();
    }
    break;
    case "Wednesday":
    if(cTime < Wed[0].eTime){
      updateWidget(Wed[0].name, Wed[0].img, Wed[0]);
    }

    if(cTime > Wed[0].eTime){
      updateWidget(Wed[1].name, Wed[1].img, Wed[1]);
    }

    if(cTime > Wed[1].eTime){
      endDay();
    }
    break;
    case "Thursday":
    if(cTime < Thur[0].eTime){
      updateWidget(Thur[0].name, Thur[0].img, Thur[0]);
    }

    if(cTime > Thur[0].eTime){
      updateWidget(Thur[1].name, Thur[1].img, Thur[1]);
    }

    if(cTime > Thur[1].eTime){
      endDay();
    }
    break;

    case "Friday":
    endDay();
    break;
    case "Saturday":
    endDay();
    break;
    case "Sunday":
    endDay();
    break;
  }
}
