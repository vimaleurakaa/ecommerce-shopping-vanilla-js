export const checkout = () => {
  const data = JSON.parse(localStorage.getItem("productList"));
  console.log(data);

  if (data != undefined) {
    renderCheckout(data);
  }
};

const renderCheckout = (data) => {
  const chekoutEle = document.getElementById("checkout");

  //render data
  for (let i = 0; i < data.length; i++) {
    chekoutEle.innerHTML += `

    <div class="checkout_product_card">
    <div class="checkout_product">
      <img src="${data[i].image}" />
    </div>

    <div class="checkout_prod_details">
      <div class="checkout_prod_title">
        Product : ${data[i].name}
      </div>
      <div class="checkout_prod_brand">Brand : ${data[i].brand}</div>

      <div class="checkout_prod_qty">Quantity : ${data[i].quantity}</div>
      <div class="checkout_prod_price">Price : ${data[i].totalPrice}</div>
    </div>
  </div>
    `;
  }
};
