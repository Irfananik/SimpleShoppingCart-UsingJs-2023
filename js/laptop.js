// laptop number 1 - using even handler with id
document.getElementById('laptop-button-plus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'laptop-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-1')
    updateTotalAmountForOrder('laptop-price-1', 'producs-total-price')
})

document.getElementById('laptop-button-minus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'laptop-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-1')
    updateTotalAmountForOrder('laptop-price-1', 'producs-total-price')
})

// laptop number 2 - using even handler with id
document.getElementById('laptop-button-plus-2').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'laptop-input-2')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-2')
    updateTotalAmountForOrder('laptop-price-2', 'producs-total-price')
})

document.getElementById('laptop-button-minus-2').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'laptop-input-2')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-2')
    updateTotalAmountForOrder('laptop-price-2', 'producs-total-price')
})

// laptop number 3 - using even handler with id
document.getElementById('laptop-button-plus-3').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'laptop-input-3')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-3')
    updateTotalAmountForOrder('laptop-price-3', 'producs-total-price')
})

document.getElementById('laptop-button-minus-3').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'laptop-input-3')
    updateProductTotalPrice(newPhoneFieldNumber, 'laptop-price-3')
    updateTotalAmountForOrder('laptop-price-3', 'producs-total-price')
})