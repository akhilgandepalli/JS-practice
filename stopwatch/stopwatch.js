let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');

[msec, sec, min, hrs] = [0, 0, 0, 0];
let timer = document.querySelector('.timer');
let counter = null;

const onPlay = ()=>{
    start.classList.add('show');
    pause.classList.remove('show');
    reset.classList.remove('show');
}
const onRestart = () => {
    start.classList.remove('show')
    pause.classList.add('show');
    reset.classList.add('show');
}
const onStop = () => {
    pause.classList.add('show');
    start.classList.remove('show')
}

const displayTimer = () =>{
    msec++;
    if(msec === 100){
        msec = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            min++;
            if(min === 60){
                min = 0;
                hrs++
            }
        }
    }
    let h = hrs < 10 ? '0' + hrs : hrs;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    ms = msec < 10 ? '0' + msec : msec;
    timer.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
}

const play = () => {
    onPlay();
    if(counter !== null){
        clearInterval(counter)
    }
    counter = setInterval(displayTimer, 10);
}
const stop = () =>{
    onStop();
    clearInterval(counter);
}
const restart = () => {
    onRestart();
    clearInterval(counter);
    [msec, sec, min, hrs] = [0, 0, 0, 0];
    timer.innerHTML = "00 : 00 : 00 : 00";
}
start.addEventListener('click', play);
pause.addEventListener('click', stop);
reset.addEventListener('click', restart);
