const generateId = (checkbox) => {
  if (checkbox.id) {
    return checkbox.id;
  }

  let elForText = checkbox.closest("li");
  if (!elForText) {
    console.warn("No <li> found for checkbox", checkbox);
    return;
  }

  // use the bolded text, if available
  const bolded = elForText.getElementsByTagName("strong")[0];
  if (bolded) {
    elForText = bolded;
  }

  const text = elForText.innerText;
  return text.toLowerCase().replace(/\W/g, "");
};

const persistState = (checkbox) => {
  const id = generateId(checkbox);
  if (!id) {
    return;
  }
  localStorage.setItem(id, checkbox.checked);
};

const updateState = (checkbox) => {
  const id = generateId(checkbox);
  if (!id) {
    return;
  }
  const checked = localStorage.getItem(id) === "true";
  checkbox.checked = checked;
};

const onChange = (event) => {
  const checkbox = event.target;
  persistState(checkbox);
};

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.getElementsByClassName("task-list-item-checkbox");

  for (const checkbox of checkboxes) {
    updateState(checkbox);
    checkbox.addEventListener("change", onChange);
    checkbox.removeAttribute("disabled");
  }
});
