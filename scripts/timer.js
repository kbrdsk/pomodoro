let timer = 2;
let isBreak = true;
let pause = false;

setInterval(update, 1000);

function update(){
    if(!pause) timer--;
    if(timer === 0) switchTimer();
    viewTimer.innerText = (displayTimer(timer));
}

function switchTimer(){
    if(!isBreak) timer = 5 * 60;
    else timer = 25 * 60;
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
    if(isBreak) console.log('Back to work!');
    if(!isBreak) console.log('Break time!');
}
let content = document.getElementById('container');
let viewTimer = document.createElement('p');
content.appendChild(viewTimer);


pauseHandler = document.getElementById('pause');
pauseHandler.addEventListener('click', function(){
    pause = true;
})
