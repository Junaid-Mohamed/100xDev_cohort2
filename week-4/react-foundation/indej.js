// console.log("working");

const addtodoButton = document.getElementById("addToDo");
// let outputDiv = document.getElementById("output");

// raw using normal dom manipulation.

let todoId = 1;

function markAsDone(id) {
  const parent = document.getElementById(id);
  //   console.log(parent.children); //.innerHTML = "Done";
  parent.children[2].innerHTML = "Done";
}

function createChild(title, desc, id) {
  //   console.log(todoId);
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  const secondGrandChild = document.createElement("div");
  const thirdGrandChild = document.createElement("button");
  firstGrandChild.innerHTML = title;
  secondGrandChild.innerHTML = desc;
  thirdGrandChild.innerHTML = "Mark as Done";
  thirdGrandChild.setAttribute("onClick", `markAsDone(${id})`);
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.setAttribute("id", id);

  //   console.log(child);
  return child;
}
function addToDo() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const parent = document.getElementById("container");
  //   const parent = document.createElement("div");
  parent.appendChild(createChild(title, desc, todoId++));
  //   const childDiv1 = document.createElement("div");
  //   const childDiv2 = document.createElement("div");
  //   const childDiv3 = document.createElement("button");
  //   childDiv1.innerHTML = title;
  //   childDiv2.innerHTML = desc;
  //   childDiv3.innerHTML = "addtodo";

  //   container.appendChild(childDiv1);
  //   container.appendChild(childDiv2);
  //   container.appendChild(childDiv3);
}

addtodoButton.addEventListener("click", addToDo);

// `
// <p>${title.value}</p>
// <p>${desc.value}</p>
// <button>Mark as completed</button>
// `;
