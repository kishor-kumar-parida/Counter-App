let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset");

//increment
incrementBtn.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
});

//decrement
decrementBtn.addEventListener("click", () => {
    counter--;
    counterValue.innerHTML = counter;
});

//reset
resetBtn.addEventListener("click", () => {
    counter = 0;
    counterValue.innerHTML = counter;
});
