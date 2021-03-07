export const addToCrat = (data) => {
  let productDetails = [];
  let totalCount = 0;

  if (localStorage.getItem("productList") == undefined) {
    data.quantity = 1;
    data.totalPrice = data.quantity * data.price;
    productDetails.push(JSON.parse(JSON.stringify(data)));
    localStorage.setItem("productList", JSON.stringify(productDetails));
    totalCount = 1;
  } else {
    productDetails = JSON.parse(localStorage.getItem("productList"));
    let foundAtPos = -1;

    for (let i = 0; i < productDetails.length; i++) {
      totalCount += Number(productDetails[i].quantity);
      if (productDetails[i].id === data.id) {
        foundAtPos = i;
      }
    }

    if (foundAtPos > -1) {
      productDetails[foundAtPos].quantity = (
        Number(productDetails[foundAtPos].quantity) + 1
      ).toString();
      productDetails[foundAtPos].totalPrice = (
        productDetails[foundAtPos].quantity * productDetails[foundAtPos].price
      ).toString();
      localStorage.setItem("productList", JSON.stringify(productDetails));
      totalCount++;
    } else {
      data.quantity = 1;
      data.totalPrice = data.quantity * data.price;
      productDetails.push(JSON.parse(JSON.stringify(data)));
      localStorage.setItem("productList", JSON.stringify(productDetails));
      totalCount++;
    }
  }

  console.log(productDetails, totalCount);
};

export const productCounter = () => {
  let totalCount = 0;
  if (localStorage.getItem("productList") == undefined) {
    totalCount = 0;
  } else {
    let productList = JSON.parse(localStorage.getItem("productList"));
    for (let i = 0; i < productList.length; i++) {
      totalCount += Number(productList[i].quantity);
    }
  }

  return totalCount;
};
