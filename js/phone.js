// phone number 1 - using even handler with id
document.getElementById('phone-button-plus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(true, 'phone-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-1')
})
document.getElementById('phone-button-minus-1').addEventListener('click', function(){
    const newPhoneFieldNumber = updatingProductQuantity(false, 'phone-input-1')
    updateProductTotalPrice(newPhoneFieldNumber, 'phone-price-1')
})
document.getElementById('phone-order-button-1').addEventListener('click', function(){
    window.location.href = 'service.html'
})