let hrs1 = document.querySelector("#hrs-div1");
let hrs2 = document.querySelector("#hrs-div2");
let min1 = document.querySelector("#min-div1");
let min2 = document.querySelector("#min-div2");
let sec1 = document.querySelector("#sec-div1");
let sec2 = document.querySelector("#sec-div2");

let now = new Date();
let timeString = now.toLocaleTimeString('en-GB');


function clock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString('en-GB');

    let timeElements = [
        { element: hrs1, value: timeString[0] },
        { element: hrs2, value: timeString[1] },
        { element: min1, value: timeString[3] },
        { element: min2, value: timeString[4] },
        { element: sec1, value: timeString[6] },
        { element: sec2, value: timeString[7] }
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

window.addEventListener('load', () => {
    document.getElementById('clock').style.display = 'flex';
    clock();
    setInterval(clock, 1000);
    console.log(timeString);
});