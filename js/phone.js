// phone number 1 - using even handler with id
document.getElementById('phone-button-plus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'phone-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-1')
    updateTotalAmountForOrder('phone-price-1', 'producs-total-price')
})

document.getElementById('phone-button-minus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'phone-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-1')
    updateTotalAmountForOrder('phone-price-1', 'producs-total-price')
})

// phone number 2 - using even handler with id
document.getElementById('phone-button-plus-2').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'phone-input-2')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-2')
    updateTotalAmountForOrder('phone-price-2', 'producs-total-price')
})

document.getElementById('phone-button-minus-2').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'phone-input-2')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-2')
    updateTotalAmountForOrder('phone-price-2', 'producs-total-price')
})

// phone number 3 - using even handler with id
document.getElementById('phone-button-plus-3').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'phone-input-3')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-3')
    updateTotalAmountForOrder('phone-price-3', 'producs-total-price')
})

document.getElementById('phone-button-minus-3').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'phone-input-3')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-3')
    updateTotalAmountForOrder('phone-price-3', 'producs-total-price')
})