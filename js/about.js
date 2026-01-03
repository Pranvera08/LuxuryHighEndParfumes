document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById("hamburger");
    const list = document.getElementById("navlist");
    const stats = document.querySelectorAll('.stat-number');

    burger.addEventListener("click", () => {
        list.classList.toggle("navlist-active");
    });

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const speed = 200;
            const increment = target / speed;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.innerText = target + "+";
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
        }
    }, {
        threshold: 0.5
    });

    const statsSection = document.querySelector('.stats-section');

    if (statsSection) {
        observer.observe(statsSection);
    }

});