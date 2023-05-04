const textInput = document.querySelector("#validation-input");
const validInputLength = Number.parseInt(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
  if (textInput.value.length === validInputLength) {
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
    return textInput.classList.add("valid");
  }
  textInput.classList.add("invalid");
});
