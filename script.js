function toFahrenheit() {
    const celsiusVal = document.getElementById("valueInCelsius").value
    const fahrenheitVal = (Number(celsiusVal * 1.8)) + 32
    const result = document.getElementById("result")
    result.innerHTML = fahrenheitVal + " fahrenheit"
}