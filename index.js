const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());

  let c = parseInt(obj.number);

  let f = (c * 9) / 5 + 32;
  let r = (c * 4) / 5;
  let k = c + 273.15;

  const tr = document.createElement("tr");

  const tdCelcius = document.createElement("td");
  tdCelcius.textContent = c;
  const tdFahrenheit = document.createElement("td");
  tdFahrenheit.textContent = f;
  const tdReamur = document.createElement("td");
  tdReamur.textContent = r;
  const tdKelvin = document.createElement("td");
  tdKelvin.textContent = k;

  tr.append(tdCelcius, tdFahrenheit, tdReamur, tdKelvin);
  tbody.append(tr);

  form.reset();
});
