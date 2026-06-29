const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("please insert a value");
  } else {
    let li = document.createElement("li");
    // let checkBox = document.createElement("input");
    // // <input type="checkbox" name="options" id="myBox">
    // checkBox.type = "checkbox";
    // li.appendChild(checkBox);
    // li.innerHTML = inputBox.value;

    listContainer.appendChild(li);

    // 2. Create the checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "myCheckbox"; // Important for the label to work

    // 3. Create the label element
    const label = document.createElement("label");
    label.htmlFor = "myCheckbox"; // Links to the checkbox id
    const taskDesc = "  " + inputBox.value;
    label.appendChild(document.createTextNode(taskDesc)); // Adds text to label

    // 4. Add them to the page
    li.appendChild(checkbox);
    li.appendChild(label);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false,
);
