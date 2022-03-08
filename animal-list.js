//*  Filters modal

var filterModalBtn = document.querySelector(".filter");
var filterModalBg = document.querySelector(".modal-bg");
var filterModalClose = document.querySelector(".close");

filterModalBtn.addEventListener("click", function () {
  filterModalBg.classList.add("modal-pop");
});

filterModalClose.addEventListener("click", function () {
  filterModalBg.classList.remove("modal-pop");
});

//*  Animal list loop

var catName = [
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
  "cat",
];
var age = [
  "1mo",
  "2mo",
  "5mo",
  "18mo",
  "36mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
  "18mo",
];
var breed = [
  "maine coon",
  "bengal",
  "persian",
  "ragdoll",
  "angora",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
  "bengal",
];
var image = [
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
  "images/kitty.jpg",
];
var description = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet.",
];
var displayHtml = "";

for (let index = 0; index < catName.length; index++) {
  const cat = catName[index];
  const months = age[index];
  const type = breed[index];
  const img = image[index];
  const desc = description[index];

  displayHtml += `
   <div class="col-3">
     <div class="card">
       <img class="kitty" src="${img}" />
       <div class="card-body">
         <span style="font-weight: bold">${cat}, ${months}, ${type}</span>
         <div style="font-size: small; font-weight: 600; margin: 20px 0 10px 0">
           <span>${desc}</span>
         </div>
         <div style="display: flex; justify-content: flex-end">
           <button class="card-btn adopt">adopt</button>
           <button class="card-btn more">show more</button>
         </div>
       </div>
     </div>
   </div>`;
}
document.getElementById("catContainer").innerHTML = displayHtml;
