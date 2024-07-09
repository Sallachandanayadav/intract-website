document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.animated-text', { 
        duration: 2, 
        opacity: 2, 
        x: -10, 
        ease: 'elastic.inOut' 
    });
});


let countdownTime = 2 * 24 * 60 * 60;

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const days = Math.floor(countdownTime / (24 * 60 * 60));
    const hours = Math.floor((countdownTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
    const seconds = Math.floor(countdownTime % 60);

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    const interval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            updateCountdown();
        } else {
            clearInterval(interval);
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00'; 
        }
    }, 1000);
}
updateCountdown();
startCountdown();
