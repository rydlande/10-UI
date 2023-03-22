import {products} from "./products.js";

console.log(products);

const main = document.querySelector("main");


export const renderCards = (arr) => {                           //arr referer til import

    for (let i = 0; i < arr.length; i++) {  
        const { id, name, imageUrl, description, fabric, price } = arr[i];

        //const container = document.createElement("div");
        //container.classList.add("container");

        const card = document.createElement("a");
        card.classList.add("container");
        card.innerHTML = `
        <div class="card">
          <img src="${imageUrl}" alt="picture of ${name}"/>
          <h3>${name}</h3>
          <p>${price}</p>`
          card.href = `./produktinfo.html?id=${id}
        </div>`;
        //container.appendChild(card);


        main.appendChild(card);
    }
    
};

renderCards(products);


/*<div class="product-container">
        <div class="card">
          <div>
            <a href="./produktinfo.html" class="card-img-container">
              <img
                src="./media/jakker/RainyDays_Jacket1.png"
                alt="jakke1"
                class="card-img"
            /></a>
          </div>
          <div class="produktnavn-oversikt">
            <a>AIR Isulated Jacket</a><br />
            <a><strong>1300kr</strong></a>
          </div>
        </div>*/