let rating = document.getElementsByClassName('rating')
let count = ""

rating.addEventListener('click', select);

function select {
    document.getElementsByClassName('rating').classList.add('selected')
}