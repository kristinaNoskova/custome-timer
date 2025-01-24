let deadline = '2025-01-25';

const getTimeRemaining = (endTime) => {
    let milliseconds = Date.parse(endTime) - Date.parse(new Date());

    let seconds = Math.floor((milliseconds / 1000) % 60).toString().padStart(2, '0');
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60).toString().padStart(2, '0');
    let hours = Math.floor((milliseconds / 1000 / 60 / 60)).toString().padStart(2, '0');

    // ЕСЛИ нужно учитвать дни
    // let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    // Получим дни
    // let days = Math.floor((milliseconds / 1000 / 60 / 60 / 24));

    if (Date.parse(new Date()) >= Date.parse(endTime)) {
        seconds = '00';
        minutes = '00';
        hours = '00';
    }

    return {
        'total': milliseconds,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
    }
}

const setClock = (id, endTime) => {
    const timer = document.getElementById(id);
    const hours = timer.querySelector('.hours');
    const minutes = timer.querySelector('.minutes');
    const seconds = timer.querySelector('.seconds');

    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let time = getTimeRemaining(endTime);
        hours.textContent = time.hours;
        minutes.textContent = time.minutes;
        seconds.textContent = time.seconds;

        if (time.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);