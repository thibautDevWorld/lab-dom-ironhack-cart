// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  let subTotal = quantityValue * priceValue;
  let subTotalElm = product.querySelector('.subtotal')
  subTotalElm.innerHTML = subTotal;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  products = [...products].forEach(elm => updateSubtotal(elm));

  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
