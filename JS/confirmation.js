document.addEventListener("DOMContentLoaded", () => {
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
  
    const url = `https://www.id.serialsnoozer.no/wp-json/wp/v2/posts/${id}`;
  
    displayLoading();
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        fetchedData = data; // Store the fetched data
        displayPost(data);
        hideLoading();
      });
  
  
    function displayPost(data) {
      console.log(data);
      let content = `
        <div class="container">
          <img src="" alt="Picture of ${data.title.rendered}" class="productImage"/>
            <div class="productInfo">
                <h3 class="productName">${data.title.rendered}</h3>
                <h3 class="carrier">Carrier</h3>
            </div>
        </div>
      `;
      getImageURL(data.featured_media);
      output.innerHTML = content;
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
      if (productImage) {
        productImage.src = src;
      }
    }
  });
  
