//*paypal modal

var suppModalBtn = document.querySelector(".paypal-btn");
var suppModalBg = document.querySelector(".suppmodal-bg");
var suppModalClose = document.querySelector(".suppmodal-close");

suppModalBtn.addEventListener("click", function () {
  suppModalBg.classList.add("suppmodal-active");
});

suppModalClose.addEventListener("click", function () {
  suppModalBg.classList.remove("suppmodal-active");
});

//*edahabia modal

var suppModalBtnDH = document.querySelector(".dahabia-btn");
var suppModalBgDH = document.querySelector(".suppmodal-bg-dh");
var suppModalCloseDH = document.querySelector(".suppmodal-close-dh");

suppModalBtnDH.addEventListener("click", function () {
  suppModalBgDH.classList.add("suppmodal-active-dh");
});

suppModalCloseDH.addEventListener("click", function () {
  suppModalBgDH.classList.remove("suppmodal-active-dh");
});