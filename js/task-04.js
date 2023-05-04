const counter = document.querySelector("#value");
let counterValue = 0;
console.log(counterValue);

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const btnDecr = document.querySelector('button[data-action="decrement"]');
btnDecr.addEventListener("click", decrement);

const btnIncr = document.querySelector('button[data-action="increment"]');
btnIncr.addEventListener("click", increment);
