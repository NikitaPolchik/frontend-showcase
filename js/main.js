const form = document.querySelector("#form-id");
const input = document.querySelector("#input-id");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`User typed: ${input.value}`);
});
