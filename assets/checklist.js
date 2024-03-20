const getCheckboxText = (checkbox) => {
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

  return elForText.innerText;
};

const generateId = (checkbox) => {
  if (checkbox.id) {
    return checkbox.id;
  }

  const text = getCheckboxText(checkbox);
  return text.toLowerCase().replace(/\W/g, "");
};

const persistState = (checkbox) => {
  const id = generateId(checkbox);
  if (!id) {
    return;
  }
  localStorage.setItem(id, checkbox.checked);
};

const initializeCheckedState = (checkbox) => {
  const id = generateId(checkbox);
  if (!id) {
    return;
  }

  const val = localStorage.getItem(id);
  if (val) {
    checkbox.checked = val == "true";
  }
};

const onChange = (event) => {
  const checkbox = event.target;
  persistState(checkbox);
};

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.getElementsByClassName("task-list-item-checkbox");

  for (const checkbox of checkboxes) {
    initializeCheckedState(checkbox);
    checkbox.addEventListener("change", onChange);
    checkbox.removeAttribute("disabled");
  }

  const devices = document.getElementsByClassName("device-selector");

  for (const device of devices) {
    const deviceLi = device.parentElement;
    const name = deviceLi.innerText;
    console.log(name);

    const lis = document.getElementsByTagName("li");
    for (const li of lis) {
      if (li === deviceLi || !li.innerText.startsWith(name)) {
        continue;
      }
      li.style.display = device.checked ? "list-item" : "none";
    }
  }
});
