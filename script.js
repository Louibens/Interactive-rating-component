let rates = document.querySelectorAll('.rating');
let givenRating = sessionStorage.getItem("userRating");
let ratesClicked = false;


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      ratesClicked = true;
        sessionStorage.setItem("userRating", rate.innerHTML) ;
        setRating()
        rate.classList.add('selected')
})
  })

  function setRating() {
    document.getElementById("rated").innerHTML = givenRating;

  }


