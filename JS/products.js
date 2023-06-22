const loader = document.getElementById("loading");
const output = document.querySelector("#output");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");
const closeModal = document.querySelector(".close");

function displayLoading() {
  loader.style.display = "block";
}
function hideLoading() {
  loader.style.display = "none";
}

const url = "https://www.id.serialsnoozer.no/wp-json/wp/v2/posts";
const api = "https://www.id.serialsnoozer.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";

displayLoading();

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    hideLoading();
    listPosts(data);
  });
  

  function listPosts(posts) {
    for (let post of posts) {
      if (post.featured_media > 0) {
        let img =
          post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
            .source_url;
        output.innerHTML += `
          <div class="container">
            <div class="imageContainer">
              <img src="${img}" alt="picture of carrier ${post.title.rendered}" class="image">
              <button class="buyNow"><a href="./checkout.html?id=${post.id}">Buy now <i class="fa-solid fa-baby-carriage fa-flip-horizontal"></i></a></button>
            </div>
            <div class="productInfo">
              <div class="productTitle"> 
                <h3 class="productName">${post.title.rendered}</h3>
                <h3 class="carrier">Carrier</h3>
              </div>
              ${post.content.rendered}
            </div>
            <div>
              <button class="details">View details</button>
            </div>
          </div>
        `;
      } else {
        output.innerHTML += `<div>[Post id=${post.title.rendered} does not have an image]</div>`;
      }
    }

    

  const images = document.querySelectorAll(".imageContainer");
  images.forEach((image) => {
    const buyButton = image.querySelector(".buyNow");

    image.addEventListener("mouseenter", () => {
      buyButton.style.display = "block";
    });

    image.addEventListener("mouseleave", () => {
      buyButton.style.display = "none";
    });
  });

  const detailsButtons = document.querySelectorAll(".details");

  detailsButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const post = posts[index];
      openModal(post);
    });
  });

  function openModal(post) {
    const img = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    
    modalContent.innerHTML = `
        <div class="cardModal">
            <img src="${img}" alt="picture of carrier ${post.title.rendered}" class="imageModal">
            <div class="infoModal">
                <div class="productTitle">
                    <h3 class="productName">${post.title.rendered}</h3>
                    <h3 class="carrier">Carrier</h3>
                </div>
                ${post.excerpt.rendered}
                <button class="buynowModal"><a href="./checkout.html?id=${post.id}">Buy now <i class="fa-solid fa-baby-carriage fa-flip-horizontal"></i></a></button>
            </div>
        </div>
            <span class="close">&times;</span>
    `;

    modal.style.display = "block";
    document.body.classList.add("overlay");
  }

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("overlay");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal || modal.contains(event.target)) {
      modal.style.display = "none";
      document.body.classList.remove("overlay");
    }
  });
}