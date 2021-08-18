const coffeeCounter = document.getElementById("coffee-counter"); 
let currentCoffee = 0;

function increaseCoffee() {
  currentCoffee++;
  console.log(currentCoffee);
  coffeeCounter.innerHTML = currentCoffee;
}

function decreaseCoffee() {
  if (currentCoffee <= 0) {
    currentCoffee = 0;
  } else {
    currentCoffee--;
  }
  console.log(currentCoffee);
  coffeeCounter.innerHTML = currentCoffee;
}

function resetCoffee() {
  currentCoffee = 0;
  console.log(currentCoffee);
  coffeeCounter.innerHTML = currentCoffee;
}
