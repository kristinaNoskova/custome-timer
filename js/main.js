// передаем дедлайн
let deadline = '2025-01-25';

// получим разницу в дате
const getTimeRemaining = (endTime) => {
    // получим разницу между текущей датой и дадлайном в мс.
    let milliseconds = Date.parse(endTime) - Date.parse(new Date());

    // получим часы, минуты, секунды, добавим ведущий 0 одиночным числам
    let seconds = Math.floor((milliseconds / 1000) % 60).toString().padStart(2, '0');
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60).toString().padStart(2, '0');
    let hours = Math.floor((milliseconds / 1000 / 60 / 60)).toString().padStart(2, '0');

    // ЕСЛИ нужно учитвать дни
    // let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    // Получим дни
    // let days = Math.floor((milliseconds / 1000 / 60 / 60 / 24));

    // если дата дедлайна уже прошла, будем выводить 0 на счетчике
    if (Date.parse(new Date()) >= Date.parse(endTime)) {
        seconds = '00';
        minutes = '00';
        hours = '00';
    }
    // вернем объект
    return {
        'total': milliseconds,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
    }
}

// установим таймер
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