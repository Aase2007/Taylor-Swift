document.addEventListener('DOMContentLoaded', function () {
    const concerts = [
        { city: "Oslo", date: new Date(2024, 0, 13) },
        { city: "Tokyo", date: new Date(2024, 1, 30) },
        { city: "Melbourne", date: new Date(2024, 2, 13) },
        { city: "New York", date: new Date(2024, 3, 13) },
        { city: "Brussels", date: new Date(2024, 4, 13) }
    ];

    const countdownsContainer = document.getElementById('countdowns');

    concerts.forEach(concert => {
        const countdownDiv = document.createElement('div');
        countdownDiv.classList.add('countdown');

        const countdownHeading = document.createElement('h2');
        countdownHeading.classList.add('countdown-heading');
        countdownHeading.textContent = `Concert in ${concert.city}`;

        const countdownTimer = document.createElement('div');
        countdownTimer.id = `${concert.city.toLowerCase()}-countdown`;

        countdownDiv.appendChild(countdownHeading);
        countdownDiv.appendChild(countdownTimer);

        countdownsContainer.appendChild(countdownDiv);

        initializeCountdown(concert.date, `${concert.city.toLowerCase()}-countdown`);
    });

    function initializeCountdown(targetDate, elementId) {
        const countdownElement = document.getElementById(elementId);

        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdownElement.innerHTML = 'Concert has started!';
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
});
