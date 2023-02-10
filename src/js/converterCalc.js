//import {CurrencyArrays} from './js/currencyArrays.js';
export class Calculator { 
  static converterCalc(response, amount, countryCode) {
    const parsedData = response.conversion_rates[countryCode];
    console.log("calculator response: " + parsedData);
    
    return (amount * parsedData).toFixed(2);
  } 
}