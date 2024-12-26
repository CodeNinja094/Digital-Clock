let start = document.getElementById('start');
let btns = document.querySelectorAll('.btn');
let btnsX = document.querySelectorAll('.btnX');

start.addEventListener('click', () => {
    start.style.display = 'none';
    btns.forEach(btn => {
        btn.style.display = 'flex';
    });
});

btns[1].addEventListener('click', () => {
    btns.forEach(btn => {
        btn.style.display = 'none';
    });
    btnsX.forEach(btnX => {
        btnX.style.display = 'flex';
    });
});

btnsX[1].addEventListener('click', () => {
    btns.forEach(btn => {
        btn.style.display = 'flex';
    });
    btnsX.forEach(btnX => {
        btnX.style.display = 'none';
    });
});


window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('clock').style.display = 'flex';
    document.getElementById('alarm-div').style.display = 'block';
    clock();
    setInterval(clock, 1000);
    console.log(timeString);
});