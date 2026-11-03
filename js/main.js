// form-id safe handling
const form = document.querySelector("#form-id");
const input = document.querySelector("#input-id");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`User typed: ${input.value}`);
});

// sidebar animation
const aside = document.querySelector(".aside-container");
const asideElement = document.querySelector(".aside-element");
let closeTimeout;

aside.addEventListener("mouseenter", () => {
  clearTimeout(closeTimeout);
  aside.classList.add("aside-is-open");
  asideElement.classList.add("aside-element-is-open");
});

aside.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    aside.classList.remove("aside-is-open");
    asideElement.classList.remove("aside-element-is-open");
  }, 1000);
});
