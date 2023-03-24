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
)





const renderCard = (productId) => {
  //const product = products.find((product) => product.id === productId);

  // if (!product) {
  //   console.error(`Product with id ${productId} not found.`);
  //   return;
  // }
  for(const jacket of array){
    console.log(jacket.id);
    const { id, name, price, oldPrice, newPrice, description, sizes, fabric, imageURL, image } = jacket;

    const card = document.createElement("a");
    card.classList.add("card-frontpage");
    card.innerHTML = `
      <div class="reduced">
        <div class="card-img " href="../HTML/produktinfo.html?id=${jacket.id}">
          <img src="${jacket.imageURL}" alt="Picture of ${name}" class="card-img-frontpage"/>
          <h3>${name}</h3>
          <div class="price-frontpage">
          <p class="newprice">${jacket.price}</p>
          <p class="oldprice1">${oldPrice}</p>
          <a href="../HTML/produktinfo.html?id=${jacket.id}">next</a>
          </div>
        </div>
      </div>
    `;

    main.appendChild(card);



  }

  // const { id, name, price, oldPrice, newPrice, description, sizes, fabric, imageURL, image } = product;

  // const card = document.createElement("a");
  // card.classList.add("card-frontpage");
  // card.innerHTML = `
  //   <div class="reduced">
  //     <div class="card-img">
  //       <img src="${image}" alt="Picture of ${name}" class="card-img-frontpage"/>
  //       <h3>${name}</h3>
  //       <div class="price-frontpage">
  //       <p class="newprice">${newPrice}</p>
  //       <p class="oldprice1">${oldPrice}</p>
  //       </div>
  //     </div>
  //   </div>
  // `;
  // card.href = `./HTML/produktinfo.html?id=${id}`;

  // main.appendChild(card);
};



renderCard(2);

