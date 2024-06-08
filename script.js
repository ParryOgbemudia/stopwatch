const display = document.querySelector("#display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const start = function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
  console.log(startTime);
};

const stop = function () {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
  console.log(elapsedTime);
};

const reset = function () {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;

  display.textContent = "00:00:00:00";
};

const update = function () {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  // console.log(Math.floor(elapsedTime / (1000 * 60 * 60)));

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  // console.log(Math.floor((elapsedTime / (1000 * 60)) % 60));

  let seconds = Math.floor((elapsedTime / 1000) % 60);
  // console.log(Math.floor((elapsedTime / 1000) % 60));

  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  // console.log(Math.floor((elapsedTime % 1000) / 10));

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
};

document.addEventListener("click", function (e) {
  const control = e.target.closest(".btn");

  if (control.classList.contains("startBtn")) start();

  if (control.classList.contains("stopBtn")) stop();

  if (control.classList.contains("resetBtn")) reset();
});
