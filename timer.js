//Countdown timer with minutes and seconds
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEL = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}: ${seconds}`;
    time--;
}


//Countdown timer with buttons to stop and reset timer. 
var myTimerObj = (function(document) {
    var myTimer; 

    function start() {
        myTimer = setInterval(myClock, 1000);
        var c = 5;

        function myClock() {
            document.getElementById('demo').innerHTML = --c;
            if (c == 0) {
            clearInterval(myTimer);
            alert('reached zero');
            }
        }
    }

    function end() {
        clearInterval(myTimer);
    }

    return {start:start, end:end};
})(document);