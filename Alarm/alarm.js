let hrs1 = document.querySelector("#hrs-div1");
let hrs2 = document.querySelector("#hrs-div2");
let min1 = document.querySelector("#min-div1");
let min2 = document.querySelector("#min-div2");

let createBtn = document.querySelector("#add-icon");
let setAlarmMusicBtn = document.querySelector("#music-icon");
let alarm_content = document.querySelector("#alarm-content");
let setBtn = document.querySelector("#setAlarm");
let resetBtn = document.querySelector("#resetAlarm");
let alarmname = document.querySelector("#alarmname");
let appt = document.querySelector("#appt");
let alarmInput = document.querySelector("#alarmInput");
let setAudio = document.querySelector("#setAudio");
let setAudioBtn = document.querySelector("#music-icon");
let setAudioBtnicon = setAudioBtn.childNodes[1];
let addAlarmBtn = createBtn.childNodes[1];

let now = new Date();
let timeString = now.toLocaleTimeString('en-GB');


function clock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString('en-GB');

    let timeElements = [
        { element: hrs1, value: timeString[0] },
        { element: hrs2, value: timeString[1] },
        { element: min1, value: timeString[3] },
        { element: min2, value: timeString[4] }
    ];

    timeElements.forEach(({ element, value }) => {
        if (element.innerText !== value) {
            element.classList.add('swipe-out');
            setTimeout(() => {
                element.innerText = value;
                element.classList.remove('swipe-out');
                element.classList.add('swipe-in');
            }, 500); // Match the duration of the swipe-out animation
            setTimeout(() => {
                element.classList.remove('swipe-in');
            }, 1000); // Match the total duration of both animations
        }
    });
}

createBtn.addEventListener('click', () => {
    if (alarmInput.style.display === 'none' && addAlarmBtn.classList.contains('bi-plus')) {
        alarmInput.style.display = 'block';
        addAlarmBtn.classList.remove('bi-plus');
        addAlarmBtn.classList.add('bi-x');

    } else if (alarmInput.style.display === 'block' && addAlarmBtn.classList.contains('bi-x')) {
        alarmInput.style.display = 'none';
        addAlarmBtn.classList.remove('bi-x');
        addAlarmBtn.classList.add('bi-plus');
    } else {
        alarmInput.style.display = 'block';
        addAlarmBtn.classList.remove('bi-plus');
        addAlarmBtn.classList.add('bi-x');
    }
});

setAudioBtn.addEventListener('click', () => {
    if (setAudio.style.display === 'none' && setAudioBtnicon.classList.contains('bi-music-note')) {
        setAudio.style.display = 'block';
        setAudioBtnicon.classList.remove('bi-music-note');
        setAudioBtnicon.classList.add('bi-x');

    } else if (setAudio.style.display === 'block' && setAudioBtnicon.classList.contains('bi-x')) {
        setAudio.style.display = 'none';
        setAudioBtnicon.classList.remove('bi-x');
        setAudioBtnicon.classList.add('bi-music-note');
    } else {
        setAudio.style.display = 'block';
        setAudioBtnicon.classList.remove('bi-music-note');
        setAudioBtnicon.classList.add('bi-x');
    }
});

let alarm_num = 1;
alarmname.placeholder = `Alarm ${alarm_num}`;
setBtn.addEventListener('click', () => {
    if (appt.value === "") {
        alert("Please fill in the time");
        return;
    }
    if (alarmname.value === "") {
        alarmname.value = `Alarm ${alarm_num}`;

    }
    let newAlarm = `<div id="alarm${alarm_num}" class="userAlarm">
          <div class="userAlarmId">${alarm_num}.</div>
          <div class="userAlarmContent">Name : ${alarmname.value} <br> Time : ${appt.value}</div>
          <div class="userAlarmDelete">
            <i class="bi bi-trash"></i>
          </div>
        </div>`;
    alarm_content.innerHTML += newAlarm;

    alarmname.value = "";
    appt.value = "";
    document.querySelector("#alarmInput").style.display = 'none';
    icon.classList.remove('bi-x');
    icon.classList.add('bi-plus');
    alarm_num++;
    alarmname.placeholder = `Alarm ${alarm_num}`;
});

alarm_content.addEventListener("click", function (e) {
    if (e.target.closest(".userAlarmDelete")) {
        let parentDiv = e.target.closest(".userAlarm");
        parentDiv.remove();
        timerCount--;
    }
});


resetBtn.addEventListener('click', () => {
    alarmname.value = "";
    appt.value = "";
});

window.addEventListener('load', () => {
    clock();
    setInterval(clock, 1000);
});