let timer = 25 * 60;
let isBreak = false;
let isPaused = true;
let timeColor = 'session-time';

let viewTimer = document.getElementById('timer');

let pauseHandler = document.getElementById('pause');
pauseHandler.addEventListener('click', pause);

let playHandller = document.getElementById('play');
playHandller.addEventListener('click', play);

let resetHandler = document.getElementById('reset');
resetHandler.addEventListener('click', reset);

let stopHandler = document.getElementById('stop');
stopHandler.addEventListener('click', stop);

let sessionTimeHandler = document.getElementById('session');
sessionTimeHandler.addEventListener('change', setTime);

let breakTimeHandler = document.getElementById('break');
breakTimeHandler.addEventListener('change', setTime);

setInterval(update, 1000);

function update() {
	if (!isPaused) timer--;
	if (timer === 0) switchTimer();
	viewTimer.innerText = displayTimer(timer);
}

function pause() {
	isPaused = true;
}

function reset() {
	breakTimeHandler.value = '5';
	sessionTimeHandler.value = '25';
	stop();

}

function play() {
	isPaused = false;
	breakTimeHandler.disabled = sessionTimeHandler.disabled = true;
	viewTimer.classList.add(timeColor);
}

function setTime() {
	timer = isBreak ? +breakTimeHandler.value * 60 : +sessionTimeHandler.value * 60;
}

function stop() {
	isPaused = true;
	viewTimer.classList.remove(timeColor);
	setTime();
	breakTimeHandler.disabled = sessionTimeHandler.disabled = false;
	update();
}

function switchTimer() {
	viewTimer.classList.remove(timeColor);
	if (!isBreak) {
		timer = +breakTimeHandler.value * 60;
		timeColor = 'break-time';
	} else {
		timer = +sessionTimeHandler.value * 60;
		timeColor = 'session-time';
	}
	alertSwitch();
	isBreak = !isBreak;
}

function displayTimer(timer) {
	let minutes = Math.floor(timer / 60),
		seconds = timer % 60;
	let extraZero = seconds < 10 ? '0' : '';
	return `${minutes}:${extraZero}${seconds}`;
}

function alertSwitch() {
	if (isBreak) alert('Back to work!');
	if (!isBreak) alert('Break time!');
}
