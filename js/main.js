// form-id safe handling
const form = document.querySelector("#form-id");
const input = document.querySelector("#input-id");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`User typed: ${input.value}`);
});

const searchForm = document.querySelector("#search-form-id");
const searchInput = document.querySelector("#search-input-id");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`Search request: ${searchInput.value}`);
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

// sidebar buttons navigation
const buttons = document.querySelectorAll("[data-view]");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.dataset.view;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const elementCentered = elementPosition - window.innerHeight / 2;

      const startPosition = window.scrollY;
      const distance = elementCentered - startPosition;
      const duration = 500;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) {
          startTime = currentTime;
        }
        const timePassed = currentTime - startTime;
        const progress = Math.min(timePassed / duration, 1);

        const easing =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        window.scrollTo(0, startPosition + distance * easing);
        if (timePassed < duration) {
          requestAnimationFrame(animation);
        }
      }
      requestAnimationFrame(animation);
    }
  });
});
