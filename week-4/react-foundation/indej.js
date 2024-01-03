const addtodoButton = document.getElementById("addToDo");

let todoId = 1;
let todo = [];
let oldTodoState = [];

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done";
}

function deleteToDo(id) {
  const todo = document.getElementById(id);
  console.log(todo);
}

function updateToDo(id) {
  const todo = document.getElementById(id);
  console.log(todo);
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
  updateState(todo);
}

function updateState(todos) {
  // console.log(todos);

  const added = [];
  // const deleted = [];
  // const updated = [];
  // console.log("oldtodo", oldTodoState);
  // find added todo's

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
    console.log("oldTodoState", oldTodoState);
  }
  addTodoToDom(added);
}

function addTodoToDom(todo) {
  // console.log(todo[0].title);
  const parent = document.getElementById("container");
  parent.appendChild(createChild(todo[0].title, todo[0].desc, todoId++));
  // console.log(todo);
}

addtodoButton.addEventListener("click", addToDo);
