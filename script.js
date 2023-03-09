let rates = document.querySelectorAll('.rating');

let i;
// rates.forEach((rate) => {
//     rate.addEventListener("click", () => {
//       document.getElementById("rated").innerHTML = rate.innerHTML;
//       rate.classList.add('selected')
//       if (previousElementSibling.classList === 'selected') {
//         rate.classList.remove('selected')
//       }
//     }
//     )}
// )


for (i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", function() {
    document.getElementById("rated").innerHTML = this.innerHTML;
    this.classList.add("selected");
    if (this.previousElementSibling.classList !== 'selected' || this.nextElementSibling.classList !== 'selected' ) {
      this.previousElementSibling.classList.remove('selected')
      this.nextElementSibling.classList.remove('selected')
  } else {
  this.classList.add("selected");
    }
  });
}



function submitRate() {
document.getElementById('first-side').classList.add('hide');
document.getElementById('second-side').classList.remove('hide')
}
