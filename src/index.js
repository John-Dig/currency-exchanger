import {Exchange} from './js/apiCall.js';
import'./css/styles.css';
import {Calculator} from './js/converterCalc.js';

async function getAmount(amount, countryCode) {
  const response = await Exchange.getRate();
  if (response) {
    calculate(response, amount, countryCode);
  } else {
    printError();
  }
}
// cool Logic
function calculate(response, amount, countryCode ) {
  const convertedAmount = Calculator.converterCalc(response, amount, countryCode);
  printElements(convertedAmount, countryCode);
}


// UI Logic
function printElements(convertedAmount, countryCode) {
  console.log("@ print Elements");
  document.getElementById("exchanged-currency-amount").innerText = convertedAmount;
  document.getElementById("exchanged-currency-symbol").innerText = countryCode;
}

function printError() {
  console.log("errorrrr");
}

function handleClick() { 
  const amount = document.getElementById("us-dollars").value;
  const countryCode = document.getElementById("country-code").value;
  getAmount(amount, countryCode);
}

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click", handleClick);
});
