

let rates = document.querySelectorAll('.rating');
let submit = document.querySelector('button')

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      document.getElementById("rated").innerHTML = rate.innerHTML;
      rate.classList.add('selected')
      
    }
    )}
)

console.log(submit)
function submitRate() {
document.getElementById('first-side').classList.add('hide');
document.getElementById('second-side').classList.remove('hide')
}



