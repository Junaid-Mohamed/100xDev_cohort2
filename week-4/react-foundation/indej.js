// console.log("working");

const addtodoButton = document.getElementById("addToDo");
// let outputDiv = document.getElementById("output");

// raw using normal dom manipulation.

let todoId = 0;

function markAsDone(id) {}

function createChild(tittle, desc, id) {
  //   console.log(todoId);
  const child = document.createElement("div");
  const firstGrandChild = (document.createElement("div").innerHTML = title);
  const secondGrandChild = (document.createElement("div").innerHTML = desc);
  const thirdGrandChild = (document.createElement("button").innerHTML =
    "Mark as Done");
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
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
