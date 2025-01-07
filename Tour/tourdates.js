document.addEventListener('DOMContentLoaded', function () {
    const concerts = [
        {city:"Glendale", country:"U.S.", date: new Date (2023, 3-1, 17-1)},
        {city:"Glendale", country:"U.S.", date: new Date (2023, 3-1, 18-1)},
        {city:"Las vegas", country:"U.S.", date: new Date (2023, 3-1, 24-1)},
        {city:"Las vegas", country:"U.S.", date: new Date (2023, 3-1, 25-1)},
        {city:"Arlington", country:"U.S.", date: new Date (2023, 3-1, 31-1)},
        {city:"Arlington", country:"U.S.", date: new Date (2023, 4-1, 1-1)},
        {city:"Arlington", country:"U.S.", date: new Date (2023, 4-1, 2-1)},
        {city:"Tampa", country:"U.S.", date: new Date (2023, 4-1, 13-1)},
        {city:"Tampa", country:"U.S.", date: new Date (2023, 4-1, 14-1)},
        {city:"Tampa", country:"U.S.", date: new Date (2023, 4-1, 15-1)},
        {city:"Houston", country:"U.S.", date: new Date (2023, 4-1, 21-1)},
        {city:"Houston", country:"U.S.", date: new Date (2023, 4-1, 22-1)},
        {city:"Houston", country:"U.S.", date: new Date (2023, 4-1, 23-1)},
        {city:"Atlanta", country:"U.S.", date: new Date (2023, 4-1, 28-1)},
        {city:"Atlanta", country:"U.S.", date: new Date (2023, 4-1, 29-1)},
        {city:"Atlanta", country:"U.S.", date: new Date (2023, 4-1, 30-1)},
        //nashville
        {city:"Tokyo", country:"Japan", date: new Date (2024, 2-1, 7-1, 10-1)},
        {city:"Tokyo", country:"Japan", date: new Date (2024, 2-1, 8-1, 10-1)},
        {city:"Tokyo", country:"Japan", date: new Date (2024, 2-1, 9-1, 10-1)},
        {city:"Tokyo", country:"Japan", date: new Date (2024, 2-1, 10-1, 10-1)},
        {city:"Melbourne", country:"Australia", date: new Date (2024, 2-1, 16-1, 8-1)},
        {city:"Melbourne", country:"Australia", date: new Date (2024, 2-1, 17-1, 8-1)},
        {city:"Melbourne", country:"Australia", date: new Date (2024, 2-1, 18-1, 8-1)},
        {city:"Sydney", country:"Australia", date: new Date (2024, 2-1, 23-1, 8-1)},
        {city:"Sydney", country:"Australia", date: new Date (2024, 2-1, 24-1, 8-1)},
        {city:"Sydney", country:"Australia", date: new Date (2024, 2-1, 25-1, 8-1)},
        {city:"Sydney", country:"Australia", date: new Date (2024, 2-1, 26-1, 8-1)},
        {city:"Singapore", country:"Singapore", date: new Date (2024, 3-1, 3-1, 9-1)},
        {city:"Singapore", country:"Singapore", date: new Date (2024, 3-1, 4-1, 9-1)},
        {city:"Singapore", country:"Singapore", date: new Date (2024, 3-1, 7-1, 9-1)},
        {city:"Singapore", country:"Singapore", date: new Date (2024, 3-1, 8-1, 9-1)},
        {city:"Singapore", country:"Singapore", date: new Date (2024, 3-1, 9-1, 9-1)},
        {city:"Paris", country:"France", date: new Date (2024, 5-1, 9-1, 18-1)},
        {city:"Paris", country:"France", date: new Date (2024, 5-1, 10-1, 18-1)},
        {city:"Paris", country:"France", date: new Date (2024, 5-1, 11-1, 18-1)},
        {city:"Paris", country:"France", date: new Date (2024, 5-1, 12-1, 18-1)},
        {city:"Stockholm", country:"Sweden", date: new Date (2024, 5-1, 17-1, 18-1)},
        {city:"Stockholm", country:"Sweden", date: new Date (2024, 5-1, 18-1, 18-1)},
        {city:"Stockholm", country:"Sweden", date: new Date (2024, 5-1, 19-1, 18-1)},
        {city:"Lisbon", country:"Portugal", date: new Date (2024, 5-1, 24-1, 18-1)},
        {city:"Lisbon", country:"Portugal", date: new Date (2024, 5-1, 25-1, 18-1)},
        {city:"Madrid", country:"Spain", date: new Date (2024, 5-1, 30-1, 18-1)},
        {city:"Lyon", country:"France", date: new Date (2024, 6-1, 2-1, 18-1)},
        {city:"Lyon", country:"France", date: new Date (2024, 6-1, 3-1, 18-1)},
        {city:"Edinburgh", country:"Scotland", date: new Date (2024, 6-1, 7-1, 19-1)},
        {city:"Edinburgh", country:"Scotland", date: new Date (2024, 6-1, 8-1, 19-1)},
        {city:"Edinburgh", country:"Scotland", date: new Date (2024, 6-1, 9-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 13-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 14-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 15-1, 19-1)},
        {city:"Cardiff", country:"Wales", date: new Date (2024, 6-1, 18-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 21-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 22-1, 19-1)},
        {city:"Liverpool", country:"England", date: new Date (2024, 6-1, 23-1, 19-1)},
        {city:"Dublin", country:"Ireland", date: new Date (2024, 6-1, 28-1, 19-1)},
        {city:"Dublin", country:"Ireland", date: new Date (2024, 6-1, 29-1, 19-1)},
        {city:"Dublin", country:"Ireland", date: new Date (2024, 6-1, 30-1, 19-1)},
        {city:"Amsterdam", country:"Netherlands", date: new Date (2024, 7-1, 4-1, 18-1)},
        {city:"Amsterdam", country:"Netherlands", date: new Date (2024, 7-1, 5-1, 18-1)},
        {city:"Amsterdam", country:"Netherlands", date: new Date (2024, 7-1, 6-1, 18-1)},
        {city:"Zürich", country:"Switzerland", date: new Date (2024, 7-1, 9-1, 18-1)},
        {city:"Zürich", country:"Switzerland", date: new Date (2024, 7-1, 10-1, 18-1)},
        {city:"Milan", country:"Italy", date: new Date (2024, 7-1, 13-1, 18-1)},
        {city:"Milan", country:"Italy", date: new Date (2024, 7-1, 14-1, 18-1)},
        {city:"Gelsenkirchen", country:"Germany", date: new Date (2024, 7-1, 17-1, 18-1)},
        {city:"Gelsenkirchen", country:"Germany", date: new Date (2024, 7-1, 18-1, 18-1)},
        {city:"Gelsenkirchen", country:"Germany", date: new Date (2024, 7-1, 19-1, 18-1)},
        {city:"Hamburg", country:"Germany", date: new Date (2024, 7-1, 23-1, 18-1)},
        {city:"Hamburg", country:"Germany", date: new Date (2024, 7-1, 24-1, 18-1)},
        {city:"Munich", country:"Germany", date: new Date (2024, 7-1, 27-1, 18-1)},
        {city:"Munich", country:"Germany", date: new Date (2024, 7-1, 28-1, 18-1)},
        {city:"Warsaw", country:"Poland", date: new Date (2024, 8-1, 1-1, 18-1)},
        {city:"Warsaw", country:"Poland", date: new Date (2024, 8-1, 2-1, 18-1)},
        {city:"Warsaw", country:"Poland", date: new Date (2024, 8-1, 3-1, 18-1)},
        {city:"Vienna", country:"Austria", date: new Date (2024, 8-1, 8-1, 18-1)},
        {city:"Vienna", country:"Austria", date: new Date (2024, 8-1, 9-1, 18-1)},
        {city:"Vienna", country:"Austria", date: new Date (2024, 8-1, 10-1, 18-1)},
        {city:"London", country:"England", date: new Date (2024, 8-1, 15-1, 19-1)},
        {city:"London", country:"England", date: new Date (2024, 8-1, 16-1, 19-1)},
        {city:"London", country:"England", date: new Date (2024, 8-1, 17-1, 19-1)},
        {city:"London", country:"England", date: new Date (2024, 8-1, 19-1, 19-1)},
        {city:"London", country:"England", date: new Date (2024, 8-1, 20-1, 19-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 14-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 15-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 16-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 21-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 22-1)},
        {city:"Toronto", country:"Canada", date: new Date (2024, 11-1, 23-1)},
        {city:"Vancouver", country:"Canada", date: new Date (2024, 12-1, 6-1)},
        {city:"Vancouver", country:"Canada", date: new Date (2024, 12-1, 7-1)},
        {city:"Vancouver", country:"Canada", date: new Date (2024, 12-1, 8-1)},
    ];
    
    const upcomingContainer = document.getElementById('upcoming-shows');
    const alreadybeenContainer = document.getElementById('alreadybeen-shows');
    const countdownContainer = document.getElementById('next-show');
    const todayDate = new Date();
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    concerts.forEach(concert => {
        if (concert.date > todayDate) {
            const upcomingDiv = document.createElement('div');
            upcomingDiv.classList.add('show');

            const concertCity = document.createElement('h3');
            concertCity.classList.add('show-heading');
            concertCity.textContent = concert.city + ", " + concert.country;

            const concertDate = document.createElement('p');
            concertDate.classList.add('date')
            day = concert.date.getDay();
            date = concert.date.getDate();
            month = concert.date.getMonth()+1;
            year = concert.date.getFullYear();
            concertDate.textContent = dayNames[day] + ' ' + date + '.' + month + '.' + year + '.';
            

            upcomingDiv.appendChild(concertCity);
            upcomingDiv.appendChild(concertDate);

            upcomingContainer.appendChild(upcomingDiv);
        } else if (concert.date <= todayDate) {
            const alreadyDiv = document.createElement('div');
            alreadyDiv.classList.add('show');

            const concertCity = document.createElement('h3');
            concertCity.classList.add('show-heading');
            concertCity.textContent = concert.city + ", " + concert.country;

            const concertDate = document.createElement('p');
            concertDate.classList.add('date')
            day = concert.date.getDay();
            date = concert.date.getDate();
            month = concert.date.getMonth()+1;
            year = concert.date.getFullYear();
            concertDate.textContent = dayNames[day] + ' ' + date + '.' + month + '.' + year + '.';
            

            alreadyDiv.appendChild(concertCity);
            alreadyDiv.appendChild(concertDate);

            alreadybeenContainer.appendChild(alreadyDiv);

        };
    });
    var n = 0;
    concertN = concerts[n];
    while (concertN.date < todayDate) {
        n+=1
        concertN = concerts[n]
        if (concertN.date > todayDate) {
            const countdownDiv = document.createElement('div');
            countdownDiv.classList.add('countdown');

            const countdownHeading = document.createElement('h3');
            countdownHeading.classList.add('countdown-heading');
            countdownHeading.textContent = concertN.city + ", " + concertN.country;
            
            const countdownTimer = document.createElement('div');
            countdownTimer.id = `${concertN.city.toLowerCase()}-countdown`;

            countdownDiv.appendChild(countdownHeading);
            countdownDiv.appendChild(countdownTimer);

            countdownContainer.appendChild(countdownDiv);

            initializeCountdown(concertN.date, `${concertN.city.toLowerCase()}-countdown`);
            function initializeCountdown(targetDate, elementId) {
                const countdownElement = document.getElementById(elementId);
        
                function updateCountdown() {
                    const now = new Date();
                    const difference = targetDate - now;
        
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
                    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

                }
        
                setInterval(updateCountdown, 1000);
                updateCountdown();
            }
        }
    }
});