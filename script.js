let rates = document.querySelectorAll('.rating');
let selectedRate = null;

for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", function() {
    // Set the text of the rated element to the selected rating
    document.getElementById("rated").innerHTML = this.innerHTML;
    
    // Add the "selected" class to the clicked element
    this.classList.add("selected");
    
    // Remove the "selected" class from the previously selected element
    if (selectedRate !== null) {
      selectedRate.classList.remove('selected');
    }
    
    // Update the selected rate variable to the newly selected element
    selectedRate = this;
  });
}

function submitRate() {
document.getElementById('first-side').classList.add('hide');
document.getElementById('second-side').classList.remove('hide')
}