//even handler for product order now button
document.getElementById('order-now-button').addEventListener('click', function(){
    const productTotalPriceElement = document.getElementById('producs-total-price')
    const productTotalPriceString = productTotalPriceElement.innerText
    const productTotalPrice = parseFloat(productTotalPriceString)
    if(productTotalPrice > 0){
        window.location.href = 'service.html'
    }
    else{
        alert('Please first select your product!')
    }
})