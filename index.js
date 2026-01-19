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
  tdCelcius.textContent = item.c;
  const tdFahrenheit = document.createElement("td");
  tdFahrenheit.textContent = item.f;
  const tdReamur = document.createElement("td");
  tdReamur.textContent = item.r;
  const tdKelvin = document.createElement("td");
  tdKelvin.textContent = item.k;
}

// window.localStorage.setItem("history", JSON.stringify(histories));

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());

  let c = parseInt(obj.number);

  let f = (c * 9) / 5 + 32;
  let r = (c * 4) / 5;
  let k = c + 273.15;

  const tr = document.createElement("tr");

  const tdNomor = document.createElement("td");
  tdNomor.textContent = nomer;
  const tdCelcius = document.createElement("td");
  tdCelcius.textContent = c;
  const tdFahrenheit = document.createElement("td");
  tdFahrenheit.textContent = f;
  const tdReamur = document.createElement("td");
  tdReamur.textContent = r;
  const tdKelvin = document.createElement("td");
  tdKelvin.textContent = k;

  tr.append(tdNomor, tdCelcius, tdFahrenheit, tdReamur, tdKelvin);
  tbody.append(tr);

  nomer++;
  form.reset();
});
