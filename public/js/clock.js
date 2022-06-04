// add id "timer" in it
var eleTimer = document.getElementById("timer");
// the var of hour
var nHour = 0;

// the var of minute
var nMinute = 0;

// the var of second
var nSecond = 0;

//over 10 will plus one str
function timer() {
 return setInterval(function () {
    var strHour = nHour;
    var strMinute = nMinute
    var strSecond= nSecond;
 if ( nSecond < 10) {
  strSecond = "0" + nSecond;
 }
 if ( nMinute < 10 ) {
  strMinute = "0" + nMinute;
 } 
 if ( nHour < 10 ) {
  strHour = "0" + nHour;
 }
 // show the time
 var time = strHour + ":" + strMinute + ":" + strSecond;
 eleTimer.value = time;
 nSecond++;
 //becsue 60 second = 1 minute; 60 minute = 1 hour
 if (nSecond > 59){
  nSecond = 0;
  nMinute++;
 }
 if (nMinute > 59) {
  nSecond = 0;
  nHour++;
 }
}, 1000);
}
 
var n_timer = timer();

//the start and stop
function pause(self) {
 var state = self.getAttribute("state");
// set a on or off, on will start, off will stop
 if (state === "on") {
  clearInterval(n_timer);
  self.textContent = "Start";
  self.setAttribute("state", "off");
 } else {
  n_timer = timer();
  self.textContent = "Stop";
  self.setAttribute("state", "on");
 }
}
var ele_pause = document.getElementById("pause");
// restart
function restart() {
 clearInterval(n_timer);
 // set on 0 when press restart
 nSecond = 0;
 nMinute = 0;
 nHour = 0;
 n_timer = timer();
 ele_pause.textContent = "Stop";
 ele_pause.setAttribute("state", "on");
}