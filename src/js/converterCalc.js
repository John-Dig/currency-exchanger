//import {CurrencyArrays} from './js/currencyArrays.js';
export class Calculator { 
  static converterCalc(response, amount, countryCode) {
    try {
      const parsedData = response.conversion_rates[countryCode];
      if (!parsedData) {
        console.log
        const errorMessage = `it appears there was a problem with the country code you entered: ${countryCode}. Make sure to click the dropdown and select a country.`
        throw new Error(errorMessage);
      } else {
        return (amount * parsedData).toFixed(2);
      } 
    } catch(errorMessage) {
      return errorMessage;
    }
  }
}