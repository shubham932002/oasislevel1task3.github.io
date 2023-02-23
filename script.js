function convert() {
    // Get the input values
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = document.getElementById("fahrenheit").value;
  
    // Check if both inputs are empty
    if (!celsius && !fahrenheit) {
      alert("Please enter a temperature in Celsius or Fahrenheit");
      return;
    }
  
    // Check if both inputs are not empty
    if (celsius && fahrenheit) {
      alert("Please enter a temperature in either Celsius or Fahrenheit, not both");
      return;
    }
  
    // Convert Celsius to Fahrenheit
    if (celsius) {
      const fahrenheitResult = (celsius * 1.8) + 32;
      document.getElementById("result").innerHTML = `${celsius} &deg;C = ${fahrenheitResult.toFixed(2)} &deg;F`;
    }
  
    // Convert Fahrenheit to Celsius
    if (fahrenheit) {
      const celsiusResult = (fahrenheit - 32) / 1.8;
      document.getElementById("result").innerHTML = `${fahrenheit} &deg;F = ${celsiusResult.toFixed(2)} &deg;C`;
    }
  }