// your code here
const table = document.querySelector("table");
const dialog = document.querySelector("dialog");
async function getMenu(restaurant) {
  const response = await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`);
  if (!response.ok) {
    throw new Error("Error" + response.status);
  }
  return await response.json();
}
async function getRestaurants() {
  const response = await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
  const restaurants = await response.json();
  const sortedRestaurants = restaurants.slice().sort((a, b) => a.name.localeCompare(b.name));
  for (let restaurant of sortedRestaurants) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${restaurant.name}</td><td>${restaurant.address}</td>`;
    table.appendChild(row);

    const name = row.querySelector("td");
    name.addEventListener("click", async function () {
      try {
        const highlighted = document.querySelectorAll('.highlight');
        for (let element of highlighted) {
          element.classList.remove('highlight');
        }
        name.classList.add('highlight');
        dialog.innerHTML = `<h2>${restaurant.name}</h2><p>Address: ${restaurant.address}</p><p>Postal code: ${restaurant.postalCode}</p><p>City: ${restaurant.city}</p><p>Phone: ${restaurant.phone}</p><p>Company: ${restaurant.company}</p><h3>Today's menu:</h3>`;
        const menu = await getMenu(restaurant);
        for (let course of menu.courses) {
          dialog.innerHTML += `<p>${course.name} - ${course.price} - ${course.diets}</p>`;
        }
        dialog.innerHTML += `<button id="close">Close</button>`;
        dialog.showModal();
        document.querySelector('#close').addEventListener('click', function() {
          dialog.close();
        });
      }
      catch (error) {
        dialog.innerHTML += `<p>Failed to retrieve today's menu.</p>`;
      }
    });
  }
}
getRestaurants();





