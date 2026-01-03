const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");
const messageArea = document.getElementById("message");
const charCount = document.getElementById("charCount");

burger.addEventListener("click", () => {
    list.classList.toggle("navlist-active");
});

if (messageArea) {
    messageArea.addEventListener("input", () => {
        const currentLength = messageArea.value.length;
        charCount.textContent = `(${currentLength}/500)`;

        if (currentLength >= 450) {
            charCount.style.color = "var(--primary-pink)";
        } else {
            charCount.style.color = "var(--primary-pista)";
        }
    });
}
