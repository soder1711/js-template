'use strict';
let score = parseInt(prompt("Please enter your score (0 - 100):"));
let text;
if (score >= 0 && score <= 39) {
  text = "Score: " + score + " -> Your grade is 0";
}
else if (score >= 40 && score <= 51) {
  text = "Score: " + score + " -> Your grade is 1";
}
else if (score >= 52 && score <= 63) {
  text = "Score: " + score + " -> Your grade is 2";
}
else if (score >= 64 && score <= 75) {
  text = "Score: " + score + " -> Your grade is 3";
}
else if (score >= 76 && score <= 87) {
  text = "Score: " + score + " -> Your grade is 4";
}
else if (score >= 88 && score <= 100) {
  text = "Score: " + score + " -> Your grade is 5";
}
else {
  text = "Invalid score! Please enter a value between 0 and 100.";
}
document.querySelector("#target").innerHTML = text;
