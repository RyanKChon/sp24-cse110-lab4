let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
function printTime() {
    console.log(i); 
}
//prints the time every second
setInterval(printTime, 1000);
// after 10 seconds stop the printing;
setTimeout(() => {
    clearTimeout();
  }, 10000);