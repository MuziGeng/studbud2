//show the real time
function time() {
    var realTime = new Date()
    theTime = document.getElementById('showtime');
    // looks like 21:22:45
    theTime.innerHTML = realTime.getHours() + ":" + realTime.getMinutes() + ":" + realTime.getSeconds() + "";
    setTimeout(time, 1000);
  }
  // click the start button will give the real time
  function start(){
    var realTime = new Date()
    var startTimeInput = document.getElementById("startTimeInput");
    var realHour = realTime.getHours();
    var realMinute = realTime.getMinutes();
    var realSecond = realTime.getSeconds();
    // looks like 21:22:45
    startTimeInput.innerHTML = realHour+ ":"  + realMinute +":" +realSecond
    }
  // click the finish button will give the real time
  function finish(){
    var realTime = new Date()
    var startTimeInput = document.getElementById("finishTimeInput");
    var realHour = realTime.getHours();
    var realMinute = realTime.getMinutes();
    var realSecond = realTime.getSeconds();
    // looks like 21:22:45
    startTimeInput.innerHTML = realHour+ ":"  + realMinute +":" +realSecond
    }
// click the + button will add one times
  function add(){
          var  interruptedTimes=document.getElementById("interruptedTimes");
          var  nInterruptedTimes= interruptedTimes.innerHTML;
          nInterruptedTimes++;
          interruptedTimes.innerHTML=nInterruptedTimes;
      }