const form = document.getElementById("form-id");
const input = document.getElementById("input-main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`User typed: ${input.value}`);
});
