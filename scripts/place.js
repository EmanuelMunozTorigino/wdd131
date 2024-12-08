const calculateWindChill = (temp, windSpeed) =>
  temp <= 10 && windSpeed < 4.8
    ? "N/A"
    : (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(1);

let windChillResult = calculateWindChill(10, 5);

const windChill = document.getElementById("windChill");

windChill.innerHTML = `<b>Wind Chill: </b>${windChillResult}`;
