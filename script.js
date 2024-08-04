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

/* imgslide */
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.img-btn');
let currentImg = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentImg = i;
    });
});

//for autoplay
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 0;

    slides[i].classList.add('active');
    btns[i].classList.add('active');

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeImg) => {
                activeImg.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}
repeat();

/* ====== Show Detail ======= */
const showDetail = (openButton, detailContent) => {
    const openBtn = document.getElementById(openButton),
    detailContainer = document.getElementById(detailContent)

    if(openBtn && detailContainer) {
        openBtn.addEventListener('click', () =>{
            detailContainer.classList.add('show-detail')
        })
    }
}

showDetail('open-detail', 'detail-container')

/* ====== Close Detail ======= */
const closeBtn = document.querySelectorAll('.close-detail')

function closeDetail() {
    const detailContainer = document.getElementById('detail-container')
    detailContainer.classList.remove('show-detail')
}

closeBtn.forEach(c => c.addEventListener('click', closeDetail))



/* slide */
let cardcont = document.querySelectorAll('.card__content .card__article');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.dots li');
let active = 3;
function loadShow(){
    let stt = 0;
    cardcont[active].style.transform = `translateX(-50%) translateY(-50%)`;
    cardcont[active].style.zIndex = 1;
    cardcont[active].style.filter = `none`;
    cardcont[active].style.opacity = 1;
    for(var i = active + 1; i < cardcont.length; i++){
        stt++;
        cardcont[i].style.transform = `translateX(${160*stt}px) translateX(-50%) translateY(-50%) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        cardcont[i].style.zIndex = -stt;
        cardcont[i].style.filter = 'blur(4px)';
        cardcont[i].style.opacity = stt > 2 ? 0 : 0.7;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        cardcont[i].style.transform = `translateX(${-160*stt}px) translateX(-50%) translateY(-50%) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        cardcont[i].style.zIndex = -stt;
        cardcont[i].style.filter = 'blur(4px)';
        cardcont[i].style.opacity = stt > 2 ? 0 : 0.7;
    }

    let lastActionDot = document.querySelector('.dots li.act');
    lastActionDot.classList.remove('act');
    dots[active].classList.add('act');

}
loadShow();
next.onclick = function(){
    active = active + 1 < cardcont.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        loadShow();
    })
})

