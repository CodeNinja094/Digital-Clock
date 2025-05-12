let start = document.getElementById('start');
let btns = document.querySelectorAll('.btn');
let btnsX = document.querySelectorAll('.btnX');
let addBtn = document.querySelector('#add-timer-box');
let timerCover = document.querySelector('#timer-boxCover');
let timerPanel = document.querySelector('#timerPanel');
let timerPanelSave = document.querySelector('#timerPanelSave');
let timerPanelCancel = document.querySelector('#timerPanelCancel');
let timerBox = document.querySelector('.timer-box');
let time = document.querySelector('#clock');

let sec1 = document.querySelector('#sec-div1');
let sec2 = document.querySelector('#sec-div2');

let min1 = document.querySelector('#min-div1');
let min2 = document.querySelector('#min-div2');

let hrs1 = document.querySelector('#hrs-div1');
let hrs2 = document.querySelector('#hrs-div2');
let nametext = document.querySelector('#name');
let timetext = document.querySelector('#time');

start.addEventListener('click', () => {
    start.style.display = 'none';
    btns.forEach(btn => {
        btn.style.display = 'flex';
    });

    intervalId = setInterval(stopWatch, 10);
});

btns[0].addEventListener('click', () => {
    btns.forEach(btn => {
        btn.style.display = 'none';
    });
    btnsX.forEach(btnX => {
        btnX.style.display = 'none';
    });
    start.style.display = 'flex';

    sec1.innerText = 0;
    sec2.innerText = 0;

    min1.innerText = 0;
    min2.innerText = 0;

    hrs1.innerText = 0;
    hrs2.innerText = 0;

    clearInterval(intervalId);
});

btns[1].addEventListener('click', () => {
    btns[1].style.display = 'none';
    btnsX[0].style.display = 'flex';

    clearInterval(intervalId);
});

btnsX[0].addEventListener('click', () => { //resume
    btns[1].style.display = 'flex';
    btnsX[0].style.display = 'none';

    intervalId = setInterval(stopWatch, 10);
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

let timerCount = 5;
addBtn.addEventListener("click", function () {
    timerPanel.style.display = 'flex';


});

let initialTime = "00:00";
let initialName = "";
let selectedTime = "00:00";
let selectedName = "";
nametext.addEventListener('change', function () {
    selectedName = this.value;
})
timetext.addEventListener('change', function () {
    selectedTime = this.value;
})

timerPanelSave.addEventListener("click", function () {
    if (initialTime === selectedTime) {
        alert('Enter time.');
        return;
    }
    if (initialName === selectedName) {
        alert('Enter name.');
        return;
    }
    timerCount++;
    console.log(selectedTime);
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("timer-box");
    let innerDiv1 = document.createElement("div");
    innerDiv1.classList.add("timer-data");

    let innerDiv2 = document.createElement("div");
    innerDiv2.classList.add("timerName");
    let innerDiv3 = document.createElement("div");
    innerDiv3.classList.add("tool");

    innerDiv1.textContent = selectedTime;
    innerDiv2.textContent = selectedName;
    innerDiv3.innerHTML = '<div class="delete"><i class="bi bi-trash"></i></div> <div class="pen"><i class="bi bi-pen"></i></div>';

    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);
    outerDiv.appendChild(innerDiv3);
    timerCover.insertBefore(outerDiv, addBtn);

    if (timerCount == 9) {
        addBtn.style.display = 'none';
    }
    timerPanel.style.display = 'none';
})

timerPanelCancel.addEventListener("click", function () {
    timerPanel.style.display = 'none';

})

timerCover.addEventListener("click", function (e) {
    if (e.target.closest(".delete")) {
        let parentDiv = e.target.closest(".timer-box");
        parentDiv.remove();
        timerCount--;

        if (timerCount < 9) {
            addBtn.style.display = 'flex';
        }
    } else if (e.target.closest(".pen")) {
        
            
    } else {
            let targetDiv = e.target.closest(".timer-box").querySelector('.timer-data');
            let TargetData = targetDiv.innerText;
            console.log(TargetData);
            hrs1.innerText = TargetData[0];
            hrs2.innerText = TargetData[1];
            min1.innerText = TargetData[3];
            min2.innerText = TargetData[4];
            sec1.innerText = TargetData[6];
            sec2.innerText = TargetData[7];
    }
});

