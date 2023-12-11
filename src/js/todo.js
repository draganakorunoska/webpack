import { TRUE } from "node-sass";

let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let createBtn = document.getElementById("createTask");

let editTask = null;
function onClickCreateTask() {
  if (inputTask.value != "") {
    if (editTask) {
      editTask.querySelector("span").textContent = inputTask.value;
      createBtn.textContent = "Add new task";
      editTask = null;
    } else {
      let listElement = document.createElement("li");
      let spanElement = document.createElement("span");
      spanElement.textContent = inputTask.value;

      let completeBtn = document.createElement("button");
      completeBtn.innerHTML = "Completed";
      completeBtn.addEventListener("click", onClickComplete);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", onClickDelete);

      let editBtn = document.createElement("button");
      deleteBtn.innerHTML = "Edit";
      editBtn.addEventListener("click", onClickEdit);

      listElement.appendChild(spanElement);
      listElement.appendChild(completeBtn);
      listElement.appendChild(deleteBtn);
      taskList.appendChild(listElement);
      listElement.appendChild(editBtn);
    }

    inputTask.value = "";
  }
}

createBtn.addEventListener("click", onClickCreateTask);
function onClickComplete(event) {
  let listElement = event.target.parentElement;

  // toggle method is a shortcut for the following code:
  //   if(listElement.classList.containes("completed")) {
  //      listElement.classList.remove("completed");
  //   } else {
  //     listElement.classList.add("completed");
  //   }
  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let element = event.target.closest("li");
  element.remove(element);
}

function onClickEdit(event) {
  editTask = event.target.parentElement;
  let spanElement = editingTask.querySelector("span");
  inputTask.value = spanElement.textContent;
  createBtn.textContent = "Edit Task";
}
export { onClickEdit };
