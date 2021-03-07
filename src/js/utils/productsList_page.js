//fetch api
export const getProductsList = () => {
  const fetchAPI = (url) => {
    const response = fetch(url);
    response
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLocalStorageProduct(data);
      })
      .catch((err) => {
        console.log(`Error fetching api : ${err}`);
      });
  };

  fetchAPI("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
};

function productsList(data) {
  //DOM element
  const productsDiv = document.getElementById("productsList");
  const productAccessor = document.getElementById("productsAccessories");

  for (let i = 0; i < data.length; i++) {
    if (data[i].isAccessory === false) {
      productsDiv.innerHTML += `
    <!---------------------- Product Card -------------------------------->
    <div class="col-3">
      <div class="product_card_container">
        <a href="#prod">
          <div class="product_image">
            <img src="${data[i].preview}" />
            <!-- Product META -->
            <div class="product_meta_info">
              <div class="product_wishlist">
                <ion-icon name="heart-outline"></ion-icon>
              </div>
              <div class="product_add_to">
            <p id="addToCart" class="product_id" 
                data-id="${data[i].id}"
                data-image="${data[i].preview}"
                data-brand="${data[i].brand}"
                data-name="${data[i].name}"
                data-price="${data[i].price}"      
                ><ion-icon name="bag-outline"></ion-icon> Add to Cart</p>
              </div>
            </div>
            <!-- END OF Product META -->
          </div>
          <!-- Product Desc -->
          <div class="product_description">
            <div class="product_title">${data[i].name}</div>
            <div class="product_details">${data[i].brand}</div>
            <div class="product_price_container">
              <p class="product_price">Rs.${data[i].price}</p>
              <p class="product_discount">Rs.1599</p>
            </div>
          </div>
          <!--END OF Product Desc -->
        </a>
      </div>
    </div>
    <!---------------------- END OF Product Card ------------------------->
              `;
    } else {
      productAccessor.innerHTML += `
      <!---------------------- Product Card -------------------------------->
    <div class="col-3">
      <div class="product_card_container">
        <a href="#prod">
          <div class="product_image">
            <img src="${data[i].preview}" />
            <!-- Product META -->
            <div class="product_meta_info">
              <div class="product_wishlist">
                <ion-icon name="heart-outline"></ion-icon>
              </div>
              <div class="product_add_to">
                <p id="addToCart" class="product_id" 
                data-id="${data[i].id}"
                data-image="${data[i].preview}"
                data-brand="${data[i].brand}"
                data-name="${data[i].name}"
                data-price="${data[i].price}"  
                ><ion-icon name="bag-outline"></ion-icon> Add to Cart</p>
              </div>
            </div>
            <!-- END OF Product META -->
          </div>
          <!-- Product Desc -->
          <div class="product_description">
            <div class="product_title">${data[i].name}</div>
            <div class="product_details">${data[i].brand}</div>
            <div class="product_price_container">
              <p class="product_price">Rs.${data[i].price}</p>
              <p class="product_discount">Rs.1599</p>
            </div>
          </div>
          <!--END OF Product Desc -->
        </a>
      </div>
    </div>
    <!---------------------- END OF Product Card ------------------------->
      `;
    }
  }
}

function setLocalStorageProduct(data) {
  if (localStorage != undefined) {
    localStorage.setItem("products", JSON.stringify(data));
  }
  const getProducts = JSON.parse(localStorage.getItem("products"));
  console.log(getProducts);
  productsList(data);
}
