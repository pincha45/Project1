const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        })
        faq.classList.toggle("active");
    })
})

/* nav */
const toggleBtn = document.querySelector('.toggle-nav')
const toggleBtnIcon = document.querySelector('.toggle-nav i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'ri-close-large-line'
    : 'ri-menu-line'
}

const faq1 = document.querySelectorAll(".faq-box-question");

faq1.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        })
        faq.classList.toggle("active");
        var body = faq.nextElementSibling;
        if (body.style.maxHeight === "500px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "500px";
        }
    })
})

