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
const asideHeaderContainer = document.querySelector(".aside-header-container");
let closeTimeout;

aside.addEventListener("mouseenter", () => {
  clearTimeout(closeTimeout);
  aside.classList.add("aside-container-is-open");
  asideElement.classList.add("aside-element-is-open");
  asideHeaderContainer.classList.add("aside-header-container-is-open");
});

aside.addEventListener("mouseleave", () => {
  closeTimeout = setTimeout(() => {
    aside.classList.remove("aside-container-is-open");
    asideElement.classList.remove("aside-element-is-open");
    asideHeaderContainer.classList.remove("aside-header-container-is-open");
  }, 1000);
});
