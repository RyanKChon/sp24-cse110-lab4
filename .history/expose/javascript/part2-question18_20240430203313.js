let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
function printTime() {
    let b = new Date();
    time = b.toLocaleTimeString();
    console.log(time); 
}
// after 10 seconds stop the printing;
setTimeout(() => {
    clearTimeout(intervalID);
  }, 10000);

//prints the time every second
let intervalID = setInterval(printTime, 1000);