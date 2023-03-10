export class Exchange {
  static async getJSON() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      if (!response.ok) {
        const errorMessage = `${response.status}, ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}  
    

