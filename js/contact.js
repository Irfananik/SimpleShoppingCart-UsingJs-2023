const getNameFieldValueById = document.getElementById('name')
const getEmailFieldValueById = document.getElementById('email')
const getCommentFieldValueById = document.getElementById('comment')

const getOutputFieldValue1ById = document.getElementById('contact-name')
const getOutputFieldValueBy2Id = document.getElementById('contact-email')
const getOutputFieldValueBy3Id = document.getElementById('contact-comment')

const contactButton = document.getElementById('contact-btn')

function showData(){
    getOutputFieldValue1ById.innerText = getNameFieldValueById.value
    getOutputFieldValueBy2Id.innerText = getEmailFieldValueById.value
    getOutputFieldValueBy3Id.innerText = getCommentFieldValueById.value
}

contactButton.addEventListener('click', showData)