const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hamline = document.querySelectorAll("#hamline")
const hamlines = document.querySelectorAll(".hamline");
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamlines.forEach((hamline) => {
        hamline.classList.toggle("bg-white");
        hamline.classList.toggle("bg-black");
    });
}
)