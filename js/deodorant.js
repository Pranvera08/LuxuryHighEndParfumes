document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("hamburger");
    const nav = document.getElementById("navlist");

    if (burger) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("navlist-active");
        });
    }

    const filterBtns = document.querySelectorAll('.f-btn');
    const products = document.querySelectorAll('.product-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-cat');

            products.forEach(item => {
                item.style.display =
                    filterValue === 'all' || item.getAttribute('data-type') === filterValue
                        ? 'block'
                        : 'none';
            });

        });
    });

});