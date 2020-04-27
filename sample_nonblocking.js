// Non Blocking code (Callback function)
setTimeout(function () {
  console.log("first line");
}, 1500);

console.log("second line");

// Blocking code
/*
console.log("init set...");

const startBlockingFunc = new Date().getTime();

while (new Date().getTime() < startBlockingFunc + 1500);

console.log("final line");
*/
