




window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('clock').style.display = 'flex';
    document.getElementById('alarm-div').style.display = 'block';
    clock();
    setInterval(clock, 1000);
    console.log(timeString);
});