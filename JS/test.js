const loader = document.getElementById("loading");
function displayLoading() {
  loader.style.display = 'block';
};
function hideLoading() {
  loader.style.display = 'none';
}


const url = "https://www.id.serialsnoozer.no/wp-json/wp/v2/posts";
const api = "https://www.id.serialsnoozer.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";

const output = document.querySelector('#output');

displayLoading();

fetch(api)
    .then (res => res.json())
    .then (data => {
        hideLoading();
        listPosts(data);
    });

    function listPosts (posts) {
    for (let post of posts) {
        if (post.featured_media > 0) {
        let img = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        output.innerHTML += `
            <div class="container">
                <a href="./checkout.html" class="buyNow">Buy now <i class="fa-solid fa-baby-carriage fa-xl fa-flip-horizontal"></i
                ></a>
                <img src="${img}" alt="picture of carrier ${post.title.rendered}" class="image" data-src="${img}">
                <div class="productInfo">
                    <div class="productTitle"> 
                        <h3 class="productName">${post.title.rendered}</h3>
                        <h3 class="carrier">Carrier</h3>
                    </div>
                    ${post.content.rendered}
                </div>
            </div>
        `;
        } else {
        output.innerHTML += `<div>[Post id=${post.title.rendered} does not have a image]</div>`;
    } }
    const images = document.querySelectorAll('.image');
  images.forEach(image => {
    image.addEventListener('click', () => {
      openModal(image.getAttribute('data-src'));
    });
  });
}

function openModal(imageSrc) {

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${imageSrc}" alt="" class="modal-image">
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
        closeModalWindow();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
        closeModalWindow();
        }
    });
}

function closeModalWindow() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}