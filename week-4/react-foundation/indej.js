const addtodoButton = document.getElementById("addToDo");

let todoId = 1;
let todo = [];
let oldTodo = [];

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done";
}

function deleteTodo(id) {
  const todo = document.getElementById(id);
  console.log(todo);
}

function updateTodo(id) {
  const todo = document.getElementById(id);
  console.log(todo);
}

function isEqual(todo1, todo2) {
  const bool =
    todo1.id === todo2.id &&
    todo1.title === todo2.title &&
    todo1.desc === todo2.desc;
  return bool;
}

// https://sum-server.100xdevs.com/todos
function createChild(title, desc, id) {
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  const secondGrandChild = document.createElement("div");
  const thirdGrandChild = document.createElement("button");
  const fourthGrandChild = document.createElement("button");
  const fifthGrandChild = document.createElement("button");
  firstGrandChild.innerHTML = title;
  secondGrandChild.innerHTML = desc;
  thirdGrandChild.innerHTML = "Mark as Done";
  thirdGrandChild.setAttribute("onClick", `markAsDone(${id})`);
  fourthGrandChild.innerHTML = "delete toDo";
  fourthGrandChild.setAttribute("onClick", `deleteToDo(${id})`);
  fifthGrandChild.innerHTML = "update toDo";
  fifthGrandChild.setAttribute("onClick", `updateToDo(${id})`);
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.appendChild(fourthGrandChild);
  child.appendChild(fifthGrandChild);
  child.setAttribute("id", id);
  return child;
}

function addToDo() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;

  todo.push({
    title: title,
    desc: desc,
    id: todoId,
  });
  // console.log(todo);

  updateState(todo);
}

function updateState(todos) {
  // console.log(todos);

  const added = [];
  const deleted = [];
  const updated = [];

  // find added todo's
  todos.forEach((todo) => {
    const existInOldTodo = oldTodo.some((oldTodo) => oldTodo.id === todo.id);
    if (!existInOldTodo) {
      added.push(todo);
    }
  });
  // console.log(added);

  // find deleted to do
  oldTodo.forEach((oldTodo) => {
    const existIntodo = todo.some((todo) => todo.id === oldTodo.id);
    if (!existIntodo) {
      deleted.push(todo);
    }
  });

  // find updated todo
  todos.forEach((todo) => {
    const oldtodo = oldTodo.find((oldtodo) => oldtodo.id === todo.id);
    if (oldtodo && !isEqual(oldtodo, todo)) {
      updated.push(todo);
    }
  });

  // call appropriate functions for added,deleted and updated.
  added.forEach(addTodoToDom);
  deleted.forEach(deleteTodoFromDom);
  updated.forEach(updateTodoInDom);

  // update the old state
  oldTodo = todo;
}

function addTodoToDom(todo) {
  const parent = document.getElementById("container");
  parent.appendChild(createChild(todo.title, todo.desc, todoId++));
  // console.log(todo);
}

function deleteTodoFromDom(todo) {
  console.log(todo);
}

function updateTodoInDom(todo) {
  console.log(todo);
}

addtodoButton.addEventListener("click", addToDo);
