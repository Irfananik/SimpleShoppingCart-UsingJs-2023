// use function for updating products quantity
function updatingProductQuantity(isIncrease, inputFieldId){
    const productFieldNumber = document.getElementById(inputFieldId)
    const productFieldNumberString = productFieldNumber.value
    const previousFeildNumber = parseInt(productFieldNumberString)

    let newproductFieldNumber

    if(isIncrease){
        newproductFieldNumber = previousFeildNumber + 1
    }
    else{
        newproductFieldNumber = previousFeildNumber - 1
    }
    productFieldNumber.value = newproductFieldNumber

    return newproductFieldNumber
}

// use function for updating total product prices
function updateProductTotalPrice(newproductFieldNumber, productPriceId){
    const productTotalPrice = newproductFieldNumber * 999
    const productTotalPriceElement = document.getElementById(productPriceId)
    productTotalPriceElement.innerHTML = productTotalPrice
}

// use function for updating total product prices with sub total