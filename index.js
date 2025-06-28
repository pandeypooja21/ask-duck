let timerInterval;

window.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');
    const heading = document.getElementById('heading');
    const timeWasted = document.getElementById('time-wasted');

    dobInput.addEventListener('change', function() {
        const dobValue = this.value;
        clearInterval(timerInterval);

        if (!dobValue) return;

        const dobParts = dobValue.split("-");
        const dob = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]);
        const now = new Date();

        if (dob > now) {
            heading.textContent = "You picked a future date... impressive.";
            timeWasted.style.display = "none";
            return;
        }

        heading.textContent = "How much time you've wasted:";
        timeWasted.style.display = "block";

        updateTimer(dob); 
        timerInterval = setInterval(() => updateTimer(dob), 1000); 
    });

    function updateTimer(dob) {
        const now = new Date();
        const diffMs = now - dob;
        const diffSec = Math.floor(diffMs / 1000);

        const years = Math.floor(diffSec / (365.25 * 24 * 60 * 60));
        const hours = Math.floor(diffSec / (60 * 60));
        const minutes = Math.floor(diffSec / 60);
        const seconds = diffSec;

        timeWasted.textContent = `${years} years, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
});
