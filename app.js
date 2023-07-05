const courseHover = document.querySelector(".courses");
const courseList = document.querySelector(".coursesList");
const hamburger = document.querySelector(".hamburger");
const burgerSideMenu = document.querySelector(".burgerSideMenu")
const closeSideMenu =document.querySelector(".closeSideMenu");



courseHover.addEventListener("click", function(){
courseList.style.transform = "translate(0%)"
});

hamburger.addEventListener("click", function(){
    burgerSideMenu.style.transform = "translate(0%)"
});
closeSideMenu.addEventListener("click", function(){
    burgerSideMenu.style.transform = "translate(-100%)"
})