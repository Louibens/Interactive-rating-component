let rates = document.querySelectorAll('.rating');
let givenRating = sessionStorage.getItem("userRating");
let ratesClicked = false;
let submit = document.getElementById('submit')

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      ratesClicked = true;
        sessionStorage.setItem("userRating", rate.innerHTML) ;

        
})
  })

function setRating() {
    document.getElementById("rated").innerHTML = givenRating;

  }

submit.addEventListener('click', setRating)
