const api = `https://amoghdevelopment.pythonanywhere.com/list`;
/* api */
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let value3 = document.querySelector("#value3");
let value4 = document.querySelector("#value4");
let value5 = document.querySelector("#value5");

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      console.log(data);
      value1.textContent = data.Temperature;
      value2.textContent = data.Dust;
      value3.textContent = data.Humidity;
      value4.textContent = data.Temperature;
      value5.textContent = data.Humidity;
  })