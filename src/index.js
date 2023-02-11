import {Exchange} from './js/apiCall.js';
import'./css/styles.css';
import {Calculator} from './js/converterCalc.js';

async function getData(amount, countryCode) {
  const response = await Exchange.getJSON();
  if (response.result) {
    console.log(response)
    calculate(response, amount, countryCode);
  } else {
    printError(response, amount, countryCode);
  }
}
// cool Logic
function calculate(response, amount, countryCode ) {
  const convertedAmount = Calculator.converterCalc(response, amount, countryCode);
  printElements(convertedAmount, countryCode);
}


// UI Logic
function printElements(convertedAmount, countryCode) {
  document.getElementById("exchanged-currency-amount").innerText = "= " + convertedAmount;
  document.getElementById("exchanged-currency-code").innerText = " " + countryCode;
}

function printError(response, amount, countryCode) {
  console.log("errorrrr");
  document.getElementById("exchanged-currency-amount").innerText = `There was a problem converting the value of your $${amount} USD to ${countryCode}`;
  document.getElementById("exchanged-currency-symbol").innerText = response;
}

function handleClick() { 
  const amount = document.getElementById("us-dollars").value;
  const countryCode = document.getElementById("country-code").value;
  getData(amount, countryCode);
}

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click", handleClick);
});
