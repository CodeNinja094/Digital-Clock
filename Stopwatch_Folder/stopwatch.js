let start = document.getElementById('start');
let btns = document.querySelectorAll('.btn');
let btnsX = document.querySelectorAll('.btnX');
let lapCover = document.querySelector('#lap-boxCover');
let time = document.querySelector('#clock');

let msec1 = document.querySelector('#msec-div1');
let msec2 = document.querySelector('#msec-div2');

let sec1 = document.querySelector('#sec-div1');
let sec2 = document.querySelector('#sec-div2');

let min1 = document.querySelector('#min-div1');
let min2 = document.querySelector('#min-div2');

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
    msec1.innerText = 0;
    msec2.innerText = 0;

    sec1.innerText = 0;
    sec2.innerText = 0;

    min1.innerText = 0;
    min2.innerText = 0;

    lapCover.innerHTML = '';
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
    lapCover.innerHTML = `<div id="lap-box">
                <div id="lap-num">${count}</div>
                <div id="lap-data">${time.innerText}</div>
            </div>` + lapCover.innerHTML;
    count++;
});

let count2 = 0;
function stopWatch() {
    if (parseInt(msec2.innerText) < 9) {
        msec2.innerText = parseInt(msec2.innerText) + 1;
    } else {
        msec2.innerText = '0';
    }
    count2++;
    if (count2 % 10 === 0) {
        if (parseInt(msec1.innerText) < 9) {
            msec1.innerText = parseInt(msec1.innerText) + 1;
        } else {
            msec1.innerText = '0';
        }
    }
    if (count2 % 100 === 0) {
        if (parseInt(sec2.innerText) < 9) {
            sec2.innerText = parseInt(sec2.innerText) + 1;
        } else {
            sec2.innerText = '0';
        }
    }
    if (count2 % 1000 === 0) {
        if (parseInt(sec1.innerText) < 9) {
            sec1.innerText = parseInt(sec1.innerText) + 1;
        } else {
            sec1.innerText = '0';
        }
    }

    if (count2 % 6000 === 0) {
        if (parseInt(min2.innerText) < 9) {
            min2.innerText = parseInt(min2.innerText) + 1;
        } else {
            min2.innerText = '0';
        }
    }
    if (count2 % 60000 === 0) {
        if (parseInt(min1.innerText) < 9) {
            min1.innerText = parseInt(min1.innerText) + 1;
        } else {
            min1.innerText = '0';
        }
    }
}


