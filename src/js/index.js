import "../css/main.scss";
import { navigation } from "./components/navigationBar";
import { footerItem } from "./components/footer";
import * as _sliders_ from "./utils/sliderControls";
import { getProducts } from "./utils/homepage";
import { getProductsList } from "./utils/productsList_page";
import { addToCrat, productCounter } from "./utils/addToCart";
import { checkout } from "./utils/checkoutPage";
import "./utils/productDetailPage";

const img = require.context(
  "../assets/images",
  false,
  /\.(png|svg|jpg|jpeg|gif)$/
);

//DOM elements
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

//function excecution
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  //sliders
  _sliders_.changeSlide();
  _sliders_.timerInterval();
  //
  getProducts();
} else if (window.location.pathname === "/product.html") {
  getProductsList();
} else if (window.location.pathname === "/checkout.html") {
  checkout();
}

nav.innerHTML = navigation();
footer.innerHTML = footerItem();

const chekoutCounter = document.getElementById("counter");
document.body.addEventListener("click", function (e) {
  if (e.target.id == "addToCart") {
    let data = e.target.dataset;
    addToCrat(data);
    chekoutCounter.innerHTML = productCounter();
  }
});
chekoutCounter.innerHTML = productCounter();
