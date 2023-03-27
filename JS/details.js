import {array} from "./products.js";
const q = document.location.search;
const idx = new URLSearchParams(q)
const productId = idx.get("id")
const head = document.querySelector("head");
console.log(productId);

console.log(array);


for(const arr of array){
  console.log(arr.name);
}
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
)



const renderCard = () => {
  for(const arr of array){
    if(arr.id == productId ){

      const title = document.createElement("title");
      title.innerHTML = arr.name;
      head.appendChild(title);

      console.log("haha");
      const { id, name, price, description, sizes, fabric, imageURL, image } = arr;





    const card = document.createElement("a");
    card.classList.add("details");
    card.innerHTML = `<div class="card-container">
        <div class="card-img-container-produktinfo">
        <img src="${imageURL}" alt="Picture of ${name}" />
      </div>

      <div class="card-container-produktinfo">
        <h3 class="productname">${name}</h3>
        <a class="price">${price}</a>
      </div>
      <div class="card-container-details">
        <a>${sizes}</a>
        <a>${description}</a>
        <details class="details">
          <summary>Meterials</summary>
          <div>${fabric}</div>
        </details>
      </div>
      <div>
      <button class="cart">Add to cart</button>
    </div>   `;
  
    main.appendChild(card);

    };}
  };
  renderCard(productId)
