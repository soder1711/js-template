'use strict';
let browser = navigator.userAgent;
let os = navigator.platform;
const div = document.querySelector("#target");
let screenHeight = screen.height;
let screenWidth = screen.width;
let availscreenHeight = screen.availHeight;
let availscreenWidth = screen.availWidth;
const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const time = {
  hour: "2-digit",
  minute: "2-digit"
}
div.insertAdjacentHTML("beforeend", `<p>browser: ${browser}</p>`);
div.insertAdjacentHTML("beforeend", `<p>os: ${os}</p>`);
div.insertAdjacentHTML("beforeend", `<p>screen width: ${screenWidth}</p>`);
div.insertAdjacentHTML("beforeend", `<p>screen height: ${screenHeight}</p>`);
div.insertAdjacentHTML("beforeend", `<p>available screen width: ${availscreenWidth}</p>`);
div.insertAdjacentHTML("beforeend", `<p>available screen height: ${availscreenHeight}</p>`);
div.insertAdjacentHTML("beforeend", `<p>date: ${date.toLocaleDateString("fi-FI", options)}</p>`);
div.insertAdjacentHTML("beforeend", `<p>time: ${date.toLocaleTimeString("fi-FI", time)}</p>`);
