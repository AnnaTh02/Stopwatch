let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0o0;
let sec = 0o0;
let mins = 0o0;

//tracks the running interval so that the clearInterval function knows which running interval to stop
let timerId = null; 

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerId = null; 
    timerDisplay.innerHTML = `00 : 00 : 00`;
    mins = sec = msec = 0o0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec; 
    let secsString = sec < 10 ? `0${sec}` : sec; 
    let minsString = mins < 10 ? `0${mins}` : mins; 

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}