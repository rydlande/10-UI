import { array } from "./products.js";

console.log(array);


const main = document.querySelector("main");


const menu = document.querySelector(".menu");                       
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
);


  for(const product of array){
        console.log(product.id);
        const { id, name, price, imageURL} = product;
      
    
        const card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
        <div class="card-overview">
          <img
            src="${imageURL}"
            alt="Picture of ${name}"
            class="card-img-overview"
          />
          <h3>${name}</h3>
          <div class="price-overview">
            <p class="price">${price}</p>
          </div>
        </div>
        `
        card.href = `./details.html?id=${product.id}`;
    
        main.appendChild(card);
  };