const hoverBtn = document.getElementById("hoverBtn");
const mouseMsg = document.getElementById("mouseMsg");

hoverBtn.addEventListener("mouseenter", () => {
  mouseMsg.textContent = "Mouse is over the button!";
});

hoverBtn.addEventListener("mouseleave", () => {
  mouseMsg.textContent = "Mouse left the button.";
});

const keyInput = document.getElementById("keyInput");
const keyMsg = document.getElementById("keyMsg");

keyInput.addEventListener("keydown", (event) => {
  keyMsg.textContent = "Last key pressed: " + event.key;
});

const demoForm = document.getElementById("demoForm");
const formMsg = document.getElementById("formMsg");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  formMsg.textContent = "Form submitted successfully!";
});

const focusInput = document.getElementById("focusInput");
const focusMsg = document.getElementById("focusMsg");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "Input is focused";
});

focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "Input lost focus";
});

const container = document.getElementById("buttonContainer");
const delegateMsg = document.getElementById("delegateMsg");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    delegateMsg.textContent =
      "You clicked: " + event.target.textContent;
  }
});