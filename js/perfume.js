document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("hamburger");
    const list = document.getElementById("navlist");

    if (burger && list) {
        burger.addEventListener("click", () => {
            list.classList.toggle("navlist-active");
            burger.classList.toggle("toggle-burger");
        });
    }

    const consultationForm = document.getElementById("consultationForm");

    if (consultationForm) {
        consultationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = consultationForm.querySelector('input[type="text"]').value;
            const email = consultationForm.querySelector('input[type="email"]').value;

            alert(`Faleminderit ${name}! Kërkesa juaj u dërgua me sukses. Ne do t'ju kontaktojmë në ${email} brenda 24 orëve.`);

            consultationForm.reset();
        });
    }

    const navLinks = document.querySelectorAll(".navlinks");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            list.classList.remove("navlist-active");
        });
    });

});
