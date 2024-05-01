let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
function printTime() {
    time = d.toLocaleTimeString;
    console.log(time); 
}
// after 10 seconds stop the printing;
setTimeout(() => {
    clearTimeout(this.timeoutID);
  }, 10000);

//prints the time every second

  setInterval(printTime, 1000);