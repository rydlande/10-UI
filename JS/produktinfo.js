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
    card.innerHTML = `<div class="card-container">
    <div class="card-img-container-produktinfo">
      <img
        src="${imageURL}"
        alt="Picture of ${name}"
      />
    </div>

    <div class="card-container-produktinfo">
      <h3 class="productname">${name}</h3>
      <div class="card-container-price">
        <a class="oldprice">${oldPrice}</a>
        <a class="newprice">${newPrice}</a>
      </div>
    </div>
    <div class="card-container-details">
      <a>${description}</a>
      <details>
        <summary>Meterials</summary>
        <div>${fabric}</div>
      </details>
    </div>
  </div>
    `;
    card.href = `../HTML/produktinfo.html?id=${id}`;
  
    main.appendChild(card);
  };
console.log(renderCard);
  const renderProductDetails = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const productId = queryParams.get("id");
    renderCard(productId);
  };
  
  renderProductDetails();
  
  
