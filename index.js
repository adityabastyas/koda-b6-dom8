const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
let nomer = 1;

let histories = JSON.parse(localStorage.getItem("history")) || [];

function celToFar(c) {
  return (c * 9) / 5 + 32;
}

function celToRea(c) {
  return (c * 4) / 5;
}

function celToKel(c) {
  return c + 273.15;
}

for (let i = 0; i < histories.length; i++) {
  const item = histories[i];

  const tr = document.createElement("tr");

  const tdNomor = document.createElement("td");
  tdNomor.textContent = nomer;
  const tdCelcius = document.createElement("td");
  tdCelcius.textContent = item.celcius;
  const tdFahrenheit = document.createElement("td");
  tdFahrenheit.textContent = item.fahrenheit;
  const tdReamur = document.createElement("td");
  tdReamur.textContent = item.reamur;
  const tdKelvin = document.createElement("td");
  tdKelvin.textContent = item.kelvin;

  tr.append(tdNomor, tdCelcius, tdFahrenheit, tdReamur, tdKelvin);
  tbody.append(tr);

  nomer++;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());

  let celcius = parseInt(obj.number);

  let fahrenheit = celToFar(celcius);
  let reamur = celToRea(celcius);
  let kelvin = celToKel(celcius);

  histories.push({ celcius, fahrenheit, reamur, kelvin });

  window.localStorage.setItem("history", JSON.stringify(histories));

  const tr = document.createElement("tr");

  const tdNomor = document.createElement("td");
  tdNomor.textContent = nomer;
  const tdCelcius = document.createElement("td");
  tdCelcius.textContent = celcius;
  const tdFahrenheit = document.createElement("td");
  tdFahrenheit.textContent = fahrenheit;
  const tdReamur = document.createElement("td");
  tdReamur.textContent = reamur;
  const tdKelvin = document.createElement("td");
  tdKelvin.textContent = kelvin;

  tr.append(tdNomor, tdCelcius, tdFahrenheit, tdReamur, tdKelvin);
  tbody.append(tr);

  nomer++;
  form.reset();
});
