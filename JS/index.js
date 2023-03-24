import {products} from "./products.js";

console.log(products);


const main = document.querySelector("main");


//burgir
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



const renderCard = (productId) => {
  const product = products.find((product) => product.id === productId);

  if (!product) {
    console.error(`Product with id ${productId} not found.`);
    return;
  }

  const { id, name, price, oldPrice, newPrice, description, sizes, fabric, imageURL, image } = product;

  const card = document.createElement("a");
  card.classList.add("card");
  card.innerHTML = `
    <div class="reduced">
      <div class="card-img">
        <img src="${image}" alt="Picture of ${name}" />
        <h3>${name}</h3>
        <p>${newPrice}</p>
        <p>${oldPrice}</p>
      </div>
    </div>
  `;
  card.href = `./HTML/produktinfo.html?id=${id}`;

  main.appendChild(card);
};



renderCard(2);

