export class Exchange {
  static async getRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status}, ${response.statusText}`;
          throw new Error(errorMessage);
        }
        else {
          return response.json();
        }
      })
      .catch(function(error){
        return error;
      });
  }

}


// export default class WeatherService {  
//   static async getWeather(city) {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       const jsonifiedResponse = await response.json();
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText}
//         ${jsonifiedResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       return jsonifiedResponse;
//     } catch(error) {
//       return error;
//     }
//   }
// }





