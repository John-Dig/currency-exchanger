import {Exchange} from './js/apiCall.js';
import'./css/styles.css';
import {Calculator} from './js/converterCalc.js';


// //business logic
// function getAmount(amount, countryCode) {
//   Exchange.getRate(amount, countryCode)
//     .then(function(rateResponse) {
//       if (rateResponse instanceof Error) {
//         const errorMessage = `there was a problem accessing exchange rate data for ${countryCode}: 
//         ${rateResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       // const convertedAmount = amount * rateResponse.conversion.rates.GBP;
//       printElements(rateResponse.conversion.rates.GBP, countryCode); 
//       })
//     .catch(function(error) {
//       return (error);
//     });
// }
async function getAmount(amount, countryCode) {
  const response = await Exchange.getRate(amount, countryCode);
  if (response.main) {
    printElements(response, countryCode);
  } else {
    printError(response, countryCode);
  }
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

//from bored
// async function handleOutput() {
//   let thingToDo = new Bored;
//   const rawOutput = await thingToDo.getActivity();
//   const theActivity = rawOutput["activity"];
  
//   document.getElementById("output").innerText = theActivity;
//   const giphyObject = await thingToDo.getGiphy(theActivity);
//   const giphyImageURL = giphyObject.data[0].images.downsized_medium.url;
//   const theImageHTML = `<img src =${giphyImageURL}alt='the Giphy'>`;
//   document.getElementById("giphy-output").innerHTML = theImageHTML;

// }

// //UI logic
// window.addEventListener("load", function() {
//   this.document.getElementById("button").addEventListener("click", handleOutput);
// });
