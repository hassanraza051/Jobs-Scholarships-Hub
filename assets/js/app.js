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
const latestPosts = document.getElementById("latestPosts");

const opportunities = [

{
type:"Government",
title:"FPSC Jobs 2026",
description:"Latest Federal Public Service Commission vacancies."
},

{
type:"Scholarship",
title:"Chevening Scholarship",
description:"Apply for a fully funded UK scholarship."
},

{
type:"International",
title:"Australia Work Visa",
description:"Latest overseas work opportunities."
}

];

opportunities.forEach(item=>{

latestPosts.innerHTML += `
<div class="latest-card">

<span>${item.type}</span>

<h3>${item.title}</h3>

<p>${item.description}</p>

<a href="#">Read More →</a>

</div>
`;

});
