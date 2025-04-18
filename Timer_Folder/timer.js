let start = document.getElementById('start');
let btns = document.querySelectorAll('.btn');
let btnsX = document.querySelectorAll('.btnX');
let timerCover = document.querySelector('#timer-boxCover');
let time = document.querySelector('#clock');

let sec1 = document.querySelector('#sec-div1');
let sec2 = document.querySelector('#sec-div2');

let min1 = document.querySelector('#min-div1');
let min2 = document.querySelector('#min-div2');

let hrs1 = document.querySelector('#hrs-div1');
let hrs2 = document.querySelector('#hrs-div2');

start.addEventListener('click', () => {
    start.style.display = 'none';
    btns.forEach(btn => {
        btn.style.display = 'flex';
    });

    intervalId = setInterval(stopWatch, 10);
});

btns[1].addEventListener('click', () => {
    btns.forEach(btn => {
        btn.style.display = 'none';
    });
    btnsX.forEach(btnX => {
        btnX.style.display = 'flex';
    });
    clearInterval(intervalId);
});

btnsX[0].addEventListener('click', () => { //reset
    start.style.display = 'flex';
    btnsX.forEach(btnX => {
        btnX.style.display = 'none';
    });
    count2 = 0;
    sec1.innerText = 0;
    sec2.innerText = 0;

    min1.innerText = 0;
    min2.innerText = 0;

    hrs1.innerText = 0;
    hrs2.innerText = 0;

    timerCover.innerHTML = '';
});

btnsX[1].addEventListener('click', () => { //resume
    btns.forEach(btn => {
        btn.style.display = 'flex';
    });
    btnsX.forEach(btnX => {
        btnX.style.display = 'none';
    });
    intervalId = setInterval(stopWatch, 10);
});

let count = 1;
btns[0].addEventListener('click', () => {
    timerCover.innerHTML = `<div id="timer-box">
                <div id="timer-data">${time.innerText}</div>
            </div>` + timerCover.innerHTML;
    count++;
});

let count2 = 0;
function stopWatch() {
    if (parseInt(sec2.innerText) < 9) {
        sec2.innerText = parseInt(sec2.innerText) + 1;
    } else {
        sec2.innerText = '0';
    }
    count2++;
    if (count2 % 10 === 0) {
        if (parseInt(sec1.innerText) < 9) {
            sec1.innerText = parseInt(sec1.innerText) + 1;
        } else {
            sec1.innerText = '0';
        }
    }
    if (count2 % 100 === 0) {
        if (parseInt(min2.innerText) < 9) {
            min2.innerText = parseInt(min2.innerText) + 1;
        } else {
            min2.innerText = '0';
        }
    }
    if (count2 % 1000 === 0) {
        if (parseInt(min1.innerText) < 9) {
            min1.innerText = parseInt(min1.innerText) + 1;
        } else {
            min1.innerText = '0';
        }
    }

    if (count2 % 6000 === 0) {
        if (parseInt(hrs2.innerText) < 9) {
            hrs2.innerText = parseInt(hrs2.innerText) + 1;
        } else {
            hrs2.innerText = '0';
        }
    }
    if (count2 % 60000 === 0) {
        if (parseInt(hrs1.innerText) < 9) {
            hrs1.innerText = parseInt(hrs1.innerText) + 1;
        } else {
            hrs1.innerText = '0';
        }
    }
}




window.addEventListener('load', () => {
    document.getElementById('clock').style.display = 'flex';
    document.getElementById('data').style.display = 'block';
});