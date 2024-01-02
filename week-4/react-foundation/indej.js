const addtodoButton = document.getElementById("addToDo");

let todoId = 1;
let todo = [];
let oldTodo = [];

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done";
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
  const parent = document.getElementById("container");
  todo.push({
    title: title,
    desc: desc,
    id: todoId,
  });
  parent.appendChild(createChild(title, desc, todoId++));
}

addtodoButton.addEventListener("click", addToDo);

function updateToDo(oldTodo, newToDo) {
  // const
  const element = document.getElementById(oldTodo.id);
}

function deleteToDo(delToDoId) {
  const element = document.getElementById(delToDoId);
  console.log(element);
}

// pre react days
// using state
// statewill always be an array
// every element of the state would have a title, description and id.

function updateDomAccToState(todo) {
  // console.log("updateDomAccToState clicked");
  // console.log(todo);
  const parent = document.getElementById("container");
  parent.innerHTML = " ";
  for (let i = 0; i < todo.length; i++) {
    // console.log(todo[i].title);
    parent.appendChild(
      createChild(todo[i].title, todo[i].description, todoId++)
    );
  }

  // parent.appendChild(createChild(state.title, state.description, todoId++));
}

// window.setInterval(async () => {
//   const res = await fetch("");
//   const todo = await res.json();
//   updateDomAccToState(todo);
// }, 2000);

updateDomAccToState(todo);
