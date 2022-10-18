var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("today is " +  dayList[day]);
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hour >= 12)? "PM" : "AM";


if(hour < 10){
  hour = "0" +  hour 
}
if(minutes < 10){
  minutes = "0" + minutes
}
if(seconds < 10){
  seconds = "0" + seconds
}
console.log("current time is " + hour + ":" + minutes+ ":" + seconds + " "+ prepand );

