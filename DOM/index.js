const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calculateSumButton = document.getElementById("calculateSum");
const sumResult = document.getElementById("sumResult");

const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const calculateInterestButton = document.getElementById("calculateInterest");
const interestResult = document.getElementById("interestResult");

function handleError(err) {
  console.error(err);
}

function calculateSum() {
  const n1 = parseInt(num1.value);
  const n2 = parseInt(num2.value);
  //   fetch(
  //     `https://calculatefunctionserver.junaidmohamed2.repl.co/sum?a=${c}&b=${d}`
  //   ).then((res) => {
  //     res.text().then((ans) => {
  //       output.innerHTML = ans;
  //     });
  //   });
  fetch(
    `https://calculatefunctionserver.junaidmohamed2.repl.co/sum?a=${n1}&b=${n2}`
  )
    .then((res) => res.text())
    .then((ans) => (sumResult.innerHTML = ans))
    .catch(handleError);
}

function calculateInterest() {
  const p = parseInt(principal.value);
  const r = parseInt(rate.value);
  const t = parseInt(time.value);
  fetch(
    `https://calculatefunctionserver.junaidmohamed2.repl.co/simple-interest?principal=${p}&rate=${r}&time=${t}`
  )
    .then((res) => res.text())
    .then((ans) => (interestResult.innerHTML = ans))
    .catch(handleError);
}

calculateSumButton.addEventListener("click", calculateSum);
calculateInterestButton.addEventListener("click", calculateInterest);

// backend server in repel
// https://replit.com/@JunaidMohamed2/calculatefunctionserver#index.js
