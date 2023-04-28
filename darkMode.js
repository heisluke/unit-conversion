let bottomContainer = document.querySelector(".bottom-container");
let miniCards = document.querySelector(".mini-cards");
let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");



let themeSwitcher = document.querySelector("#theme-switcher");

themeSwitcher.addEventListener("click", function () {
    bottomContainer.classList.toggle("dark-mode")
    card1.classList.toggle("card-dark-mode")
    card2.classList.toggle("card-dark-mode")
    card3.classList.toggle("card-dark-mode")
    console.log("what's it?");
})