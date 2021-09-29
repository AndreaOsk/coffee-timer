//Countdown timer with minutes and seconds
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEL = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}: ${displaySeconds}`;

    time = time -1;
}


//Countdown timer with buttons to stop and reset timer. 
let myTimerObj = (function(document) {
    let myTimer; 

    function start() {
        myTimer = setInterval(myClock, 1000);
        let c = 5;

        function myClock() {
            document.getElementById('demo').innerHTML = c -1;
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