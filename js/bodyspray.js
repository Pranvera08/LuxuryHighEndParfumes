

document.addEventListener('DOMContentLoaded', () => {

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const clockEl = document.getElementById('clock');
        if (clockEl) {
            clockEl.textContent = timeString;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

    const cards = document.querySelectorAll('.product-card');
    const avgValueEl = document.getElementById('avgValue');

    if (cards.length > 0 && avgValueEl) {
        let total = 0;

        cards.forEach(card => {
            const price = parseFloat(card.getAttribute('data-price'));
            total += price;
        });

        const average = total / cards.length;
        avgValueEl.textContent = `$${average.toFixed(2)}`;
    }

    const burger = document.getElementById("hamburger");
    const list = document.getElementById("navlist");

    if (burger) {
        burger.addEventListener("click", () => {
            list.classList.toggle("navlist-active");
        });
    }

});
