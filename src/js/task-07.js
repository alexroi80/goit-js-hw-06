const fontSize = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

fontSize.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
