let timer = 2;
let isBreak = true;
let pause = true;

let sessionTimeHandler = document.getElementById('session');

let breakTimeHandler = document.getElementById('break');

setInterval(update, 1000);

function update(){
    if(!pause) timer--;
    if(timer === 0) switchTimer();
    viewTimer.innerText = (displayTimer(timer));
}

function reset(){
    breakTime = 5;
    sessionTime = 25;
    stop();
}

function stop(){
    timer = (isBreak)? +breakTimeHandler.value * 60:
                       +sessionTimeHandler.value * 60;
    pause = true;
    update();
}

function switchTimer(){
    if(!isBreak) timer = +breakTimeHandler.value * 60;
    else timer = +sessionTimeHandler.value * 60;
    alertSwitch();
    isBreak = !isBreak;
}

function displayTimer(timer){
    let minutes = Math.floor(timer/60),
        seconds = timer % 60;
    let extraZero = (seconds < 10)? '0':'';
    return `${minutes}:${extraZero}${seconds}`;
}

function alertSwitch(){
    if(isBreak) alert('Back to work!');
    if(!isBreak) alert('Break time!');
}
let content = document.getElementById('container');
let viewTimer = document.createElement('p');
content.appendChild(viewTimer);


pauseHandler = document.getElementById('pause');
pauseHandler.addEventListener('click', function(){
    pause = true;
})

playHandller = document.getElementById('play');
playHandller.addEventListener('click', function(){
  pause= false;  
})

resetHandler = document.getElementById('reset');
resetHandler.addEventListener('click', reset);

stopHandler = document.getElementById('stop');
stopHandler.addEventListener('click', stop);



// function getInputValue(){
//     let sessionValue = document.getElementById("session").value;
//     let breakValue = documnet.getElementById("break").value;
// }