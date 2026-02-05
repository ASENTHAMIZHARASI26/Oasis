function inputadd() {
  const input = document.getElementById("inputvalue");
  const tasktext = input.value.trim();

  if (tasktext === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = tasktext;

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "X";
  deletebtn.className = "deletebtn";
  deletebtn.onclick = (event) => {
    event.stopPropagation();
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deletebtn);
  document.getElementById("tasklist").appendChild(li);

  input.value = "";
}
