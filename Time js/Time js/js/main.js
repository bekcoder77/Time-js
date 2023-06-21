const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

setInterval(() => {
  const data = new Date();

  const date = data.getDate();
  const hours = data.getHours();
  const month = data.getMonth();
  const year = data.getFullYear();
  const day = data.getDay();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();
  hour.textContent = `${hours} :`;
  minute.textContent = `${minutes}:`;
  second.textContent = `${seconds} :`;
  if (seconds < 10) {
    second.textContent = `0${seconds} `;
  } else {
    second.textContent = `${seconds}`;
  }
}, 1000);

const text = document.querySelector(".text");
const loader = document.querySelector(".loader");
// let txt = 0;

setTimeout(() => {
  loader.style.display = "none";
  const interval = setInterval(function () {
    txt++;
    text.textContent = txt;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 100);
}, 2000);

// console.log(date, hour, minute, month, day, year);
