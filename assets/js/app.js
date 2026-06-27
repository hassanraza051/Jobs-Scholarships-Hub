// Jobs & Scholarships Hub
console.log("Website Loaded");
const menuBtn=document.getElementById("menuBtn");

menuBtn.addEventListener("click",()=>{
alert("Mobile menu will be activated in the next update.");
});
// Premium Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");

    if (navbar.classList.contains("show-menu")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
