'use strict';
let C = prompt("Enter a celsius");
let F = (parseInt(C) * 9/5) + 32;
document.querySelector('#target').innerHTML = F;
