const generateId = (checkbox) => {
  if (checkbox.id) {
    return checkbox.id;
  }
  const li = checkbox.closest("li");
  if (!li) {
    console.warn("No <li> found for checkbox", checkbox);
    return;
  }
  const text = li.innerText;
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
