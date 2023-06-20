// use function for updating products quantity
function updatingProductQuantity(isIncrease, inputFieldId) {
  const productFieldNumber = document.getElementById(inputFieldId);
  const productFieldNumberString = productFieldNumber.value;
  const previousFeildNumber = parseInt(productFieldNumberString);

  let newproductFieldNumber;

  if (isIncrease) {
    newproductFieldNumber = previousFeildNumber + 1;
  } else {
    newproductFieldNumber = previousFeildNumber - 1;
  }
  productFieldNumber.value = newproductFieldNumber;

  return newproductFieldNumber;
}

// use function for updating total product prices
function updateProductTotalPrice(newproductFieldNumber, productPriceId) {
  const productTotalPrice = newproductFieldNumber * 999;
  const productTotalPriceElement = document.getElementById(productPriceId);
  productTotalPriceElement.innerText = productTotalPrice;
}

// use function for get updating total amount for order 
function updateTotalAmountForOrderGet(elementId){
    const productTotalPriceForOrder = document.getElementById(elementId)
    const currentTotalPriceForOrderString = productTotalPriceForOrder.innerText
    const currentTotalPriceForOrder = parseInt(currentTotalPriceForOrderString)
    return currentTotalPriceForOrder   
}

// use function for updating total product amount for order now
function updateTotalAmountForOrder(productId1, productId2){
    const getTotalPhone1Amount = document.getElementById(productId1)
    const updateGetToalPhone1Amount = getTotalPhone1Amount.innerText
    console.log(updateGetToalPhone1Amount)

    const setPhone1Amount = document.getElementById(productId2)
    setPhone1Amount.innerText = updateGetToalPhone1Amount
}