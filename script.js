// javascript for toggle menu 

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", ()=> toggleNavbar());

// function showmenu(){
//     navlinks.style.right = "0"
// }

// function hidemenu(){
//     navlinks.style.right = "-100%"
// }

