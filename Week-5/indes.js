// console.log("working");
//

let state = {
  count: 0,
};

// function onButtonPress() {
//   state.count += 1;
//   //   console.log(state.count);
//   buttonReRender();
// }

// function buttonReRender() {
//   // in React like this removing of html won't happen, just to keep things simple here we are doing like that.
//   // usually only the change in count will be or state will be tracked and changed.
//   document.getElementById("parent-button").innerHTML = "";
//   const button = buttonComponent(state.count);
//   document.getElementById("parent-button").appendChild(button);
// }

// function buttonComponent(count) {
//   const button = document.createElement("button");
//   button.innerHTML = `Count ${count}`;
//   button.setAttribute("onClick", "onButtonPress()");
//   return button;
// }

function onButtonClick() {
  const button = document.getElementsByClassName("counter-button")[0];
  //   console.log(typeof button.innerHTML);
  let count = parseInt(button.innerHTML.split(" ")[1]);
  //   console.log(count++);
}

function createButtonComponent() {
  const button = document.createElement("button");
  button.innerHTML = "Count 0";
  button.setAttribute("onClick", "onButtonClick()");
  button.className = "counter-button";
  const parent = document.getElementById("parent-button");
  parent.appendChild(button);
}

createButtonComponent();
