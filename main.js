

/*var timer = function() {
var startTime = Date.now();
var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById('myText').innerHTML = (elapsedTime / 1000).toFixed(3);
}, 1);
}


  <button id='push' onclick='pushButton()'>Ready</button>



let word = document.getElementById('words');
word.addEventListener('keydown', (event) => {

})

document.body.style.background = "#666699";

var pushButton = function() {
  document.body.style.background = "#00008B";
  document.getElementById('push').innerHTML = 'Wait...';
  var oneToTen = (Math.floor(Math.random()*10000));
  function done() {
    document.getElementById('push').innerHTML = 'PUSH!'
    document.body.style.background = "#fb1818";
    console.log(oneToTen)
      }
    setTimeout(done, oneToTen);
}
*/








x = false;
y = false;
z = false;
q = true;
last = false;
var oneToTen;
var beginTime;



document.body.style.background = "#666699";
oneToTen = (Math.floor(Math.random()*10000));
beginTime = '0'





function done() {
  if (q) {
  document.getElementById('push').innerHTML = 'PUSH!'
  document.body.style.background = "#fb1818";
  x = false;
  y = false;
  z = true;
  console.log(x, y, z);
  console.log(oneToTen)
  beginTime = Date.now();
} else {}

  }










var ready = function() {
document.getElementById('push').innerHTML = 'Ready'
x = true;
y = false;
z = false;
console.log(x, y, z);
}
ready();


var pushButton = function() {

  x = false;
  y = true;
  z = false;
  console.log(x, y, z);
  document.body.style.background = "#00008B";
  document.getElementById('push').innerHTML = 'Wait...';


    setTimeout(done, oneToTen);


}



document.getElementById('work')
.addEventListener('keyup', function(event) {
    if (event.keyCode === 32) {
        document.getElementById('push').click();
    }
});


function decider() {
  if (last) {

  } else if (x) {
    pushButton();
  } else if (y) {
  document.body.style.background = "black"
  document.getElementById('push').innerHTML = 'FAILURE'
  q = false;
} else if (z) {
  document.body.style.background = "gold";
  var end = Date.now();
  var finalScore = (end - beginTime);
  console.log(finalScore);
  document.getElementById('push').innerHTML = finalScore + 'ms'
  last = true;
  }
}




var reset = function() {

  x = false;
  y = false;
  z = false;
  q = true;
  last = false;
  oneToTen = (Math.floor(Math.random()*10000));
  beginTime = '0'
  document.body.style.background = "#666699";
  document.getElementById('push').innerHTML = 'Ready'
  ready();

}
