export const productDetails = () => {
  const productId = window.location.search.slice(1).split("=")[1];
  console.log(productId);

  const getloaclStorage = JSON.parse(localStorage.getItem("products"));
  console.log(getloaclStorage);

  let productData = -1;

  for (let i = 0; i < getloaclStorage.length; i++) {
    if (getloaclStorage[i].id === productId) {
      productData = i;
    }
  }

  if (productData > -1) {
    const productDiv = document.getElementById("productDetail");
    console.log(productDiv);

    productDiv.innerHTML += `<div class="col-md-6">
    <div class="product_preview">
      <img src="${getloaclStorage[productData].preview}" />
    </div>
    </div>
    <div class="col-md-6">
    <div class="p_product_details">
      <div class="mobile_spacer"></div>
      <div class="p_product_offer">Offer will end soon</div>
      <div class="p_product_title">${getloaclStorage[productData].name}</div>
      <div class="p_product_brand">${getloaclStorage[productData].brand}</div>
      <div class="p_product_price">Price: <span>Rs ${
        getloaclStorage[productData].price
      }</span></div>

      <div class="p_product_description">
        <div class="p_product_desc_title">Description</div>
        <div class="p_product_desc">
        ${getloaclStorage[productData].description}
        </div>
      </div>
    </div>

    <div class="p_product_guide">
      <div class="p_size_guide">
        <ion-icon name="expand-outline"></ion-icon> Size Guide
      </div>

      <div class="p_shipping">
        <ion-icon name="bicycle-outline"></ion-icon> Shipping
      </div>
    </div>

    <div class="p_product_preview">
      <div class="p_product_preview_title">Product Preview</div>
      <div class="p_product_preview_thumb">
      ${Object.values(getloaclStorage[productData].photos).map(
        (photos) => `<img src="${photos}" />`
      )}
      </div>
    </div>

    <div class="product_cart_container">

      <div class="stock_details">
        <ion-icon name="checkmark-circle"></ion-icon>
        <p>In stock online</p>
      </div>
    </div>

    <div class="product_cart_buttons">
      <div class="product_add_to_cart">
        <p><ion-icon name="bag-outline"></ion-icon> Add to Cart</p>
      </div>

      <div class="product_add_to_wishlist">
        <p><ion-icon name="heart-outline"></ion-icon> Add to Wishlist</p>
      </div>
    </div>

    <div class="verified_payement">
      <img src="./assets/images/verified_payment.jpg" alt="payment" />
    </div>
    </div>`;
  }
};

{
  /* <li><img src="./assets/images/product_demo_1.jpg" /></li>
        <li><img src="./assets/images/product_demo_1.jpg" /></li>
        <li><img src="./assets/images/product_demo_1.jpg" /></li>
        <li><img src="./assets/images/product_demo_1.jpg" /></li>
        <li><img src="./assets/images/product_demo_1.jpg" /></li>
        <li><img src="./assets/images/product_demo_1.jpg" /></li> */
}
