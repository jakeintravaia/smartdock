// Update time for time widget
function updateTime(){
  timeWidget.time = moment().format('hh:mm:ss a');
  widgetList[0].text(timeWidget.time);
}
