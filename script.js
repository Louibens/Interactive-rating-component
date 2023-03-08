let rates = document.querySelectorAll('.rating');

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      document.getElementById("rated").innerHTML = rate.innerHTML;
      rate.classList.add('selected')
      
    }
    )}
)

function submitRate() {
document.getElementById('first-side').classList.add('hide');
document.getElementById('second-side').classList.remove('hide')
}
