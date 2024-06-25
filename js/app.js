// console.log("Hello World");

const login = document.querySelector(".login-button");
const loginButton = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".login-close");


const openMenu = () => (login.style.display = "block");
const closeMenu = () => (login.style.display = "none");
const outClick = (e) => {
    if (e.target == login){
        closeMenu();
    }
};

loginButton.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
window.addEventListener("click", outClick);


// Arrow Function

// function open (){

// }

// let open = () => {

// }


// let open = () => (   // code );