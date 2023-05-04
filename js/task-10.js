function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
let inputValue;

inputEl.addEventListener("input", (event) => {
  inputValue = event.currentTarget.value;
});

createBtn.addEventListener("click", () => {
  createBoxes(inputValue);
});

function createBoxes(amount) {
  const divElArr = [];
  let divSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;

    divSize = divSize + 10;
    console.log(divSize);
    divElArr.push(divEl);
  }
  return divBoxesEl.append(...divElArr);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

destroyBtn.addEventListener("click", destroyBoxes);
