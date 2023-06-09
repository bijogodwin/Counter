// Get the necessary elements
const valueElement = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

let counterValue = 0;

// Function to update the counter value
function updateCounter() {
  valueElement.textContent = counterValue;
}

// Function to handle button clicks
function handleButtonClick(event) {
  const button = event.currentTarget;
  
  if (button.classList.contains('decrease')) {
    counterValue--;
  } else if (button.classList.contains('reset')) {
    counterValue = 0;
  } else if (button.classList.contains('increase')) {
    counterValue++;
  }
  
  updateCounter();
}

// Add event listeners to the buttons
buttons.forEach(function(button) {
  button.addEventListener('click', handleButtonClick);
});
