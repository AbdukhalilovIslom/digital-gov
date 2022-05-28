let body = document.querySelector('body');
let welcomeRegisterButton = document.querySelector('.footer-button');
let welcomeRegisterPopup = document.querySelector('.welcome-register-popup');
let welcomeRegisterBackBtn = document.querySelector('.welcome-register-back-btn');
let overlay = document.querySelector('.overlay');



welcomeRegisterButton.addEventListener("click", displayFnc);

function displayFnc() {
    welcomeRegisterPopup.style.display = ("block");
    body.style.overflow = "hidden";
    overlay.style.display = "block";
}

function welcomeBackFnc() {
    welcomeRegisterPopup.style.display = ("none");
    body.style.overflow = "scroll";
    overlay.style.display = "none";
}