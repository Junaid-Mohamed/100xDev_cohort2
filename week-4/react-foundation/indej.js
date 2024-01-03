const addtodoButton = document.getElementById("addToDo");

let todoId = 1;
let todo = [];
let oldTodoState = [];

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done";
}

function deleteToDo(id) {
  const indexToDelete = todo.findIndex((t) => t.id === id);
  todo.splice(indexToDelete, 1);
  updateState(todo, "delete");
}

function saveContent(toUpdate, updatetodo, titleInput, descInput, id) {
  const toUpdateId = id;
  const updatedToDo = {
    title: titleInput.value,
    desc: descInput.value,
    id: toUpdateId,
  };
  const updateToDoIndex = todo.findIndex((t) => t.id === toUpdateId);
  todo[updateToDoIndex] = updatedToDo;
  toUpdate.innerHTML = "";
  let title = updatetodo.children[0];
  let desc = updatetodo.children[1];
  title.innerHTML = titleInput.value;
  desc.innerHTML = descInput.value;
  let buttons = document.querySelectorAll(".util-buttons");
  buttons.forEach((button) => (button.style.display = "inline"));

  updateState(todo, "update");
}

function updateToDo(id) {
  // get container and it's content
  const updatetodo = document.getElementById(id);

  const title = updatetodo.children[0].innerHTML;
  const desc = updatetodo.children[1].innerHTML;
  const toUpdate = updatetodo.children[5];

  // create an i/p element for title and description
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = title;
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.value = desc;
  // create a save button
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.onclick = () =>
    saveContent(toUpdate, updatetodo, titleInput, descInput, id);

  //  append input contents and save button
  toUpdate.appendChild(titleInput);
  toUpdate.appendChild(descInput);
  toUpdate.appendChild(saveButton);

  // get the previous buttons and make them hide.
  let buttons = document.querySelectorAll(".util-buttons");
  // console.log(buttons.style.display);
  buttons.forEach((button) => (button.style.display = "none"));
}

// https://sum-server.100xdevs.com/todos
function createChild(title, desc, id) {
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  const secondGrandChild = document.createElement("div");
  const thirdGrandChild = document.createElement("button");
  const fourthGrandChild = document.createElement("button");
  const fifthGrandChild = document.createElement("button");
  const sixthGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;
  secondGrandChild.innerHTML = desc;
  thirdGrandChild.innerHTML = "Mark as Done";
  thirdGrandChild.className = "util-buttons";
  thirdGrandChild.setAttribute("onClick", `markAsDone(${id})`);
  fourthGrandChild.innerHTML = "delete toDo";
  fourthGrandChild.className = "util-buttons";
  fourthGrandChild.setAttribute("onClick", `deleteToDo(${id})`);
  fifthGrandChild.innerHTML = "update toDo";
  fifthGrandChild.className = "util-buttons";
  fifthGrandChild.setAttribute("onClick", `updateToDo(${id})`);
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.appendChild(fourthGrandChild);
  child.appendChild(fifthGrandChild);
  child.appendChild(sixthGrandChild);
  child.setAttribute("id", id);
  return child;
}

function addToDo() {
  let titleInput = document.getElementById("title");
  let descInput = document.getElementById("description");

  let title = titleInput.value;
  let desc = descInput.value;

  todo.push({
    title: title,
    desc: desc,
    id: todoId,
  });

  // Clear input boxes
  titleInput.value = "";
  descInput.value = "";

  updateState(todo, "add");
  // Show the container when a todo is added
  const container = document.getElementById("container");
  container.style.display = "flex";
}

function updateState(todos, operation) {
  const added = [];
  const deleted = [];
  const updated = [];

  if (operation == "add") {
    // find added todo's and update Dom accordingly

    const addedItems = todos.filter((item) => {
      const bool = !oldTodoState.some(
        (oldItem) =>
          oldItem.id === item.id &&
          oldItem.title === item.title &&
          oldItem.desc === item.desc
      );

      return bool;
    });

    if (addedItems.length > 0) {
      added.push(addedItems[0]);
      oldTodoState = [...todo];

      addTodoToDom(added);
    }
  } else if (operation === "delete") {
    // find deleted todo and update dom accordingly.

    const deletedItems = oldTodoState.filter((oldItem) => {
      return !todo.some(
        (todo) =>
          todo.id === oldItem.id &&
          todo.desc === oldItem.desc &&
          todo.title === oldItem.title
      );
    });

    if (deletedItems.length > 0) {
      deleted.push(deletedItems[0]);
      oldTodoState = [...todo];
      deleteTodoFromDom(deleted);
    }
    if (todo.length == 0) {
      const container = document.getElementById("container");
      container.style.display = "none";
    }
  } else if (operation === "update") {
    // find updated todo and update dom accordingly.
    const updatedItems = todos.filter((item) => {
      const oldItem = oldTodoState.find((oItem) => oItem.id === item.id);
      const bool =
        oldItem && (oldItem.title !== item.title || oldItem.desc !== item.desc);
      return bool;
    });

    if (updatedItems.length > 0) {
      updated.push(updatedItems[0]);
      oldTodoState = [...todo];
    }
  }
}

function addTodoToDom(todo) {
  const parent = document.getElementById("container");
  parent.appendChild(createChild(todo[0].title, todo[0].desc, todoId++));
}

function deleteTodoFromDom(todo) {
  const parent = document.getElementById("container");
  const child = document.getElementById(todo[0].id);
  parent.removeChild(child);
}

addtodoButton.addEventListener("click", addToDo);
