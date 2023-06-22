const loader = document.getElementById("loading");
const output = document.querySelector("#output");
let fetchedData;

function displayLoading() {
  loader.style.display = "block";
}

function hideLoading() {
  loader.style.display = "none";
}

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

if (!id) {
  if (window.location.pathname !== "/checkout.html") {
    window.location.href = "checkout.html";
  }
} else {
  const url = `https://www.id.serialsnoozer.no/wp-json/wp/v2/posts/${id}`;

  displayLoading();

  fetch(url)
    .then(response => response.json())
    .then(data => {
      fetchedData = data; // Store the fetched data
      displayPost(data);
      hideLoading();
    });
}

function displayPost(data) {
  console.log(data);
  let content = `
    <div class="container">
      <img src="" alt="Picture of ${data.title.rendered}" class="productImage"/>
      <div class="purchaseInfo">
        <div class="productInfo">
          <div class="productTitle">
            <h3 class="productName">${data.title.rendered}</h3>
            <h3 class="carrier">Carrier</h3>
          </div>
          ${data.content.rendered}
        </div>
        <div class="confirm">
          <div class="antall">
            <button class="minus">-</button>
            <p id="count">1</p>
            <button class="plus">+</button>
          </div>
          <div>
            <button class="complete"><a href="../thank_you.html?id=${data.id}">Complete purchase</a></button>
          </div>
        </div>
      </div>
    </div>
  `;
  output.innerHTML = content;
  document.title = `SNUG | Checkout ${data.title.rendered}`;

  getImageURL(data.featured_media);

  let minus = document.querySelector(".minus");
  let count = document.querySelector("#count");
  let plus = document.querySelector(".plus");

  let countNum = 1;
  count.innerHTML = countNum;

  minus.addEventListener("click", () => {
    countNum -= 1;
    count.innerHTML = countNum;
  });

  plus.addEventListener("click", () => {
    countNum += 1;
    count.innerHTML = countNum;
  });
}

function getImageURL(id) {
  fetch(`https://www.id.serialsnoozer.no/wp-json/wp/v2/media/${id}`)
    .then(response => response.json())
    .then(data => {
      addImage(data.source_url);
    });
}

function addImage(src) {
  const productImage = document.querySelector(".productImage");
  productImage.src = src;
}

