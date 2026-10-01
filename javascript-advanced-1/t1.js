// your code here
import {restaurantRow, restaurantModal} from "./components.js";
import {baseUrl} from "./variables.js";
import {fetchData} from "./utils.js";

const table = document.querySelector("table");
const dialog = document.querySelector("dialog");
const getMenu = async (restaurant) => {
  return fetchData(`${baseUrl}/restaurants/daily/${restaurant._id}/en`);
}
const getRestaurants = async () => {
  const restaurants = await fetchData(`${baseUrl}/restaurants`);
  const sortedRestaurants = restaurants.slice().sort((a, b) => a.name.localeCompare(b.name));
  for (let restaurant of sortedRestaurants) {
    const row = restaurantRow(restaurant);
    table.appendChild(row);
    const name = row.querySelector("td");
    name.addEventListener("click", async () => {
      try {
        const highlighted = document.querySelectorAll('.highlight');
        for (let element of highlighted) {
          element.classList.remove('highlight');
        }
        name.classList.add('highlight');
        const menu = await getMenu(restaurant);
        dialog.innerHTML = restaurantModal(restaurant, menu);
        dialog.innerHTML += `<button id="close">Close</button>`;
        dialog.showModal();
        document.querySelector('#close').addEventListener('click', () => {
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





