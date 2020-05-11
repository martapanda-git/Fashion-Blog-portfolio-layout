const btnMenu = document.querySelector('.left');
const leftMenu = document.querySelector('.leftmenu');
const iconBars = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');



btnMenu.addEventListener("click", function () {
    leftMenu.classList.toggle('active');
    iconBars.classList.toggle('fashow');
    iconTimes.classList.toggle('fashow');
})